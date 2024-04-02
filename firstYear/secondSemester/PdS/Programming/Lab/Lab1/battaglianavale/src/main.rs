use std::fs::{self, read_to_string};

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
pub struct Board {
    boats: [u8; 4],
    data: [[u8; bsize]; bsize],
}

pub enum Error {
    Overlap,
    OutOfBounds,
    BoatCount,
}

pub enum Boat {
    Vertical(usize),
    Horizontal(usize),
}

impl Board {
    /* crea una board vuota con una disponibilità di navi */
    pub fn new(boats: &[u8]) -> Board {
        /*         if boats.len() != bsize {
            panic!("Boat count must be equal to bsize.");
        } */
        println!("{:?}", boats);
        Board {
            boats: boats.try_into().unwrap(),
            data: [[0; bsize]; bsize],
        }
    }

    /* crea una board a partire da una stringa che rappresenta tutto il contenuto del file board.txt */
    pub fn from(s: String) -> Board {
        let lines = s.split("\n");
        let mut boats = [0u8; 4];
        let mut data = [[0u8; bsize]; bsize];

        for (i, line) in lines.enumerate() {
            if i == 0 {
                for (i, value) in line.split(" ").enumerate() {
                    boats[i] = value.parse().unwrap();
                }
            } else {
                for (j, c) in line.char_indices() {
                    data[i - 1][j] = if c == ' ' { 0 } else { 1 };
                }
            }
        }

        Board { boats, data }
    }

    /* aggiunge la nave alla board, restituendo la nuova board se possibile */
    /* BONUS: provare a non *non copiare* data quando si crea e restituisce una nuova board con la barca, come si può fare? */
    pub fn add_boat(self, boat: Boat, pos: (usize, usize)) -> Result<Board, Error> {
        let mut res = self;

        match boat {
            Boat::Vertical(n) => {
                let end = pos.0 + n;
                if end > bsize {
                    return Err(Error::OutOfBounds);
                }

                if res.boats[n - 1] <= 0 {
                    return Err(Error::BoatCount);
                }

                for i in pos.0..end {
                    if res.data[i - 1][pos.1 - 1] !=0 {
                        return Err(Error::Overlap);
                    }
                }

                for i in pos.0..end {
                    res.data[i - 1][pos.1 - 1] = 1;
                }
                res.boats[n - 1] -= 1;
            }

            Boat::Horizontal(n) => {
                let end = pos.1 + n;
                if end > bsize {
                    return Err(Error::OutOfBounds);
                }

                if res.boats[n - 1] <= 0 {
                    return Err(Error::BoatCount);
                }

                for i in pos.1..end {
                    if res.data[pos.0 - 1][i - 1] != 0 {
                        return Err(Error::Overlap);
                    }
                }

                for i in pos.1..end {
                    res.data[pos.0 - 1][i - 1] = 1;
                }
                res.boats[n - 1] -= 1;
            }
        }
        Ok(res)
    }

    /* converte la board in una stringa salvabile su file */
    pub fn to_string(&self) -> String {
        let header = self
            .boats
            .iter()
            .map(ToString::to_string)
            .collect::<Vec<_>>()
            .join(" ");

        let data = self
            .data
            .iter()
            .map(|line| {
                line.iter()
                    .map(|x| if *x == 0 { " " } else { "B" })
                    .collect::<Vec<_>>()
                    .concat()
            })
            .collect::<Vec<_>>()
            .join("\n");

        [header, data].join("\n")
    }
}

fn main() {
    /*
    cargo run -- new board.txt 4,3,2,1
    questo crea una nuova board vuota nel file board.txt e può ospitare 4 navi da 1, 3
    navi da 2, 2 navi da 3, e una da 4.

    cargo run -- add board.txt 3V 10,10
    legge la board in board.txt, aggiunge una nave da 3 caselle in verticale, partendo
    dalla casella (10,10) e andando giù 3 caselle, fino a (12,10). Possibili direzioni: H e V.
    Aggiunta la nave, salva il risultato in board, aggiornando anche le navi disponibili
    nella prima linea.
    Gli indici iniziano da 1 fino a 20 */
    let args = Args::parse();

    match &args.command {
        // cargo run -- new -f board.txt -b 4,3,2,1
        Commands::New { file, boats } => {
            println!("{}", boats);

            let board = Board::new(
                boats
                    .split(",")
                    .map(|s| s.parse::<u8>().unwrap())
                    .collect::<Vec<_>>()
                    .as_slice(),
            );

            let board_file = fs::write(file, board.to_string());
        }
        //cargo run -- add -f board.txt -b 3V -s 10,10
        Commands::Add { file, boat, start } => {
            let board = Board::from(read_to_string(file).unwrap());

            let (size, direction) = boat.split_at(1);
            let boat = match direction {
                "V" => Boat::Vertical(size.parse().unwrap()),
                "H" => Boat::Horizontal(size.parse().unwrap()),
                _ => panic!("Invalid direction!"),
            };

            let mut coordinates = start.split(",");
            let x: usize = coordinates.next().unwrap().parse().unwrap();
            let y: usize = coordinates.next().unwrap().parse().unwrap();
            let coord = (x, y);

            
            match board.add_boat(boat, (x, y)) {
                Err(e) => println!("Error"),
                Ok(res) => {
                    fs::write(file, res.to_string()).unwrap();
                }
            }
        }
    }
}
