# Requirements Document - current EZElectronics

Date:

Version: V1 - description of EZElectronics in CURRENT form (as received by teachers)

| Version number | Change |
| :------------: | :----: |
|                |        |

# Contents

- [Requirements Document - current EZElectronics](#requirements-document---current-ezelectronics)
- [Contents](#contents)
- [Informal description](#informal-description)
- [Stakeholders](#stakeholders)
- [Context Diagram and interfaces](#context-diagram-and-interfaces)
  - [Context Diagram](#context-diagram)
  - [Interfaces](#interfaces)
- [Stories and personas](#stories-and-personas)
- [Functional and non functional requirements](#functional-and-non-functional-requirements)
  - [Functional Requirements](#functional-requirements)
  - [Non Functional Requirements](#non-functional-requirements)
- [Use case diagram and use cases](#use-case-diagram-and-use-cases)
  - [Use case diagram](#use-case-diagram)
    - [Use case 1, UC1](#use-case-1-uc1)
      - [Scenario 1.1](#scenario-11)
      - [Scenario 1.2](#scenario-12)
      - [Scenario 1.x](#scenario-1x)
    - [Use case 2, UC2](#use-case-2-uc2)
    - [Use case x, UCx](#use-case-x-ucx)
- [Glossary](#glossary)
- [System Design](#system-design)
- [Deployment Diagram](#deployment-diagram)

# Informal description

EZElectronics (read EaSy Electronics) is a software application designed to help managers of electronics stores to manage their products and offer them to customers through a dedicated website. Managers can assess the available products, record new ones, and confirm purchases. Customers can see available products, add them to a cart and see the history of their past purchases.

# Stakeholders

| Stakeholder name | Description |
| :--------------: | :---------: |
|User: Manager |Sell electronics products|
| User: Customer |Puchase electronic products|
|Admin|Manage the software application|


# Context Diagram and interfaces

## Context Diagram

\<Define here Context diagram using UML use case diagram>

\<actors are a subset of stakeholders>

![context_diagram](https://i.imgur.com/ObJzh5Y.png)
## Interfaces

\<describe here each interface in the context diagram>

\<GUIs will be described graphically in a separate document>

|   Actor   | Logical Interface | Physical Interface |
| :-------: | :---------------: | :----------------: |
| Manager, Customer |GUI|PC|
|Admin|GUI|PC|

# Stories and personas

\<A Persona is a realistic impersonation of an actor. Define here a few personas and describe in plain text how a persona interacts with the system>

**Persona 1**: Customer Mario Rossi
Mario Rossi is interested in buying a new smartphone. He prefers to buy it on a website and starts looking for it on EZElectronics. He searches "Iphone 13" on smartphone category and started to analyze all the offers of the different managers. He finds the best offer and adds it to the cart.

**Persona 2**: Manager 
Giuseppe Verdi is a manager of an electronics store. He wants to sell his products on the EZElectronics website. He logs in and adds his products. He also confirm purchase and update product information when it's sold.

\<Persona is-an-instance-of actor>

\<stories will be formalized later as scenarios in use cases>

# Functional and non functional requirements

## Functional Requirements

\<In the form DO SOMETHING, or VERB NOUN, describe high level capabilities of the system>

\<they match to high level use cases>

|ID| Description |
| :---: | :---------: |
||**Manage session**|
| FR1 | Allow users to log in|
| FR2 | Allow users to log out|
| FR3 | Fetch information of the logged user|
||**Manage user**|
| FR4 | Create a new user|
| FR5 | ~~Fetch a list of all users~~|
| FR6 | ~~Fetch a list of all users by role~~|
| FR7 | ~~Fetch a user from username~~|
| FR8 | ~~Delete a specific user by username~~|
|| **Product Management**|
| FR9 | Creating new products|
| FR10 | Registering the arrivals of products that have the same model|
| FR11 | Updating the status of the product sale|
| FR12 | Fetching all products in the database|
| FR13 | Fetch products by their unique code|
| FR14 | Fetch products in a specific category|
| FR15 | Fetch products with a specific model|
| FR16 | Delete a product by its unique code|
||**Manage cart**|
| FR17 | Fetch the current cart of the logged user|
| FR18 | Add a product to the current cart of the logged user|
| FR19 | Pays for the current cart of the logged user|
| FR20 | Fetch the history of the paid carts of the logged user|
| FR21 | Delete the current cart of the logged user|


## Non Functional Requirements

\<Describe constraints on functional requirements>

|ID| Type (efficiency, reliability, ..) | Description | Refers to |
| :-----: | :--------------------------------: | :---------: | :-------: |
|  NFR1   |Portability|Available for different types of browsers(Chrome, Safari, etc.) ||
|  NFR2   |Security|The data of the user are protected and no one can access to his carts|FR1 - FR3; FR17 - FR21|
|  NFR3   |Efficiency|Each function must be less then 0.05 sec|           |


# Use case diagram and use cases

## Use case diagram

\<define here UML Use case diagram UCD summarizing all use cases, and their relationships>

\<next describe here each use case in the UCD>

### Use case 1, UC1 "Log in"

| Actors Involved  |User (Manager and Customer)|
| :--------------: | :------------------------------------------------------------------: |
|   Precondition   | User has an account |
|  Post condition  ||
| Nominal Scenario |1.1|
|     Variants     |1.2|
|    Exceptions    |1.3 (wrong password), 1.4 (unknown username)|

NOTE: Exceptions are not mentioned in APIs. So I could ignore them and add to the version 2.

##### Scenario 1.1

\<describe here scenarios instances of UC1>

\<a scenario is a sequence of steps that corresponds to a particular execution of one use case>

\<a scenario is a more formal description of a story>

\<only relevant scenarios should be described>

|  Scenario 1.1  |Customer user logs in|
| :------------: | :------------------------------------------------------------------------: |
|Precondition| Customer has an account with username and password |
| Post condition | Customer accesses to his personal area|
|Step#|Description|
|1|User enters account username and password|
|2|The system looks for account name and password. Match ok|
|3|User logs in as customer|

##### Scenario 1.2
|  Scenario 1.2  |Manager user logs in|
| :------------: | :------------------------------------------------------------------------: |
|Precondition| Manager has an account with username and password |
| Post condition | Manager accesses to his personal area|
|Step#|Description|
|1|User enters account username and password|
|2|The system looks for account name and password. Match ok|
|3|User logs in as customer|

##### Scenario 1.3
|  Scenario 1.3  |User logs in but the password is wrong|
| :------------: | :------------------------------------------------------------------------: |
|Precondition| User has an account with username and password |
| Post condition | User is not able to access to his personal area|
|Step#|Description|
|1|User enters account username and password|
|2|The system looks for account name and password. The password doesn't match|
|3|The system ask for the password again|
|4|The user enters password again|
|5|The answer of the system is no match|

##### Scenario 1.4
|  Scenario 1.4  |User logs in but the username is unknown|
| :------------: | :------------------------------------------------------------------------: |
|Precondition| User has an account with username and password |
| Post condition | User is not able to access to his personal area|
|Step#|Description|
|1|User enters account username and password|
|2|The system looks for account name and password. The username is not found|
|3|The system ask for username and password again|
|4|The user enters credentials again|
|5|The answer of the system is no match|

### Use case 2, UC2 "Log out"
| Actors Involved  |User (Manager and Customer)|
| :--------------: | :------------------------------------------------------------------: |
|   Precondition   | Post condition of UC1  |
|  Post condition  |  User logs out from the software|
| Nominal Scenario |2.1|
|     Variants     |2.2|
|    Exceptions    ||

##### Scenario 2.1
|  Scenario 2.1  |Customer user logs out|
| :------------: | :------------------------------------------------------------------------: |
|Precondition| Post condition of UC1 |
| Post condition | User exit from its account|
|Step#|Description|
|1|User asks to exit|
|2|The system logs out the user|

##### Scenario 2.2
|  Scenario 2.2  |Manager user logs out|
| :------------: | :------------------------------------------------------------------------: |
|Precondition| Post condition of UC1 |
| Post condition | User exit from its account|
|Step#|Description|
|1|User asks to exit|
|2|The system logs out the user|

### Use case 3, UC3 "User get his information"
| Actors Involved  |User (Manager and Customer)|
| :--------------: | :------------------------------------------------------------------: |
|   Precondition   | Post condition of UC1  |
|  Post condition  | User retrieved desidered information|
| Nominal Scenario |3.1|
|     Variants     |3.2|
|    Exceptions    ||

##### Scenario 3.1
|  Scenario 3.1  |Customer user gets his information|
| :------------: | :------------------------------------------------------------------------: |
|Precondition| Post condition of UC1.1 |
| Post condition | User get the desidered information|
|Step#|Description|
|1|User asks for his informations|
|2|The system search the information of the user. The system gives the requested information. 

##### Scenario 3.2
|  Scenario 3.2 |Manager user gets his information|
| :------------: | :------------------------------------------------------------------------: |
|Precondition| Post condition of UC1.2 |
| Post condition | User get the desidered information|
|Step#|Description|
|1|User asks for his informations|
|2|The system search the information of the user. The system gives the requested information. 

### Use case 4, UC4 "Creation of a new account"
| Actors Involved  |User|
| :--------------: | :------------------------------------------------------------------: |
|   Precondition   |The user account doesn't already exist|
|  Post condition  ||
| Nominal Scenario |4.1|
|     Variants     ||
|    Exceptions    |4.2|

##### Scenario 4.1
|  Scenario 4.1  |Create a new account|
| :------------: | :------------------------------------------------------------------------: |
|Precondition| The user account doesn't already exist |
| Post condition | User has an account now|
|Step#|Description|
|1|User gives his information requested for creating an account|
|2|The system checks for the information and create new user's account|

##### Scenario 4.2
|  Scenario 4.2  |Create a new account but username already exists|
| :------------: | :------------------------------------------------------------------------: |
|Precondition|The user account doesn't already exist |
| Post condition | User account is not created|
|Step#|Description|
|1|User gives his information requested for creating an account|
|2|The system checks for the information. It finds an account with the same username|
|3|The system gives error and can't create a new account|

==5 and 6 TO REMOVE==
### Use case 5, UC5 "Fetch users"
| Actors Involved  | Admin|
| :--------------: |:------------------------------------------------------------------: |
|   Precondition   ||
|  Post condition  |List of users is retrieved|
| Nominal Scenario |5.1. 5.3|
|     Variants     |5.2||
|    Exceptions    |5.4|

##### Scenario 5.1
|  Scenario 5.1  |Fetch a list of all users|
| :------------: | :------------------------------------------------------------------------: |
|Precondition| |
| Post condition |List of all users retrieved |
|Step#|Description|
|1|Admin asks for the list of all users|
|2|The system searchs all the users and returns the list.|

##### Scenario 5.2
|  Scenario 5.2  |Fetch a list of all users by role|
| :------------: | :------------------------------------------------------------------------: |
|Precondition| |
| Post condition |List of all users with a certain role retrieved |
|Step#|Description|
|1|Admin asks for the list of all users of  certain role|
|2|The system searchs the users requested and returns the list.|

##### Scenario 5.3
|  Scenario 5.3  |Fetch a user by its username|
| :------------: | :------------------------------------------------------------------------: |
|Precondition| |
| Post condition |User with the given username retrieved|
|Step#|Description|
|1|Admin asks for an user with the specified username|
|2|The system searchs the user requested and returns its account.|

##### Scenario 5.4
|  Scenario 5.3  |Fetch a user by its username but the username is not found|
| :------------: | :------------------------------------------------------------------------: |
|Precondition| |
| Post condition |No information are provided|
|Step#|Description|
|1|Admin asks for an user with the specified username|
|2|The system searchs the user requested. It is not found. The system returns error. |

### Use case 6, UC6 "Delete an user by its username"
| Actors Involved  | Admin|
| :--------------: |:------------------------------------------------------------------: |
|   Precondition   |The user account with specified username exists|
|  Post condition  |The user account doesn't exists anymore|
| Nominal Scenario |6.1|
|     Variants     ||
|    Exceptions    |6.2|

##### Scenario 6.1
|  Scenario 6.1  |Delete an user by its username|
| :------------: | :------------------------------------------------------------------------: |
|   Precondition   |The user account with specified username exists|
|  Post condition  |The user account doesn't exist anymore|
|Step#|Description|
|1|Admin requests to delete the account of the user with the specified username|
|2|The system searchs the user requested and delete it.|

##### Scenario 6.2
|  Scenario 6.2  |Delete an user by its username but it is not found|
| :------------: | :------------------------------------------------------------------------: |
|   Precondition   |The user account with specified username exists|
|  Post condition  |Username not found, no operation|
|Step#|Description|
|1|Admin requests to delete the account of the user with the specified username|
|2|The system searchs the user requested. It is not found so the account can't be deleted|

### Use case 7, UC7 "Register a new product"
| Actors Involved  | Manager|
| :--------------: |:------------------------------------------------------------------: |
|   Precondition   |Post condition of UC1.2|
|  Post condition  |The product of the manager is registered|
| Nominal Scenario |7.1|
|     Variants     |7.4|
|    Exceptions    |7.2, 7.3|

##### Scenario 7.1
|  Scenario 7.1  |Register a new product|
| :------------: | :------------------------------------------------------------------------: |
|   Precondition   |Post condition of UC1.2|
|  Post condition  |The product of the manager is registered|
|Step#|Description|
|1|Manager inserts all the requested information (code, model, category, selling price, arrivalDate, ..) for adding a new product|
|2|The system check and store the information. Product added|

##### Scenario 7.2
|  Scenario 7.2  |Register a new product but code already exists|
| :------------: | :------------------------------------------------------------------------: |
|   Precondition   |Post condition of UC1.2|
|  Post condition  |The product is not registered|
|Step#|Description|
|1|Manager inserts all the requested information (code, model, category, selling price, arrivalDate, ..) for adding a new product
|2|The system check the information. It gives an error because the code already exists.|

##### Scenario 7.3
|  Scenario 7.3  |Register a new product but arrival date given is after current date|
| :------------: | :------------------------------------------------------------------------: |
|   Precondition   |Post condition of UC1.2|
|  Post condition  |The product is not registered|
|Step#|Description|
|1|Manager inserts all the requested information (code, model, category, selling price, arrivalDate, ..) for adding a new product
|2|The system check the information. It gives an error because the arrival date is after current date|

##### Scenario 7.4
|  Scenario 7.4  |Register a set of products of the same model|
| :------------: | :------------------------------------------------------------------------: |
|   Precondition   |Post condition of UC1.2|
|  Post condition  |The set of product is registered|
|Step#|Description|
|1|Manager enters the requested information (model, category, selling price, arrivalDate, ..) for adding a set of product of the same model
|2|The system check and store the information. Products added|

### Use case 8, UC8 "Mark a product as sold"
| Actors Involved  | Manager|
| :--------------: |:------------------------------------------------------------------: |
|   Precondition   |Post condition of UC1.2|
|  Post condition  |The product is registered as sold|
| Nominal Scenario |8.1|
|     Variants     ||
|    Exceptions    |8.2, 8.3, 8.4, 8.5|

##### Scenario 8.1
|  Scenario 8.1 |Change the product status to sold product|
| :------------: | :------------------------------------------------------------------------: |
|   Precondition   |Post condition of UC1.2|
|  Post condition  |The product is registered as sold|
|Step#|Description|
|1| Manager enters the code of the product which is sold and the sellingDate|
|2| The system checks the code and the selling date. The product is marked as sold|

##### Scenario 8.2
|  Scenario 8.2 |Change the product status to sold product but the code is not found|
| :------------: | :------------------------------------------------------------------------: |
|   Precondition   |Post condition of UC1.2|
|  Post condition  |The product is not registered as sold|
|Step#|Description|
|1| Manager enters the code of the product which is sold and the sellingDate|
|2| The system checks the code. The code doesn't exist. The system returns error. |

##### Scenario 8.3
|  Scenario 8.3 |Change the product status to sold product but the selling date is after current date|
| :------------: | :------------------------------------------------------------------------: |
|   Precondition   |Post condition of UC1.2|
|  Post condition  |The product is not registered as sold|
|Step#|Description|
|1| Manager enters the code of the product which is sold and the sellingDate|
|2| The system checks the code and the selling date. The selling date is after the current date. The system returns error. |

##### Scenario 8.4
|  Scenario 8.4 |Change the product status to sold product but the selling date is before product's arrival date|
| :------------: | :------------------------------------------------------------------------: |
|   Precondition   |Post condition of UC1.2|
|  Post condition  |The product is not registered as sold|
|Step#|Description|
|1| Manager enters the code of the product which is sold and the sellingDate|
|2| The system checks the code and the selling date. The selling date is after the arrival date of the product. The system returns error. |

##### Scenario 8.5
|  Scenario 8.4 |Change the product status to sold product but the product has already been sold|
| :------------: | :------------------------------------------------------------------------: |
|   Precondition   |Post condition of UC1.2|
|  Post condition  |Product already registered as sold|
|Step#|Description|
|1| Manager enters the code of the product which is sold and the sellingDate|
|2| The system checks the code and the selling date. The product has already been sold so the system returns error. |


### Use case 9, UC9 "Fetch products"
| Actors Involved  | Manager|
| :--------------: |:------------------------------------------------------------------: |
|   Precondition   |Post condition of UC1.2|
|  Post condition  |List of products requested returned|
| Nominal Scenario |9.1|
|     Variants     |9.2, 9.3, 9.4|
|    Exceptions    |9.5|

##### Scenario 9.1
|  Scenario 9.1 |Fetch all products, eventually filtered in sold or not sold|
| :------------: | :------------------------------------------------------------------------: |
|   Precondition   |Post condition of UC1.2|
|  Post condition  |List of requested products returned|
|Step#|Description|8.2, 8.3, 8.4, 8.5
|1| Manager asks for the list of all products, eventually asking for sold or not|
|2| The system searchs all the products, filter in sold or not if specified, and returns the list.|

##### Scenario 9.2
|  Scenario 9.2 |Fetch products of a specific category|
| :------------: | :------------------------------------------------------------------------: |
|   Precondition   |Post condition of UC1.2|
|  Post condition  |List of requested products returned|
|Step#|Description|
|1| Manager asks for the list of all products of a specific category, eventually asking for sold or not|
|2| The system searchs all the products of the specified category, filter in sold or not if specified, and returns the list.|

##### Scenario 9.3
|  Scenario 9.3 |Fetch products of a specific model|
| :------------: | :------------------------------------------------------------------------: |
|   Precondition   |Post condition of UC1.2|
|  Post condition  |List of requested products returned|
|Step#|Description|
|1| Manager asks for the list of all products of a specific model, eventually asking for sold or not|
|2| The system searchs all the products of the specified model, filter in sold or not if specified, and returns the list.|

##### Scenario 9.4
|  Scenario 9.4 |Fetch products by their unique codes|
| :------------: | :------------------------------------------------------------------------: |
|   Precondition   |Post condition of UC1.2|
|  Post condition  |List of requested products returned|
|Step#|Description|
|1| Manager asks for the list of products by their code|
|2| The system searchs all the products bu their code. They are all found|
|3|The system returns the list of products|

##### Scenario 9.5
|  Scenario 9.5 |Fetch products by their unique codes but the code is not found|
| :------------: | :------------------------------------------------------------------------: |
|   Precondition   |Post condition of UC1.2|
|  Post condition  |Returns the list of products by their code found|
|Step#|Description|
|1| Manager asks for the list of products by their code|
|2| The system searchs all the products bu their code. Some (or all) of them are not found so the system gives the warning.|
|3|The system returns the list of product found|

### Use case 10, UC10 "Delete product by its code"
| Actors Involved  | Manager|
| :--------------: |:------------------------------------------------------------------: |
|   Precondition   |Post condition of UC1.2|
|  Post condition  |The product is deleted|
| Nominal Scenario |10.1|
|     Variants     ||
|    Exceptions    |10.2|

##### Scenario 10.1
|  Scenario 10.1 |Delete a product by its code|
| :------------: | :------------------------------------------------------------------------: |
|   Precondition   |Post condition of UC1.2|
|  Post condition  |The product is deleted|
|Step#|Description|
|1| Manager asks to delete a product by its code|
|2| The system searchs the product by its code and delete it.|

##### Scenario 10.2
|  Scenario 10.2 |Delete a product by its code but the code is not found|
| :------------: | :------------------------------------------------------------------------: |
|   Precondition   |Post condition of UC1.2|
|  Post condition  |The product is not deleted|
|Step#|Description|
|1| Manager asks to delete a product by its code|
|2| The system searchs the product by its code. The code is not found so the system returns error.|


# Glossary

\<use UML class diagram to define important terms, or concepts in the domain of the application, and their relationships>

\<concepts must be used consistently all over the document, ex in use cases, requirements etc>

![class_diagram_glossary](https://i.imgur.com/dwCzqrb.png)

# System Design

\<describe here system design>

\<must be consistent with Context diagram>

# Deployment Diagram

\<describe here deployment diagram >