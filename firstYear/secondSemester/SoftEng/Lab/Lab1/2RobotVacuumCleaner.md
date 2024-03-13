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



## System Functional Requirements
