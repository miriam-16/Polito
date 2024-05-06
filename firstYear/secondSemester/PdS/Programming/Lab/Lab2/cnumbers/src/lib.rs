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
    use std::ops::{Add, AddAssign};

    #[derive(Debug, Clone, Copy)]
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
            (self.real, self.imag)
        }
    }

    impl PartialEq for ComplexNumber {
        fn eq(&self, other: &Self) -> bool {
            self.real == other.real && self.imag == other.imag
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

    impl Add<f64> for ComplexNumber {
        type Output = ComplexNumber;

        fn add(self, rhs: f64) -> ComplexNumber {
            ComplexNumber {
                real: self.real + rhs,
                imag: self.imag,
            }
        }
    }

    impl AddAssign for ComplexNumber {
        fn add_assign(&mut self, rhs: Self) {
            self.real = self.real + rhs.real;
            self.imag = self.imag + rhs.imag;
        }
    }

    impl Add<&ComplexNumber> for ComplexNumber {
        type Output = ComplexNumber;
        fn add(self, rhs: &ComplexNumber) -> ComplexNumber {
            ComplexNumber {
                real: self.real + rhs.real,
                imag: self.imag + self.imag,
            }
        }
    }

    impl<'a, 'b> Add<&'b ComplexNumber> for &'a ComplexNumber {
        type Output = ComplexNumber;

        fn add(self, other: &'b ComplexNumber) -> ComplexNumber {
            ComplexNumber::new(self.real() + other.real(), self.imag() + other.imag())
        }
    }

    impl Default for ComplexNumber {
        fn default() -> Self {
            ComplexNumber {
                real: 0.0,
                imag: 0.0,
            }
        }
    }

    /* impl Into<f64> for ComplexNumber {
           fn into(self) -> f64 {
               self.real
           }
       }
    */

    /*     impl TryInto<f64> for ComplexNumber {
        type Error = &'static str;
        fn try_into(self) -> Result<f64, Self::Error> {
            if self.real != 0.0 {
                Ok(self.real)
            } else {
                Err("Errore")
            }
        }
    } */

    impl TryFrom<ComplexNumber> for f64 {
        type Error = &'static str;

        fn try_from(value: ComplexNumber) -> Result<Self, Self::Error> {
            if value.imag != 0.0 {
                Ok(value.real)
            } else {
                Err("Error")
            }
        }
    }

    impl TryFrom<f64> for ComplexNumber {
        type Error = &'static str;

        fn try_from(value: f64) -> Result<Self, Self::Error> {
            if value != 0.0 {
                Ok(ComplexNumber {
                    real: value,
                    imag: value,
                })
            } else {
                Err("Error")
            }
        }
    }
}
