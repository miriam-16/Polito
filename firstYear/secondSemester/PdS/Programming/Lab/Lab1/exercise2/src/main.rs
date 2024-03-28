use std::fs::read_to_string;
use std::fs::read;
use std::time::SystemTime;



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




fn main() {
    let f_string = read_file_as_string("src/text.txt");
    println!("{}", f_string);
    let f_hex = read_file("src/text.txt");
    println!("{}", f_hex);

    let error_simple = Error::Simple(SystemTime::now());
    print_error(error_simple);

    let error_complex = Error::Complex(SystemTime::now(), "Complex".to_string());
    print_error(error_complex);
}
