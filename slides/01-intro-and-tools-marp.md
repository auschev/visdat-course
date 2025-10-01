---
marp: true
paginate: true
footer: "FH OÖ Wels · Visualization & Data Processing (VIS3VO)"
---

# Visualization & Data Processing  
Master Mechanical Engineering · 3rd Semester

**Lecture 1: Introduction & Tools**  
Instructor: Stefan Oberpeilsteiner

---

## Today
- Organization & grading
- Tooling: Git, Markdown, Python, C++
- Programming paradigms
- Structured programming
- C++ & Python basics with examples
- Kickoff assignment

---

## Course goals
- Build **robust data pipelines**
- Create **clear visualizations**
- Work with **3D content** (VTK, PyVista, glTF)
- Design **interactive UIs** (Qt/PyQt, Dash, …)
- Practice **version control** & reproducibility

---

## Workflow
1. Script & tasks in **GitHub** (Markdown)
2. Work in **fork/branch → PR**
3. Review → Merge
4. Slides also from **Markdown** (Marp)

---

## Programming paradigms
- **Procedural**: step-by-step
- **OOP**: state + behavior
- **Functional**: pure functions

> In practice we mix them pragmatically.

---

## Structured programming
- **Sequence** (statements in order)
- **Selection** (`if`, `switch`)
- **Iteration** (`for`, `while`, `do`)

```cpp
for (int i=0; i<5; ++i) {
  if (i % 2 == 0) continue;
  std::cout << i << " ";
}
```
```python
for i in range(5):
    if i % 2 == 0:
        continue
    print(i, end=" ")
```

---

## C++ motivation
- Performance, control, ecosystem
- Often used to wrap low-level libs

**Goal:** read core syntax & patterns.

---

## Python motivation
- Fast to write, batteries included
- Great for data & prototyping

**Goal:** write small tools and use libs.

---

## C++ toolchain
Preprocessor → Compiler → Linker → Binary

```bash
g++ main.cpp -O2 -std=c++17 -o app
./app
```

---

## Preprocessor
```cpp
#include <iostream>
#define SIZE 256
#ifdef DEBUG
  #define LOG(x) std::cerr << x << "\n"
#else
  #define LOG(x) do{}while(0)
#endif
```

---

## C++: basics
```cpp
int age = 30;
double pi = 3.14159;
bool ok = true;
char c = 'A'; // 65
```

- case-sensitive, `;` ends statements
- `//` or `/* */` comments

---

## C++: arrays & strings
```cpp
int a[3] = {2,3,5};
char s[] = "hello";
```

**Pitfall:** arrays decay to pointers in many contexts.

---

## C++: pointers
```cpp
int x = 42;
int* p = &x;
*p = 7;               // write through pointer
std::cout << *p;      // read through pointer
```

- `a[i] == *(a + i)`

---

## C++: references
```cpp
int x = 10;
int& r = x;
r = 20; // x becomes 20
```

- Syntactic sugar over pointers (cannot be reseated).

---

## C++: functions
```cpp
int max2(int a, int b) {
  return (a > b) ? a : b;
}
```

- pass-by-value by default
- multiple outputs via refs/pointers

---

## C++: enums & structs
```cpp
enum class Color { Blue, Red, Yellow, Green };

struct Person {
  std::string name;
  int age;
};
```

---

## C++: control flow
```cpp
for (int i=0; i<3; ++i) {
  if (i == 1) continue;
  std::cout << i;
}
```

Also: `while`, `do { } while`, `switch`.

---

## Python: numbers & operators
```python
x = 12
y = 3.14
print(x // 5)  # integer division
print(x << 1)  # bit shift
```

---

## Python: strings
```python
s = "hello world"
print(s[:5])        # 'hello'
print("world" in s) # True
```

---

## Python: lists
```python
a = [2,3,5]
a.append(7)
a.extend([11,13])
print(a)  # [2,3,5,7,11,13]
```

---

## Python: dicts & tuples
```python
conf = {"mode": "fast", "retries": 3}
print(conf["mode"])
pt = (3, 4, 5)  # immutable
```

---

## Python: reference semantics
```python
a = [1,2,3]
b = a
b.append(4)
print(a)  # [1,2,3,4]
```

Use `copy()` or slicing to copy lists.

---

## Python: functions
```python
def gcd(a, b):
    '''greatest common divisor'''
    while a:
        a, b = b % a, a
    return b
```

---

## Python: files
```python
from pathlib import Path
p = Path("out.txt")
p.write_text("hello\n")
print(p.read_text())
```

---

## Side-by-side example
**Goal:** print odd numbers from 0..9

```cpp
for (int i=0; i<10; ++i) {
  if (i % 2 == 1) std::cout << i << " ";
}
```
```python
print(*[i for i in range(10) if i % 2 == 1])
```

---

## Mini exercise (5 min)
- Write a function that returns the **sum of squares** for numbers `0..n`.
- Do it in **C++** and **Python**.

---

## Git basics (you’ll use today)
```bash
git clone <repo-url>
git checkout -b feature/intro
git add .
git commit -m "Add intro slides"
git push -u origin feature/intro
# open PR on GitHub
```

---

## Kickoff assignment
- GitHub account + SSH
- Fork course repo, edit **README**
- Create one **Marp slide** of your own
- Open a **Pull Request**

---

## Next
- Data formats (CSV/JSON/HDF5)
- Pandas & Polars
- 2D plots (Matplotlib/Plotly)

---
