trait MySlug{
    fn is_slug(&self) -> bool;
    fn to_slug(&self) -> String;
}

impl MySlug for String{
    fn to_slug(&self) -> String{
        slugify(&self)
    }
    
    fn is_slug(&self) -> bool{
        *self == self.to_slug()
    }
}

impl MySlug for &str {
    fn to_slug(&self) -> String {
        slugify(&self)
    }
    
    fn is_slug(&self) -> bool {
        *self == self.to_slug()
    }
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
    let s1 = String::from("Hello String");
    let s2 = "hello-slice";
    println!("{}", s1.is_slug()); // false
    println!("{}", s2.is_slug()); // true
    let s3: String = s1.to_slug();
    let s4: String = s2.to_slug();
    println!("s3:{} s4:{}", s3, s4); // stampa: s3:hello-string s4:hello-slice
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