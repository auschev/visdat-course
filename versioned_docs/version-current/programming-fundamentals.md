# Programming Fundamentals

## Programming Paradigms

Programming paradigms are fundamental approaches to organizing and structuring code. Understanding different paradigms helps you choose the right tool for each problem and write more effective software.

### Procedural Programming

**Concept:** Programs are organized as a sequence of functions that operate on data.

**Characteristics:**
- **Step-by-step execution:** Code runs from top to bottom
- **Functions:** Modular pieces of code that perform specific tasks
- **Data and functions are separate:** Functions operate on data passed as parameters

**Example in C++:**
```cpp
#include <iostream>
#include <vector>
#include <algorithm>

// Function to calculate average
double calculateAverage(const std::vector<double>& data) {
    double sum = 0.0;
    for (double value : data) {
        sum += value;
    }
    return sum / data.size();
}

// Function to find maximum value
double findMaximum(const std::vector<double>& data) {
    return *std::max_element(data.begin(), data.end());
}

int main() {
    std::vector<double> measurements = {12.5, 15.2, 11.8, 16.1, 13.9};
    
    double avg = calculateAverage(measurements);
    double max = findMaximum(measurements);
    
    std::cout << "Average: " << avg << std::endl;
    std::cout << "Maximum: " << max << std::endl;
    
    return 0;
}
```

**Example in Python:**
```python
def calculate_average(data):
    """Calculate the average of a list of numbers."""
    return sum(data) / len(data)

def find_maximum(data):
    """Find the maximum value in a list."""
    return max(data)

def process_measurements(measurements):
    """Process a list of measurements and return statistics."""
    avg = calculate_average(measurements)
    maximum = find_maximum(measurements)
    
    return {
        'average': avg,
        'maximum': maximum,
        'count': len(measurements)
    }

# Main execution
measurements = [12.5, 15.2, 11.8, 16.1, 13.9]
results = process_measurements(measurements)
print(f"Average: {results['average']:.2f}")
print(f"Maximum: {results['maximum']:.2f}")
```

### Object-Oriented Programming (OOP)

**Concept:** Programs are organized around objects that contain both data (attributes) and behavior (methods).

**Key Principles:**
- **Encapsulation:** Data and methods are bundled together
- **Inheritance:** Classes can inherit from other classes
- **Polymorphism:** Objects can take multiple forms
- **Abstraction:** Hide complex implementation details

**Example in C++:**
```cpp
#include <iostream>
#include <vector>
#include <string>

class DataProcessor {
private:
    std::vector<double> data;
    std::string name;

public:
    // Constructor
    DataProcessor(const std::string& processorName) : name(processorName) {}
    
    // Add data point
    void addData(double value) {
        data.push_back(value);
    }
    
    // Calculate statistics
    double getAverage() const {
        if (data.empty()) return 0.0;
        
        double sum = 0.0;
        for (double value : data) {
            sum += value;
        }
        return sum / data.size();
    }
    
    double getMaximum() const {
        if (data.empty()) return 0.0;
        
        double max = data[0];
        for (double value : data) {
            if (value > max) max = value;
        }
        return max;
    }
    
    // Display results
    void displayResults() const {
        std::cout << "Processor: " << name << std::endl;
        std::cout << "Data points: " << data.size() << std::endl;
        std::cout << "Average: " << getAverage() << std::endl;
        std::cout << "Maximum: " << getMaximum() << std::endl;
    }
};

int main() {
    DataProcessor processor("Temperature Sensor");
    
    processor.addData(12.5);
    processor.addData(15.2);
    processor.addData(11.8);
    processor.addData(16.1);
    processor.addData(13.9);
    
    processor.displayResults();
    
    return 0;
}
```

