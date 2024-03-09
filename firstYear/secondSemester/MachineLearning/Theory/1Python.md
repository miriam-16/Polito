# Most important features of Python

***[Guide](https://docs.python.org/3/tutorial/)***

## Native tyoes

### Numeric Types
Several native data types are supported
`**` computes powers
`/` computes **floating division**
`//` computes **integer division**

### String
Can be enclosed with `'...'` or `"..."`
They are immutable
`\` allows escaping quotes
Can be indexed as arrays and the character is still a string
Can be indexed from the end `s[-1]`
Can retrieve length by command `length`
Slicing `s[0:3]` take the character from position 0 to 2 (so index 3 is excluded). It can be writtend as `s[:3]` (`s[3:]` take from index 3 to the end)

## Data Types
### Lists
`l = ['a', 1, 1.3]` or `l = list([1,2,3])`
Empty list `l = []`
Same way as string to retrieve length, indexing ans slicing
Slicing returns a new list which contains references to the values of the original list (**shallow copy** — if modify something, also the new object is modified)

A **third value on slicing** means the step value:
```
>>> l = [1,2,3,4,5]
>>> l[0:5:2]
[1,3,5]
```
Start and end slicing value can be omitted, can also be negative in order to have the list in the reverse order

Lists are mutable, you can change the value by indexing
Method `append` to add one value to list
Method `extend` to merge two lists
Method `pop` to remove an element (if no parameter passed, remove the last element, otherwise pass the index)

