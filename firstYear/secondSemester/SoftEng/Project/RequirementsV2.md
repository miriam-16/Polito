# Requirements Document - future EZElectronics

Date:

Version: V1 - description of EZElectronics in FUTURE form (as proposed by the team)

| Version number | Change |
| :------------: | :----: |
|                |        |

# Contents

- [Requirements Document - future EZElectronics](#requirements-document---future-ezelectronics)
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
|Manager| User who sells his electronical products.|
|Premium Manager|Manager who pays a fee and has advantages, as seeing the statistics of his product and who search for them and can keep promoted a certain product.|
|Customer|User who buys the product on EZElectronics.|
|Prmeium Customer|Customer who pays a fee to receive sooner the product and receives discounts on the delivery.|
|Administration| Tech admin and business admin who manage the website.|
|Competitors|Other websites as Amazon, Media World, eBay.|
|Payment service| Provide efficient and secure payment system.|
|Delivery service| Manage delivery of the sold product, from the manager to the customer. |

# Context Diagram and interfaces


## Context Diagram
![context_diagram_v2](https://i.imgur.com/eZ4ewBm.jpeg)

<Define here Context diagram using UML use case diagram>

<actors are a subset of stakeholders>

## Interfaces

<describe here each interface in the context diagram>

<GUIs will be described graphically in a separate document>

|   Actor   | Logical Interface | Physical Interface |
| :-------: | :---------------: | :----------------: |
| User |GUI|PC|
| Admin |GUI|PC|
| Payment service |Credit card system (https://developer.visa.com/docs)|Internet|
| Delivery service |UPS (https://www.ups.com/upsdeveloperkit/backToPrevious?loc=en_IT)|Internet|

# Stories and personas

<A Persona is a realistic impersonation of an actor. Define here a few personas and describe in plain text how a persona interacts with the system>

<Persona is-an-instance-of actor>

<stories will be formalized later as scenarios in use cases>


# Functional and non functional requirements

## Functional Requirements

<In the form DO SOMETHING, or VERB NOUN, describe high level capabilities of the system>

<they match to high level use cases>

|  ID   | Description |
| :---: | :---------: |
||**Manage session**|
| FR1 | Allow users to log in|
| FR2 | Allow users to log out|
||**Manage user**|
| FR3 | Fetch information of the logged user|
| FR4 | Create a new user|
| FR5 |Payment for premium service|
| FR6 |Update the information of the user|
|| **Product Management**|
| FR7 | Creating new products|
| FR8 | Registering the arrivals of products that have the same model|
| FR9 | Updating the status of the product sale|
| FR10 | Fetching all products in the database|
| FR11| Fetch products by their unique code|
| FR12 | Fetch products in a specific category|
| FR13 | Fetch products with a specific model|
| FR14 | Delete a product by its unique code|
| FR15 | Analyse the statistics of a product|
| FR16 |Promote a product for a certain period of time|
| FR17 |Add a review of the product|
||**Manage cart**|
| FR18 | Fetch the current cart of the logged user|
| FR19 | Add a product to the current cart of the logged user|
| FR20 | Pays for the current cart of the logged user|
| FR21 | Fetch the history of the paid carts of the logged user|
| FR22 | Delete the current cart of the logged user|
| FR23 |Asking for a premium delivery|
||**Manage delivery**|
| FR24 |Tracking delivery with delivery service|
| FR25 |The user register the product as received| 


## Non Functional Requirements

\<Describe constraints on functional requirements>

|   ID    | Type (efficiency, reliability, ..) | Description | Refers to |
| :-----: | :--------------------------------: | :---------: | :-------: |
|  NFR1   |                                    |             |           |
|  NFR2   |                                    |             |           |
|  NFR3   |                                    |             |           |
| NFRx .. |                                    |             |           |

# Use case diagram and use cases

## Use case diagram

<define here UML Use case diagram UCD summarizing all use cases, and their relationships>

<next describe here each use case in the UCD>

### Use case 1, UC1 "Log in"

| Actors Involved  |User (Manager, Customer, Premium Manager, Premium Customer)|
| :--------------: | :------------------------------------------------------------------: |
|   Precondition   | User has an account |
|  Post condition  ||
| Nominal Scenario |1.1|
|     Variants     |1.2, 1.3, 1.4|
|    Exceptions    |1.5 (wrong password),1.6(unknown username)|

##### Scenario 1.1

<describe here scenarios instances of UC1>

<a scenario is a sequence of steps that corresponds to a particular execution of one use case>

<a scenario is a more formal description of a story>

<only relevant scenarios should be described>
|  Scenario 1.1  |Customer user logs in|
| :------------: | :------------------------------------------------------------------------: |
|Precondition| Customer has an account with username and password |
| Post condition | Customer accesses to his personal area|
|Step#|Description|
|1|User enters account username and password|
|2|The system looks for account username and password. Match ok|
|3|User logs in as customer|

##### Scenario 1.2
|  Scenario 1.2  |Manager user logs in|
| :------------: | :------------------------------------------------------------------------: |
|Precondition| Manager has an account with username and password |
| Post condition | Manager accesses to his personal area|
|Step#|Description|
|1|User enters account username and password|
|2|The system looks for account username and password. Match ok|
|3|User logs in as customer|

##### Scenario 1.3
|  Scenario 1.3  |Premium Customer user logs in|
| :------------: | :------------------------------------------------------------------------: |
|Precondition| Premium Customer has an account with username and password |
| Post condition | Premium Customer accesses to his personal area|
|Step#|Description|
|1|User enters account username and password|
|2|The system looks for account username and password. Match ok|
|3|User logs in as premium customer|

##### Scenario 1.4
|  Scenario 1.4  |Premium Manager user logs in|
| :------------: | :------------------------------------------------------------------------: |
|Precondition| Premium Manager has an account with username and password |
| Post condition | Premium Manager accesses to his personal area|
|Step#|Description|
|1|User enters account username and password|
|2|The system looks for account username and password. Match ok|
|3|User logs in as premium manager|

##### Scenario 1.5
|  Scenario 1.5  |User logs in but the password is wrong|
| :------------: | :------------------------------------------------------------------------: |
|Precondition| User has an account with username and password |
| Post condition | User is not able to access to his personal area|
|Step#|Description|
|1|User enters account username and password|
|2|The system looks for account name and password. The password doesn't match|
|3|The system ask for the password again|
|4|The user enters password again|
|5|The answer of the system is no match|

##### Scenario 1.6
|  Scenario 1.6  |User logs in but the username is unknown|
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
| Actors Involved  |User (Manager, Customer, Premium Manager, Premium Customer)|
| :--------------: | :------------------------------------------------------------------: |
|   Precondition   | User is logged in  |
|  Post condition  |  User logs out from the software|
| Nominal Scenario |2.1|
|     Variants     |2.2, 2.3, 2.4|
|    Exceptions    ||

##### Scenario 2.1
|  Scenario 2.1  |Customer user logs out|
| :------------: | :------------------------------------------------------------------------: |
|Precondition| Post condition of UC1.1 |
| Post condition | User exit from its account|
|Step#|Description|
|1|User asks to exit|
|2|The system logs out the user|

##### Scenario 2.2
|  Scenario 2.2  |Manager user logs out|
| :------------: | :------------------------------------------------------------------------: |
|Precondition| Post condition of UC1.2 |
| Post condition | User exit from its account|
|Step#|Description|
|1|User asks to exit|
|2|The system logs out the user|

##### Scenario 2.3
|  Scenario 2.3  |Premium customer user logs out|
| :------------: | :------------------------------------------------------------------------: |
|Precondition| Post condition of UC1.3 |
| Post condition | User exit from its account|
|Step#|Description|
|1|User asks to exit|
|2|The system logs out the user|

##### Scenario 2.4
|  Scenario 2.4  |Premium manager user logs out|
| :------------: | :------------------------------------------------------------------------: |
|Precondition| Post condition of UC1.4 |
| Post condition | User exit from its account|
|Step#|Description|
|1|User asks to exit|
|2|The system logs out the user|

### Use case 3, UC3 "User get his information"

| Actors Involved  |User (Manager, Customer, Premium Manager, Premium Customer)|
| :--------------: | :----------------------------------------: |
|   Precondition   | User is logged in|
|  Post condition  |User retrieved desidered information|
| Nominal Scenario | 3.1 |
|     Variants     |3.2, 3.3, 3.4 |
|    Exceptions    | |

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

##### Scenario 3.3
|  Scenario 3.3  |Premium customer user gets his information|
| :------------: | :------------------------------------------------------------------------: |
|Precondition| Post condition of UC1.3 |
| Post condition | User get the desidered information|
|Step#|Description|
|1|User asks for his informations|
|2|The system search the information of the user. The system gives the requested information. 

##### Scenario 3.4
|  Scenario 3.4 |Premium manager user gets his information|
| :------------: | :------------------------------------------------------------------------: |
|Precondition| Post condition of UC1.4 |
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
|     Variants     |4.2|
|    Exceptions    |4.2|



### Use case x, UCx

..

# Glossary

\<use UML class diagram to define important terms, or concepts in the domain of the application, and their relationships>

\<concepts must be used consistently all over the document, ex in use cases, requirements etc>

# System Design

\<describe here system design>

\<must be consistent with Context diagram>

# Deployment Diagram

\<describe here deployment diagram >
