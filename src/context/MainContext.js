import { createContext, useContext, useEffect, useState } from "react";
import useQuerySelector from "../hooks/useQuerySelector";
import { useFriends } from "../reactQueries/useFriends";
import { useAddFriend } from "../reactQueries/useAddFriend";
import { useUpdateBalance } from "../reactQueries/useUpdateBalance";
import { useDeleteFriend } from "../reactQueries/useDeleteFriend";
import { useUser } from "../components/authentication/useUser";
// import { SpinnerMini } from "../ui/SpinnerMini";

// const initialFriends = [
//   {
//     id: 118836,
//     name: "Clark",
//     image: "https://i.pravatar.cc/48?u=118836",
//     balance: -7,
//   },
//   {
//     id: 933372,
//     name: "Sarah",
//     image: "https://i.pravatar.cc/48?u=933372",
//     balance: 20,
//   },
//   {
//     id: 499476,
//     name: "Anthony",
//     image: "https://i.pravatar.cc/48?u=499476",
//     balance: 0,
//   },
// ];

// const initialFriends = fetchFriends();

const MainContext = createContext();

function MainProvider({ children }) {
  const isLaptop = useQuerySelector(1250);
  const isTablet = useQuerySelector(970);
  const isMobile = useQuerySelector(700);
  const isSmall = useQuerySelector(520);

  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState([]);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [selectTop, setSelectTop] = useState(0);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [selectDelFriend, setSelectDelFriend] = useState(null);
  const [isLogedIn, setIsLogedIn] = useState(false);

  //   useEffect(function () {
  //     async function fetchFriends() {
  //       const data = await getFriends();
  //       console.log(data);
  //       setFriends(data);
  //     }

  //     fetchFriends();
  //   }, []);

  const { addFriend, isAdding } = useAddFriend();
  const { toUpdateBalance, isUpdating } = useUpdateBalance();
  const { deleteFriend, isDeleting } = useDeleteFriend();
  const { user, isLoading: isLoadingUser, isAuthenticated } = useUser();
  const userID = user?.id;
  const { friends: data, isLoading } = useFriends(userID);

  useEffect(() => {
    if (!isLoading && !isLoadingUser && data) {
      setFriends(data);
    }
  }, [data, isLoading, isLoadingUser]);

  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
    setSelectedFriend(null);
  }

  function handleAddFriend(friend) {
    // setFriends((friends) => [...friends, friend]);
    // setShowAddFriend(false);
    addFriend({ ...friend });
  }

  function handleSelection(friend) {
    setSelectedFriend((curSelected) =>
      curSelected?.id === friend.id ? null : friend
    );
    setShowAddFriend(false);
  }

  function handleDelSelection(friend) {
    setSelectDelFriend((curSelected) =>
      curSelected?.id === friend.id ? null : friend
    );
    setShowAddFriend(false);
  }

  function handleTopSelection(value) {
    setSelectTop((curValue) => (curValue === value ? 0 : value));
  }

  function handleSplitBill(value) {
    // setFriends((friends) =>
    //   friends.map((friend) =>
    //     friend.id === selectedFriend.id
    //       ? { ...friend, balance: friend.balance + value }
    //       : friend
    //   )
    // );

    toUpdateBalance({
      newBalance: {
        ...selectedFriend,
        balance: selectedFriend.balance + value,
      },
      id: selectedFriend.id,
    });

    setSelectedFriend(null);
  }

  function handleConfirmDelete() {
    setConfirmDelete((confirm) => !confirm);
    setSelectDelFriend(null);
  }

  function handleDeleteFriend() {
    deleteFriend(selectDelFriend.id);
    setSelectDelFriend(null);
    setConfirmDelete(false);
  }

  function handleLogedIn() {
    setIsLogedIn((loged) => !loged);
  }

  return (
    <MainContext.Provider
      value={{
        user,
        isLaptop,
        isTablet,
        isMobile,
        isSmall,
        showAddFriend,
        friends,
        isLoading,
        selectedFriend,
        selectTop,
        selectDelFriend,
        confirmDelete,
        isLogedIn,
        handleConfirmDelete,
        handleShowAddFriend,
        handleAddFriend,
        handleSelection,
        handleTopSelection,
        handleSplitBill,
        handleDeleteFriend,
        handleDelSelection,
        handleLogedIn,
        isAdding,
        isUpdating,
        isDeleting,
        isLoadingUser,
        isAuthenticated,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}

function useMain() {
  const context = useContext(MainContext);
  if (context === undefined) {
    throw new Error("useMain must be used within a MainProvider");
  }
  return context;
}

export { MainProvider, useMain };
