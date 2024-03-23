import numpy
import matplotlib
import matplotlib.pyplot as plt

def mcol(v):
    return v.reshape((v.size, 1))

def plot_scatter(D, L):
    
    D0 = D[:, L==0]
    D1 = D[:, L==1]
    D2 = D[:, L==2]

    hFea = {
        0: 'Sepal length',
        1: 'Sepal width',
        2: 'Petal length',
        3: 'Petal width'
        }

    x = 0
    y = 1

    plt.figure()
    plt.scatter(D0[x, :], D0[y, :], label = 'Setosa')
    plt.scatter(D1[x, :], D1[y, :], label = 'Versicolor')
    plt.scatter(D2[x, :], D2[y, :], label = 'Virginica')

    plt.legend()
    plt.tight_layout() # Use with non-default font size to keep axis label inside the figure
    plt.savefig('scatter_%d_%d.pdf' % (x, y))
    plt.show()  

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

if __name__ == '__main__':
    D, L = load('iris.csv')
#    M2 = numpy.load('IRIS_LDA_matrix_m2.npy')
#    print(M2)

    mu = D.mean(1).reshape((D.shape[0], 1))
    DC = D - mu.reshape((mu.size, 1))
    
    C = (DC@DC.T)/150
    print("Mean:")
    print(mu)

    print("Covariance")
    print(C)

    s, U = numpy.linalg.eigh(C)
    print("s")
    print(s)

    print("U")
    print(U)

    m = 2

    P = U[:,::-1][:, 0:m]
    # U, s, Vh = numpy.linalg.svd(C)
    # P = U[:, 0:m]
    print(P)
    DP = numpy.dot(P.T, D)
    
    plot_scatter(DP, L)
    #print(DP)

    
