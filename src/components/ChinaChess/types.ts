export enum ChessType {
  King = 1, // 帅
  Advisor = 2, // 士
  Bishop = 3, // 相
  Knight = 4, // 马
  Rook = 5, // 车
  Cannon = 6, // 炮
  Pawn = 0, // 兵
}

export enum ChessTurn {
  Black,
  Red,
  None,
}

export interface ChessPosition {
  row: number
  col: number
}
export enum ChessPlayer {
  Red,
  Black,
}
export interface Chess {
  type: ChessType
  player: ChessPlayer
}
export interface ChessMove {
  player: ChessPlayer
  from: ChessPosition
  to: ChessPosition
  chess: ChessType
  capture?: ChessType
}
