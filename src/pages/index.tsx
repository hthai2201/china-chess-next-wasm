import { Layout } from 'components/Layout'

import { ChessBoard, ChessBoardProps } from 'components/ChinaChess'
import {
  ChessPlayer,
  ChessPosition,
  ChessType,
} from 'components/ChinaChess/types'
import { useState } from 'react'

interface StatCardProps {
  title: string
  from: number
  to: number
  suffix?: string
}

const DashboardPage = () => {
  // const { user } = useAuthContext()
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <ChessBoard
        board={
          [
            [
              {
                player: ChessPlayer.Black,
                type: ChessType.Rook,
              },
              {
                player: ChessPlayer.Black,
                type: ChessType.Knight,
              },
              {
                player: ChessPlayer.Black,
                type: ChessType.Bishop,
              },
              {
                player: ChessPlayer.Black,
                type: ChessType.Advisor,
              },
              {
                player: ChessPlayer.Black,
                type: ChessType.King,
              },
              {
                player: ChessPlayer.Black,
                type: ChessType.Advisor,
              },
              {
                player: ChessPlayer.Black,
                type: ChessType.Bishop,
              },
              {
                player: ChessPlayer.Black,
                type: ChessType.Knight,
              },
              {
                player: ChessPlayer.Black,
                type: ChessType.Rook,
              },
            ],
            [null, null, null, null, null, null, null, null, null],
            [
              null,
              {
                player: ChessPlayer.Black,
                type: ChessType.Cannon,
              },
              null,
              null,
              null,
              null,
              null,
              {
                player: ChessPlayer.Black,
                type: ChessType.Cannon,
              },
              null,
            ],
            [
              {
                player: ChessPlayer.Black,
                type: ChessType.Pawn,
              },
              null,
              {
                player: ChessPlayer.Black,
                type: ChessType.Pawn,
              },
              null,
              {
                player: ChessPlayer.Black,
                type: ChessType.Pawn,
              },
              null,
              {
                player: ChessPlayer.Black,
                type: ChessType.Pawn,
              },
              null,
              {
                player: ChessPlayer.Black,
                type: ChessType.Pawn,
              },
            ],
            [null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null],
            [
              {
                player: ChessPlayer.Red,
                type: ChessType.Pawn,
              },
              null,
              {
                player: ChessPlayer.Red,
                type: ChessType.Pawn,
              },
              null,
              {
                player: ChessPlayer.Red,
                type: ChessType.Pawn,
              },
              null,
              {
                player: ChessPlayer.Red,
                type: ChessType.Pawn,
              },
              null,
              {
                player: ChessPlayer.Red,
                type: ChessType.Pawn,
              },
            ],
            [
              null,
              {
                player: ChessPlayer.Red,
                type: ChessType.Cannon,
              },
              null,
              null,
              null,
              null,
              null,
              {
                player: ChessPlayer.Red,
                type: ChessType.Cannon,
              },
              null,
            ],
            [null, null, null, null, null, null, null, null, null],
            [
              {
                player: ChessPlayer.Red,
                type: ChessType.Rook,
              },
              {
                player: ChessPlayer.Red,
                type: ChessType.Knight,
              },
              {
                player: ChessPlayer.Red,
                type: ChessType.Bishop,
              },
              {
                player: ChessPlayer.Red,
                type: ChessType.Advisor,
              },
              {
                player: ChessPlayer.Red,
                type: ChessType.King,
              },
              {
                player: ChessPlayer.Red,
                type: ChessType.Advisor,
              },
              {
                player: ChessPlayer.Red,
                type: ChessType.Bishop,
              },
              {
                player: ChessPlayer.Red,
                type: ChessType.Knight,
              },
              {
                player: ChessPlayer.Red,
                type: ChessType.Rook,
              },
            ],
          ] as ChessBoardProps['board']
        }
      />
    </div>
  )
}

export default DashboardPage
