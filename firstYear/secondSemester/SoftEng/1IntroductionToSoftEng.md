# General concepts of Software Engineering

## Definition of Software Engineering
**Multi person** construction of **multi version**:
- multi person $\implies$ a _team_ is in charge of making software, not a single person;
- multi version $\implies$ software is realized with the intention of existing in a long time, so versioning is necessary. It includes concepts as custom-made (software is an investment for many year), versioning (recover, rebuild previous versions).

A software is a collection of computer programs, procedures, rules, associated documentation (because not all people involved in the project know all the details, so it resumes them) and data. 
Example of documentation are requirements documents, project plan, test plan, test case, build/deployment scripts, user manuals. 

## Software types 
Closely related to criticality of the software.
- Embedded in non software product, such as cars, washing machines;
- Stand alone as office suite, social network;
- Embedded enterprise, with the idea of helping businesses to collect data (information systems).

## Software criticality
Problems related to software can be innocents or very damaging. 
They can be classified by means of damaged part:
- safety critical, they can harms people or environment (usually caused by embedded systems);
- mission critical harms businesses.

## Software beware
Software is not free, it is often subject to change and is really complex (so not perfect).

## Process and product
We can compare classical engineering to software engineering.
Each phase of this process has been adapted to realization of a software. In fact, the design of the product and of the factory have been changed to software product (code) and software process (which people work at the software and of what they are in charge of). The manufacture of the product has been adapted into the deployment and delivery (distribution of the code as a useful version) while the maintenance of the product aims to version the code and update it with patches (usually in automatic).

### Software product
Is the result of the team's work which includes not only a input-output system, but also constraints to perform different requested features. 
It is composed of:
- **functional properties**, described as sentences as "show the students of the course" and use cases;
- **non functional properties**, that are modalities of implementif functions (they mainly involve user interface tasks). They are difficult to realize, often forgotten but make the difference for competing products. 

#### Non functional properties
- *Usability*, study what is needed to perform "show the stundents of the course". The effort needed to learn using the product is the measure of usability (satisfaction of the user, existence of needed functions);
- *Efficiency*, in terms of speed and response time. It is related to memory (space efficiency), CPU (complexity), bandwith and energy used;
- *Reliability/ Availability*, it aims to return a correct output every time is requested. It is measured in terms of time (counting how many times happens that it returns a wrong or empty output);
- *Maintainability*, measured as how much effort is needed to add, modify or cancel a function, to fix something or to deploy a different platform (database, operating system);
- *Security*, protection from malicious access, grant access only to authorized users and aspects related to share the data;
- *Satefy* (especially for embedded systems) is the absence of criticality factors;
- *Dependability* is the sum of safety, security and reliability properties.

### Software process
Is divided into high level phases:
- **Development**, involvers requirements and design study, implementation. Its output is the first version, something usable;
- **Operation**, as the function used by users;
- **Maintenance**.

#### Development phase
It is divided into:
- Requirements, write what the customer want as a result;
- Desing, how to obtain the requested features;
- Coding, realize the product;
- Testing, verify if the product is eligible to the request.

