Search.setIndex({"docnames": ["datasets", "generated/torchtime.datasets.PandasDataset", "generated/torchtime.datasets.TimeSeriesDataset", "generated/torchtime.datasets.UCR", "generated/torchtime.io.TSFileLoader", "generated/torchtime.io.load_from_arff_to_dataframe", "generated/torchtime.models.InceptionTime", "generated/torchtime.transforms.Compose", "generated/torchtime.transforms.LabelEncoder", "generated/torchtime.transforms.Nan2Value", "generated/torchtime.transforms.Normalize", "generated/torchtime.transforms.Pad", "generated/torchtime.transforms.Resample", "generated/torchtime.transforms.ToTensor", "get-started", "index", "installation", "io", "models", "references", "torchtime", "transforms", "tutorials/classification_tutorial", "tutorials/index", "tutorials/sg_execution_times"], "filenames": ["datasets.rst", "generated/torchtime.datasets.PandasDataset.rst", "generated/torchtime.datasets.TimeSeriesDataset.rst", "generated/torchtime.datasets.UCR.rst", "generated/torchtime.io.TSFileLoader.rst", "generated/torchtime.io.load_from_arff_to_dataframe.rst", "generated/torchtime.models.InceptionTime.rst", "generated/torchtime.transforms.Compose.rst", "generated/torchtime.transforms.LabelEncoder.rst", "generated/torchtime.transforms.Nan2Value.rst", "generated/torchtime.transforms.Normalize.rst", "generated/torchtime.transforms.Pad.rst", "generated/torchtime.transforms.Resample.rst", "generated/torchtime.transforms.ToTensor.rst", "get-started.rst", "index.rst", "installation.rst", "io.rst", "models.rst", "references.rst", "torchtime.rst", "transforms.rst", "tutorials/classification_tutorial.rst", "tutorials/index.rst", "tutorials/sg_execution_times.rst"], "titles": ["torchtime.datasets", "PandasDataset", "TimeSeriesDataset", "UCR", "TSFileLoader", "load_from_arff_to_dataframe", "InceptionTime", "Compose", "LabelEncoder", "Nan2Value", "Normalize", "Pad", "Resample", "ToTensor", "Get Started", "Torchtime Documentation", "Installation", "torchtime.io", "torchtime.models", "References", "torchtime", "torchtime.transforms", "Time Series Classification with InceptionTime", "Tutorials", "Computation times"], "terms": {"provid": [0, 4, 15, 17, 18, 22], "mani": 0, "modul": [0, 6, 11, 17, 21, 22], "well": [0, 22], "util": [0, 22], "build": 0, "your": [0, 11, 22], "own": [0, 11], "all": [0, 1, 5, 6, 8, 22, 23], "ar": [0, 1, 2, 4, 8, 9, 11, 12, 17, 18, 22], "subclass": [0, 6], "torch": [0, 1, 4, 7, 10, 22], "data": [0, 1, 4, 5, 15, 17, 19], "i": [0, 1, 2, 3, 4, 5, 7, 10, 12, 15, 17, 19, 22, 23], "e": [0, 2, 3, 7, 10], "thei": 0, "have": [0, 1, 18, 22], "__getitem__": [0, 1, 2, 3], "__len__": [0, 2], "method": [0, 2, 8, 11, 22], "implement": [0, 11, 15, 17], "henc": 0, "can": [0, 4, 8, 22], "pass": [0, 6, 22], "dataload": [0, 22], "which": [0, 1, 2, 4, 22], "load": [0, 1, 3, 4, 5], "multipl": [0, 22], "sampl": [0, 1, 3, 12, 22], "parallel": 0, "us": [0, 2, 3, 4, 6, 7, 8, 9, 11, 12, 15, 22], "multiprocess": 0, "worker": 0, "For": [0, 18, 22], "exampl": [0, 4, 7, 22, 23], "ucr_data": 0, "ucr": [0, 19, 22], "path": [0, 1, 4, 22], "ucr_root": 0, "name": [0, 3, 4, 22], "abnormalheartbeat": 0, "data_load": 0, "batch_siz": [0, 22], "4": 0, "shuffl": [0, 22], "true": [0, 1, 3, 4, 5, 6, 9, 22], "num_work": [0, 22], "arg": 0, "nthread": 0, "almost": 0, "similar": 0, "api": 0, "two": 0, "common": [0, 17, 18, 21, 22], "argument": [0, 4], "transform": [0, 2, 3, 7, 8, 9, 10, 11, 12, 13, 22], "target_transform": [0, 2, 3], "input": [0, 10, 12, 22], "target": [0, 1, 2, 3, 4, 8, 11, 22], "respect": 0, "you": [0, 11, 15, 22], "also": [0, 4], "creat": [0, 1, 3], "class": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 22], "torchtim": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 22], "dataset": [1, 2, 3, 15, 22], "option": [1, 2, 3, 4, 6, 10, 12], "str": [1, 2, 3, 4, 5, 8, 11, 12], "none": [1, 2, 3, 4, 6], "datafram": [1, 4, 5], "dimens": [1, 4, 12, 22], "list": [1, 3, 4, 7, 22], "label": [1, 2, 3, 4, 8, 22], "kwarg": [1, 3, 6], "sourc": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 22, 23], "base": [1, 2], "compat": [1, 2, 22], "from": [1, 3, 5, 22], "panda": [1, 4, 5, 7], "paramet": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 22], "The": [1, 3, 4, 5, 9, 12, 17, 18, 19, 21, 22], "pickl": 1, "file": [1, 4, 5, 17, 24], "contain": [1, 3, 4, 5, 8, 18, 21, 22], "pd": [1, 4], "column": [1, 4, 5], "individu": 1, "time": [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 15, 17, 18, 19, 21, 23], "seri": [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 15, 17, 18, 19, 21, 23, 24], "If": [1, 3, 4, 5, 9, 15, 22], "given": [1, 10, 11, 12], "consid": 1, "hold": [1, 4], "timer": 1, "assum": [1, 22], "mutual": [1, 2], "exclus": [1, 2], "index": [1, 2, 3, 22], "union": [1, 4, 8, 9, 11], "int": [1, 2, 3, 4, 6, 8, 9, 11, 12], "slice": 1, "tupl": [1, 2, 3, 4, 5, 10], "ani": [1, 2, 3], "return": [1, 2, 3, 4, 5, 10, 11, 12], "__has_label": 1, "where": [1, 2, 3, 4], "els": [1, 4, 22], "empti": 1, "tensor": [1, 4, 6, 7, 10, 11, 12, 13, 22], "ha": [1, 4, 22], "requir": [1, 7], "shape": 1, "type": [1, 2, 3, 4, 5, 10, 11, 12], "root": [2, 3, 22], "callabl": [2, 3, 7], "make": [2, 7, 10], "It": [2, 15], "necessari": [2, 22], "overrid": 2, "string": [2, 4, 11], "directori": [2, 3], "A": [2, 3, 4], "function": [2, 3, 6, 7, 15, 18], "take": [2, 3, 6, 22], "version": [2, 3], "both": [2, 11], "uni": [2, 3], "multivari": [2, 3], "g": [2, 3], "nan2valu": [2, 3, 7, 22], "combin": 2, "tutori": [2, 3, 6, 7, 9, 22, 24], "classif": [2, 3, 6, 7, 9, 15, 19, 23, 24], "inceptiontim": [2, 3, 7, 9, 19, 23, 24], "train": [3, 8], "bool": [3, 4, 5, 8, 9, 10], "download": [3, 22, 23], "fals": [3, 4, 5, 9, 10, 22], "uea": [3, 22], "repositori": [3, 22], "dau": [3, 19, 22], "et": [3, 22], "al": [3, 22], "2019": [3, 19, 22], "dataset_nam": 3, "exist": 3, "archiv": [3, 19], "t": [3, 4, 5, 12, 22], "arff": 3, "otherwis": [3, 5], "test": 3, "internet": 3, "put": 3, "alreadi": [3, 22], "again": [3, 22], "indic": [3, 4], "numer": [3, 22], "valu": [3, 4, 5, 9, 11, 13, 22], "should": [3, 4, 5, 6, 9, 11, 22], "map": [3, 22], "io": [4, 5, 22], "filepath": 4, "nan_replace_valu": 4, "float": [4, 8, 9, 10, 11, 12, 22], "nan": [4, 5, 9, 22], "loader": 4, "sktime": 4, "format": [4, 15, 17], "miss": [4, 5, 22], "replac": [4, 5, 9], "default": [4, 11, 12], "state": 4, "": [4, 22], "intern": [4, 22], "pars": [4, 5, 22], "as_tensor": 4, "return_target": 4, "3": [4, 6], "dimension": 4, "form": [4, 12], "n": [4, 10], "c": [4, 22], "keyword": 4, "as_datafram": 4, "identifi": 4, "whether": 4, "includ": 4, "effect": 4, "ad": 4, "an": 4, "addit": 4, "thi": [4, 5, 6, 7, 8, 10, 11, 13, 17, 22], "onli": [4, 5, 7, 17, 22], "place": [4, 10], "avail": [4, 12, 17, 22], "datafil": 4, "wa": [4, 22], "first": [4, 22], "nest": 4, "number": 4, "row": 4, "everi": [4, 6, 22], "cell": 4, "univari": [4, 22], "set": [4, 8, 11, 22], "get_class": 4, "found": 4, "parse_head": 4, "line": [4, 11, 22], "header": 4, "updat": 4, "extract": [4, 21, 22], "inform": [4, 11, 22], "parse_header_valu": 4, "value_typ": 4, "tstagvaluepattern": 4, "singl": [4, 5, 11], "parser": 4, "its": [4, 9], "appropri": 4, "python": [4, 8, 22, 23], "object": [4, 7, 8], "expect": 4, "appli": 4, "boolean": 4, "convert": [4, 13, 22], "any_connected_str": 4, "strip": 4, "class_label": 4, "space": 4, "separ": [4, 5], "parse_bodi": [4, 22], "content": 4, "timestamp": 4, "parse_timestamp_tupl": 4, "tuple_data": 4, "line_dim": 4, "being": 4, "current": [4, 17], "interpret": [4, 12], "integ": 4, "probabl": 4, "date": 4, "later": 4, "actual": 4, "dateindex": 4, "parse_body_timestamp": 4, "verify_metadata": 4, "verifi": 4, "metadata": 4, "check": [4, 22], "full": [4, 5, 22], "been": 4, "file_path": 5, "return_label": 5, "nan_to": 5, "pathnam": 5, "read": [5, 17], "x": [5, 6, 12], "y": [5, 19], "frame": 5, "numpi": [5, 7, 8, 13], "arrai": [5, 8], "relev": 5, "text": 5, "prior": 5, "return_separate_x_and_i": 5, "correspond": 5, "class_val": 5, "associ": 5, "ndarrai": [5, 8], "model": [6, 15, 22], "n_input": [6, 22], "n_class": [6, 22], "use_residu": 6, "use_bottleneck": 6, "depth": 6, "6": [6, 19], "n_convolut": 6, "n_filter": 6, "32": 6, "kernel_s": 6, "initi": [6, 22], "kaiming_uniform": 6, "definit": [6, 18], "forward": [6, 10, 11, 12, 22], "defin": 6, "comput": [6, 8, 18], "perform": [6, 22], "call": [6, 22], "overridden": 6, "although": 6, "recip": 6, "need": [6, 22], "within": 6, "one": [6, 22], "instanc": 6, "afterward": 6, "instead": 6, "sinc": [6, 8, 22], "former": 6, "care": 6, "run": [6, 22], "regist": 6, "hook": 6, "while": 6, "latter": 6, "silent": 6, "ignor": 6, "them": [6, 18], "sever": 7, "togeth": 7, "doe": [7, 8, 10, 13], "support": [7, 8, 13, 22], "torchscript": [7, 8, 13], "pleas": [7, 15, 22], "see": [7, 22], "note": [7, 22], "below": [7, 23], "totensor": 7, "In": [7, 15, 22], "order": [7, 22], "script": [7, 22], "nn": [7, 22], "sequenti": 7, "normal": 7, "0": [7, 8, 9, 11, 22, 24], "485": 7, "456": 7, "406": 7, "229": 7, "224": 7, "225": 7, "scripted_transform": 7, "jit": 7, "sure": 7, "scriptabl": 7, "work": [7, 22], "lambda": 7, "_supportsarrai": 8, "dtype": 8, "_nestedsequ": 8, "complex": [8, 18], "byte": 8, "encod": 8, "n_uniqu": 8, "1": [8, 10], "pure": [8, 22], "other": 8, "possibl": 8, "uniqu": 8, "intuit": 8, "simpli": [8, 22], "median": 9, "by_channel": 9, "some": [9, 17, 18, 22], "channel": [9, 10, 12, 22], "wise": 9, "mean": 10, "std": 10, "inplac": 10, "standard": 10, "deviat": 10, "each": [10, 22], "output": [10, 12, 22], "act": 10, "out": [10, 22], "mutat": 10, "sequenc": [10, 22], "oper": 10, "series_length": 11, "fill": 11, "padding_mod": 11, "constant": 11, "length": [11, 22], "mode": [11, 12], "One": 11, "reflect": 11, "replic": 11, "extra_repr": 11, "extra": 11, "represent": 11, "To": 11, "print": [11, 22], "custom": 11, "re": [11, 22], "multi": 11, "accept": 11, "sz": 12, "scale_factor": 12, "linear": 12, "down": 12, "up": 12, "either": 12, "size": [12, 22], "algorithm": 12, "interpol": 12, "determin": 12, "mini": [12, 22], "batch": [12, 22], "width": 12, "resiz": 12, "bilinear": 12, "area": 12, "nearest": 12, "exact": 12, "tempor": 12, "multipli": 12, "upsampl": 12, "scale": 13, "accordingli": 13, "pip": [14, 15, 16], "instal": [14, 15], "pytorchtim": [14, 15, 16], "librari": 15, "process": [15, 21], "pytorch": [15, 22], "o": [15, 17], "signal": 15, "applic": 15, "compon": 15, "find": [15, 19], "follow": [15, 22], "paper": 15, "scharf": [15, 22], "vincent": [15, 22], "ploeger": 15, "paul": 15, "gerhard": 15, "2022": 15, "bring": 15, "deep": 15, "learn": [15, 22], "bibtex": 15, "articl": 15, "scharf2022torchtim": 15, "titl": 15, "author": [15, 22], "url": [15, 19], "http": [15, 19, 22], "github": 15, "com": [15, 22], "vincentsch4rf": 15, "year": 15, "write": 17, "yet": 17, "through": [17, 22], "interfac": 17, "suppos": 17, "chang": 17, "futur": 17, "subpackag": 18, "address": 18, "task": 18, "respons": 18, "construct": 18, "graph": 18, "execut": [18, 24], "structur": 18, "variat": 18, "factori": 18, "dbk": 19, "19": 19, "hoang": 19, "anh": 19, "anthoni": 19, "bagnal": 19, "kaveh": 19, "kamgar": 19, "chin": 19, "chia": 19, "michael": 19, "yeh": 19, "yan": 19, "zhu": 19, "shaghayegh": 19, "gharghabi": 19, "chotirat": 19, "ann": 19, "ratanamahatana": 19, "eamonn": 19, "keogh": 19, "arxiv": 19, "1810": 19, "07758": 19, "iflf": 19, "20": [19, 22], "hassan": 19, "ismail": [19, 22], "fawaz": [19, 22], "benjamin": 19, "luca": 19, "germain": 19, "foresti": 19, "charlott": 19, "pelleti": 19, "daniel": 19, "f": [19, 22], "schmidt": 19, "jonathan": 19, "weber": 19, "geoffrei": 19, "webb": 19, "lhassan": 19, "idoumghar": 19, "pierr": 19, "alain": 19, "muller": 19, "fran\u00e7oi": 19, "petitjean": 19, "alexnet": 19, "mine": 19, "knowledg": 19, "discoveri": 19, "34": 19, "1936": 19, "1962": 19, "2020": [19, 22], "doi": 19, "org": 19, "10": [19, 22], "1007": 19, "s10618": 19, "020": 19, "00710": 19, "featur": 21, "click": 22, "here": 22, "code": [22, 23], "we": 22, "go": 22, "how": 22, "consist": 22, "four": 22, "spectrogram": 22, "adulter": 22, "vari": 22, "degre": 22, "offal": 22, "470": 22, "30": 22, "sampel": 22, "easi": 22, "access": 22, "publicli": 22, "refer": 22, "offici": 22, "document": 22, "do": 22, "step": 22, "imput": 22, "potenti": 22, "extrem": 22, "import": 22, "those": 22, "window": 22, "get": 22, "brokenpipeerror": 22, "try": 22, "compos": 22, "trainset": 22, "trainload": 22, "testset": 22, "testload": 22, "unadulter": 22, "heart": 22, "kidnei": 22, "liver": 22, "tripe": 22, "www": 22, "timeseriesclassif": 22, "zip": [22, 23], "432784": 22, "00": [22, 24], "433152it": 22, "4466983": 22, "11it": 22, "home": 22, "miniconda3": 22, "env": 22, "lib": 22, "python3": 22, "9": 22, "site": 22, "packag": 22, "8eabcd0": 22, "py3": 22, "egg": 22, "py": [22, 24], "459": 22, "userwarn": 22, "meta": 22, "infer": 22, "self": 22, "ucruea": 22, "135": 22, "dataconversionwarn": 22, "explicit": 22, "constructor": 22, "_load_data": 22, "let": 22, "u": 22, "show": 22, "fun": 22, "matplotlib": 22, "pyplot": 22, "plt": 22, "def": 22, "seriesshow": 22, "plot": 22, "fig": 22, "ax": 22, "subplot": 22, "legend": 22, "grid": 22, "random": 22, "datait": 22, "iter": 22, "next": 22, "join": 22, "j": 22, "rang": 22, "onto": 22, "five": 22, "abov": 22, "net": 22, "cross": 22, "entropi": 22, "sgd": 22, "momentum": 22, "criterion": 22, "crossentropyloss": 22, "lr": 22, "001": 22, "when": 22, "thing": 22, "start": 22, "interest": 22, "loop": 22, "over": 22, "our": 22, "feed": 22, "epoch": 22, "running_loss": 22, "enumer": 22, "zero": 22, "gradient": 22, "zero_grad": 22, "backward": 22, "statist": 22, "item": 22, "2000": 22, "1999": 22, "5d": 22, "3f": 22, "finish": 22, "autograd": 22, "__init__": 22, "173": 22, "cuda": 22, "unexpect": 22, "error": 22, "cudagetdevicecount": 22, "did": 22, "befor": 22, "numcudadevic": 22, "might": 22, "804": 22, "attempt": 22, "non": 22, "hw": 22, "trigger": 22, "opt": 22, "conda": 22, "bld": 22, "pytorch_1659484806139": 22, "c10": 22, "cudafunct": 22, "cpp": 22, "109": 22, "variabl": 22, "_execution_engin": 22, "run_backward": 22, "engin": 22, "quickli": 22, "save": 22, "beef_classifi": 22, "pth": 22, "state_dict": 22, "more": 22, "detail": 22, "rel": 22, "small": 22, "split": 22, "But": 22, "learnt": 22, "anyth": 22, "predict": 22, "neural": 22, "against": 22, "ground": 22, "truth": 22, "correct": 22, "add": 22, "okai": 22, "displai": 22, "familiar": 22, "groundtruth": 22, "back": 22, "wasn": 22, "illustr": 22, "so": 22, "load_state_dict": 22, "kei": 22, "match": 22, "successfulli": 22, "now": 22, "what": 22, "think": 22, "energi": 22, "higher": 22, "particular": 22, "highest": 22, "_": 22, "max": 22, "result": 22, "seem": 22, "pretti": 22, "good": 22, "look": 22, "whole": 22, "total": [22, 24], "don": 22, "calcul": 22, "no_grad": 22, "choos": 22, "sum": 22, "accuraci": 22, "100": 22, "26": 22, "That": 22, "wai": 22, "better": 22, "than": 22, "chanc": 22, "randomli": 22, "pick": 22, "like": 22, "someth": 22, "hmmm": 22, "prepar": 22, "count": 22, "correct_pr": 22, "classnam": 22, "total_pr": 22, "collect": 22, "correct_count": 22, "1f": 22, "83": 22, "33": 22, "16": 22, "7": 22, "just": 22, "transfer": 22, "devic": 22, "visibl": 22, "is_avail": 22, "cpu": 22, "machin": 22, "rest": 22, "section": 22, "Then": 22, "recurs": 22, "buffer": 22, "rememb": 22, "send": 22, "too": 22, "why": 22, "notic": 22, "massiv": 22, "speedup": 22, "compar": 22, "becaus": 22, "tini": 22, "minut": 22, "8": 22, "902": [22, 24], "second": 22, "classification_tutori": [22, 24], "jupyt": [22, 23], "notebook": [22, 23], "ipynb": 22, "galleri": [22, 23], "gener": [22, 23], "sphinx": [22, 23], "tutorials_python": 23, "tutorials_jupyt": 23, "08": 24, "mb": 24}, "objects": {"torchtime": [[0, 0, 0, "-", "datasets"], [17, 0, 0, "-", "io"], [18, 0, 0, "-", "models"], [21, 0, 0, "-", "transforms"]], "torchtime.datasets": [[1, 1, 1, "", "PandasDataset"], [2, 1, 1, "", "TimeSeriesDataset"], [3, 1, 1, "", "UCR"]], "torchtime.datasets.PandasDataset": [[1, 2, 1, "", "__getitem__"]], "torchtime.datasets.TimeSeriesDataset": [[2, 2, 1, "", "__getitem__"]], "torchtime.datasets.UCR": [[3, 2, 1, "", "__getitem__"]], "torchtime.io": [[4, 1, 1, "", "TSFileLoader"], [5, 3, 1, "", "load_from_arff_to_dataframe"]], "torchtime.io.TSFileLoader": [[4, 1, 1, "", "State"], [4, 2, 1, "", "as_dataframe"], [4, 2, 1, "", "as_tensor"], [4, 2, 1, "", "get_classes"], [4, 2, 1, "", "parse"], [4, 2, 1, "", "parse_body"], [4, 2, 1, "", "parse_body_timestamps"], [4, 2, 1, "", "parse_header"], [4, 2, 1, "", "parse_header_value"], [4, 2, 1, "", "parse_timestamp_tuple"], [4, 2, 1, "", "verify_metadata"]], "torchtime.models": [[6, 1, 1, "", "InceptionTime"]], "torchtime.models.InceptionTime": [[6, 2, 1, "", "forward"]], "torchtime.transforms": [[7, 1, 1, "", "Compose"], [8, 1, 1, "", "LabelEncoder"], [9, 1, 1, "", "Nan2Value"], [10, 1, 1, "", "Normalize"], [11, 1, 1, "", "Pad"], [12, 1, 1, "", "Resample"], [13, 1, 1, "", "ToTensor"]], "torchtime.transforms.Normalize": [[10, 2, 1, "", "forward"]], "torchtime.transforms.Pad": [[11, 2, 1, "", "extra_repr"], [11, 2, 1, "", "forward"]], "torchtime.transforms.Resample": [[12, 2, 1, "", "forward"]]}, "objtypes": {"0": "py:module", "1": "py:class", "2": "py:method", "3": "py:function"}, "objnames": {"0": ["py", "module", "Python module"], "1": ["py", "class", "Python class"], "2": ["py", "method", "Python method"], "3": ["py", "function", "Python function"]}, "titleterms": {"torchtim": [0, 15, 17, 18, 20, 21], "dataset": 0, "built": 0, "time": [0, 22, 24], "seri": [0, 22], "classif": [0, 22], "base": 0, "class": 0, "custom": 0, "pandasdataset": 1, "timeseriesdataset": 2, "ucr": 3, "tsfileload": 4, "load_from_arff_to_datafram": 5, "inceptiontim": [6, 22], "compos": 7, "labelencod": 8, "nan2valu": 9, "normal": [10, 22], "pad": 11, "resampl": 12, "totensor": 13, "get": [14, 15, 16], "start": [14, 15, 16], "document": 15, "cite": 15, "instal": 16, "io": 17, "function": [17, 22], "model": 18, "refer": 19, "transform": 21, "composit": 21, "convers": 21, "imput": 21, "geometri": 21, "sampl": 21, "util": 21, "1": 22, "load": 22, "beef": 22, "2": 22, "defin": 22, "an": 22, "style": 22, "classifi": 22, "3": 22, "loss": 22, "optim": 22, "4": 22, "train": 22, "network": 22, "5": 22, "test": 22, "data": 22, "gpu": 22, "tutori": 23, "comput": 24}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx.ext.todo": 2, "sphinx.ext.viewcode": 1, "sphinxcontrib.bibtex": 9, "nbsphinx": 4, "sphinx": 56}})