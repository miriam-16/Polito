import numpy
import matplotlib
import matplotlib.pyplot as plt

def mcol(v):
    return v.reshape((v.size, 1))

def load(fname):
    DList = []
    labelList = []
    with open(fname) as f:
        for line in f:
            try:
                attrs = line.split(',')[0:-1]
                attrs = mcol(numpy.array([float(i) for i in attrs]))
                label = line.split(',')[-1].strip()
                DList.append(attrs)
                labelList.append(label)
            except:
                pass
    return numpy.hstack(DList), numpy.array(labelList, dtype=numpy.int32)

def hist_plot(D, L):
    D0 = D[:, L==0]
    D1 = D[:, L==1]

    hFea = {
        0: 'False', 
        1: 'True'
        }

    for dIdx in range(2):
        plt.figure()
        plt.xlabel(hFea[dIdx])
        plt.hist(D0[dIdx, :], bins = 10, density= True, alpha = 0.4, label = 'False')
        plt.hist(D0[dIdx, :], bins = 10, density= True, alpha = 0.4, label = 'True')
        plt.legend()
        plt.tight_layout()
    plt.show()

def scatter_plot(D, L):
    return 

if __name__ == '__main__':
    D, L = load('trainData.txt')
    print(L)
    hist_plot(D, L)
