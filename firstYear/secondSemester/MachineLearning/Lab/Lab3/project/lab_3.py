import numpy
import sys
import matplotlib
import matplotlib.pyplot as plt
numpy.set_printoptions(threshold=sys.maxsize)

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
        0: 'Feature 1', 
        1: 'Feature 2',
        2: 'Feature 3',
        3: 'Feature 4',
        4: 'Feature 5', 
        5: 'Feature 6'
        }

    for dIdx in range(6):
        plt.figure()
        plt.xlabel(hFea[dIdx])
        plt.hist(D0[dIdx, :], bins = 'rice', density= True, alpha = 0.4, label = 'Fake')
        plt.hist(D1[dIdx, :], bins = 'rice', density= True, alpha = 0.4, label = 'Genuine')
        plt.legend()
        plt.tight_layout()
        plt.savefig('output/hist_%d.png' % (dIdx+1))
    #plt.show()

def scatter_plot(D, L):
    D0 = D[:, L==0]
    D1 = D[:, L==1]

    hFea = {
        0: 'Feature 1', 
        1: 'Feature 2',
        2: 'Feature 3',
        3: 'Feature 4',
        4: 'Feature 5', 
        5: 'Feature 6'
    }

    x = 0
    y = 1
    plt.figure()
    plt.scatter(D0[x, :], D0[y, :], alpha=0.5, label = 'Fake')
    plt.scatter(D1[x, :], D1[y, :], alpha=0.5, label = 'Genuine')
    plt.legend()
    plt.tight_layout()
    plt.savefig('output/scatter_%d_%d.png' % (x,y))
        #plt.show()


def pca(D, L):
    mu = D.mean(1).reshape((D.shape[0], 1))
    DC = D - mu.reshape((mu.size, 1))
    
    nRecords = D.shape[1]
    C = (DC@DC.T)/nRecords

    print("Mean:")
    print(mu)

    print("Covariance")
    print(C)

    s, U = numpy.linalg.eigh(C)
    print("s")
    print(s)

    print("U")
    print(U)


    m = 6

    P = U[:,::-1][:, 0:m]
    # U, s, Vh = numpy.linalg.svd(C)
    # P = U[:, 0:m]
    print(P)
    return numpy.dot(P.T, D)

if __name__ == '__main__':
    D, L = load('trainData.txt')
    DP = pca(D,L)
    hist_plot(DP, L)