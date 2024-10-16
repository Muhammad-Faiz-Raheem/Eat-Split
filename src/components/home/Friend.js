import { useRef } from "react";
import { useMain } from "../../context/MainContext";
import { Button } from "../../ui/Button";

export function Friend({ friend }) {
  const {
    handleSelection,
    handleTopSelection,
    selectedFriend,
    handleDelSelection,
    selectDelFriend,
    handleConfirmDelete,
    isDeleting,
  } = useMain();

  const isSelected = selectedFriend?.id === friend.id;
  const isDelSelected = selectDelFriend?.id === friend.id;
  const buttonRef = useRef(null);

  function handleClick() {
    handleSelection(friend);
    // Get the position of the button from top
    const rect = buttonRef.current.getBoundingClientRect();
    const heightFromTop = rect.top + window.scrollY;
    handleTopSelection(heightFromTop);
  }

  function handleDelete() {
    handleConfirmDelete();
    handleDelSelection(friend);
  }

  return (
    <li
      className={isSelected || isDelSelected ? "selected" : ""}
      style={{ position: "relative" }}
    >
      <img
        src={friend.image}
        alt={friend.friendName}
        height={45}
        loading="lazy"
      />
      <h3 style={{ textTransform: "capitalize" }}>{friend.friendName}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.friendName} ${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.friendName} owes you ${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.friendName} are even</p>}

      <Button reff={buttonRef} onClick={handleClick}>
        {isSelected ? "Close" : "Select"}
      </Button>

      <Button onClick={handleDelete} type="delete" disabled={isDeleting}>
        Delete
      </Button>
    </li>
  );
}
