use std::fs::read_to_string;
use std::fs::read;
use std::time::SystemTime;

/* point 1 */
fn read_file_as_string(path: &str) -> String {
    let f = read_to_string(path);
    match f{
        Ok(value) => {
            let mut s = String::from("");
            for ch in value.chars(){
                s.push_str(&format!("{}  ", ch));
            }
            s
        },
        Err(_) => return "Non è possibile aprire il file.".to_string(),
    }
} 

fn read_file(path: &str) -> String {
    let f = read(path);
    match f {
        Ok(value) => {
        let mut s = String::from("");
            for v in value.iter(){
                s.push_str(&format!("{:02x} ", v));
            }
            s 
        } 
        Err(_) => return "Non è possibile aprire il file.".to_string(),
    }
}

/* point 2 */
enum Error{
    Simple(SystemTime),
    Complex(SystemTime, String)
}

fn print_error(e: Error) -> (){
    match e{
        Error::Simple(_) => println!("it's a simple error"),
        Error::Complex(_, _) => println!("It's a complex error"),
    }
}

/* point 3 */
pub enum MulErr{Overflow, NegativeNumber}

pub fn mult(a: i32, b: i32) -> Result<u32, MulErr> {
    if a < 0 || b < 0 {
        Err(MulErr::NegativeNumber)
    } else {
        let result = a.checked_mul(b);
        match result {
            Some(value) => Ok(value as u32),
            None => Err(MulErr::Overflow),
        }
    }
}

/* point 4 */
struct Node{
    name: String, 
    size: u32, 
    count: u32,
}

impl Node {
    pub fn new(name: String) ->  Node {
        Node {name: name, size: 0,count: 0 }
        
    }

    pub fn size(&mut self, size: u32) -> &mut Node {
        self.size = size;
        self
    }

    pub fn count(&mut self, count: u32) -> &mut Node{
        self.count = count;
        self
    }

    pub fn grow(&mut self){
        self.size = self.size + 1
    }
    
    pub fn print(self) -> String{
        format!("name:{}    size:{}     count:{}", self.name.to_string(), self.size.to_string(), self.count.to_string())
    }
}





fn main() {
    let f_string = read_file_as_string("src/text.txt");
    println!("{}", f_string);
    let f_hex = read_file("src/text.txt");
    println!("{}", f_hex);

    let error_simple = Error::Simple(SystemTime::now());
    print_error(error_simple);

    let error_complex = Error::Complex(SystemTime::now(), "Complex".to_string());
    print_error(error_complex);


    let result1 = mult(5, 2);
    match result1 {
        Ok(value) => println!("Result 1: {}", value),
        Err(err) => match err {
            MulErr::Overflow => println!("Result 1: Overflow"),
            MulErr::NegativeNumber => println!("Result 1: Negative Number"),
        },
    }

    let result2 = mult(10333330, 200445455);
    match result2 {
        Ok(value) => println!("Result 2: {}", value),
        Err(err) => match err {
            MulErr::Overflow => println!("Result 2: Overflow"),
            MulErr::NegativeNumber => println!("Result 2: Negative Number"),
        },
    }

    let result3 = mult(-5, 10);
    match result3 {
        Ok(value) => println!("Result 3: {}", value),
        Err(err) => match err {
            MulErr::Overflow => println!("Result 3: Overflow"),
            MulErr::NegativeNumber => println!("Result 3: Negative Number"),
        },
    }



    let mut node = Node::new("Node1".to_string()).size(10).count(5);
    node.grow();
    println!("{}", node.print());
}
