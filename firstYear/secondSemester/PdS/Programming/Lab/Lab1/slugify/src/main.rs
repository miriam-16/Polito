/*
cargo run -- --help                                                          shows the attributes of the struct Args
cargo run -- -s "Some text" -r 1 -v true
cargo run -- --slug-in "Some text" --repeat 1 --verbose true                 
*/

use clap::Parser;




#[derive(Parser, Debug)]
struct Args{
    #[arg (short, long, value_parser, num_args = 1.., value_delimiter = ' ')]
    slug_in: Vec<String>,

    #[arg(short, long)]
    repeat: Option<u8>,

    #[arg(short, long)]
    verbose: Option<bool>,
}

fn slugify(s: &str) -> String {
    let mut res = String::from("");
    for ch in s.to_lowercase().chars() {
        if ch.is_numeric() {
            res.push(ch);
        } else if ch.is_ascii_alphabetic() {
            res.push(ch);
        } else {
            let prec = conv(ch);
            if !res.ends_with("-") {
                res.push(prec);
            }
        }
    }
    if res.ends_with("-") && res.len() > 1 {
        res.pop();
    }

    res
}

fn conv(c: char) -> char {
    let mut res_converted: char = '-';
    const SUBS_I: &str =
        "àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìıİłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż";
    const SUBS_O: &str =
        "aaaaaaaaaacccddeeeeeeeegghiiiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz";

    for (c1, c2) in SUBS_I.chars().zip(SUBS_O.chars()) {
        if c1 == c {
            res_converted = c2;
            break;
        }
    }

    res_converted
}

fn main() {
    let args = Args::parse();
    for s in args.slug_in.iter() {
        println!("{}", slugify(s));
    }
}

#[test]
fn t1() {
    assert_eq!(slugify("è"), "e");
    assert_eq!(slugify("a"), "a");
    assert_eq!(slugify("◉"), "-");
    assert_eq!(slugify("ῶ"), "-");
    assert_eq!(slugify("hello world"), "hello-world");
    assert_eq!(slugify("èòà"), "eoa");
    assert_eq!(slugify(""), "");
    assert_eq!(slugify("   "), "-");
    assert_eq!(slugify("!!@#$"), "-");
    assert_eq!(slugify("@#$%^&*"), "-");
    assert_eq!(slugify("hello "), "hello");
    assert_eq!(slugify("!!@#$ "), "-");
    assert_eq!(slugify("!!@#$"), "-");
    assert_eq!(slugify("@#$%^&*"), "-");
    assert_eq!(slugify("hello "), "hello");
    assert_eq!(slugify("!!@#$ "), "-"); 
}