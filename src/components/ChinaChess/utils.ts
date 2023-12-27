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
    [ChessType.None]: 'oo',
  }
  const playerMapper: Record<ChessPlayer, string> = {
    [ChessPlayer.Red]: 'r',
    [ChessPlayer.Black]: 'b',
  }
  if (
    !chess ||
    !typeMapper[chess.chess_type] ||
    !playerMapper[chess.player] ||
    typeMapper[chess.chess_type] === ChessType.None
  ) {
    return `/images/oo.gif`
  }
  return `/images/${playerMapper[chess.player]}${
    typeMapper[chess.chess_type]
  }.gif`
}

export function checkSameChessPosition(a: ChessPosition, b: ChessPosition) {
  return a.col === b.col && a.row === b.row
}
