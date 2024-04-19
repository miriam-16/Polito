# RUST Language

## Variables
- `let` for declaring a new variable which cannot change (*immutability property*);
- `let mut` declares a variable that can change value
Local variable allocated on the stack. Its size is equal to the dimension of the value to be stored and the value is released when the varible exit from the scope (this causes a stack contraction). 

### Shadow
On immutable variables, it's possible to change its value and its type by re-declaring the same variable: shadowing creates a new variable which hides the previous copy without destroy it. We can see this behaviour when a variable is victim of shadowing in another scope of the code. 
While shadowing allows to change the type, **mut** allows to change the value but not the type.

## Types
Statically associated to each variable and can be optionally specified (infered by the compiler).
In Rust, types are indipendent from each other. 

### Predefined types
- Integer with sign: `i8`, `i16`, `i32`, `i64`, `i128`, `isize`;
- Integer without sign: `u8`, `u16`, `u32`, `u64`, `u128`, `usize`;
- floating point: `f32`, `f64`;
- Logical: `bool`;
- Characters: `char`;
- Unit: `()` that represent a tuple of 0 elements (void operator).

### Trait
Defines functionality for a particular type has and can share with other types. It has the same scope of the interfaces in other languages. The existence of traits creates a form of parentage among types.

#### Traits for prints
- *Display* prints a variable where the `{}` is located in an user-friendly format (different from C);
`print("Name: {}", name)`
-  *Debug* prints a variable where is located `{:?}`is located in a programmer format, while `{#?}` is a pretty printing. It is implemented by tuples;
`print("{:?}", b)`
- *Pointer* `{:p}` prints the address of a pointer variable.
`print("{x:p}")`

#### Copy vs. Clone
- *Copy* duplicates values thanks to memcpy function. So the original value can be used. It determines the Clone trait;
- *Clone* (only clone, no copy implemented) determines the move (change of owner of possession) of the date, so it's possible to use only the cloned value because the original is unusable. It must be executed explicitly.

### Tuples
Ordered collections of heterogeneous values. They are represented by `()` and it's possible to access to each entry by `.0`, `.1`- It can contain an arbitrary number of values. 

### Pointers and memory
In Rust, there are three different ways to reprensent memory addresses:
- *references* (shared and mutables);
- *box*;
- *pointers* (constants and mutables).
In Rust, usage of pointer is aesier thanks to the concepts of **possession** and **time of life** of variables, which guarantee only legit accesses to memory. 

The relation between this two features of pointer implies as long as a variable is owned, its life continues. In order to continue to use the variable, it's possible to change the owner of possession: in this way, even if the constructor of the original date is destroyed (for example a function), it's possible to use the created data. This behaviour is called **move**. 

#### References
A reference is represented by a memory block which contains the memory address in which the value is stored.
The expression `let r1 = &v;` (**Ref**) defines and initializes v (which can be and expression or a value):
- r1 **borrows** v's value and it obtains *read-only access* by `*r1=...` expression.
  Read-only accesses of references cna be copied by assigning them to other variables but the original value is not mutable since at least one reference to that value exists and it is in use. 

The expression `let r2 = &mut v;` (**RefMut**) defines and initialize a mutable reference to r2:
- r2 **exclusively borrows** v's value and allows to modify it. 
  This maeans that as long as t mutable reference exists and is in use, it's not possible to create other references (mutable or not) or access to the original value.

They are devoid of possession and can be associated to existing variables. They can never be null and implement the *single writer or multiple readers* logic, ensured by the **borrow checker** module. 

It's important to notife the time of life of the reference, in order to know where it's possible to change the original value of the variable referenced: the deallocation of the reference happens at the end of the code, but the reference is not in use anymore. 

#### Box\<T\>
Variable allocated on the heap, whose size is not known apriori. It contains the pointer to the value and is a **pointer with possess**.
It implements the trait *drop*, so when it will be automatically destroyed and heap's memory will be released. We can infer the time of life of the date is equal to the pointer's. 

The allocation of a Box is `let b = Box::new(v);` where:
- v is a certain value;
- b is a variable which will contains a pointer to a heap's block which contains the value of v;
- we can directly access to the value of v by the expression `*b` (and we can change its value if b is declared as mut);
- when the execution of code reach the end, b will be deallocated and the block will be released (drop property).

#### Native pointers
Rust implements pointers equals to C and C++'s (with all benefits and drawbacks):
- `*const` is an immutable pointer;
- `*mut` is a mutable pointer.
It is possible to access in read-only or read-write way inside **unsafe{..}** blocks, where the programmer is responsable for memory allocation and deallocation.

### Array
Arrays are sequences of homogeneus elemets, whose size is fixed and known apriori and whose allocation is on the stack. 
They are represented by `[T; N]` where T is the type of the elements and N is the number of elements.

```rust
let a: [i32; 5] = [1, 2, 3, 4, 5];
let b = [0;5]       //initialize an array of 5 elements with 0
let l = b.len();
```

### Slices
Called also **flat pointer**, they are similar to arrays, but their length is not known apriori. They are represented by `&[T]` and they are a reference to a sequence of elements of type T. It is a type characterized by a pointer to the first element and the length of the slice. 

They are used to access to a range of values of the slice.

```rust
let a = [ 1, 2, 3, 4 ];
let s1: &[i32] = &a;  //s1 -> 1, 2, 3, 4
let s2 = &a[0..2];    //s2 -> 1, 2
let s3 = &a[2..];
```

### Vec<T>
Dynamic array, whose size is not known apriori and whose allocation is on the heap. It is represented by `Vec<T>` and it is a pointer with possession. 
It a tuple which contains:
- pointer to buffer allocated on heap where elements are stored (ptr);
- unsigned integer which represents the number of elements (size);
- unsigned integer which represents the capacity of the buffer (capacity).
It offers methods `push`, `remove`, `shrink_to_fit`: when the number of elements reaches the capacity, the buffer is reallocated with a new capacity. 

```rust
let v : Vec<i32> = Vec::new();
let h = Vec::<i32>::with_capacity(10);
```