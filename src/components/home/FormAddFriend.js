import { useState } from "react";
import { useMain } from "../../context/MainContext";
import { Button } from "../../ui/Button";
import SpinnerMini from "../../ui/SpinnerMini";

export function FormAddFriend() {
  const { handleAddFriend, isAdding, user, isLoadingUser } = useMain();

  const [friendName, setFriendName] = useState("");
  // const [image, setImage] = useState("https://i.pravatar.cc/48");
  const [image, setImage] = useState(null);

  if (isAdding || isLoadingUser) return <SpinnerMini />;

  function handleSubmitFriend(e) {
    e.preventDefault();

    if (!friendName || !image) return;

    // const id = crypto.randomUUID();
    const newFrined = {
      friendName,
      image,
      balance: 0,
      userID: user?.id,
    };
    // console.log(newFrined);
    handleAddFriend(newFrined);
    setFriendName("");
    setImage(null);
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmitFriend}>
      <label>✔ Friend Name</label>
      <input
        type="text"
        value={friendName}
        onChange={(e) => setFriendName(e.target.value)}
      />

      <label>✔ Image URL</label>
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />

      <Button>Add</Button>
    </form>
  );
}
