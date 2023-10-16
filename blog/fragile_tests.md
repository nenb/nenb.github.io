---
title: Fragile Tests
date: 2023-10-16
blogpost: true
author: Nick Byrne
category: Category
---

# Fragile Tests

*Inspired by a [tweet](https://twitter.com/hynek/status/1172034561959706624) from Hynek Schlawack*

## Why do we test?

- To check the correctness of our code
- To document how our code should be used
- To make maintaining and refactoring our code easier

There are many other valid reasons. But these three points are what I find myself continually coming back to.

## Why do we *not* test?

I'll probably get a different answer to this question depending on the project that I'm working on. *Fragile tests* is a reason I hear a lot though. I'm going to adopt a loose definition of test fragility here and define it as 'tests that are easily broken by code changes'. Writing tests that rely on the implementation details of your code is a sure-fire way to end up with fragile tests. 

In the Python world, I find the `patch` decorator from the `unittest` library often leads to implementation-aware tests. `patch` is popular because it means less work in the test setup phase, but in my experience it's usually at the cost of introducing fragile tests to your test suite.

## An example

Talking about tests is difficult because so much of the terminology is overloaded. Martin Fowler's [classic article](https://martinfowler.com/articles/mocksArentStubs.html) is helpful for cutting through the noise. Martin identifies two approaches to testing: *state verification* and *behaviour verification*. By its very nature, behaviour verification is more closely coupled to implementation details than state verification. But it often requires far less preparation work - test fixtures are often much simpler or non-existent. We can see this more clearly with an example.

Let's imagine an API for retrieving employee names and their job in a company:
``` python
from typing import Protocol, NewType


Name = NewType('Name', str)
Job = NewType('Job', str)
Employees = dict[Name, Job]


class EmployeeAPI(Protocol):
    def read(self) -> Employees:
        ...
    def insert(self, employees: Employees) -> None:
        ...
    def delete(self, employees: Employees) -> None:
        ...
```

Let's also imagine a helper function `capitalise_employees_names`. A basic implementation might be:
``` python
def capitalise_employees_names(api: EmployeeAPI) -> None:
    employees = api.read()
    
    uncapitalised_employee_info, capitalised_employee_info = _uncapitalised_and_capitalised(employees)
    
    api.delete(uncapitalised_employee_info)
    api.insert(capitalised_employee_info)
```

Here, `_uncapitalised_and_capitalised` is some private function that encapsulates our business logic and whose details are unimportant for this example. We can now ask the question: how do we test `capitalise_employees_names`?

### State verification

Clearly it's not reasonable to use the production `EmployeeAPI` in a test suite that might be run every day. Where exactly should the 'state' to be verified come from then? My preferred solution is to use a [verified fake](https://pythonspeed.com/articles/verified-fakes/) (when possible). The gist of the idea is to design a test fixture that represents a simplified version of the original object to be tested. This fixture then acts as the single, authoritative version of this object in the test suite.

Returning to our example, we might create our fake employee API using a Python `dict`:
``` python
class FakeEmployeeAPI:
    "A simplified implementation of EmployeeAPI"
    def __init__(self, employees: Employees) -> None:
        self._employees = employees
    
    def read(self) -> Employees:
        return self._employees.copy()
    
    def insert(self, employees: Employees) -> None:
        self._employees.update(employees)
        
    def delete(self, employees: Employees)  -> None:
        for key in employees.keys():
            self._employees.pop(key)
```

Now we are ready to write our test:
``` python
import pytest

@pytest.fixture
def fake_api():
    return FakeEmployeeAPI({"john": "sales", "Alice": "legal"})

def test_capitalise_employees_names(fake_api):
    capitalise_employees_names(fake_api)
    
    employees = fake_api.read()
    
    assert employees == {"John": "sales", "Alice": "legal"}  # state verification
```

### Behaviour verification

With behaviour verification we don't need to bother with writing any fake employee API. We can dive straight in to writing our test:

``` python
import unittest

from unittest.mock import patch

class TestEmployeeAPIHelperFunctions(unittest.TestCase):
    
    @patch('api.EmployeeAPI', autospec=True)
    def test_capitalise_employees_names(self, mock_api):
        mock_api.read.return_value = {"john": "sales", "Alice": "legal"}
        capitalise_employees_names(mock_api)

        mock_api.read.assert_called_once()  # behaviour verification 
        mock_api.delete.assert_called_once_with({"john": "sales"})  # behaviour verification
        mock_api.insert.assert_called_once_with({"John": "sales"})  # behaviour verification
```

It's far quicker to write this test compared to the previous test! The tradeoff is that our test is now more closely coupled to the implementation details and less readable.

## An inevitable code change

After some time (and several incidents involving the loss of employee details...) the `EmployeeAPI` is extended with an `update` method:
``` python
def update(self, old_employee_info: Employees, new_employee_info: Employees) -> None:
    ...
```

`capitalise_employees_names` is also changed to take advantage of this improvement:
``` python
def capitalise_employees_names(api: EmployeeAPI) -> None:
    employees = api.read()
    old_employee_info, new_employee_info = _uncapitalised_and_capitalised(employees)
    api.update(old_employee_info, new_employee_info)  # all changes now in a single API call!            
```

What does this mean for the tests?

### State verification

When the state-verification test suite is run after the code change, an error should be raised indicating that the fake employee API is missing an `update` method. This error is straightforward to understand (the `EmployeeAPI` interface has just been updated after all) and in this example there is a straightforward addition to our fake employee API:
``` python
def update(self, old_employee_info: Employees, new_employee_info: Employees)  -> None:
    for key in old_employee_info.keys():
        self._employees.pop(key)
    self._employees.update(new_employee_info)
```

That's it. No changes to the original test are required. And so long as our verified fake has an interface that matches the actual `EmployeeAPI`, it should not matter how many tests we have written - we should not need to modify any of them. We can continue to easily use the tests to have confidence in our code, even though we might not understand every detail of how our code was written. 

### Behaviour verification

For our behaviour-verification test suite, the code change is more problematic. The test suite should fail, and it should state that the `delete` method was not called. The only way to fix the test suite is to compare the implementation details for the old and new versions of `capitalise_employees_names`, and to update the test accordingly. Of course, in this simple example the fixes are manageable:
``` python
class TestEmployeeAPIHelperFunctions(unittest.TestCase):
    
    @patch('api.EmployeeAPI', autospec=True)
    def test_capitalise_employees_names(self, mock_api):
        mock_api.read.return_value = {"john": "sales", "Alice": "legal"}
        capitalise_employees_names(mock_api)

        mock_api.read.assert_called_once()  # behaviour verification 
        mock_api.update.assert_called_once_with({"john": "sales"}, {"John": "sales"})  # behaviour verification
```
But this approach **does not scale well** at all. Imagine a codebase with several such functions that have each been written by a different developer. The only way to fix the tests after a (perfectly valid) code change is to understand the implementation details of all functions and to fix them one-by-one. This leads to unhappy developers and ultimately, to ignoring the tests. 

## Final thoughts

Software development is all about trade-offs. Software testing is no different.

Testing using behavioural verification is attractive because it's quicker to get the tests written initially. The trade-off is a closer coupling to the implementation details of the code. The `patch` decorator from the `unittest` library in Python encourages writing tests that are coupled to implementation details.

Tests that are coupled to implementation details lead to fragile tests. And fragile tests ultimately harm the long-term development of a codebase - instead of easing the burden of code maintenance and refactors, they make it more difficult.

In my experience, to maintain a healthy codebase in Python avoid using the `patch` decorator in your tests as much as possible.

