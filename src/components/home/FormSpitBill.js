import { useState } from "react";
import { useMain } from "../../context/MainContext";
import { Button } from "../../ui/Button";

export function FormSpitBill() {
  const { selectedFriend, handleSplitBill, selectTop, isTablet, isSmall } =
    useMain();

  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function handleSubmitSplit(e) {
    e.preventDefault();

    if (!bill || !paidByUser) return;

    handleSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
  }

  return (
    <div
      style={{
        position: "absolute",
        left: isTablet ? 0 : 400,
        top: isSmall ? selectTop - 210 : isTablet ? selectTop - 155 : 0,
        marginLeft: isTablet ? "50%" : 0,
        translate: isTablet ? "-50%" : 0,
      }}
    >
      <form
        className="form-split-bill"
        style={{ padding: isSmall ? "3.2rem 1rem" : "" }}
        onSubmit={handleSubmitSplit}
      >
        <h2>Split a bill with {selectedFriend.friendName}</h2>

        <label>💰 Bill value</label>
        <input
          type="Number"
          value={bill}
          onChange={(e) => setBill(e.target.value)}
        />

        <label>🧍‍♂️ Your expense</label>
        <input
          type="Number"
          value={paidByUser}
          onChange={(e) =>
            setPaidByUser(
              Number(e.target.value) > bill ? paidByUser : e.target.value
            )
          }
        />

        <label>👫 {selectedFriend.friendName}'s expense</label>
        <input type="text" disabled value={paidByFriend} />

        <label>🤑 Who is paying the bill</label>
        <select
          value={whoIsPaying}
          onChange={(e) => setWhoIsPaying(e.target.value)}
        >
          <option value="user">You</option>
          <option value="friend">{selectedFriend.friendName}</option>
        </select>

        <Button>Split bill</Button>
      </form>
    </div>
  );
}
