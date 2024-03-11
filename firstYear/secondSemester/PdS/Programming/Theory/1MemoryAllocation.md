# Memory Allocation
..
## Execution flow
The starting point of a program execution is the `main()` method. The structure called **stack** manages execution of nested functions, while a secondary structure called **heap** manage resources dinamically allocated. 

### Stack
When the program starts, the stack is automatically created in order to manage called functions and their return value, arguments e local variables. The amount of date that it can memorize results in the inability of storing a certain date which last more time than the function in which it has been allocated. Thanks to the expansion/contraction policy, the stack is filled up from the top and free from the bottom. It has a limited size (often of 8MB), so it's not possible to overcome the size (stack overflow error). 

### Heap
Has a larger size than the stack, and it's used to allocate that date whose dimensione is not known at compile time. It's possible to access to these blocks by pointers and it's the programmer who is responsable of release allocated memory. 

## Organization of the address space
It is divided into:
- executable code, which contains machine instructions and is read-write access;
- costants area, read-only access;
- global variable, read-write access;
- stack, which contains address and return values, parameters and local variables;
- heap, used for dinamic allocation and managed by libraries.

## Lifecycle of variables
The execution model of a C/C++ programs distinguishes different types of variables, each of them has its own lifecycle:
- **global variables** have fixed addresses defined by the compiler. They are always accessible;
- **local variables** have relative addresses (depending on the position on the stack) and their lifecycle is determined by the function within they are declared. So they are allocated from the start of the function and deallocated at the end;
- **dinamic variables** have assolute addresses definied at execution time. Pointers are the only entry by which you can access them.

## Dinamic memory allocation
Dinamic variables are managed thanks to the use of libraries and specified methods:
- `void *malloc(size_t s)` (memory allocation) used to allocate s memory area's blocks;
- `void *calloc(int n, size_t s)` (contiguous allocation) used to allocate s blocks of memory area and initialize them with '0';
- `void *realloc(void* p, psize_t s)` (re-allocation) used to dynamically change the memory allocation of a previously allocated memory.
In case of failure, NULL is returned. 