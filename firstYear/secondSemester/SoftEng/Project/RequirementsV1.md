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
| FR5 | Fetch a list of all users|
| FR6 | Fetch a list of all users by role|
| FR7 | Fetch a user from username|
| FR8 | Delete a specific user by username|
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
|  NFR3   |                                    |             |           |
| NFRx .. |                                    |             |           |

# Use case diagram and use cases

## Use case diagram

\<define here UML Use case diagram UCD summarizing all use cases, and their relationships>

\<next describe here each use case in the UCD>

### Use case 1, UC1 "Log in"

| Actors Involved  |User (Manager and Customer)|
| :--------------: | :------------------------------------------------------------------: |
|   Precondition   | User has an account |
|  Post condition  |  User accesses to his personal area|
| Nominal Scenario |1.1|
|     Variants     |1.2|
|    Exceptions    |1.3 (wrong password), 1.4 (unknown username)|

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
|2|The system logs out the user

##### Scenario 2.2
|  Scenario 2.2  |Manager user logs out|
| :------------: | :------------------------------------------------------------------------: |
|Precondition| Post condition of UC1 |
| Post condition | User exit from its account|
|Step#|Description|
|1|User asks to exit|
|2|The system logs out the user

### Use case 3, UC3 "Get information of the logged user"
| Actors Involved  |User (Manager and Customer)|
| :--------------: | :------------------------------------------------------------------: |
|   Precondition   | Post condition of UC1  |
|  Post condition  | Retrieved information of the user|
| Nominal Scenario |3.1|
|     Variants     |3.2|
|    Exceptions    ||

##### Scenario 3.1
|  Scenario 3.1  |Customer user get his information|
| :------------: | :------------------------------------------------------------------------: |
|Precondition| Post condition of UC1 |
| Post condition | User get the desidered information|
|Step#|Description|
|1|User asks for its informations|
|2|The system search the information of the user. The system gives the information. 

##### Scenario 3.2
|  Scenario 3.2 |Manager user get his information|
| :------------: | :------------------------------------------------------------------------: |
|Precondition| Post condition of UC1 |
| Post condition | User get the desidered information|
|Step#|Description|
|1|User asks for its informations|
|2|The system search the information of the user. The system gives the information. 


### Use case 4, UC4 "Create a new product"
| Actors Involved  |Manager|
| :--------------: | :------------------------------------------------------------------: |
|   Precondition   | Post condition of UC1.2  |
|  Post condition  | A new product is added|
| Nominal Scenario |4.1|
|     Variants     ||
|    Exceptions    |4.2 (the code already exists), 4.3 (arrivalDate inconsistent)|

### Use case x, UCx

..

# Glossary

\<use UML class diagram to define important terms, or concepts in the domain of the application, and their relationships>

\<concepts must be used consistently all over the document, ex in use cases, requirements etc>

![class_diagram_glossary](https://i.imgur.com/dwCzqrb.png)

# System Design

\<describe here system design>

\<must be consistent with Context diagram>

# Deployment Diagram

\<describe here deployment diagram >