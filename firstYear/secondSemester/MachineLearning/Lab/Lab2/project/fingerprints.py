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
        plt.hist(D0[dIdx, :], bins = 10, density= True, alpha = 0.4, label = 'Fake')
        plt.hist(D1[dIdx, :], bins = 10, density= True, alpha = 0.4, label = 'Genuine')
        plt.legend()
        plt.tight_layout()
        plt.savefig('output/hist_%d.png' % (dIdx+1))
    plt.show()

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

    for dIdx1 in range(6):
        for dIdx2 in range(6):
            if dIdx1 == dIdx2:
                continue
            plt.figure()
            plt.xlabel(hFea[dIdx1])
            plt.ylabel(hFea[dIdx2])
            plt.scatter(D0[dIdx1, :], D0[dIdx2, :], label = 'Fake')
            plt.scatter(D1[dIdx1, :], D1[dIdx2, :], label = 'Genuine')
            plt.legend()
            plt.tight_layout()
            plt.savefig('output/scatter_%d_%d.png' % ((dIdx1+1), (dIdx2+1)))
        #plt.show()


if __name__ == '__main__':
    # Change default font size - comment to use default values
    plt.rc('font', size=16)
    plt.rc('xtick', labelsize=16)
    plt.rc('ytick', labelsize=16)
    
    D, L = load('trainData.txt')
    hist_plot(D, L)
    scatter_plot(D, L)

    mu = D.mean(1).reshape((D.shape[0], 1))
    print('Mean:')
    print(mu)
    print()


    C = ((D - mu) @ (D - mu).T) / float(D.shape[1])
    print('Covariance:')
    print(C)
    print()

    var = D.var(1)
    std = D.std(1)
    print('Variance:', var)
    print('Std. dev.:', std)
    print()
    


    for cls in [0,1]:
        print('Class', cls)
        DCls = D[:, L==cls]
        mu = DCls.mean(1).reshape(DCls.shape[0], 1)
        print('Mean:')
        print(mu)
        C = ((DCls - mu) @ (DCls - mu).T) / float(DCls.shape[1])
        print('Covariance:')
        print(C)
        var = DCls.var(1)
        std = DCls.std(1)
        print('Variance:', var)
        print('Std. dev.:', std)
        print()
