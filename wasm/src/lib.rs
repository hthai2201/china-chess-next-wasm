#![feature(lazy_cell)]

use engine::UCCIEngine;
use wasm_bindgen::prelude::*;
use wasm_bindgen::prelude::*;
pub mod board;
pub mod constant;
pub mod engine;
pub mod game;
pub mod zobrist;

#[wasm_bindgen()]
pub fn init() -> game::JSChessBoard {
    // let game = UCCIEngine::new(include_str!("../BOOK.DAT").into());

    game::create_chess_board()
}
