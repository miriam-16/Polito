# Robot Vacuum Cleaner 
#### Text
Since several years, robot vacuum cleaners (RVC) are available. An RVC is capable of cleaning the floors of a house in autonomous mode.

An RVC system is composed of the robot itself and a charging station. The charging station is connected to an electric socket in the house, and allows charging the battery on board of the robot.

The robot itself is composed of mechanical and electric parts, a computer, and sensors: 
- One infrared sensor in the frontal part recognizes obstacles, 
- another infrared sensor always on the frontal part recognizes gaps (like a downhill staircase); 
- A sensor on the battery reads the charge of the battery. 
- The computer collects data from the sensors and controls the movement of four wheels. 
- Another sensor on one of the wheels computes direction and distance traveled by the robot.

Finally, on top of the robot there are three switches: on-off, start, learn.
- The learn button starts a procedure that allows the robot to map the space in the house. With a certain algorithm the robot moves in all directions, until it finds obstacles or gaps, and builds an internal map of this space. By definition, the robot cannot move beyond obstacles, like walls or closed doors, and beyond gaps taller than 1cm.The starting point of the learn procedure must be the charging station. When the map is built the robot returns to the charging station and stops.
- The start button starts a cleaning procedure. The robot, starting from the charging station, covers and cleans all the space in the house, as mapped in the ‘learn’ procedure.

In all cases when the charge of the battery is below a certain threshold, the robot returns to the charging station. When recharged, the robot completes the mission, then returns to the charging station and stops.

## Business model
Entry level product.
## Stakeholders
- User
- Material Suppliers
    - Software developers
- Owners of company
- Retailers (gross markets or web sites)
- Competitors 
- Regulatory Agencies / Compliance
- Mainteners (warrenty)


## System Context Diagram
### Actors (for entry level product)
- User
- Power Supply

### Interfaces
|Actor|Logical Interface|Physical Interface|
|---|---|---|
|User|Switch on/off|   |   
|Power Supply|   |   |

## System Functional Requirements
- Clean a space autonmously
    - Move covering the whole space
    - Clean 
    - Avoid obstacoles
    - Recognize and avoid humans and pets
    


## Non Functional Requirements
- Flat space
- Min 80 square meters to be cleaned
- No harm to humans and pets
- Cost <300 euros
- Recharge in <2 hours


## System design level 0
- System is made of 
    - Robot
    - Charging station


### Robot (level 1)
Necessary a context diagram for robot 
- Context diagram
    - Actor: user (3 buttons)
    - Actor: charging station (plug to recharge battery) (20V, ?A, 2 poles)

- Functional requirements <span style="color:Purple">(inherit all the functional requiremets)</span>
    - Clean a space autonmously
        - Move covering the whole space
        - Clean 
        - Avoid obstacoles
        - Recognize and avoid humans and pets

### Charging station
- Context diagram
    - Actor: power supply, 220
    - Actor: Robot, 20V, 2 poles

- Functional requirements
    - Transform 220 to 20V

### Robot design
Robot is made of 
- Infrared sensor for obstacoles
- Infrared sensors for gaps
- Battery
- Sensor of battery
- 4 wheels
- Eletrical engine on 2 wheels
- Vacuum pump
- Switch to set pump on off
- Computer (arduino) and firrmware 


## Computer and firmware
- Context diagram
    - Actors
        - Button on/off
        - Button start
        - Button learn
        - Sensor infrared 1
        - Sensor infrared 2
        - Sensor battery
        - Actual engine wheel 1
        - Actual engine wheel 2
        - Actual switch pump


Functional requirements slit in Robot FR and Software FR. The software FR are: 
- Set pump on/off (associated to the Robot FR: Clean)
- Manage energy 

#### Set pump on/off
- Create map of space (learn) (space is made of cells, each cell free or obstacle)
    - Cancel previous map (if any)
    - Apply coverage algorithm, tag each cell as free or obstacle
- Coverage 
    - Set cell as clenaed/uncleaned
- Move
    - Assume we already have a map of space
    - Go to position (x,y)
    - Stop
    - MoveForwards (distance)
    - MoveBackwards (distance)
    - Turn (degrees)
        - RotateWheel1(nturns)
        - RotateWheel2(nturns)
    - ComputeMyPosition
    - RecognizeObstacles
    - TurnAroundObstacle


# Use cases
## UC: set up (to complete - as always)
- *Informal description*: self test and configure at switch on
- *Primary actor*: button on off
- *Precondition*: robot in charging station
- *Post condition*:  
- *Scenarios*
    - *Nominal*: su1
    - *Variants*:
    - *Exceptions*: 
        - battery not full, wait for full charge
        - robot not in charging station, trigger alarm
        - one component broken, trigger alarm

### su1
- *Precondition*:
- *Post condition*: robot in charging station, battery full, all components ok

| Steps | Actor: button | System: robot |
|-------|-------|--------|
| 1 |Button pressed|Check that robot is on charging station - ok| 
| 2 | | FR4.1 - Read battery level (function already written in documentation) - full charge | 
| 3 | | FR5.1 — Do self check — all right | 



## UC: start
- *Informal description*: do cleaning of space
- *Primary actor*: button start
- *Precondition*: post condition of su1, map is ready
- *Post condition*:  
- *Scenarios*
    - *Nominal*: st1
    - *Variants*:
    - *Exceptions*: 


## UC: clean space
- *Informal description*: clean a space
- *Primary actor*: robot
- *Precondition*: robot in charging station
- *Post condition*:
- *Scenarios*
    - *Nominal*: cs1 (no obstacles)
    - *Variants*: cs2 same as cs1 with obstacles not in map 
    - *Exceptions*: 

### cs1
- *Precondition*: post condition of su1, map is ready
- *Post condition*: all the space has been cleaned and robot is back in the charging station

| Steps | Actor: button | System: robot |
|-------|-------|--------|
| 1 |Button pressed|FR 1.3 Compute coverage path| 
| 2 | | FR 3.1 Go to position C1| 
| 3 | | FR 3.1 Go to position D1; FR 3.2 Compute energy to do remaining path; FR 4.1 read battery level Energy required < battery level| 
        
