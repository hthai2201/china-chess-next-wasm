import React, { Fragment, useState } from 'react'
import { Chess, ChessPosition } from '../types'
import { checkSameChessPosition, getChessImg } from '../utils'

export interface ChessBoardProps {
  board: Chess[][]
}

const BOARD_WIDTH = 450
const BOARD_HEIGHT = 498
const BOARD_WIDTH_PADDING = 28 //BOARD_WIDTH * 0.044
const BOARD_HEIGHT_PADDING = 28 //BOARD_HEIGHT * 0.046
const CELL_WIDTH = (BOARD_WIDTH - BOARD_WIDTH_PADDING * 2) / 8
const CELL_HEIGHT = (BOARD_HEIGHT - BOARD_HEIGHT_PADDING * 2) / 9

function ChessBoard(props: ChessBoardProps) {
  const { board } = props
  const [selectedChess, setSelectedChess] = useState<ChessPosition>()
  const handleClickChess = (chess?: Chess | null, position?: ChessPosition) => {
    if (!chess) {
      return
    }
    return () => {
      setSelectedChess((prev) => {
        if (!prev || !position) {
          return position
        }
        if (checkSameChessPosition(prev, position)) {
          return undefined
        }
        return position
      })
    }
  }
  return (
    <div
      className="relative bg-cover"
      style={{
        backgroundImage: `url(/images/board.jpg)`,
        width: BOARD_WIDTH,
        height: BOARD_HEIGHT,
      }}
    >
      {selectedChess && (
        <div
          className="absolute z-0"
          style={{
            left:
              CELL_WIDTH * selectedChess.col +
              BOARD_WIDTH_PADDING -
              CELL_WIDTH / 2,
            top:
              CELL_HEIGHT * selectedChess.row +
              BOARD_HEIGHT_PADDING -
              CELL_HEIGHT / 2,
            width: CELL_WIDTH,
            height: CELL_HEIGHT,
          }}
        >
          <img
            alt={`${selectedChess.row + 1} + ${selectedChess.col + 1}`}
            src="/images/oos.gif"
          />
        </div>
      )}
      {board.map((row, rowIndex) => {
        return (
          <Fragment key={rowIndex}>
            {row.map((chess, chessIndex) => {
              return (
                <button
                  key={rowIndex + chessIndex}
                  className="absolute z-0"
                  style={{
                    left:
                      CELL_WIDTH * chessIndex +
                      BOARD_WIDTH_PADDING -
                      CELL_WIDTH / 2,
                    top:
                      CELL_HEIGHT * rowIndex +
                      BOARD_HEIGHT_PADDING -
                      CELL_HEIGHT / 2,
                    width: CELL_WIDTH,
                    height: CELL_HEIGHT,
                  }}
                  onClick={handleClickChess(chess, {
                    row: rowIndex,
                    col: chessIndex,
                  })}
                >
                  <img
                    alt={`${rowIndex + 1} + ${chessIndex + 1}`}
                    src={getChessImg(chess)}
                  />
                </button>
              )
            })}
          </Fragment>
        )
      })}
    </div>
  )
}
export default ChessBoard
