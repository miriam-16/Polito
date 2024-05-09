pub mod solution {

    use std::ops::Index;

    #[derive(Debug, Clone)]
    pub struct CircularBuffer<T> {
        buffer: Vec<T>,
        head: usize,
        tail: usize,
        size: usize,
    }

    impl<T> CircularBuffer<T> {
        pub fn new(capacity: usize) -> Self {
            CircularBuffer {
                buffer: Vec::<T>::with_capacity(capacity),
                head: 0,
                tail: 0,
                size: 0,
            }
        }

        pub fn write(&mut self, item: T) -> Result<(), &'static str> {
            if self.size >= self.buffer.capacity() {
                // Buffer is full, overwrite the oldest element
                //return Err("No more space");
                self.overwrite(item);
                Ok(())
            } else {
                self.buffer.push(item);
                // Buffer is not full, append the item to the buffer
                self.tail = self.tail + 1;
                self.size += 1;
                Ok(())
            }
        }

        pub fn read(&mut self) -> Option<&T> {
            if self.size == 0 {
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

        pub fn head(&self) -> usize {
            self.head
        }

        pub fn tail(&self) -> usize {
            self.tail
        }

        // può essere usata quando il buffer è pieno per forzare una
        // scrittura riscrivendo l’elemento più vecchio
        pub fn overwrite(&mut self, item: T) {
            if self.size < self.buffer.capacity() {
                let _ = self.write(item);
            } else {
                self.buffer.pop();
                self.buffer.push(item);
                self.tail = 0;
            }
        }

        /**
         * Quando tail < head (tail ha raggiunto la fine ed è ritornato a zero) i valori nel buffer sono
         * spezzati in due segmenti separati, una parte all’inizio, una parte alla fine dell’array, con lo
         * spazio vuoto in mezzo. Non è quindi contiguo e make_contiguos() riorganizza il buffer,
         * copiando in cima all’array tutti gli elementi mantenendo l’ordine di lettura, rendendolo così di
         * nuovo contiguo.
         */
        pub fn make_contiguos(&mut self) {
            if self.tail < self.head {
                self.buffer.shrink_to_fit();
                self.head = 0;
                self.tail = self.size;
            }
        }
    }

    impl<T> Default for CircularBuffer<T> {
        fn default() -> Self {
            Self {
                buffer: Default::default(),
                head: Default::default(),
                tail: Default::default(),
                size: Default::default(),
            }
        }
    }

    impl<T> Index<usize> for CircularBuffer<T> {
        type Output = T;
        fn index(&self, index: usize) -> &Self::Output {
            &self.buffer[index]
        }
    }
}
