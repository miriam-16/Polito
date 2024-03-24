# RUST Language

## Variables
- `let` for declaring a new variable which cannot change (*immutability property*);
- `let mut` declares a variable that can change value

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

### Tuples
Ordered collections of heterogeneous values. They are represented by `()` and it's possible to access to each entry by `.0`, `.1`- It can contain an arbitrary number of values. 

### Pointers and memory
In Rust, there are three different ways to reprensent memory addresses:
- *references* (shared and mutables);
- *box*;
- *pointers* (constants and mutables).
In Rust, usage of pointer is aesier thanks to the concepts of **possession** and **time of live** of variables, which guarantee only legit accesses to memory. 

#### References
A reference is represented by a memory block which contains the memory address in which the value is stored.
The expression `let r1 = &v;` (**Ref**) defines and initializes v (which can be and expression or a value):
- r1 **borrows** v's value and it obtains *read-only access* by `*r1=...` expression.
  Read-only accesses of references cna be copied by assigning them to other variables but the original value is not mutable since at least one reference to that value exists and it is in use. 

The expression `let r2 = &mut v;` (**RefMut**) defines and initialize a mutable reference to r2:
- r2 **exclusively borrows** v's value and allows to modify it. 
  This maeans that as long as t mutable reference exists and is in use, it's not possible to create other references (mutable or not) or access to the original value.

They are devoid of possession and can be associated to existing variables. They can never be null and implement the *single writer or multiple readers* logic, ensured by the **borrow checker** module. 