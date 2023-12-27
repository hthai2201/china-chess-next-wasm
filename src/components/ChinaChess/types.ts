export enum ChessType {
  King = 'King', // 帅
  Advisor = 'Advisor', // 士
  Bishop = 'Bishop', // 相
  Knight = 'Knight', // 马
  Rook = 'Rook', // 车
  Cannon = 'Cannon', // 炮
  Pawn = 'Pawn', // 兵
  None = 'None',
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
  Red = 'Red',
  Black = 'Black',
}
export interface Chess {
  chess_type: ChessType
  player: ChessPlayer
}
export interface ChessMove {
  player: ChessPlayer
  from: ChessPosition
  to: ChessPosition
  chess: ChessType
  capture?: ChessType
}
