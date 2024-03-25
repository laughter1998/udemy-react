import { useState } from "react";
export default function Player({ initialName, symbol, isActive }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  const handleClickEdit = () => {
    setIsEditing((editing) => !editing);
    // setIsEditing(!isEditing);
    // setIsEditing(!isEditing);
  };
  const handleChangeInput = (event) => {
    setPlayerName(event.target.value);
  };

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  let btnCaption = "Edit";
  if (isEditing) {
    editablePlayerName = (
      <input type="text" value={playerName} onChange={handleChangeInput} />
    );
    btnCaption = "Save";
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClickEdit}>{btnCaption}</button>
    </li>
  );
}