**Example in Python:**
```python
class DataProcessor:
    """A class for processing and analyzing numerical data."""
    
    def __init__(self, name):
        """Initialize the processor with a name."""
        self.name = name
        self.data = []
    
    def add_data(self, value):
        """Add a data point to the processor."""
        self.data.append(value)
    
    def get_average(self):
        """Calculate and return the average of all data points."""
        if not self.data:
            return 0.0
        return sum(self.data) / len(self.data)
    
    def get_maximum(self):
        """Find and return the maximum value."""
        if not self.data:
            return 0.0
        return max(self.data)
    
    def get_minimum(self):
        """Find and return the minimum value."""
        if not self.data:
            return 0.0
        return min(self.data)
    
    def display_results(self):
        """Display a summary of the processed data."""
        print(f"Processor: {self.name}")
        print(f"Data points: {len(self.data)}")
        print(f"Average: {self.get_average():.2f}")
        print(f"Maximum: {self.get_maximum():.2f}")
        print(f"Minimum: {self.get_minimum():.2f}")

# Usage example
processor = DataProcessor("Temperature Sensor")

# Add data points
measurements = [12.5, 15.2, 11.8, 16.1, 13.9]
for measurement in measurements:
    processor.add_data(measurement)

# Display results
processor.display_results()
```

### Functional Programming

**Concept:** Programs are built using pure functions that avoid changing state and mutable data.

**Characteristics:**
- **Pure Functions:** Functions that always return the same output for the same input
- **Immutability:** Data doesn't change after creation
- **Higher-order Functions:** Functions that take other functions as parameters
- **No Side Effects:** Functions don't modify external state

**Example in Python:**
```python
from functools import reduce
from typing import List, Callable

# Pure functions for data processing
def square(x: float) -> float:
    """Square a number."""
    return x * x

def is_positive(x: float) -> bool:
    """Check if a number is positive."""
    return x > 0

def add(x: float, y: float) -> float:
    """Add two numbers."""
    return x + y

# Higher-order function
def apply_operation(data: List[float], operation: Callable[[float], float]) -> List[float]:
    """Apply an operation to all elements in a list."""
    return [operation(x) for x in data]

def filter_data(data: List[float], predicate: Callable[[float], bool]) -> List[float]:
    """Filter data based on a predicate function."""
    return [x for x in data if predicate(x)]

# Functional data processing pipeline
def process_data_functionally(data: List[float]) -> dict:
    """Process data using functional programming approach."""
    
    # Filter positive values
    positive_values = filter_data(data, is_positive)
    
    # Square all values
    squared_values = apply_operation(positive_values, square)
    
    # Calculate sum using reduce
    total = reduce(add, squared_values, 0.0)
    
    # Calculate average
    average = total / len(squared_values) if squared_values else 0.0
    
    return {
        'original_count': len(data),
        'positive_count': len(positive_values),
        'sum_of_squares': total,
        'average_square': average
    }

# Example usage
data = [-2.5, 12.5, -1.0, 15.2, 11.8, -0.5, 16.1, 13.9]
results = process_data_functionally(data)

print("Functional Processing Results:")
for key, value in results.items():
    print(f"{key}: {value:.2f}")
```

## Structured Programming

Structured programming is a programming paradigm that uses control structures to organize code flow logically and readably.

### Core Control Structures

#### 1. Sequence
Code executes line by line in order.

```python
# Sequential execution
data = [1, 2, 3, 4, 5]
total = sum(data)
average = total / len(data)
print(f"Average: {average}")
```

#### 2. Selection (Branching)
Code execution depends on conditions.

```python
def categorize_temperature(temp):
    """Categorize temperature reading."""
    if temp < 0:
        return "Freezing"
    elif temp < 10:
        return "Cold"
    elif temp < 25:
        return "Mild"
    elif temp < 35:
        return "Warm"
    else:
        return "Hot"

# Usage
temperature = 22.5
category = categorize_temperature(temperature)
print(f"{temperature}°C is {category}")
```

#### 3. Iteration (Loops)
Code repeats based on conditions.

```python
# Different types of loops

# For loop - iterate over a sequence
measurements = [12.5, 15.2, 11.8, 16.1, 13.9]
for i, measurement in enumerate(measurements):
    print(f"Measurement {i+1}: {measurement}°C")

# While loop - repeat while condition is true
target_accuracy = 0.1
current_error = 1.0
iterations = 0

while current_error > target_accuracy and iterations < 100:
    current_error *= 0.8  # Simulate error reduction
    iterations += 1
    print(f"Iteration {iterations}: Error = {current_error:.3f}")

print(f"Converged after {iterations} iterations")
```

