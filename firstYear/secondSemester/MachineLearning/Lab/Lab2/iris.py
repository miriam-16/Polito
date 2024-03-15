import numpy


filename = "iris.csv"
with open(filename) as f:
    for line in f: 
        sepalLength, sepalWidth, petalLength, petalWidth = line.split(',')[0:4]
        classLabel = line.split(',')[4:]
        row = numpy.array([sepalLength, sepalWidth, petalLength, petalWidth])
        