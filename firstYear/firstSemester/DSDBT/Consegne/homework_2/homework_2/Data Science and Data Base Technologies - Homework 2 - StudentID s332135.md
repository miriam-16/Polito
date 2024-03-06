# Report
## Answers Question 1
1. The most discriminative attribute is "node-caps", the root node. This means that the algorithm which builds the decision tree consider "Node-caps" as the best attribute to split the dataset.   
2. The height of the decision tree generated is seven.
3. *Find a pure partition in the Decision Tree and report a screenshot that shows the example identified.*
	![[Pasted image 20231129155514.png]]

## Answer Question 2

![[vs1.png]]
Both trees have 10 as maximal depth, but the first one has 0.01 as minimal gain (default value), while the second one is 0.001. As we can see, when the miminal gain is lower, more splits are generated. 

![[vs2.png]]
In this example, the maximal depth of the tree is decreased to 5. The same path of the last example now has 5 levels and all the aspects related to inv-nodes are collected directly in the classification node.

![[vs3.png]]
In this example, the increased minimal gain is 0.05. This has as a consequence the height's decrease, as the values has to have a more significant impact, so the small number and path are merged. 

![[vs4.png]]
Here, the maximal depth is set to 2.

![[vs5.png]]
Finally, this is the result of setting the minimal gain to 0.1.

# Answer Question 3
Decreasing these parameters has effects on the precision of classification and the risk of having overfitted or underfitted results. For example, increasing maximal depth can create more detailed trees, but have a higher risk of overfitting and so they wouldn't be able to generalize the information.

**Maximal depth = 10; Minimal Gain = 0.001**

![[Pasted image 20231130184215.png]]

**Maximal depth = 5; Minimal Gain = 0.01**

![[Pasted image 20231130182459.png]]

**Maximal depth = 10; Minimal Gain = 0.05**

![[Pasted image 20231130182536.png]]

**Maximal depth = 2; Minimal Gain = 0.01**

![[Pasted image 20231130182610.png]]

**Maximal depth = 10; Minimal Gain = 0.1**

![[Pasted image 20231130182741.png]]

## Answer Question 4
The value of K in the K-NN classifier represent the error rate of the model, so changing the value of k has effects on the precision of the validation. In particular, we can wee that if k is too small, it is influenced by noise points and be overfitted, while if it's too large, it could be inserted in other classes and be underfitted.

**k=5 (Default case)**

![[Pasted image 20231201105139.png]]

**k=2**

![[Pasted image 20231201105220.png]]

**k=3**

![[Pasted image 20231201105546.png]]

**k=1**

![[Pasted image 20231201105635.png]]

**k=9**

![[Pasted image 20231201105714.png]]

**Naïve Bayes**

![[Pasted image 20231201110756.png]]
The result of comparing the K-NN performance with k = 5 and the Naïve Bayes is that the perfomance of the second one is slightly better of the K-NN. 

## Answer Question 5
*Analyze the Correlation Matrix to discover pairwise correlations between data attributes. Report a screenshot showing the correlation matrix achieved.*

![[ult.png]]

We can see that some attributes are dipentent from each others, so the assumption of indipendence of Naive Classification is not correct.

The most correlated attributes are inv-nodes and irradiant, followed by age and menopause.