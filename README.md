Micro-frontend

Example 1
Learning micro-frontends
Created three modules : cart , product and container
container consist of cart and product module

![Micro-frontend - visual selection](https://github.com/user-attachments/assets/4af4de32-1fca-4989-aeb8-1e646120c8d8)

Product module
all the products are with faker library
productlist appended into a string of productnames

Cart Module
cart had no of items in the productlist usking faker
faker is used as a shared module between cart and product

Container module 
connected to cart and product using module federation plugin of webpack with name , fileName and exposed file and port
