use std::ops::Add;

pub fn add(left: usize, right: usize) -> usize {
    left + right
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        let result = add(2, 2);
        assert_eq!(result, 4);
    }
}

pub mod solution {
    use std::ops::Add;

    pub struct ComplexNumber {
        real: f64,
        imag: f64,
    }

    impl ComplexNumber {
        pub fn new(a: f64, b: f64) -> Self {
            Self { real: a, imag: b }
        }

        pub fn real(&self) -> f64 {
            self.real
        }

        pub fn imag(&self) -> f64 {
            self.imag
        }

        pub fn from_real(a: f64) -> Self {
            Self { real: a, imag: 0.0 }
        }

        pub fn to_tuple(&self) -> (f64, f64) {
            return (self.real, self.imag);
        }
    }

    impl Add for ComplexNumber {
        type Output = ComplexNumber;
        fn add(self, rhs: ComplexNumber) -> ComplexNumber {
            ComplexNumber {
                real: self.real + rhs.real,
                imag: self.imag + rhs.imag,
            }
        }
    }
}
