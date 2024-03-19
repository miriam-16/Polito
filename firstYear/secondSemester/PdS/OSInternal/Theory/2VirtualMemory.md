# Virtual memory
Many Memory Management require the entire process's allocation in main memory before execution, but this limit the size of a program to the size of the physical memory. In many cases, the entire process is not needed as includes part of code barely used, as the error handling, options and features. In addition, arrays, list and other structures are allocated in more memory than the actually required. 

The **virtual memory** is the separation of user logical memory from physical memory, whose biggest aim is to allow to execute a program partially located in memory. Virtual memory confer a lot of benefits, for both user and system:
- The program would no longer be limited by the amount of available physical memory, so logical address space can be larger;
- CPU utilization would increase as the program occupies less physical memory, increasing multiprogramming;
- Each program run faster because there would be less load and swap operation (which imply I/O operation).

The **virtual address space** refers to the logical view oh how the process is stored in memory: while the physical memory is organized in frames and the physical pages of the process may not be contiguous, the virtual space starts at address 0 and **must be mapped** to physical frames in memory.
It is designed as a space between the stack and the heap: it starts from the max logical address and grow down, while heap grows up. in this way, the address space use is maximized and the used spaces between the two part is hole.
Moreover, from this picture, it is visible how the process doesn't occupy all its memory, so it'useless allocate it entirely in memory. 
![virtual_address_space](https://i.imgur.com/ukFqIhU.png)