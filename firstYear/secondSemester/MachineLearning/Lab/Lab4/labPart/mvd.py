import numpy
import matplotlib
import matplotlib.pyplot as plt

def mcol(v):
    return v.reshape((v.size, 1))


def load(fname):
    DList = []
    labelsList = []
    hLabels = {
        'Iris-setosa': 0,
        'Iris-versicolor': 1,
        'Iris-virginica': 2
        }

    with open(fname) as f:
        for line in f:
            try:
                attrs = line.split(',')[0:-1]
                attrs = mcol(numpy.array([float(i) for i in attrs]))
                name = line.split(',')[-1].strip()
                label = hLabels[name]
                DList.append(attrs)
                labelsList.append(label)
            except:
                pass

    return numpy.hstack(DList), numpy.array(labelsList, dtype=numpy.int32)

def logpdf_GAU_ND(x, mu, C):
    n = x.shape[0]
    d = x.shape[1]
    logdetC = numpy.linalg.slogdet(C)[1]
    invC = numpy.linalg.inv(C)
    logpdf = -0.5 * (d * numpy.log(2 * numpy.pi) + logdetC + numpy.sum((x - mu.T) @ invC * (x - mu.T), axis=1))
    return logpdf

def main():
    D, L = load('iris.csv')


    mu = D.mean(1).reshape((D.shape[0], 1))
    DC = D - mu.reshape((mu.size, 1))

    nRecords = D.shape[1]

    C = (DC@DC.T)/nRecords
    logpdf = logpdf_GAU_ND(D, mu, C)
    print(logpdf)



if __name__ == "__main__":
    main()