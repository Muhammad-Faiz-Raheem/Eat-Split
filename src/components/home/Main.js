import { useMain } from "../../context/MainContext";
import Spinner from "../../ui/Spinner";
import { Button } from "../../ui/Button";
import ConfirmDelete from "./ConfirmDelete";
import { FormAddFriend } from "./FormAddFriend";
import { FormSpitBill } from "./FormSpitBill";
import { FriendsList } from "./FriendsList";

function Main() {
  const {
    isTablet,
    isSmall,
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
                  ? 100 + (409 - selectBottom)
                  : ""
                : "",
          }}
        >
          <div className="sidebar sidebar-border">
            <FriendsList />

            {showAddFriend && <FormAddFriend />}

            <Button onClick={handleShowAddFriend}>
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
