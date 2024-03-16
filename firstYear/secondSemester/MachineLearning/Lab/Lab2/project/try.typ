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
For class Fake, mean of Feature 1 and Feature 2 are respectively 0.00287744 (0.003) and 0.01869316 (0.019); variance is 0.56958105 and 1.42086571
For classe Genuine, mean of Feature 1 and Feature 2 are respectively 5.44547838e-04 (0.0005) and -8.52437392e-03 (-0.008); variance is 1.43023345 and 0.57827792

Histograms have few peaks: in both features, peak is near 0, causing a class overlap around this value in the scatterplot.  

Looking at the scatterplot, we can see that classes overlap for Feature 1 and Feature 2, in particular in the interval [-1.5, 1.5] of Feature 2.


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

