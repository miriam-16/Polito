# Numerical Libraries

## Numpy
Enables create matrix and apply functions on it.
It works by passing as parameter `axis = 0` for rows and `axis = 1` for colums. The return value is not a matrix but a one dimensional array.

It's very efficient because avoid to use iterative loops and it's faster. 

It's possible to indexing a matrix using two indexes separted by comma `x[row, column]`. It can be selected a range, allowing also to step. 

```python
>>> x = numpy.arange(15).reshape(3,5)
>>> x
array([[ 0, 1, 2, 3, 4],
        [ 5, 6, 7, 8, 9],
        [10, 11, 12, 13, 14]])
>>> x[1, 0:3]
array([5, 6, 7])

>>> x[1:2, 0:3]
array([[5, 6, 7]])
```
Slicing creates a view, in particular a numpy object pointed by the name of the variable. 

Indexing though boolean array in order to filter the elements of the matrix.

`x.flags.owndata` 