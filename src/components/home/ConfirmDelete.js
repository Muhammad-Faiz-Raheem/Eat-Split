import { useMain } from "../../context/MainContext";
import SpinnerMini from "../../ui/SpinnerMini";
import { Button } from "../../ui/Button";

function ConfirmDelete() {
  const { handleConfirmDelete, handleDeleteFriend, isDeleting } = useMain();

  return (
    <div className="confirm-delete-overlay">
      <div className="confirm-delete-container">
        <h2>Are you sure you want to delete this friend?</h2>
        {isDeleting && <SpinnerMini />}
        <div className="confirm-delete-actions">
          <Button
            type="delete"
            onClick={handleDeleteFriend}
            disabled={isDeleting}
          >
            Yes Delete
          </Button>
          <Button onClick={handleConfirmDelete} disabled={isDeleting}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDelete;
