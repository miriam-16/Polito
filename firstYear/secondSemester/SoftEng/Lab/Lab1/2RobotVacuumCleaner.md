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