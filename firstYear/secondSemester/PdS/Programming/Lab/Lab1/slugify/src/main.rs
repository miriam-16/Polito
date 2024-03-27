fn slugify(s: &str) -> String {
    let mut res = String::from("");
    for ch in s.to_lowercase().chars(){
        if ch.is_numeric() {
            res.push(ch);
        } else if ch.is_ascii_alphabetic() {
            res.push(ch)
        } else {
            let prec = conv(ch);
            if !res.ends_with("-"){
                res.push(prec);
            }
        }
    }
    if res.ends_with("-") && res.len()>1{
        res.pop();
    }
    
    res

}

//  c se è uno ammesso
//  la lettera non accentata corrispondente se viene trovata
//  “-” negli altri casi
fn conv(c: char) -> char {
    let mut res_converted: char = '-';
    const SUBS_I: &str =
        "àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìıİłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż";
    const SUBS_O: &str =
        "aaaaaaaaaacccddeeeeeeeegghiiiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz";

    /*     let converted_c = c.to_string().as_bytes();

    const SUBS_I_converted: &[u8] = SUBS_I.as_bytes();
    const SUBS_O_converted: &[u8] = SUBS_O.as_bytes(); */

    for (c1, c2) in SUBS_I.chars().zip(SUBS_O.chars()) {
        if c1 == c {
            res_converted = c2;
        }
    }

    res_converted
}

fn main() {
    let s = String::from("1Hellè, world!⚞");
    print!("{}", slugify(&s));

}

#[test]
fn t1() {
    // valore = preparazione test
    assert_eq!(slugify("1Hellè, world!⚞"), "1helle-world");
    assert_eq!(slugify("⚞"), "-");
    assert_eq!(slugify("!!"), "-");
}