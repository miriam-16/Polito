#set par(justify: true)
= Virtual memory
Many Memory Management require the entire process's allocation in main memory before execution, but this limit the size of a program to the size of the physical memory. In many cases, the entire process is not needed as includes part of code barely used, as the error handling, options and features. In addition, arrays, list and other structures are allocated in more memory than the actually required. 

The *virtual memory* is the separation of user logical memory from physical memory, whose biggest aim is to allow to execute a program partially located in memory. Virtual memory confer a lot of benefits, for both user and system:
- The program would no longer be limited by the amount of available physical memory, so logical address space can be larger;
- CPU utilization would increase as the program occupies less physical memory, increasing multiprogramming;
- Each program run faster because there would be less load and swap operation (which imply I/O operation).
