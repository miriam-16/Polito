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
The thread context is: 
![Schermata del 2024-03-13 18-09-19](https://i.imgur.com/WXbKChD.png)

Moving a thread on OS161 implies to involve thread libraries at kernel level with the intention to store the thread context when it's not running. 
The **Thread Control Block** is the data structure used by thread library to store the context of a process, stored in the *thread structures*. 

The thread stucture is in the file `thread.h` and stores information as the name and the state, the stack pointed by the Thread Control Block. There's also a struct which saves all the registers og the CPU associated to the thread, in order to memorize them as part of the kernel memory when the context switch happens. There are also references to the CPU associated during execution and the belonging process. 

``` c
/* see kern/include/thread.h */
struct thread {
    char *t_name;                    /* Name of this thread */
    const char *t_wchan_name;        /* Name of wait channel, if sleeping */
    threadstate_t t_state;           /* State this thread is in every
                                        thread has a state such as
                                        running, sleeping, ready. 

    /* Thread subsystem internal fields. */
    struct thread_machdep t_machdep;
    struct threadlistnode t_listnode;

    void *t_stack;                    /* Kernel-level stack */
    struct switchframe *t_context;    /* Saved register context (on stack) */ 
    struct cpu *t_cpu;                /* CPU thread runs on */
    struct proc *t_proc;              /* Process thread belongs to */
//...
}
```

The consequences of having two threads are:
- two stacks for the threads
- One active thread, managed by the thread library, while the inactive one saves its context and registers in its stack;
- Switching thread means recover the context of the future active thread from its stack, load it to the CPU while saving in its stack the context of the running thread.

### Most important functions of OS161's libraries
- `t_stack` and `t_context` allows saving the context of the thread: the kernenl stack and the switch frame. 
- The method `int thread_fork` is used for creating a new thread. The execution of this method implies the creation of entry point, of fixed structur, which is a pointer to a zone of the memory. It's a wrapper for:
    - `thread_create` creates the thread by allocating the TCB and the needed memory for manage it;
    - `switchframe_init` creates the switch frame and initiliaze all the frames;
    - `thread_make_runnable` changes the status of the thread to ready in order to be inserted in the ready list to be scheduled.
- The method `void thread_exit` disable a thread.
- The method `void thread_yield` forces the context switch by putting the calling thread on pause and ask the OS to schedule the next thread. 
- `thread_switch` is called to change the state of the current thread, taking a new one from the ready list.
- `switchframe_switch` change the context of the running thread.

slide 75
per ogni applicazione, c'è uno stack di thread sul kernel in modo tale da passare dalla modalità privilegiata e viceversa

# Working with OS161
- To execute kernel, run `sys161 kernel` in directory `$HOME/os161/root` 


## Build a kernel 
```bash
cp DUMBVM HELLO
./config HELLO
```
Run this commands in the directory `$HOME/os161-base-2.0.3/kern/conf`. This will create a new directory called HELLO in the same directory where commands were executed. 

Inside directory `$HOME/os161-base-2.0.3/kern/compile/HELLO` execute:

```bash
bmake depend
bmake
bmake install
```

These commands will compile the kernel and install it in the directory `$HOME/os161/root`. In this way, by executing `sys161 kernel` in root directory, THIS kernel will be executed.
