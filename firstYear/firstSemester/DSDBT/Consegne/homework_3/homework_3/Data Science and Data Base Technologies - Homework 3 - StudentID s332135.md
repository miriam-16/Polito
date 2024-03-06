
![[cardinalita.png]]

# Group by anticipation
Group by of Inner query:
The group by and having on OS.SId can't be anticipated. In Services subtree, there isn't the OS.SId attribute. In the other subtrees is not allowed because the attribute CId is needed, and the result of the group by on SId don't include this attribute. 

Group by of the outer query:
The group by and Having on BId can't be anticipated because in any place would cause the loss of information on attributes needed for the join. 

# Join orders
In this SQL query, we could analyse the order of the two joins of the inner query. In particular, we could consider to change the order as in the image below, in order to filter first offered services with cleaning company in Piedmont or Liguria. The original solution has the same reduction factor, so there are no differences. 

![[orderjoin.png]]


# Access methods without indexes
We distinguish two types of accesses: table access full and table access full + filter. In this exercise, we have the first type for OFFERED-SERVICE, on which is not performed any filter. The other are characterized by different filters, so the access method is full + filter. 

# Indexes
**CLEANING-SERVICE**: SECONDARY B+tree Index on Date
**BUILDING**: SECONDARY Hash Index on City
**CLEANING-COMPANY**: SECONDARY Hash Index on Region
**SERVICES**: SECONDARY Hash Index on Category
**OFFERED-SERVICES**: No index

The choice of these indexes depends on the cardinality of the tables involved. 
For CLEANING-SERVICE, a secondary B+tree index on Date could be useful for filtering, as the table has $10^9$ tuples. 
In BUILDING table, it could be useful a secondary index on the City thanks to the good reduction factor. 
In CLEANING-COMPANY and SERVICES tables, there are filters with a good reduction factor, so we create indexes Hash Indexes on Region and Category.
In OFFERED-SERVICE, we could think to insert a primary b+tree index on SId attribute, but this attribute doesn't represent the natural order of the information, so it couldn't be useful as we hope. 