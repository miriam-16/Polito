# Notes of notable JS syntax

## Spread arrays
- return multiple values from a function
```let [x,y] = toCartesian(r,theta);``` 

-  Spread the content of an array in order to list the elements from a multiple value of the array. It's called **spread operator**.
  It can be used in the reserve way, to obtain only a part of the array. In fact, it is usually used as const b = [...a] to copy the value of a in the variable b
  ```
  const parts = ['shoulders', 'knees'];
  const lyrics = ['head', ...parts, 'and', 'toes']; // ["head", "shoulders","knees", "and", "toes"] 
  ```

  
## Strings
- can be defined with ' or "
- is **immutable**
- extraction as an usual array
- concatenation operator with +
- a list pf method given to obtain new string from the given one
- backticks(`) can be used to format strings (creating templates)