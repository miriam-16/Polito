import numpy

import matplotlib
import matplotlib.pyplot as plt

import scipy.linalg

def load_dataset(fname):
    DList = []
    labelList = []
    with open(fname) as f:
        for line in f:
            try:
                attrs = line.split(',')[0:-1]
                attrs = vcol(numpy.array([float(i) for i in attrs]))
                label = line.split(',')[-1].strip()
                DList.append(attrs)
                labelList.append(label)
            except:
                pass
    return numpy.hstack(DList), numpy.array(labelList, dtype=numpy.int32)

def vcol(x):
    return x.reshape((x.size, 1))

def vrow(x):
    return x.reshape((1, x.size))

def compute_mu_C(D):
    mu = vcol(D.mean(1))
    C = ((D-mu) @ (D-mu).T) / float(D.shape[1])
    return mu, C

def compute_pca(D, m):

    mu, C = compute_mu_C(D)
    U, s, Vh = numpy.linalg.svd(C)
    P = U[:, 0:m]
    return P

def apply_pca(P, D):
    return P.T @ D
    

if __name__ == '__main__':
    D, L = load_dataset('trainData.txt')
    mu, C = compute_mu_C(D)
    print('Mean: ')
    print(mu)
    print('Covariance matrix: ')
    print(C)
    P = compute_pca(D, m = 6)
    print('PCA: ')
    print(P)

    print(apply_pca(P, D))