### Benefits of Structured Programming

1. **Readability:** Code is easier to understand and follow
2. **Maintainability:** Changes are easier to make and debug
3. **Modularity:** Code can be broken into logical, reusable components
4. **Testing:** Individual components can be tested in isolation

### Best Practices

#### Function Design
```python
def calculate_statistics(data):
    """
    Calculate basic statistics for a dataset.
    
    Args:
        data (list): List of numerical values
        
    Returns:
        dict: Dictionary containing mean, median, and std deviation
        
    Raises:
        ValueError: If data is empty
    """
    if not data:
        raise ValueError("Data cannot be empty")
    
    # Sort data for median calculation
    sorted_data = sorted(data)
    n = len(sorted_data)
    
    # Calculate mean
    mean = sum(sorted_data) / n
    
    # Calculate median
    if n % 2 == 0:
        median = (sorted_data[n//2 - 1] + sorted_data[n//2]) / 2
    else:
        median = sorted_data[n//2]
    
    # Calculate standard deviation
    variance = sum((x - mean) ** 2 for x in sorted_data) / n
    std_dev = variance ** 0.5
    
    return {
        'mean': mean,
        'median': median,
        'std_dev': std_dev,
        'count': n
    }
```

#### Error Handling
```python
def safe_divide(numerator, denominator):
    """Safely divide two numbers with error handling."""
    try:
        result = numerator / denominator
        return result
    except ZeroDivisionError:
        print("Error: Cannot divide by zero")
        return None
    except TypeError:
        print("Error: Both arguments must be numbers")
        return None

# Usage with error handling
result = safe_divide(10, 2)
if result is not None:
    print(f"Result: {result}")
```

## Mixing Paradigms in Practice

Real-world projects often combine multiple paradigms for optimal results:

```python
class DataAnalyzer:
    """Object-oriented wrapper for functional data processing."""
    
    def __init__(self, name):
        self.name = name
        self.processors = []
    
    def add_processor(self, processor_func):
        """Add a processing function (functional approach)."""
        self.processors.append(processor_func)
    
    def process(self, data):
        """Process data through all registered processors."""
        result = data
        
        # Functional processing chain
        for processor in self.processors:
            result = processor(result)
        
        return result

# Functional processors
def remove_outliers(data, threshold=2.0):
    """Remove outliers beyond threshold standard deviations."""
    if len(data) < 2:
        return data
    
    mean = sum(data) / len(data)
    std_dev = (sum((x - mean) ** 2 for x in data) / len(data)) ** 0.5
    
    return [x for x in data if abs(x - mean) <= threshold * std_dev]

def normalize_data(data):
    """Normalize data to 0-1 range."""
    if not data:
        return data
    
    min_val = min(data)
    max_val = max(data)
    
    if max_val == min_val:
        return [0.5] * len(data)
    
    return [(x - min_val) / (max_val - min_val) for x in data]

# Usage combining OOP and functional approaches
analyzer = DataAnalyzer("Temperature Data Processor")
analyzer.add_processor(remove_outliers)
analyzer.add_processor(normalize_data)

raw_data = [12.5, 15.2, 11.8, 100.0, 16.1, 13.9, -50.0, 14.5]
processed_data = analyzer.process(raw_data)

print(f"Original data: {raw_data}")
print(f"Processed data: {[round(x, 3) for x in processed_data]}")
```

## Key Takeaways

1. **Choose the Right Paradigm:** Different problems benefit from different approaches
2. **Procedural:** Good for simple, linear tasks and scripts
3. **Object-Oriented:** Excellent for complex systems with related data and behavior
4. **Functional:** Ideal for data transformations and mathematical operations
5. **Hybrid Approach:** Most real projects benefit from combining paradigms
6. **Structured Programming:** Always use clear control structures regardless of paradigm

Understanding these fundamentals will help you write better code throughout this course and in your professional career!