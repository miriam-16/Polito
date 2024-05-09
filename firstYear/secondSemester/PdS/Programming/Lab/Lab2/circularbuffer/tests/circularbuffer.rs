use circularbuffer::solution::CircularBuffer;

//cargo test --package circularbuffer --test circularbuffer

#[test]
pub fn test_a() {
    let capacity = 5;
    let mut buffer = CircularBuffer::new(capacity);

    assert_eq!(buffer.write(5), Ok(()));

    assert_eq!(buffer.size(), 1);
}

#[test]
pub fn test_b() {
    let capacity = 5;
    let mut buffer = CircularBuffer::new(capacity);
    assert_eq!(buffer.write(5), Ok(()));
    assert_eq!(buffer.read(), Some(5).as_ref());
}

#[test]
pub fn test_c() {
    let capacity = 5;
    let mut buffer = CircularBuffer::new(capacity);

    let n = 3;
    for i in 1..=n {
        assert_eq!(buffer.write(i), Ok(()));
    }

    for i in 1..=n {
        assert_eq!(buffer.read(), Some(i).as_ref());
    }
}

#[test]
pub fn test_d() {
    let capacity = 2;
    let mut buffer = CircularBuffer::new(capacity);
    assert_eq!(buffer.write(5), Ok(()));
    assert_eq!(buffer.write(5), Ok(()));
    assert_eq!(buffer.write(5), Ok(()));
    assert_eq!(buffer.read(), Some(5).as_ref());
    assert_eq!(buffer.read(), Some(5).as_ref());

    assert_eq!(buffer.head(), 0);
    assert_eq!(buffer.tail(), 0);
}

#[test]
pub fn test_e() {
    let capacity = 5;
    let mut buffer: CircularBuffer<i32> = CircularBuffer::new(capacity);
    assert_eq!(buffer.read(), None);
}

#[test]
pub fn test_f() {
    let capacity = 3;
    let mut buffer = CircularBuffer::new(capacity);
    assert_eq!(buffer.write(1), Ok(()));
    assert_eq!(buffer.write(2), Ok(()));
    assert_eq!(buffer.write(3), Ok(()));

    // Buffer is now full
    assert_eq!(buffer.write(4), Ok(()));

    assert_eq!(buffer.read(), Some(1).as_ref());
    assert_eq!(buffer.read(), Some(2).as_ref());
    assert_eq!(buffer.read(), Some(4).as_ref());
}

#[test]
pub fn test_g() {
    let capacity = 3;
    let mut buffer = CircularBuffer::new(capacity);
    assert_eq!(buffer.write(1), Ok(()));
    assert_eq!(buffer.write(2), Ok(()));
    assert_eq!(buffer.write(3), Ok(()));

    // Buffer is now full
    assert_eq!(buffer.write(4), Ok(()));

    // Overwrite the oldest element
    assert_eq!(buffer.write(5), Ok(()));

    assert_eq!(buffer.read(), Some(1).as_ref());
    assert_eq!(buffer.read(), Some(2).as_ref());
    assert_eq!(buffer.read(), Some(5).as_ref());
}

#[test]
pub fn test_h() {
    let capacity = 5;
    let mut buffer = CircularBuffer::new(capacity);
    assert_eq!(buffer.write(1), Ok(()));
    assert_eq!(buffer.write(2), Ok(()));
    assert_eq!(buffer.write(3), Ok(()));

    // Buffer is now full
    assert_eq!(buffer.write(4), Ok(()));

    // Overwrite the oldest element
    assert_eq!(buffer.write(5), Ok(()));

    // Read all elements
    assert_eq!(buffer.read(), Some(1).as_ref());
    assert_eq!(buffer.read(), Some(2).as_ref());
    assert_eq!(buffer.read(), Some(3).as_ref());

    // Write more elements
    assert_eq!(buffer.write(6), Ok(()));
    assert_eq!(buffer.write(7), Ok(()));

    buffer.make_contiguos();

    // Check the positions of head and tail
    assert_eq!(buffer.head(), 0);
    assert_eq!(buffer.tail(), 5);
    assert_eq!(buffer.read(), Some(1).as_ref())
}
