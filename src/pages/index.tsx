import { Layout } from 'components/Layout'

import { ChessBoard, ChessBoardProps } from 'components/ChinaChess'
import {
  Chess,
  ChessPlayer,
  ChessPosition,
  ChessType,
} from 'components/ChinaChess/types'
import { useEffect, useState } from 'react'
import { WASM_READY_STATE, useWasm } from 'context/wasmContext'

interface StatCardProps {
  title: string
  from: number
  to: number
  suffix?: string
}

const DashboardPage = () => {
  const { wasm, readyState } = useWasm()
  const [board, setBoard] = useState<Chess[][]>([])
  useEffect(() => {
    if (readyState === WASM_READY_STATE.READY) {
      const boardObj = wasm?.init?.()
      if (!boardObj) {
        return
      }
      const board = boardObj.get_board() as unknown as Chess[][]
      console.log('board.get_board() :>> ', board)
      setBoard(board)
    }
  }, [readyState, wasm])
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <ChessBoard board={board} />
    </div>
  )
}

export default DashboardPage
