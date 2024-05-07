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
    use std::{
        hash::{Hash, Hasher},
        ops::{Add, AddAssign},
    };
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

        pub fn modulus(&self) -> f64 {
            f64::sqrt(self.real.powi(2) + self.imag.powi(2))
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

    /*     impl Into<f64> for ComplexNumber {
        fn into(self) -> f64 {
            self.real
        }
    } */

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

    impl Eq for ComplexNumber {}
    impl PartialEq for ComplexNumber {
        fn eq(&self, other: &Self) -> bool {
            self.real == other.real && self.imag == other.imag
        }
    }

    impl Ord for ComplexNumber {
        fn cmp(&self, other: &Self) -> std::cmp::Ordering {
            self.modulus().total_cmp(&other.modulus())
        }
    }

    impl PartialOrd for ComplexNumber {
        fn partial_cmp(&self, other: &Self) -> Option<std::cmp::Ordering> {
            Some(self.modulus().total_cmp(&other.modulus()))
        }
    }

    impl AsRef<f64> for ComplexNumber {
        fn as_ref(&self) -> &f64 {
            &self.real
        }
    }

    impl AsMut<f64> for ComplexNumber {
        fn as_mut(&mut self) -> &mut f64 {
            &mut self.real
        }
    }

    impl Hash for ComplexNumber {
        fn hash<H: Hasher>(&self, hasher: &mut H) {
            hasher.write_u64(self.real.to_bits());
            hasher.write_u64(self.imag.to_bits());
        }
    }

    //for single test test_hash_with_hash_map()
    /*     impl From<f64> for ComplexNumber {
        fn from(value: f64) -> Self {
            ComplexNumber {
                real: value,
                imag: value,
            }
        }
    } */
}
