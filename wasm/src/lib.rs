#![feature(lazy_cell)]

use std::collections::HashMap;

use wasm_bindgen::prelude::*;
pub mod board;
pub mod constant;
pub mod engine;
pub mod zobrist;

#[wasm_bindgen()]
pub fn init() -> JsValue {
    // return UCCIEngine::new(include_str!("../BOOK.DAT").into());

    let mut field1 = HashMap::new();
    field1.insert(0, String::from("ex"));
    let example = Example {
        field1,
        field2: vec![vec![1., 2.], vec![3., 4.]],
        field3: [1., 2., 3., 4.],
    };

    let a = serde_wasm_bindgen::to_value(&example).unwrap();
    return a;
}

use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize)]
pub struct Example {
    pub field1: HashMap<u32, String>,
    pub field2: Vec<Vec<f32>>,
    pub field3: [f32; 4],
}
