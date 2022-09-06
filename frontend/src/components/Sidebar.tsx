import { FC } from 'react'

type Player = {
  name: string
  score: number
  rank: number
}

interface PlayerProps {
  player: Player
}

function PlayerItem({ player }: PlayerProps) {
  return (
    <div className="p-2 m-1 bg-gray-100 text-gray-700 flex flex-row items-stretch">
      <div className="mr-2">#{player.rank}</div>
      <div>{player.name}</div>
      <div className="ml-auto">{player.score} points</div>
    </div>
  )
}

interface SidebarProps {
  players: Player[]
}

function Sidebar({ players }: SidebarProps) {
  return (
    <div
      style={{
        background:
          'linear-gradient(to right bottom, rgba(121, 40, 202, .8), rgba(255, 0, 128, .8))',
      }}
      className="flex flex-col h-full p-0.5 rounded-md"
    >
      <div className="flex flex-col h-full bg-white rounded-md">
        {players.map((player) => {
          return <PlayerItem player={player} />
        })}
      </div>
    </div>
  )
}

export default Sidebar
