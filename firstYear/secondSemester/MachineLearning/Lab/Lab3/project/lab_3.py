import numpy
import sys
import matplotlib
import matplotlib.pyplot as plt
import scipy.linalg
numpy.set_printoptions(threshold=sys.maxsize)

m = 6

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

def hist_plot(D, L, name):
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
        plt.savefig('output/%s_hist_%d.png' % (name, (dIdx+1)))
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

    P = U[:,::-1][:, 0:m]
    # U, s, Vh = numpy.linalg.svd(C)
    # P = U[:, 0:m]
    print(P)
    return numpy.dot(P.T, D)

def lda(D, L):
    mu = D.mean(1).reshape((D.shape[0], 1))
    DC = D - mu.reshape((mu.size, 1))
    nFeatures = D.shape[0]
    n_c = D.shape[1]

    S_w = numpy.zeros((nFeatures, nFeatures))
    S_b = numpy.zeros((nFeatures, nFeatures))

    for i in numpy.unique(L):
        Dc = DC[:, L == i]
        n_c = Dc.shape[1]
        mu_i = Dc.mean(1).reshape((Dc.shape[0], 1))
        DCc = Dc - mu_i.reshape((mu_i.size, 1))
        S_w += (DCc @ DCc.T) / n_c
        S_b += (mu_i - mu) @ (mu_i - mu).T * n_c

    print("Between-class scatter matrix (S_b):")
    print(S_b)
    print("Within-class scatter matrix (S_w):")
    print(S_w)

    s, U = scipy.linalg.eig(S_b, S_w)
    W = U[:,::-1][:,0:m]

    UW, _, _ = numpy.linalg.svd(W)
    U = UW[:,0:m]


if __name__ == '__main__':
    D, L = load('trainData.txt')
    DP = pca(D,L)
    hist_plot(DP, L, 'pca')

    W = lda(D, L)
    hist_plot(W, L, 'lda')