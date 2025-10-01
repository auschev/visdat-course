# C++ Programming Guide

## Overview

C++ is a powerful, general-purpose programming language that builds upon C with object-oriented features. In the context of data visualization and processing, C++ excels in performance-critical applications and provides extensive ecosystem integration.

## Why C++ in Data Processing?

### Advantages

- **Performance:** Near-metal execution speed for computational intensive tasks
- **Memory Control:** Direct memory management for optimal resource usage
- **Ecosystem Integration:** Seamless integration with scientific libraries (OpenCV, VTK, PCL)
- **Cross-Platform:** Code runs on Windows, Linux, macOS
- **Industry Standard:** Widely used in engineering and scientific computing

### Use Cases in This Course

- **Performance-Critical Algorithms:** Image processing, 3D computations
- **System Integration:** Interfacing with hardware and sensors
- **Library Development:** Creating reusable components
- **Legacy Code Integration:** Working with existing C/C++ codebases

## C++ Build Workflow

Understanding the compilation process is crucial for effective C++ development.

### Compilation Pipeline

```
Source Code → Preprocessor → Compiler → Linker → Executable
  *.cpp        *.i          *.obj       *.exe
  *.h                       *.o         *.dll
```

#### 1. Preprocessor
Handles directives like `#include`, `#define`, `#ifdef`

```cpp
// Before preprocessing
#include <iostream>
#define PI 3.14159

int main() {
    std::cout << "Pi is " << PI << std::endl;
    return 0;
}

// After preprocessing (simplified)
// Contents of iostream are inserted here...
int main() {
    std::cout << "Pi is " << 3.14159 << std::endl;
    return 0;
}
```

#### 2. Compiler
Converts preprocessed code to object files

```bash
# Compile to object file
g++ -c main.cpp -o main.obj

# Compile with optimizations
g++ -c -O2 main.cpp -o main.obj

# Compile with debug information
g++ -c -g main.cpp -o main.obj
```

#### 3. Linker
Combines object files and libraries into executable

```bash
# Link object files
g++ main.obj utils.obj -o program.exe

# Link with external libraries
g++ main.obj -lmath -pthread -o program.exe
```

### Modern Build Systems

#### CMake Example

```cmake
# CMakeLists.txt
cmake_minimum_required(VERSION 3.10)
project(DataProcessor)

# Set C++ standard
set(CMAKE_CXX_STANDARD 17)

# Find required packages
find_package(OpenCV REQUIRED)

# Add executable
add_executable(data_processor 
    src/main.cpp 
    src/data_processor.cpp
    src/image_utils.cpp
)

# Link libraries
target_link_libraries(data_processor ${OpenCV_LIBS})

# Include directories
target_include_directories(data_processor PRIVATE include)
```

## Language Fundamentals

### Basic Data Types

```cpp
#include <iostream>
#include <string>
#include <vector>

int main() {
    // Fundamental types
    int integer = 42;
    double floating = 3.14159;
    char character = 'A';
    bool boolean = true;
    
    // String type
    std::string text = "Hello, World!";
    
    // Array and vector
    int array[5] = {1, 2, 3, 4, 5};
    std::vector<int> vector = {1, 2, 3, 4, 5};
    
    // Output
    std::cout << "Integer: " << integer << std::endl;
    std::cout << "Double: " << floating << std::endl;
    std::cout << "Character: " << character << std::endl;
    std::cout << "Boolean: " << boolean << std::endl;
    std::cout << "String: " << text << std::endl;
    
    return 0;
}
```

### Control Structures

#### Conditional Statements

```cpp
#include <iostream>

double categorizeTemperature(double temp) {
    std::string category;
    
    if (temp < 0) {
        category = "Freezing";
    } else if (temp < 10) {
        category = "Cold";
    } else if (temp < 25) {
        category = "Mild";
    } else if (temp < 35) {
        category = "Warm";
    } else {
        category = "Hot";
    }
    
    std::cout << temp << "°C is " << category << std::endl;
}

// Switch statement example
void processCommand(char command) {
    switch (command) {
        case 'r':
        case 'R':
            std::cout << "Reading data..." << std::endl;
            break;
        case 'w':
        case 'W':
            std::cout << "Writing data..." << std::endl;
            break;
        case 'q':
        case 'Q':
            std::cout << "Quitting..." << std::endl;
            break;
        default:
            std::cout << "Unknown command: " << command << std::endl;
    }
}
```

#### Loops

