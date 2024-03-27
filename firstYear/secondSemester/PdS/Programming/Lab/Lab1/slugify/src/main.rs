fn slugify(s: &str) -> String {
    let lower_case = s.to_lowercase();
    println!("{}", lower_case);
    lower_case
}

//returns:
//  c se è uno ammesso
//  la lettera non accentata corrispondente se viene trovata
//  “-” negli altri casi
/* fn conv(c: char) -> char {
    const SUBS_I: &str =
        "àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìıİłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż";
    const SUBS_O: &str =
        "aaaaaaaaaacccddeeeeeeeegghiiiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz";


} */

fn main() {
    //println!("Hello, world!");
    let s = String::from("Hello, world!");
    slugify(&s);
}
