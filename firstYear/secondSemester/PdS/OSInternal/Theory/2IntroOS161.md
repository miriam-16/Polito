# Introduction to OS161

OS161 is a simplified operating system written in C which includes:
- source of the operating system to be used for code browsing, designing and implementing new features;
- a toolchain for cross compiling (OS161 kernel for a MIPS processor), running the kernel on a simulator.

# What we need to know for OS Internal programming?
## Definition of thread and distincion of kernel thread and user thread
A thread represent the control state of an executing program. It is associated to a context (the state) described by the processor's CPU state, such as the program counter, stack pointer, registers and execution mode and a stack, located in the address space of the process. 
We can distinguish **user threads**, which are managed by user-level threads library or **kernel threads**, supported by the kernel and managed by the operating system. 

## Multithreading Models - Relationship between User and Kernel Threads
There must be a relationship between these types of threads. In fact, a user thread should be mapped to the kernel one, and this can be done in different ways: 
- mapping each user thread to a kernel thread (**one-to-one**), which <span style="color:DarkGreen">allows other thread to be executed when other interrupt by calling a system call</span>, but <span style="color:Red">requires to create a kernel thread for each user thread and this can decrease performances of the process</span>;
- mapping many user-level threads to one kernel thread (**many-to-one**) which <span style="color:Red">allows the execution of a thread at time</span>;
- mapping many user threads to a smaller or equal number of kernel threads (**many-to-many**) creates a <span style="color:DarkGreen">sufficient number of kernel threads and allows developers to create as many user threads as necessary in order to optimize the execution depending on the number of the kernel threads</span>.

## Definition of process and how to represent it in memory
A **process** is a program in execution (in a sequential fashion). 
An operating system executes many programs which run as processes (take into account a single program can be several processes - multiple users eecuting the same program). So, the program is passive entity, as it is stored on the disk as executable file, while the process is active. The birth of a process is when a program is loaded into memory. 

The logical memory addresses of processes are organized as:
- text, the code of the process;
- data, the position of the global variables;
- stack which contains temporary data;
- heap which contains memory dinamically allocated during run time.

Last two option can increase the size. 

### Single and Multithread processes
While is a single process there is a single thread, all the information abnout the process are stored in a single position (and one single time). 
If a process has multiple threads, parts as code, data and files are shared among all threads, while registers, stack and PC is defined for each thread. For this reason, exists the concept of context switch by which the execution of a thread is stopped on behalf of another one. 

## Implementing threads on OS161