```cpp
#include <iostream>
#include <vector>

void demonstrateLoops() {
    std::vector<double> data = {12.5, 15.2, 11.8, 16.1, 13.9};
    
    // Traditional for loop
    std::cout << "Traditional for loop:" << std::endl;
    for (int i = 0; i < data.size(); ++i) {
        std::cout << "data[" << i << "] = " << data[i] << std::endl;
    }
    
    // Range-based for loop (C++11)
    std::cout << "\nRange-based for loop:" << std::endl;
    for (const auto& value : data) {
        std::cout << "Value: " << value << std::endl;
    }
    
    // While loop
    std::cout << "\nWhile loop:" << std::endl;
    int index = 0;
    while (index < data.size()) {
        std::cout << "Index " << index << ": " << data[index] << std::endl;
        ++index;
    }
    
    // Do-while loop
    std::cout << "\nDo-while loop:" << std::endl;
    int counter = 0;
    do {
        std::cout << "Counter: " << counter << std::endl;
        ++counter;
    } while (counter < 3);
}
```

#### Loop Control

```cpp
#include <iostream>
#include <vector>

void demonstrateLoopControl() {
    std::vector<int> numbers = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    
    std::cout << "Finding first even number greater than 5:" << std::endl;
    for (const auto& num : numbers) {
        if (num <= 5) {
            continue;  // Skip to next iteration
        }
        
        if (num % 2 == 0) {
            std::cout << "Found: " << num << std::endl;
            break;  // Exit the loop
        }
    }
    
    // Example with nested loops and labeled breaks
    std::cout << "\nSearching in 2D data:" << std::endl;
    std::vector<std::vector<int>> matrix = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
    };
    
    bool found = false;
    for (int i = 0; i < matrix.size() && !found; ++i) {
        for (int j = 0; j < matrix[i].size(); ++j) {
            if (matrix[i][j] == 5) {
                std::cout << "Found 5 at position (" << i << ", " << j << ")" << std::endl;
                found = true;
                break;
            }
        }
    }
}
```

## Functions and Modular Programming

### Function Basics

```cpp
#include <iostream>
#include <vector>
#include <algorithm>

// Function declaration
double calculateMean(const std::vector<double>& data);
double calculateStandardDeviation(const std::vector<double>& data);
void printStatistics(const std::vector<double>& data);

// Function definitions
double calculateMean(const std::vector<double>& data) {
    if (data.empty()) {
        return 0.0;
    }
    
    double sum = 0.0;
    for (const auto& value : data) {
        sum += value;
    }
    
    return sum / data.size();
}

double calculateStandardDeviation(const std::vector<double>& data) {
    if (data.size() <= 1) {
        return 0.0;
    }
    
    double mean = calculateMean(data);
    double sumSquaredDiffs = 0.0;
    
    for (const auto& value : data) {
        double diff = value - mean;
        sumSquaredDiffs += diff * diff;
    }
    
    return std::sqrt(sumSquaredDiffs / (data.size() - 1));
}

void printStatistics(const std::vector<double>& data) {
    std::cout << "Data Analysis Results:" << std::endl;
    std::cout << "Count: " << data.size() << std::endl;
    std::cout << "Mean: " << calculateMean(data) << std::endl;
    std::cout << "Std Dev: " << calculateStandardDeviation(data) << std::endl;
    
    if (!data.empty()) {
        auto minmax = std::minmax_element(data.begin(), data.end());
        std::cout << "Min: " << *minmax.first << std::endl;
        std::cout << "Max: " << *minmax.second << std::endl;
    }
}

int main() {
    std::vector<double> measurements = {12.5, 15.2, 11.8, 16.1, 13.9, 14.7, 12.3};
    printStatistics(measurements);
    return 0;
}
```

### Function Overloading

```cpp
#include <iostream>
#include <vector>
#include <string>

// Function overloading - same name, different parameters
void processData(int value) {
    std::cout << "Processing integer: " << value << std::endl;
}

void processData(double value) {
    std::cout << "Processing double: " << value << std::endl;
}

void processData(const std::string& value) {
    std::cout << "Processing string: " << value << std::endl;
}

void processData(const std::vector<double>& values) {
    std::cout << "Processing vector of " << values.size() << " doubles" << std::endl;
    for (const auto& val : values) {
        std::cout << "  " << val;
    }
    std::cout << std::endl;
}

int main() {
    processData(42);                                    // Calls int version
    processData(3.14159);                              // Calls double version
    processData(std::string("Hello"));                 // Calls string version
    processData(std::vector<double>{1.0, 2.0, 3.0});  // Calls vector version
    
    return 0;
}
```

### Templates (Generic Programming)

