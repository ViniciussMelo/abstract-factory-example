# Abstract Factory

The Abstract Factory is a creational design pattern that provides an interface for creating families of related objects without specifying their concrete classes. It allows you to create objects based on the product interface without directly tying the code to specific implementations.

# Explanation:

The Abstract Factory pattern is useful when you have multiple related object families (product families) and you want to create these objects in a way that's independent of their specific implementations. Instead of directly instantiating the concrete classes, you use an Abstract Factory interface to create objects, which enables you to switch between different families of objects easily.

# Key components of the Abstract Factory pattern:

Abstract Factory: The interface or abstract class that declares the methods for creating different products. It provides factory methods for creating each type of product.
Concrete Factory: The implementation of the Abstract Factory interface. It creates objects of specific product families.
Abstract Product: The interface or abstract class that declares the common methods for the products created by the Abstract Factory.
Concrete Product: The implementation of the Abstract Product interface. It represents the specific product created by a Concrete Factory.

![Abstract factory example](https://github.com/ViniciussMelo/abstract-factory-example/assets/25934151/15b99e31-cd98-43fa-b217-2d14b00db0f3)
