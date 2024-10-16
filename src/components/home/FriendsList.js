import { useMain } from "../../context/MainContext";
import { Friend } from "./Friend";
import SpinnerMini from "../../ui/SpinnerMini";

export function FriendsList() {
  const { friends, isLoading } = useMain();

  if (isLoading) return <SpinnerMini />;

  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}