```cpp
#include <iostream>
#include <vector>
#include <algorithm>

// Function template
template<typename T>
T findMaximum(const std::vector<T>& data) {
    if (data.empty()) {
        throw std::runtime_error("Cannot find maximum of empty vector");
    }
    
    return *std::max_element(data.begin(), data.end());
}

// Class template
template<typename T>
class DataProcessor {
private:
    std::vector<T> data;
    
public:
    void addValue(const T& value) {
        data.push_back(value);
    }
    
    T getMaximum() const {
        return findMaximum(data);
    }
    
    size_t getCount() const {
        return data.size();
    }
    
    void printData() const {
        std::cout << "Data: ";
        for (const auto& value : data) {
            std::cout << value << " ";
        }
        std::cout << std::endl;
    }
};

int main() {
    // Template function usage
    std::vector<int> integers = {1, 5, 3, 9, 2};
    std::vector<double> doubles = {1.1, 5.5, 3.3, 9.9, 2.2};
    
    std::cout << "Max integer: " << findMaximum(integers) << std::endl;
    std::cout << "Max double: " << findMaximum(doubles) << std::endl;
    
    // Template class usage
    DataProcessor<int> intProcessor;
    intProcessor.addValue(10);
    intProcessor.addValue(20);
    intProcessor.addValue(15);
    
    std::cout << "Integer processor max: " << intProcessor.getMaximum() << std::endl;
    intProcessor.printData();
    
    DataProcessor<std::string> stringProcessor;
    stringProcessor.addValue("apple");
    stringProcessor.addValue("banana");
    stringProcessor.addValue("cherry");
    
    std::cout << "String processor max: " << stringProcessor.getMaximum() << std::endl;
    stringProcessor.printData();
    
    return 0;
}
```

## Object-Oriented Programming in C++

### Classes and Objects

```cpp
#include <iostream>
#include <vector>
#include <string>

class TemperatureSensor {
private:
    std::string sensorId;
    std::vector<double> readings;
    double calibrationOffset;
    
public:
    // Constructor
    TemperatureSensor(const std::string& id, double offset = 0.0) 
        : sensorId(id), calibrationOffset(offset) {
        std::cout << "Created sensor: " << sensorId << std::endl;
    }
    
    // Destructor
    ~TemperatureSensor() {
        std::cout << "Destroyed sensor: " << sensorId << std::endl;
    }
    
    // Public methods
    void addReading(double temperature) {
        readings.push_back(temperature + calibrationOffset);
    }
    
    double getAverageTemperature() const {
        if (readings.empty()) {
            return 0.0;
        }
        
        double sum = 0.0;
        for (const auto& reading : readings) {
            sum += reading;
        }
        return sum / readings.size();
    }
    
    size_t getReadingCount() const {
        return readings.size();
    }
    
    std::string getId() const {
        return sensorId;
    }
    
    void printReport() const {
        std::cout << "Sensor Report: " << sensorId << std::endl;
        std::cout << "Readings: " << readings.size() << std::endl;
        std::cout << "Average: " << getAverageTemperature() << "°C" << std::endl;
        std::cout << "Calibration offset: " << calibrationOffset << "°C" << std::endl;
    }
};

int main() {
    // Create sensor objects
    TemperatureSensor outdoor("OUTDOOR-01", -0.5);
    TemperatureSensor indoor("INDOOR-01");
    
    // Add readings
    outdoor.addReading(15.2);
    outdoor.addReading(16.8);
    outdoor.addReading(14.9);
    
    indoor.addReading(22.1);
    indoor.addReading(21.8);
    indoor.addReading(22.5);
    
    // Print reports
    outdoor.printReport();
    std::cout << std::endl;
    indoor.printReport();
    
    return 0;
}
```

### Inheritance and Polymorphism

