Search.setIndex({"docnames": ["blog/fragile_tests", "blog/sqlite_integer_encoding", "index"], "filenames": ["blog/fragile_tests.md", "blog/sqlite_integer_encoding.md", "index.md"], "titles": ["Fragile Tests", "Trade-offs", "Articles"], "terms": {"inspir": [0, 1, 2], "tweet": [0, 2], "from": [0, 1, 2], "hynek": [0, 2], "schlawack": [0, 2], "To": 0, "check": 0, "correct": 0, "our": 0, "document": 0, "how": 0, "should": 0, "us": [0, 1], "make": 0, "maintain": 0, "refactor": 0, "easier": 0, "There": [0, 1], "ar": [0, 1], "mani": 0, "other": 0, "valid": 0, "reason": 0, "But": 0, "three": [0, 1], "point": 0, "what": [0, 1], "i": [0, 1], "find": [0, 1], "myself": [0, 1], "continu": 0, "come": 0, "back": 0, "ll": 0, "probabl": 0, "get": [0, 1], "differ": 0, "answer": 0, "thi": [0, 1], "question": 0, "depend": 0, "project": [0, 1], "m": 0, "work": [0, 1], "hear": 0, "lot": 0, "though": [0, 1], "go": 0, "adopt": [0, 1], "loos": 0, "definit": 0, "here": [0, 1], "defin": 0, "easili": 0, "broken": 0, "write": [0, 1], "reli": 0, "implement": [0, 1], "detail": [0, 1], "your": 0, "sure": 0, "fire": 0, "wai": 0, "end": [0, 1], "up": 0, "In": [0, 1], "python": 0, "world": [0, 1], "patch": 0, "decor": 0, "unittest": 0, "librari": 0, "often": [0, 1], "lead": 0, "awar": 0, "popular": 0, "becaus": 0, "mean": [0, 1], "less": [0, 1], "setup": 0, "phase": 0, "my": [0, 1], "experi": 0, "": [0, 1, 2], "usual": 0, "cost": [0, 1], "introduc": 0, "suit": 0, "talk": 0, "about": [0, 1], "difficult": 0, "so": [0, 1], "much": 0, "terminologi": 0, "overload": 0, "martin": 0, "fowler": 0, "classic": 0, "articl": 0, "help": 0, "cut": [0, 1], "through": 0, "nois": 0, "identifi": 0, "two": [0, 1], "approach": 0, "By": 0, "its": [0, 1], "veri": 0, "natur": 0, "more": 0, "close": [0, 1], "coupl": [0, 1], "than": 0, "requir": 0, "far": 0, "prepar": 0, "fixtur": 0, "simpler": 0, "non": [0, 1], "exist": 0, "can": 0, "see": [0, 1], "clearli": 0, "let": 0, "imagin": 0, "api": 0, "retriev": 0, "employe": 0, "name": 0, "job": 0, "compani": 0, "py": 0, "type": 0, "import": [0, 1], "protocol": [0, 1], "class": 0, "employeeapi": 0, "def": 0, "read": [0, 1], "self": 0, "dict": [0, 1], "str": 0, "insert": 0, "employee_info": 0, "none": 0, "delet": 0, "employee_nam": 0, "also": [0, 1], "helper": 0, "function": 0, "capitalise_employees_nam": 0, "A": [0, 1, 2], "basic": 0, "might": [0, 1], "item": 0, "0": [0, 1], "upper": 0, "employee_capitalis": 0, "1": 0, "now": 0, "ask": 0, "product": 0, "run": [0, 1], "everi": 0, "dai": [0, 1], "where": [0, 1], "exactli": 0, "verifi": 0, "prefer": 0, "solut": 0, "fake": 0, "when": [0, 1], "possibl": [0, 1], "The": [0, 1], "gist": 0, "idea": [0, 1], "design": [0, 1], "repres": 0, "simplifi": 0, "version": [0, 1], "origin": [0, 1], "object": 0, "act": 0, "singl": 0, "authorit": 0, "return": 0, "creat": [0, 1], "fakeemployeeapi": 0, "__init__": 0, "_employe": 0, "copi": 0, "updat": 0, "pop": 0, "readi": 0, "pytest": 0, "fake_api": 0, "john": 0, "sale": 0, "alic": 0, "legal": 0, "test_capitalise_employees_nam": 0, "assert": 0, "With": 0, "don": [0, 1], "t": [0, 1], "need": [0, 1], "bother": 0, "ani": 0, "dive": 0, "straight": 0, "mock": 0, "testemployeeapihelperfunct": 0, "testcas": 0, "autospec": 0, "true": 0, "mock_api": 0, "return_valu": 0, "assert_called_onc": 0, "assert_called_once_with": 0, "It": 0, "quicker": 0, "compar": [0, 1], "previou": 0, "tradeoff": 0, "readabl": 0, "after": [0, 1], "some": [0, 1, 2], "time": [0, 1], "sever": 0, "incid": 0, "involv": [0, 1], "loss": 0, "extend": 0, "method": [0, 1], "old_employee_info": 0, "new_employee_info": 0, "take": [0, 1], "advantag": 0, "improv": 0, "all": [0, 1], "call": [0, 1], "doe": 0, "error": 0, "rais": 0, "indic": 0, "miss": 0, "straightforward": [0, 1], "understand": 0, "interfac": 0, "ha": [0, 1], "just": 0, "been": [0, 1], "addit": 0, "old_employee_nam": 0, "_": 0, "popitem": 0, "That": 0, "No": 0, "And": 0, "long": 0, "match": 0, "actual": [0, 1], "matter": 0, "have": [0, 1], "written": 0, "modifi": 0, "them": [0, 1], "confid": [0, 1], "even": [0, 1], "wa": [0, 1], "For": [0, 1], "problemat": 0, "fail": 0, "onli": [0, 1], "fix": 0, "old": [0, 1], "new": 0, "accordingli": 0, "Of": 0, "cours": 0, "simpl": 0, "manag": [0, 1], "scale": 0, "well": 0, "codebas": 0, "each": [0, 1], "develop": [0, 1], "perfectli": 0, "one": 0, "unhappi": 0, "ultim": 0, "ignor": 0, "softwar": 0, "trade": 0, "off": 0, "attract": 0, "initi": [0, 1], "closer": 0, "encourag": 0, "harm": 0, "term": 0, "instead": [0, 1], "eas": 0, "burden": 0, "mainten": 0, "thei": [0, 1], "healthi": [0, 1], "avoid": 0, "short": [1, 2], "summari": [1, 2], "experiment": [1, 2], "simon": [1, 2], "willison": [1, 2], "til": [1, 2], "drawn": 1, "content": 1, "discuss": 1, "decis": 1, "behind": 1, "program": 1, "recent": 1, "ve": 1, "apach": 1, "arrow": 1, "flight": 1, "framework": 1, "file": 1, "format": 1, "sqlite": [1, 2], "found": 1, "interest": 1, "offer": 1, "almost": 1, "serial": 1, "sent": 1, "directli": 1, "over": 1, "wire": 1, "nativ": 1, "small": 1, "metadata": 1, "via": 1, "buffer": 1, "between": 1, "increas": 1, "network": 1, "reduc": 1, "cpu": 1, "were": 1, "opposit": 1, "mind": 1, "varint": 1, "transfer": 1, "extra": 1, "both": 1, "connect": 1, "interestingli": 1, "revers": 1, "cap": 1, "n": 1, "proto": 1, "successor": 1, "author": 1, "consid": 1, "longer": 1, "desir": 1, "similar": 1, "own": 1, "wide": 1, "embed": 1, "devic": 1, "internet": 1, "thing": 1, "storag": 1, "an": 1, "consider": 1, "howev": 1, "most": 1, "place": 1, "system": 1, "premium": 1, "quick": 1, "sort": 1, "warn": 1, "follow": 1, "brief": 1, "naiv": 1, "analysi": 1, "pleas": 1, "pinch": 1, "salt": 1, "first": 1, "step": 1, "decid": 1, "profil": 1, "variat": 1, "materi": 1, "websit": 1, "adapt": 1, "2": 1, "tabl": 1, "ten": 1, "million": 1, "row": 1, "rowid": 1, "randominteg": 1, "253": 1, "7": 1, "randomword": 1, "squalid": 1, "real": 1, "uniformli": 1, "distribut": 1, "select": 1, "random": 1, "accord": 1, "empir": 1, "byte": 1, "90": 1, "valu": 1, "5": 1, "3": 1, "6": 1, "75": 1, "8": 1, "25": 1, "1000": 1, "word": 1, "usr": 1, "share": 1, "sampl": 1, "had": 1, "six": 1, "disk": 1, "outlin": 1, "note": 1, "chosen": 1, "somewhat": 1, "arbitrari": 1, "count": 1, "avg": 1, "table1": 1, "table2": 1, "68": 1, "like": 1, "mix": 1, "person": 1, "pre": 1, "popul": 1, "csv": 1, "which": 1, "pattern": 1, "still": 1, "occur": 1, "quit": 1, "frequent": 1, "me": 1, "schema": 1, "relev": 1, "databas": 1, "e": 1, "g": 1, "text": 1, "assum": 1, "command": 1, "optimis": 1, "effici": 1, "machin": 1, "linux": 1, "base": 1, "perf": 1, "flamegraph": 1, "visualis": 1, "sqlite3": 1, "avail": 1, "apt": 1, "packag": 1, "start": 1, "unfortun": 1, "soon": 1, "discov": 1, "binari": 1, "symbol": 1, "strip": 1, "objdump": 1, "sym": 1, "limit": 1, "pull": 1, "latest": 1, "built": 1, "local": 1, "settl": 1, "gather": 1, "record": 1, "f": 1, "9999": 1, "graph": 1, "dwarf": 1, "o": 1, "bash": 1, "my_bash_script": 1, "unprivileg": 1, "user": 1, "made": 1, "plai": 1, "perf_event_paranoid": 1, "set": 1, "quickli": 1, "becam": 1, "appar": 1, "page": 1, "cach": 1, "neglig": 1, "On": 1, "reflect": 1, "think": 1, "expect": 1, "split": 1, "those": 1, "cold": 1, "warm": 1, "account": 1, "sync": 1, "along": 1, "proc": 1, "sy": 1, "vm": 1, "drop_cach": 1, "clear": 1, "move": 1, "decod": 1, "remain": 1, "xread": 1, "further": 1, "includ": 1, "55": 1, "9": 1, "65": 1, "95": 1, "interv": 1, "second": 1, "overal": 1, "appear": 1, "highlight": 1, "sqlite3vdbeserialget": 1, "FOR": 1, "BUT": 1, "THEN": 1, "complic": 1, "BY": 1, "TO": 1, "determin": 1, "THE": 1, "size": 1, "OF": 1, "cell": 1, "AND": 1, "shift": 1, "pointer": 1, "part": 1, "IN": 1, "t2": 1, "ITS": 1, "fairli": 1, "sqlite3btreepayloads": 1, "final": 1, "thought": 1, "primari": 1, "perform": 1, "factor": 1, "compress": 1, "ratio": 1, "speed": 1, "while": 1, "gener": 1, "purpos": 1, "engin": 1, "primarili": 1, "fast": 1, "onlin": 1, "transact": 1, "process": 1, "oltp": 1, "comparison": 1, "against": 1, "uncompress": 1, "parquet": 1, "ON": 1, "mention": 1, "THAT": 1, "applic": 1, "integ": 2, "encod": 2, "fragil": 2, "test": 2}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"fragil": 0, "test": [0, 1], "why": 0, "do": 0, "we": 0, "an": 0, "exampl": 0, "state": 0, "verif": 0, "behaviour": 0, "inevit": 0, "code": 0, "chang": 0, "final": 0, "thought": 0, "trade": 1, "off": 1, "variabl": 1, "length": 1, "integ": 1, "encod": 1, "setup": 1, "data": 1, "case": 1, "tool": 1, "result": 1, "1": 1, "4": 1, "articl": 2}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 8, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx": 57}, "alltitles": {"Fragile Tests": [[0, "fragile-tests"]], "Why do we test?": [[0, "why-do-we-test"]], "Why do we not test?": [[0, "why-do-we-not-test"]], "An example": [[0, "an-example"]], "State verification": [[0, "state-verification"], [0, "id1"]], "Behaviour verification": [[0, "behaviour-verification"], [0, "id2"]], "An inevitable code change": [[0, "an-inevitable-code-change"]], "Final thoughts": [[0, "final-thoughts"]], "Trade-offs": [[1, "trade-offs"]], "Variable-Length Integer Encoding": [[1, "variable-length-integer-encoding"]], "Setup": [[1, "setup"]], "Data": [[1, "data"]], "Test cases": [[1, "test-cases"]], "Tools": [[1, "tools"]], "Results": [[1, "results"]], "Test cases 1 - 4": [[1, "test-cases-1-4"]], "Articles": [[2, "articles"]]}, "indexentries": {}})