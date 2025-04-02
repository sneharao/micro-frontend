Micro-frontend

Must Haves in Micro frontend archietechture
Requirement 1: All apps should be independent of each other, independant of which language is used 
Requirement 2: No context sharing or state sharing , shared modules is fine
Requirement 3: No sharing of classes , changes in one app shouldn't affect changes in other
Requirement 4: Independant of mono repo or saveral repos for checkout or deployment purpose
Requirement 5: Container can choose which version of the sub app can be used 

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

Note:The div id used shouldn't have the same name as the module name exported in webpack config