```cpp
#include <iostream>
#include <vector>
#include <memory>

// Base class
class Sensor {
protected:
    std::string sensorId;
    std::vector<double> readings;
    
public:
    Sensor(const std::string& id) : sensorId(id) {}
    
    virtual ~Sensor() = default;  // Virtual destructor
    
    virtual void addReading(double value) {
        readings.push_back(value);
    }
    
    virtual double getAverage() const {
        if (readings.empty()) return 0.0;
        
        double sum = 0.0;
        for (const auto& reading : readings) {
            sum += reading;
        }
        return sum / readings.size();
    }
    
    // Pure virtual function - makes this an abstract class
    virtual std::string getUnit() const = 0;
    virtual std::string getType() const = 0;
    
    virtual void printReport() const {
        std::cout << "Sensor: " << sensorId << " (" << getType() << ")" << std::endl;
        std::cout << "Readings: " << readings.size() << std::endl;
        std::cout << "Average: " << getAverage() << " " << getUnit() << std::endl;
    }
    
    std::string getId() const { return sensorId; }
};

// Derived class 1
class TemperatureSensor : public Sensor {
private:
    double calibrationOffset;
    
public:
    TemperatureSensor(const std::string& id, double offset = 0.0) 
        : Sensor(id), calibrationOffset(offset) {}
    
    void addReading(double temperature) override {
        Sensor::addReading(temperature + calibrationOffset);
    }
    
    std::string getUnit() const override {
        return "°C";
    }
    
    std::string getType() const override {
        return "Temperature";
    }
};

// Derived class 2
class PressureSensor : public Sensor {
private:
    double conversionFactor;
    
public:
    PressureSensor(const std::string& id, double factor = 1.0) 
        : Sensor(id), conversionFactor(factor) {}
    
    void addReading(double pressure) override {
        Sensor::addReading(pressure * conversionFactor);
    }
    
    std::string getUnit() const override {
        return "Pa";
    }
    
    std::string getType() const override {
        return "Pressure";
    }
};

int main() {
    // Create sensors using polymorphism
    std::vector<std::unique_ptr<Sensor>> sensors;
    
    sensors.push_back(std::make_unique<TemperatureSensor>("TEMP-01", -0.2));
    sensors.push_back(std::make_unique<PressureSensor>("PRESS-01", 100.0));
    sensors.push_back(std::make_unique<TemperatureSensor>("TEMP-02"));
    
    // Add readings
    sensors[0]->addReading(22.5);
    sensors[0]->addReading(23.1);
    sensors[0]->addReading(22.8);
    
    sensors[1]->addReading(1013.25);
    sensors[1]->addReading(1012.80);
    sensors[1]->addReading(1013.45);
    
    sensors[2]->addReading(18.2);
    sensors[2]->addReading(18.8);
    
    // Print reports using polymorphism
    for (const auto& sensor : sensors) {
        sensor->printReport();
        std::cout << std::endl;
    }
    
    return 0;
}
```

## Memory Management

### Stack vs Heap

```cpp
#include <iostream>
#include <memory>

void demonstrateStackAllocation() {
    // Stack allocation - automatic cleanup
    int stackVariable = 42;
    int stackArray[100];
    
    std::cout << "Stack variable: " << stackVariable << std::endl;
    // Variables automatically destroyed when function exits
}

void demonstrateHeapAllocation() {
    // Raw pointer allocation (avoid in modern C++)
    int* rawPointer = new int(42);
    std::cout << "Heap value (raw): " << *rawPointer << std::endl;
    delete rawPointer;  // Manual cleanup required
    
    // Smart pointers (preferred approach)
    std::unique_ptr<int> uniquePtr = std::make_unique<int>(42);
    std::cout << "Heap value (unique_ptr): " << *uniquePtr << std::endl;
    // Automatic cleanup when uniquePtr goes out of scope
    
    // Shared pointer for shared ownership
    std::shared_ptr<int> sharedPtr1 = std::make_shared<int>(42);
    std::shared_ptr<int> sharedPtr2 = sharedPtr1;  // Shared ownership
    std::cout << "Heap value (shared_ptr): " << *sharedPtr1 << std::endl;
    std::cout << "Reference count: " << sharedPtr1.use_count() << std::endl;
    // Automatic cleanup when last shared_ptr is destroyed
}
```

### RAII (Resource Acquisition Is Initialization)

```cpp
#include <iostream>
#include <fstream>
#include <vector>

class FileHandler {
private:
    std::fstream file;
    std::string filename;
    
public:
    FileHandler(const std::string& name) : filename(name) {
        file.open(filename, std::ios::in | std::ios::out | std::ios::app);
        if (!file.is_open()) {
            throw std::runtime_error("Failed to open file: " + filename);
        }
        std::cout << "Opened file: " << filename << std::endl;
    }
    
    ~FileHandler() {
        if (file.is_open()) {
            file.close();
            std::cout << "Closed file: " << filename << std::endl;
        }
    }
    
    // Delete copy constructor and assignment operator
    FileHandler(const FileHandler&) = delete;
    FileHandler& operator=(const FileHandler&) = delete;
    
    // Move constructor and assignment
    FileHandler(FileHandler&& other) noexcept 
        : file(std::move(other.file)), filename(std::move(other.filename)) {}
    
    void writeData(const std::vector<double>& data) {
        for (const auto& value : data) {
            file << value << "\n";
        }
        file.flush();
    }
};

void demonstrateRAII() {
    try {
        FileHandler handler("data.txt");
        std::vector<double> data = {1.1, 2.2, 3.3, 4.4, 5.5};
        handler.writeData(data);
        // File automatically closed when handler goes out of scope
    } catch (const std::exception& e) {
        std::cout << "Error: " << e.what() << std::endl;
    }
}
```

