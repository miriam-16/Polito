# Introduzione a Rust

# Come creare una direcotry RUST
**Cargo** è il programma ufficiale per la gestione di un package in Rust. 

```rust
//creare un nuovo progetto 
cargo new project_name

//creare una nuova libreria 
cargo new --lib library_name

//compilare e runnare un progetto
cargo build
cargo run
```
Quando viene lanciato il comando per la creazione del progetto, la directory creata ha una struttura quale:

```
project_name
|   src
    |main.rs
    |   my_module
        |mode.rs
        |inner_mod.rs
    |other_mod.rs
|cargo.toml
```