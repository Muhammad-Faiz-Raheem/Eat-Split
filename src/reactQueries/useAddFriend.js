import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addFriend as addFriendApi } from "../services/apiFriends";
import toast from "react-hot-toast";

export function useAddFriend() {
  const queryClient = useQueryClient();

  const { mutate: addFriend, isPending: isAdding } = useMutation({
    mutationFn: addFriendApi,
    onSuccess: () => {
      toast.success("New friend has been added");
      queryClient.invalidateQueries({
        queryKey: ["friends"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { addFriend, isAdding };
}
