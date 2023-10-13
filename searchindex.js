Search.setIndex({"docnames": ["blog/fragile_tests", "blog/sqlite_integer_encoding", "index"], "filenames": ["blog/fragile_tests.md", "blog/sqlite_integer_encoding.md", "index.md"], "titles": ["Fragile Tests", "Trade-offs", "Articles"], "terms": {"inspir": [0, 2], "tweet": [0, 2], "from": [0, 1, 2], "hynek": [0, 2], "schlawack": [0, 2], "To": 0, "check": [0, 1], "correct": [0, 1], "our": 0, "document": 0, "how": 0, "should": 0, "us": [0, 1], "make": [0, 1], "maintain": 0, "refactor": 0, "easier": 0, "There": [0, 1], "ar": [0, 1], "mani": 0, "other": [0, 1], "valid": 0, "reason": [0, 1], "But": 0, "three": [0, 1], "point": 0, "what": [0, 1], "i": [0, 1], "find": [0, 1], "myself": [0, 1], "continu": 0, "come": 0, "back": [0, 1], "ll": 0, "probabl": 0, "get": [0, 1], "differ": [0, 1], "answer": 0, "thi": [0, 1], "question": 0, "depend": [0, 1], "project": [0, 1], "m": 0, "work": [0, 1], "hear": 0, "lot": 0, "though": [0, 1], "go": 0, "adopt": 0, "loos": 0, "definit": 0, "here": [0, 1], "defin": [0, 1], "easili": [0, 1], "broken": 0, "write": [0, 1], "reli": 0, "implement": [0, 1], "detail": [0, 1], "your": [0, 1], "sure": 0, "fire": 0, "wai": [0, 1], "end": [0, 1], "up": [0, 1], "In": [0, 1], "python": 0, "world": [0, 1], "patch": 0, "decor": 0, "unittest": 0, "librari": 0, "often": [0, 1], "lead": 0, "awar": 0, "popular": 0, "becaus": [0, 1], "mean": [0, 1], "less": [0, 1], "setup": 0, "phase": 0, "my": [0, 1], "experi": [0, 1], "": [0, 1], "usual": 0, "cost": [0, 1], "introduc": 0, "suit": 0, "talk": 0, "about": [0, 1], "difficult": [0, 1], "so": [0, 1], "much": 0, "terminologi": 0, "overload": 0, "martin": 0, "fowler": 0, "classic": 0, "articl": 0, "help": 0, "cut": [0, 1], "through": 0, "nois": 0, "identifi": 0, "two": [0, 1], "approach": [0, 1], "By": 0, "its": [0, 1], "veri": [0, 1], "natur": 0, "more": [0, 1], "close": [0, 1], "coupl": 0, "than": [0, 1], "requir": [0, 1], "far": [0, 1], "prepar": 0, "fixtur": 0, "simpler": 0, "non": [0, 1], "exist": 0, "can": [0, 1], "see": [0, 1], "clearli": [0, 1], "let": 0, "imagin": 0, "api": 0, "retriev": 0, "employe": 0, "name": 0, "job": 0, "compani": 0, "py": 0, "type": [0, 1], "import": [0, 1], "protocol": [0, 1], "class": 0, "employeeapi": 0, "def": 0, "read": [0, 1], "self": 0, "dict": [0, 1], "str": 0, "insert": 0, "employee_info": 0, "none": 0, "delet": 0, "employee_nam": 0, "also": [0, 1], "helper": 0, "function": 0, "capitalise_employees_nam": 0, "A": [0, 1], "basic": 0, "might": [0, 1], "item": 0, "0": [0, 1], "upper": 0, "employee_capitalis": 0, "1": 0, "now": 0, "ask": 0, "product": 0, "run": [0, 1], "everi": 0, "dai": [0, 1], "where": [0, 1], "exactli": 0, "verifi": 0, "prefer": 0, "solut": 0, "fake": 0, "when": [0, 1], "possibl": [0, 1], "The": [0, 1], "gist": 0, "idea": [0, 1], "design": [0, 1], "repres": [0, 1], "simplifi": 0, "version": [0, 1], "origin": [0, 1], "object": 0, "act": 0, "singl": [0, 1], "authorit": 0, "return": 0, "creat": [0, 1], "fakeemployeeapi": 0, "__init__": 0, "_employe": 0, "copi": 0, "updat": 0, "pop": 0, "readi": 0, "pytest": 0, "fake_api": 0, "john": 0, "sale": 0, "alic": 0, "legal": 0, "test_capitalise_employees_nam": 0, "assert": 0, "With": 0, "don": [0, 1], "t": [0, 1], "need": [0, 1], "bother": 0, "ani": 0, "dive": 0, "straight": 0, "mock": 0, "testemployeeapihelperfunct": 0, "testcas": 0, "autospec": 0, "true": [0, 1], "mock_api": 0, "return_valu": 0, "assert_called_onc": 0, "assert_called_once_with": 0, "It": [0, 1], "quicker": 0, "compar": [0, 1], "previou": 0, "tradeoff": 0, "readabl": 0, "after": [0, 1], "some": [0, 1, 2], "time": [0, 1], "sever": 0, "incid": 0, "involv": [0, 1], "loss": 0, "extend": 0, "method": [0, 1], "old_employee_info": 0, "new_employee_info": 0, "take": [0, 1], "advantag": 0, "improv": 0, "all": [0, 1], "call": [0, 1], "doe": [0, 1], "error": 0, "rais": 0, "indic": [0, 1], "miss": 0, "straightforward": 0, "understand": 0, "interfac": 0, "ha": 0, "just": 0, "been": [0, 1], "addit": 0, "old_employee_nam": 0, "_": 0, "popitem": 0, "That": 0, "No": 0, "And": 0, "long": [0, 1], "match": 0, "actual": [0, 1], "matter": 0, "have": [0, 1], "written": 0, "modifi": 0, "them": [0, 1], "confid": [0, 1], "even": [0, 1], "wa": [0, 1], "For": [0, 1], "problemat": 0, "fail": 0, "onli": [0, 1], "fix": [0, 1], "old": [0, 1], "new": [0, 1], "accordingli": 0, "Of": 0, "cours": 0, "simpl": 0, "manag": [0, 1], "scale": 0, "well": [0, 1], "codebas": 0, "each": [0, 1], "develop": 0, "perfectli": 0, "one": 0, "unhappi": 0, "ultim": [0, 1], "ignor": 0, "softwar": 0, "trade": [0, 2], "off": [0, 2], "attract": 0, "initi": [0, 1], "closer": 0, "encourag": 0, "harm": 0, "term": 0, "instead": [0, 1], "eas": 0, "burden": 0, "mainten": 0, "thei": [0, 1], "healthi": [0, 1], "avoid": 0, "sqlite": [1, 2], "drawn": 1, "content": 1, "discuss": 1, "behind": 1, "program": 1, "recent": 1, "ve": 1, "decis": 1, "apach": 1, "arrow": 1, "flight": 1, "framework": 1, "file": 1, "format": 1, "found": 1, "interest": 1, "offer": 1, "almost": 1, "serial": 1, "sent": 1, "directli": 1, "over": 1, "wire": 1, "nativ": 1, "small": 1, "metadata": 1, "via": 1, "buffer": 1, "between": 1, "increas": 1, "network": 1, "reduc": 1, "cpu": 1, "were": 1, "opposit": 1, "mind": 1, "varint": 1, "transfer": 1, "extra": 1, "both": 1, "connect": 1, "interestingli": 1, "revers": 1, "cap": 1, "n": 1, "proto": 1, "successor": 1, "author": 1, "consid": 1, "longer": 1, "desir": 1, "own": 1, "wide": 1, "across": 1, "embed": 1, "devic": 1, "storag": 1, "an": 1, "consider": 1, "howev": 1, "most": 1, "place": 1, "system": 1, "premium": 1, "rough": 1, "sort": 1, "warn": 1, "follow": 1, "brief": 1, "somewhat": 1, "naiv": 1, "analysi": 1, "pleas": 1, "pinch": 1, "salt": 1, "adapt": 1, "variat": 1, "profil": 1, "materi": 1, "websit": 1, "tabl": 1, "ten": 1, "million": 1, "row": 1, "rowid": 1, "randominteg": 1, "53": 1, "7": 1, "randomword": 1, "squalid": 1, "real": 1, "uniformli": 1, "distribut": 1, "select": 1, "random": 1, "empir": 1, "byte": 1, "90": 1, "valu": 1, "75": 1, "8": 1, "25": 1, "1000": 1, "word": 1, "usr": 1, "share": 1, "sampl": 1, "had": 1, "six": 1, "disk": 1, "outlin": 1, "note": 1, "fairli": 1, "arbitrari": 1, "count": 1, "avg": 1, "table1": 1, "table2": 1, "63": 1, "like": 1, "mix": 1, "person": 1, "pre": 1, "popul": 1, "csv": 1, "which": 1, "still": 1, "pattern": 1, "occur": 1, "quit": 1, "frequent": 1, "me": 1, "schema": 1, "relev": 1, "databas": 1, "e": 1, "g": 1, "text": 1, "machin": 1, "linux": 1, "base": 1, "perf": 1, "flamegraph": 1, "visualis": 1, "sqlite3": 1, "avail": 1, "apt": 1, "packag": 1, "start": 1, "unfortun": 1, "soon": 1, "discov": 1, "symbol": 1, "strip": 1, "objdump": 1, "sym": 1, "limit": 1, "pull": 1, "latest": 1, "44": 1, "built": 1, "local": 1, "default": 1, "set": 1, "settl": 1, "gather": 1, "record": 1, "f": 1, "5000": 1, "graph": 1, "dwarf": 1, "o": 1, "bash": 1, "my_bash_script": 1, "unprivileg": 1, "user": 1, "made": 1, "plai": 1, "perf_event_paranoid": 1, "quickli": 1, "becam": 1, "appar": 1, "page": 1, "cach": 1, "neglig": 1, "On": 1, "reflect": 1, "expect": 1, "split": 1, "those": 1, "warm": 1, "account": 1, "sync": 1, "command": 1, "along": 1, "proc": 1, "sy": 1, "vm": 1, "drop_cach": 1, "clear": 1, "decod": 1, "move": 1, "remain": 1, "xread": 1, "further": 1, "mai": 1, "includ": 1, "95": 1, "interv": 1, "second": 1, "9": 1, "flame": 1, "similar": 1, "overal": 1, "appear": 1, "highlight": 1, "dash": 1, "oval": 1, "region": 1, "attribut": 1, "stack": 1, "trace": 1, "left": 1, "hand": 1, "side": 1, "__libc_pread64": 1, "impact": 1, "load": 1, "right": 1, "__libc_start_call_main": 1, "part": 1, "translat": 1, "sql": 1, "statement": 1, "bytecod": 1, "virtual": 1, "cpython": 1, "presum": 1, "section": 1, "begin": 1, "strack": 1, "sqlite3vdbeexec": 1, "relat": 1, "link": 1, "choic": 1, "understood": 1, "sqlite3vdbeserialget": 1, "smaller": 1, "contain": 1, "logic": 1, "memori": 1, "consist": 1, "unless": 1, "you": 1, "power": 1, "think": 1, "unlik": 1, "notic": 1, "sqlite3btreepayloads": 1, "larger": 1, "b": 1, "tree": 1, "structur": 1, "effici": 1, "travers": 1, "size": 1, "leaf": 1, "node": 1, "known": 1, "advanc": 1, "partial": 1, "exampl": 1, "column": 1, "know": 1, "whether": 1, "particular": 1, "without": 1, "inspect": 1, "perform": 1, "clean": 1, "complic": 1, "fact": 1, "vari": 1, "algorithm": 1, "itself": 1, "bit": 1, "cleaner": 1, "10": 1, "15": 1, "look": 1, "main": 1, "direct": 1, "visibl": 1, "frequenc": 1, "being": 1, "too": 1, "coars": 1, "anoth": 1, "sai": 1, "attach": 1, "again": 1, "gener": 1, "rather": 1, "specif": 1, "first": 1, "everyth": 1, "slower": 1, "didn": 1, "explan": 1, "spend": 1, "As": 1, "befor": 1, "process": 1, "These": 1, "earlier": 1, "sqlite3btreelast": 1, "ad": 1, "henc": 1, "determin": 1, "locat": 1, "explicitli": 1, "driver": 1, "sole": 1, "caus": 1, "total": 1, "12": 1, "do": 1, "regularli": 1, "major": 1, "quick": 1, "benefit": 1, "roughli": 1, "95mb": 1, "184": 1, "mb": 1, "64": 1, "sign": 1, "we": 1, "would": 1, "occupi": 1, "160mb": 1, "If": 1, "assum": 1, "20": 1, "charact": 1, "layout": 1, "360mb": 1, "50": 1, "reduct": 1, "sophist": 1, "against": 1, "parquet": 1, "ubiquit": 1, "panda": 1, "show": 1, "uncompress": 1, "105mb": 1, "120mb": 1, "store": 1, "compactli": 1, "v": 1, "columnar": 1, "primarili": 1, "fast": 1, "onlin": 1, "transact": 1, "oltp": 1, "wherea": 1, "analyt": 1, "olap": 1, "primari": 1, "factor": 1, "speed": 1, "ratio": 1, "runtim": 1, "modest": 1, "potenti": 1, "save": 1, "decreas": 1, "perhap": 1, "surprisingli": 1, "given": 1, "produc": 1, "focu": 1, "home": 1, "messag": 1, "cargo": 1, "cult": 1, "alwai": 1, "experiment": 2, "variabl": 2, "length": 2, "integ": 2, "encod": 2, "fragil": 2, "test": 2}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"fragil": 0, "test": [0, 1], "why": 0, "do": 0, "we": 0, "an": 0, "exampl": 0, "state": 0, "verif": 0, "behaviour": 0, "inevit": 0, "code": 0, "chang": 0, "final": [0, 1], "thought": [0, 1], "trade": 1, "off": 1, "variabl": 1, "length": 1, "integ": 1, "encod": 1, "experiment": 1, "setup": 1, "data": 1, "case": 1, "tool": 1, "result": 1, "1": 1, "4": 1, "2": 1, "cold": 1, "3": 1, "5": 1, "6": 1, "compress": 1, "articl": 2}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 8, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx": 57}, "alltitles": {"Fragile Tests": [[0, "fragile-tests"]], "Why do we test?": [[0, "why-do-we-test"]], "Why do we not test?": [[0, "why-do-we-not-test"]], "An example": [[0, "an-example"]], "State verification": [[0, "state-verification"], [0, "id1"]], "Behaviour verification": [[0, "behaviour-verification"], [0, "id2"]], "An inevitable code change": [[0, "an-inevitable-code-change"]], "Final thoughts": [[0, "final-thoughts"], [1, "final-thoughts"]], "Trade-offs": [[1, "trade-offs"]], "Variable-length integer encoding": [[1, "variable-length-integer-encoding"]], "Experimentation setup": [[1, "experimentation-setup"]], "Data": [[1, "data"]], "Test cases": [[1, "test-cases"]], "Tools": [[1, "tools"]], "Experimentation results": [[1, "experimentation-results"]], "Test cases 1 - 4": [[1, "test-cases-1-4"]], "Test case 2 (cold)": [[1, "test-case-2-cold"]], "Test case 3 (cold)": [[1, "test-case-3-cold"]], "Test cases 5 - 6": [[1, "test-cases-5-6"]], "Compression": [[1, "compression"]], "Articles": [[2, "articles"]]}, "indexentries": {}})