= Laboratory 2 - Binary Classification for fingerprint spoofing detection

== Exploit all the data
#figure(
    grid(
        columns: 6,     // 2 means 2 auto-sized columns
        rows: 6,
        gutter: 2mm,    // space between columns
        image("output/hist_1.png"),
        image("output/scatter_1_2.png"), 
        image("output/scatter_1_3.png"), 
        image("output/scatter_1_4.png"), 
        image("output/scatter_1_5.png"),
        image("output/scatter_1_6.png"),


        image("output/scatter_2_1.png"),
        image("output/hist_2.png"),
        image("output/scatter_2_3.png"), 
        image("output/scatter_2_4.png"), 
        image("output/scatter_2_5.png"),
        image("output/scatter_2_6.png"),


        image("output/scatter_3_1.png"), 
        image("output/scatter_3_2.png"), 
        image("output/hist_3.png"),
        image("output/scatter_3_4.png"), 
        image("output/scatter_3_5.png"),
        image("output/scatter_3_6.png"),

        image("output/scatter_4_1.png"), 
        image("output/scatter_4_2.png"), 
        image("output/scatter_4_3.png"), 
        image("output/hist_4.png"),
        image("output/scatter_4_5.png"),
        image("output/scatter_4_6.png"),

        image("output/scatter_5_1.png"), 
        image("output/scatter_5_2.png"), 
        image("output/scatter_5_3.png"), 
        image("output/scatter_5_4.png"),
        image("output/hist_5.png"),
        image("output/scatter_5_6.png"),

        image("output/scatter_6_1.png"), 
        image("output/scatter_6_2.png"), 
        image("output/scatter_6_3.png"), 
        image("output/scatter_6_4.png"),
        image("output/scatter_6_5.png"),
        image("output/hist_6.png"),

    ),
    caption: "All features"
)

== First question
Analyze the first two features. What do you observe? Do the classes overlap? If so, where? Do the classes show similar mean for the first two features? Are the variances similar for the two classes? 
How many modes are evident from the histograms (i.e., how many “peaks” can be observed)?
#figure(

  grid(
    columns: 3,
    gutter: 2mm,    // space between columns
    image("output/hist_1.png"), 
    image("output/scatter_1_2.png"),
    image("output/hist_2.png")
  ) , 
  caption: "Analyse Feature 1 and Feature 2"
)

Looking at the histograms, we can notice in both features classes overlap for each value assumed by the feature. 
Histograms have few peaks: in both features, peak is near 0, causing a class overlap around this value in the scatterplot.
In particular, Feature 1's peak counts a larger number for fake detection, while Feature 2's peak is of genuine detection.  

For class Fake, mean of Feature 1 and Feature 2 is respectively 0.00287744 (0.003) and 0.01869316 (0.019); variance is 0.56958105 and 1.42086571.
For classe Genuine, mean of Feature 1 and Feature 2 is respectively 5.44547838e-04 (0.0005) and -8.52437392e-03 (-0.008); variance is 1.43023345 and 0.57827792


== Second question
Analyze the third and fourth features. What do you observe? Do the classes overlap? If so, where? Do the classes show similar mean for these two features? Are the variances similar for the two classes? How many modes are evident from the histograms?
#figure(

  grid(
    columns: 3,
    gutter: 2mm,    // space between columns
    image("output/hist_3.png"), 
    image("output/scatter_3_4.png"),
    image("output/hist_4.png")
  ) , 
  caption: "Analyse Feature 3 and Feature 4"
)
 
Looking at histograms, we can see classes overlap for both features in the [-2,2] interval. In both features, histograms show two peaks representing both classes.
For class Fake, mean of Feature 3 and Feature 4 is respectively -0.68094016 and 0.6708362; variance is  0.54997702 and 0.53604266.
For class Genuine, mean of Feature 3 and Feature 4 is respectively 6.65237846e-01 and -6.64195349e-01; variance is  0.5489026 and 0.55334275.


== Third question
Analyze the last two features. What do you observe? Do the classes overlap? If so, where? How many modes are evident from the histograms? How many clusters can you notice from the scatter plots for each class?
#figure(

  grid(
    columns: 3,
    gutter: 2mm,    // space between columns
    image("output/hist_5.png"), 
    image("output/scatter_5_6.png"),
    image("output/hist_6.png")
  ) , 
  caption: "Analyse Feature 5 and Feature 6"
)

Looking at histograms, we can see class overlap for both features in intervals [-1.5, -0.5] and [0.5, 1.5]. In both features, histograms shows three peaks representing mostly Genuine class. 
Looking at the scatter plot, we can notice four cluster for each class. Cluster of Genuine class are in the intervals [-2, -0.5] and [0.5, 2], while in the residing interval (in the centre) there are only clusters of Fake class. 