use std::{cell::Ref, fmt::{Error}, ops::{Add, AddAssign, Index}};

fn main() {
    println!("Hello, world!");
}

#[derive(Debug, Clone)]
pub struct CircularBuffer<T> {
    buffer: Vec<T>,
    head: usize,
    tail:usize,
    size: usize,
}

impl<T> CircularBuffer<T> {
    pub fn new(capacity: usize) -> Self {
        CircularBuffer{
            buffer: Vec::<T>::with_capacity(capacity),
            head: 0,
            tail: 0,
            size: 0,
        }
    }

    pub fn write(&mut self, item: T) -> Result<(), &'static str> {
        if self.size >= self.buffer.capacity() {
            // Buffer is full, overwrite the oldest element
            return Err("No more space");
        }
            self.buffer.push(item);
            // Buffer is not full, append the item to the buffer
            self.tail = self.tail + 1;
            Ok(())
    }



    pub fn read(&mut self) -> Option<&T> {
        if self.head == 0 {
            return None;
        }
        let old_head = self.head;
        self.head = (self.head + 1) % self.buffer.capacity();
        self.buffer.get(old_head)

    }

    pub fn clear(&mut self) {
        self.buffer.clear();
        self.size = 0;
        self.head = 0;
        self.tail = 0;
    }


    pub fn size(&self) -> usize {
        self.size
    }


    // può essere usata quando il buffer è pieno per forzare una
    // scrittura riscrivendo l’elemento più vecchio
    pub fn overwrite(&mut self, item:T) {

    }


    // vedi sotto*
    pub fn make_contiguos(&mut self) {};
}

impl<T> Default for CircularBuffer<T>{
    fn default() -> Self {
        Self { buffer: Default::default(), head: Default::default(), tail: Default::default() }
    }
}

impl<T> Index<usize> for CircularBuffer<T> {
    type Output = T;
    fn index(&self, index: usize) -> &Self::Output {
        &self.buffer[index]
    }
}

