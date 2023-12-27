use serde::{Deserialize, Serialize};
use wasm_bindgen::prelude::*;

use crate::board::{self, Board, Chess, ChessType};

const BOARD_WIDTH: usize = 8;
const BOARD_HEIGHT: usize = 8;

#[wasm_bindgen]
#[derive(Debug, Clone, Copy, PartialEq, Eq, Serialize, Deserialize)]
pub enum JSChessType {
    King = 1,    // 帅
    Advisor = 2, // 士
    Bishop = 3,  // 相
    Knight = 4,  // 马
    Rook = 5,    // 车
    Cannon = 6,  // 炮
    Pawn = 0,    // 兵
}

impl From<i32> for JSChessType {
    fn from(value: i32) -> Self {
        match value {
            1 => JSChessType::King,
            2 => JSChessType::Advisor,
            3 => JSChessType::Bishop,
            4 => JSChessType::Knight,
            5 => JSChessType::Rook,
            6 => JSChessType::Cannon,
            0 => JSChessType::Pawn,
            // Handle other values as needed or return a default variant
            _ => panic!("Invalid ChessType value: {}", value),
        }
    }
}
#[wasm_bindgen]
#[derive(Debug, Clone, Copy, PartialEq, Eq, Serialize, Deserialize)]
pub enum JSChessPlayer {
    Red,
    Black,
    None,
}

#[wasm_bindgen]
#[derive(Debug, Clone, Copy, PartialEq, Eq, Serialize, Deserialize)]
pub struct JSChess {
    #[wasm_bindgen(skip)]
    pub chess_type: Option<JSChessType>,
    pub player: JSChessPlayer,
}

impl From<Chess> for JSChess {
    fn from(value: Chess) -> Self {
        match value {
            Chess::Red(_chess_type) => JSChess {
                player: JSChessPlayer::Black,
                chess_type: Some(_chess_type.value().into()),
            },
            Chess::Black(_chess_type) => JSChess {
                player: JSChessPlayer::Red,
                chess_type: Some(_chess_type.value().into()),
            },
            // Handle other values as needed or return a default variant
            _ => JSChess {
                player: JSChessPlayer::None,
                chess_type: None,
            },
        }
    }
}

#[wasm_bindgen]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub struct JSChessPosition {
    pub row: usize,
    pub col: usize,
}
#[derive(Serialize, Deserialize)]
#[wasm_bindgen]
pub struct JSChessBoard {
    chesses: Vec<Vec<JSChess>>,
}

#[wasm_bindgen]
impl JSChessBoard {
    #[wasm_bindgen(constructor)]
    pub fn new() -> JSChessBoard {
        let board = Board::init();
        // Initialize your ChessBoard as needed
        // For simplicity, let's initialize it with None for all positions
        let chesses = board
            .chesses
            .iter()
            .map(|row| row.iter().map(|&chess| chess.into()).collect())
            .collect();
        JSChessBoard { chesses }
    }

    #[wasm_bindgen]
    pub fn get_chess_at(&self, row: usize, col: usize) -> JSChess {
        self.chesses[row][col]
    }
    #[wasm_bindgen]
    pub fn get_board(&self) -> JsValue {
        serde_wasm_bindgen::to_value(&self.chesses).unwrap()
    }
}

#[wasm_bindgen]
pub fn create_chess_board() -> JSChessBoard {
    JSChessBoard::new()
}
