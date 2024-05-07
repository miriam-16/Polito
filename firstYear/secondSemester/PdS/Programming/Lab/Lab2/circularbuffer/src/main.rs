use std::{fmt::{Error, Result}, ops::{Add, AddAssign, Index}};

fn main() {
    println!("Hello, world!");
}

#[derive(Debug, Clone)]
pub struct CircularBuffer<T> {
    buffer: Vec<T>,
    head: usize,
    tail:usize,

}

impl<T> CircularBuffer<T> {
    pub fn new(capacity: usize) -> Self {
        CircularBuffer{
            buffer: Vec::<T>::with_capacity(capacity),
            head: 0,
            tail: 0,
        }
    }

    pub fn write(&mut self, item: T) -> Result<T, Error> {
        if self.buffer.len() == self.buffer.capacity() {
            // Buffer is full, overwrite the oldest element
            self.head = 0;
            self.tail = 0;
            Err("No more space")
        } else {
            self.buffer.push(item);
            // Buffer is not full, append the item to the buffer
            self.tail = self.tail + 1;
            Ok(())
        }
    }



    pub fn read(&mut self) -> Option<T> {
        if self.head == 0 {
            None
        } else {
            self.head = self.head + 1;
            Some(self.buffer[self.head -1])
        }
    }




    pub fn clear(&mut self) {};
    pub dn size(&self) -> usize;
    // può essere usata quando il buffer è pieno per forzare una
    // scrittura riscrivendo l’elemento più vecchio
    pub fn overwrite(&mut self, item: …) {};
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