## Best Practices

### Code Organization

```cpp
// sensor.h - Header file
#ifndef SENSOR_H
#define SENSOR_H

#include <string>
#include <vector>

class Sensor {
private:
    std::string id;
    std::vector<double> readings;
    
public:
    explicit Sensor(const std::string& sensorId);
    ~Sensor();
    
    void addReading(double value);
    double getAverage() const;
    size_t getCount() const;
    const std::string& getId() const;
    
    void printReport() const;
};

#endif // SENSOR_H
```

```cpp
// sensor.cpp - Implementation file
#include "sensor.h"
#include <iostream>
#include <numeric>

Sensor::Sensor(const std::string& sensorId) : id(sensorId) {
    readings.reserve(1000);  // Pre-allocate space for efficiency
}

Sensor::~Sensor() = default;

void Sensor::addReading(double value) {
    readings.push_back(value);
}

double Sensor::getAverage() const {
    if (readings.empty()) {
        return 0.0;
    }
    
    return std::accumulate(readings.begin(), readings.end(), 0.0) / readings.size();
}

size_t Sensor::getCount() const {
    return readings.size();
}

const std::string& Sensor::getId() const {
    return id;
}

void Sensor::printReport() const {
    std::cout << "Sensor ID: " << id << std::endl;
    std::cout << "Readings: " << getCount() << std::endl;
    std::cout << "Average: " << getAverage() << std::endl;
}
```

### Error Handling

```cpp
#include <iostream>
#include <stdexcept>
#include <vector>

class DataProcessor {
public:
    static double calculateMean(const std::vector<double>& data) {
        if (data.empty()) {
            throw std::invalid_argument("Cannot calculate mean of empty dataset");
        }
        
        double sum = 0.0;
        for (const auto& value : data) {
            if (std::isnan(value) || std::isinf(value)) {
                throw std::domain_error("Dataset contains invalid values (NaN or Inf)");
            }
            sum += value;
        }
        
        return sum / data.size();
    }
    
    static double safeDivide(double numerator, double denominator) {
        if (denominator == 0.0) {
            throw std::invalid_argument("Division by zero");
        }
        return numerator / denominator;
    }
};

int main() {
    try {
        std::vector<double> data = {1.0, 2.0, 3.0, 4.0, 5.0};
        double mean = DataProcessor::calculateMean(data);
        std::cout << "Mean: " << mean << std::endl;
        
        // This will throw an exception
        std::vector<double> emptyData;
        double emptyMean = DataProcessor::calculateMean(emptyData);
        
    } catch (const std::invalid_argument& e) {
        std::cout << "Invalid argument: " << e.what() << std::endl;
    } catch (const std::domain_error& e) {
        std::cout << "Domain error: " << e.what() << std::endl;
    } catch (const std::exception& e) {
        std::cout << "General error: " << e.what() << std::endl;
    }
    
    return 0;
}
```

## Integration with Data Processing Libraries

### Example: Using OpenCV

```cpp
#include <opencv2/opencv.hpp>
#include <iostream>

class ImageProcessor {
public:
    static cv::Mat loadAndProcess(const std::string& filename) {
        cv::Mat image = cv::imread(filename, cv::IMREAD_COLOR);
        
        if (image.empty()) {
            throw std::runtime_error("Could not load image: " + filename);
        }
        
        cv::Mat processed;
        cv::GaussianBlur(image, processed, cv::Size(15, 15), 0);
        
        return processed;
    }
    
    static void analyzeImage(const cv::Mat& image) {
        std::cout << "Image dimensions: " << image.cols << "x" << image.rows << std::endl;
        std::cout << "Channels: " << image.channels() << std::endl;
        
        cv::Scalar meanColor = cv::mean(image);
        std::cout << "Mean color (BGR): " 
                  << meanColor[0] << ", " 
                  << meanColor[1] << ", " 
                  << meanColor[2] << std::endl;
    }
};
```

## Next Steps

This guide covers the essential C++ concepts you'll need for data processing and visualization tasks. Key areas to explore further:

1. **STL Algorithms:** `std::sort`, `std::find`, `std::transform`
2. **Concurrency:** Threads, mutexes, async operations
3. **Modern C++ Features:** Lambdas, auto keyword, range-based loops
4. **Build Systems:** CMake, package managers like Conan or vcpkg
5. **Testing:** Unit testing with frameworks like Google Test

C++ provides the performance and flexibility needed for serious data processing work, and mastering these fundamentals will serve you well throughout the course!