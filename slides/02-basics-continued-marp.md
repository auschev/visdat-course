---
marp: true
paginate: true
footer: "FH OÖ Wels · VIS3VO"
---

# Lecture 1 — Continued  
C++ & Python basics (extended)

---

## C++: std::vector & std::string
```cpp
#include <vector>
#include <string>
std::vector<int> v{1,2,3};
v.push_back(4);
std::string s = "hello";
s += " world";
```

---

## C++: header / source split
```cpp
// math.hpp
int sumsq(int n);
```
```cpp
// math.cpp
int sumsq(int n){ int s=0; for(int i=0;i<=n;i++) s+=i*i; return s; }
```
```cpp
// main.cpp
#include "math.hpp"
#include <iostream>
int main(){ std::cout << sumsq(5); }
```

---

## C++: compile multiple files
```bash
g++ -c math.cpp -o math.o
g++ -c main.cpp -o main.o
g++ math.o main.o -o app
```

---

## C++: const & constexpr
```cpp
const double Pi = 3.14159;
constexpr int N = 256; // compile-time constant
```

---

## C++: pass by ref vs value
```cpp
void inc_by_ref(int& x){ ++x; }
void inc_by_val(int x){ ++x; }
```

---

## C++: simple class
```cpp
class Counter {
  int n{0};
public:
  void inc(){ ++n; }
  int value() const { return n; }
};
```

---

## Python: modules & venv
```bash
python -m venv .venv
# Windows: .venv\Scripts\activate
# Linux/macOS:
source .venv/bin/activate
pip install numpy
```

---

## Python: argparse (CLI)
```python
import argparse
p = argparse.ArgumentParser()
p.add_argument("--n", type=int, default=5)
args = p.parse_args()
print(args.n)
```

---

## Python: list/dict comprehensions
```python
squares = [i*i for i in range(6)]
inv = {k: v for v, k in enumerate("abc")}
```

---

## Python: exceptions
```python
try:
    1/0
except ZeroDivisionError as e:
    print("nope", e)
```

---

## Data I/O quick peek
```python
import json, pandas as pd
pd.DataFrame([{"a":1,"b":2}]).to_csv("d.csv", index=False)
json.dump({"k": 1}, open("d.json","w"))
```

---

## Plot quick peek
```python
import matplotlib.pyplot as plt
plt.plot([0,1,2],[0,1,4])
plt.title("Quadratic")
plt.show()
```

---

## VTK / PyVista teaser
```python
import pyvista as pv
sphere = pv.Sphere()
plotter = pv.Plotter()
plotter.add_mesh(sphere, show_edges=True)
plotter.show()
```

---

## Wrap-up
- You can continue if time allows.
- Otherwise: we’ll start here next time.
---
