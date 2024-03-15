The last picture is the most interesting because of the distribution of the flowers characteristics.

The second is nor relevant enough because it doesn't take into account the relation between the flowers (they cover the same area depending on the label assigned).

We use scatterplot to see the distribution. Comparing scatterplots and histograms we can infer some features. 

``` python 
M0 = (L == 0)
D0 = D[:, M0] # or equivalently D0 = D[:, L==0]
```
Apply this function to each class in roder to obtain records who belong to it (maybe)

There are two ways to compute the mean `mu`. 
Compute `DC = D -mu` and
Variance 
```python 
var = D.var(1)  #diagonal of covariance matrix
                #variance tells us how features dicrimine some class
std = D.std(1)
```

The mean of each class correspond to the mean evalueted in the histogram:
- Close mean -> overlap


