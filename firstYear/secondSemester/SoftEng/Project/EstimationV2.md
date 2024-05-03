# Project Estimation - CURRENT
Date: 3/5/2024

Version: 1


# Estimation approach
Consider the EZElectronics  project in FUTURE version (as proposed by your team in requirements V2), assume that you are going to develop the project INDEPENDENT of the deadlines of the course, and from scratch (not from V1)
# Estimate by size
###
|                                                                                                         | Estimate          |
| ------------------------------------------------------------------------------------------------------- | ----------------- |
| NC =  Estimated number of classes to be developed                                                       | 30                |
| A = Estimated average size per class, in LOC                                                            | 180LOC            |
| S = Estimated size of project, in LOC (= NC * A)                                                        | 5400              |
| E = Estimated effort, in person hours (here use productivity 10 LOC per person hour)                    | 540               |
| C = Estimated cost, in euro (here use 1 person hour cost = 30 euro)                                     | 16200             |
| Estimated calendar time, in calendar weeks (Assume team of 4 people, 8 hours per day, 5 days per week ) | 3.5 working weeks |

# Estimate by product decomposition
###
| component name       | Estimated effort (person hours) |
| -------------------- | ------------------------------- |
| requirement document | 48                              |
| GUI prototype        | 22                              |
| design document      | 30                              |
| code                 | 360                             |
| unit tests           | 120                             |
| api tests            | 90                              |
| management documents | 40                              |


# Estimate by activity decomposition
###
| Activity name                        | Estimated effort (person hours) |
| ------------------------------------ | ------------------------------- |
| **Requirements**                     | 52                              |
| Identify functional requirements     | 30                              |
| Identify non functional requirements | 7                               |
| Defining model                       | 15                              |
| **Design**                           | 90                              |
| High-level design                    | 45                              |
| Low-level design                     | 45                              |
| **Prototyping**                      | 105                             |
| GUI Prototyping                      | 30                              |
| UX Design                            | 75                              |
| **Documentation**                    | 45                              |
| Api documentation                    | 18                              |
| Code documetnation                   | 15                              |
| Project documetnation                | 12                              |
| **Coding**                           | 450                             |
| Models development                   | 105                             |
| Controllers development              | 105                             |
| Views development                    | 105                             |
| Api development                      | 75                              |
| Code reviews                         | 60                              |
| **Tests**                            | 210                             |
| Api tests                            | 90                              |
| Unit tests                           | 120                             |

###
![gantt](https://i.imgur.com/7NyRVOw.jpeg)

# Summary

Report here the results of the three estimation approaches. The  estimates may differ. Discuss here the possible reasons for the difference

|                                    | Estimated effort | Estimated duration | Comments                                                                                                                       |
| ---------------------------------- | ---------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| estimate by size                   | 540              | 3.5 weeks          | This is the lowest estimate because it considers only code implementation regardless other project aspects                     |
| estimate by product decomposition  | 710              | 4.5 weeks          | These estimations are based on the previous experiences and this doesn't take into account the specific aspects of the project |
| estimate by activity decomposition | 952              | 6 weeks            | These estimations should be the most accurate because it takes in consideration all the detailed activities of the project     |






