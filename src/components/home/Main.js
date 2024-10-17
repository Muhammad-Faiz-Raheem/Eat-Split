import { useMain } from "../../context/MainContext";
import Spinner from "../../ui/Spinner";
import { Button } from "../../ui/Button";
import ConfirmDelete from "./ConfirmDelete";
import { FormAddFriend } from "./FormAddFriend";
import { FormSpitBill } from "./FormSpitBill";
import { FriendsList } from "./FriendsList";
import { useEffect, useRef, useState } from "react";

function Main() {
  const {
    isTablet,
    isSmall,
    friends,
    selectBottom,
    handleShowAddFriend,
    selectedFriend,
    showAddFriend,
    confirmDelete,
    isLoading,
    isAdding,
    isDeleting,
    isUpdating,
  } = useMain();

  const appBottomRef = useRef();
  const [appBottom, setAppBottom] = useState(0);

  useEffect(
    function () {
      const rect = appBottomRef.current.getBoundingClientRect();
      const appHeightFromBottom =
        document.body.scrollHeight - (rect.top + window.scrollY);
      setAppBottom(appHeightFromBottom);
    },
    [friends.length, showAddFriend]
  );

  return (
    <div>
      <div
        className="container"
        style={{
          // marginLeft: !isLaptop ? 150 : !isTablet ? 100 : 0,
          marginLeft: !isTablet ? 150 : 0,
          justifyContent: !isTablet ? "flex-start" : "center",
        }}
      >
        <div
          className="app"
          style={{
            marginTop: isSmall ? "300px" : isTablet ? "250px" : "200px",
            marginBottom:
              isTablet && selectedFriend
                ? selectBottom < 511
                  ? 511 - (selectBottom - appBottom) - 90
                  : ""
                : "",
          }}
        >
          <div className="sidebar sidebar-border">
            <FriendsList />

            {showAddFriend && <FormAddFriend />}

            <Button onClick={handleShowAddFriend} reff={appBottomRef}>
              {showAddFriend ? "Close" : "Add Friend"}
            </Button>
          </div>

          {selectedFriend && <FormSpitBill />}
        </div>
      </div>

      <div>{confirmDelete && <ConfirmDelete />}</div>

      <div>
        {(isLoading || isAdding || isDeleting || isUpdating) && <Spinner />}
      </div>
    </div>
  );
}

export default Main;
