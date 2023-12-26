import {
  Chess,
  ChessPlayer,
  ChessPosition,
  ChessTurn,
  ChessType,
} from './types'

export function getChessImg(chess?: Chess | null) {
  const typeMapper: Record<ChessType, string> = {
    [ChessType.Advisor]: 'a',
    [ChessType.Bishop]: 'b',
    [ChessType.Cannon]: 'c',
    [ChessType.King]: 'k',
    [ChessType.Knight]: 'n',
    [ChessType.Pawn]: 'p',
    [ChessType.Rook]: 'r',
  }
  const playerMapper: Record<ChessPlayer, string> = {
    [ChessTurn.Red]: 'r',
    [ChessTurn.Black]: 'b',
  }
  if (!chess || !typeMapper[chess.type] || !playerMapper[chess.player]) {
    return `/images/oo.gif`
  }
  return `/images/${playerMapper[chess.player]}${typeMapper[chess.type]}.gif`
}

export function checkSameChessPosition(a: ChessPosition, b: ChessPosition) {
  return a.col === b.col && a.row === b.row
}
