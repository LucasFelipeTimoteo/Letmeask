import React from 'react'
import CopyImg from '../assets/images/copy.svg'
import '../styles/room-code.scss'

type RoomCodeProps = {
  code: string
}

export function RoomCode(props: RoomCodeProps) {
  const copyRoomCodeToClipboard = () => {
    navigator.clipboard.writeText(props.code)
  }

  return (
    <button className="room-code" onClick={copyRoomCodeToClipboard}>
      <div>
        <img src={CopyImg} alt="copy room code" />
      </div>

      <span>Sala {props.code}</span>
    </button>
  )
}
