use std::fs;

use clap::{Parser, Subcommand};

#[derive(Parser)]
#[command(version, about, long_about = None)]
pub struct Args {
    #[command(subcommand)]
    pub command: Commands,
}

#[derive(Subcommand)]
pub enum Commands {
    /// Creates a new board
    New {
        /// name of the file containing the board
        #[arg(short, long)]
        file: String,

        /// list of starter boats (comma separated)
        #[arg(short, long)]
        boats: String,
    },

    /// Add a new boat to the board, if possible
    Add {
        /// name of the file containing the board
        #[arg(short, long)]
        file: String,

        /// starting coordinates (comma separated)
        #[arg(short, long)]
        start: String,

        /// boat to move in the format [N{V/H}] where N is the boat size and
        /// {V/H} is the orientation (respectively Vertical or Horizontal)
        /// for example to move a boat of size 3 vertically the input would be 3V
        #[arg(short, long)]
        boat: String,
    },
}



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
    pub fn new(boats: &[u8]) -> Board {
        Board {
            boats: boats.try_into().unwrap(),
            data: [[0; bsize]; bsize],
        }
    }

/*     /* crea una board a partire da una stringa che rappresenta tutto il contenuto del file board.txt */
    pub fn from(s: String) -> Board{}

    /* aggiunge la nave alla board, restituendo la nuova board se possibile */
    /* BONUS: provare a non *non copiare* data quando si crea e restituisce una nuova board con la barca, come si può fare? */
    pub fn add_boat(self, boat: Boat, pos: (usize, usize)) -> Result<Board, Error>{}

    /* converte la board in una stringa salvabile su file */ 
    pub fn to_string(&self) -> String{
        
    } */
} 

fn main() {
    let args = Args::parse();
    let mut board : Board;

    match &args.command {
        Commands::New { file, boats } => {
            board = Board::new(
                boats.split(",")
                    .map(|s| -> u8 { s.parse().unwrap() })
                    .collect::<Vec<u8>>()
                    .as_slice(),
            );

            //fs::write(file, board.to_string());
        }
            

        Commands::Add { file, boat, start } => {
            let (size, direction) = boat.split_at(1);
            let boat = match direction {
                "V" => Boat::Vertical(size.parse().unwrap()), 
                "H" => Boat::Horizontal(size.parse().unwrap()),
                _ => panic!("Invalid direction!"),
            };

            let mut coordinates = start.split(",");
            let x :i8 = coordinates.next().unwrap().parse().unwrap();
            let y :i8 = coordinates.next().unwrap().parse().unwrap();

            // Use x and y as needed

            // Rest of the code
        }
    }
}
