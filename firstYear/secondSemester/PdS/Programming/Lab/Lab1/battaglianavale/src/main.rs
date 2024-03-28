const bsize: usize = 20;
pub struct  Board{
    boats: [u8;bsize],
    data: [[u8;bsize]; bsize],
}

pub enum Error{
    Overlap, 
    OutOfBounds,
    BoatCount,
}

pub enum Boat{
    Vertical(usize),
    Horizontal(usize)
}

impl Board {
    /* crea una board vuota con una disponibilità di navi */
    pub fn new(boats: &[u8]) -> Board{}

    /* crea una board a partire da una stringa che rappresenta tutto il contenuto del file board.txt */
    pub fn from(s: String) -> Board{}

    /* aggiunge la nave alla board, restituendo la nuova board se possibile */
    /* BONUS: provare a non *non copiare* data quando si crea e restituisce una nuova board con la barca, come si può fare? */
    pub fn add_boat(self, boat: Boat, pos: (usize, usize)) -> Result<Board, Error>{}

    /* converte la board in una stringa salvabile su file */
    pub fn to_string(&self) -> String{}
}

fn main() {
    println!("Hello, world!");
}
