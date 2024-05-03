# Project Estimation - CURRENT
Date: 3/5/2024

Version: 1


# Estimation approach
Consider the EZElectronics  project in CURRENT version (as given by the teachers), assume that you are going to develop the project INDEPENDENT of the deadlines of the course, and from scratch
# Estimate by size
###
|                                                                                                         | Estimate        |
| ------------------------------------------------------------------------------------------------------- | --------------- |
| NC =  Estimated number of classes to be developed                                                       | 20              |
| A = Estimated average size per class, in LOC                                                            | 160LOC          |
| S = Estimated size of project, in LOC (= NC * A)                                                        | 3200            |
| E = Estimated effort, in person hours (here use productivity 10 LOC per person hour)                    | 320             |
| C = Estimated cost, in euro (here use 1 person hour cost = 30 euro)                                     | 9600            |
| Estimated calendar time, in calendar weeks (Assume team of 4 people, 8 hours per day, 5 days per week ) | 2 working weeks |
# Estimate by product decomposition
###
| component name       | Estimated effort (person hours) |
| -------------------- | ------------------------------- |
| requirement document | 32                              |
| GUI prototype        | 15                              |
| design document      | 20                              |
| code                 | 240                             |
| unit tests           | 80                              |
| api tests            | 60                              |
| management documents | 20                              |


# Estimate by activity decomposition
###
| Activity name                        | Estimated effort (person hours) |
| ------------------------------------ | ------------------------------- |
| **Requirements**                     | 35                              |
| Identify functional requirements     | 20                              |
| Identify non functional requirements | 5                               |
| Defining model                       | 10                              |
| **Design**                           | 60                              |
| High-level design                    | 30                              |
| Low-level design                     | 30                              |
| **Prototyping**                      | 70                              |
| GUI Prototyping                      | 20                              |
| UX Design                            | 50                              |
| **Documentation**                    | 30                              |
| Api documentation                    | 12                              |
| Code documetnation                   | 10                              |
| Project documetnation                | 8                               |
| **Coding**                           | 300                             |
| Models development                   | 70                              |
| Controllers development              | 70                              |
| Views development                    | 70                              |
| Api development                      | 50                              |
| Code reviews                         | 40                              |
| **Tests**                            | 140                             |
| Api tests                            | 60                              |
| Unit tests                           | 80                              |

###
![gantt](https://i.imgur.com/3vAfIpL.jpeg)

# Summary

Report here the results of the three estimation approaches. The  estimates may differ. Discuss here the possible reasons for the difference

|                                    | Estimated effort | Estimated duration | Comments                                                                                                                       |
| ---------------------------------- | ---------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| estimate by size                   | 320              | 2 weeks            | This is the lowest estimate because it considers only code implementation regardless other project aspects                     |
| estimate by product decomposition  | 467              | 3 weeks            | These estimations are based on the previous experiences and this doesn't take into account the specific aspects of the project |
| estimate by activity decomposition | 635              | 4 weeks            | These estimations should be the most accurate because it takes in consideration all the detailed activities of the project     |






