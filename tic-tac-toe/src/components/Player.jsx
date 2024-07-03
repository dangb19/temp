import { useState } from "react";

function Player({ initialName, symbol, isActive, onChangeName }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditting, setIsEditting] = useState(false);

  const handleEditClick = () => {
    setIsEditting((isEditting) => !isEditting);
    if (isEditting) onChangeName(symbol, playerName);
  };

  const handleInputChange = (e) => {
    setPlayerName(e.target.value);
  };

  let action = "Edit";
  let playerNameField = <span className="player-name">{playerName}</span>;
  if (isEditting) {
    playerNameField = (
      <input
        type="text"
        onChange={handleInputChange}
        value={playerName}
        required
      />
    );
    action = "Save";
  }

  return (
    <li className={isActive ? "active" : ""}>
      <span className="player">
        {playerNameField}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{action}</button>
    </li>
  );
}

export default Player;
