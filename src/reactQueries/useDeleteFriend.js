import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteFriend as deleteFriendApi } from "../services/apiFriends";
import toast from "react-hot-toast";

export function useDeleteFriend() {
  const queryClient = useQueryClient();

  const { mutate: deleteFriend, isPending: isDeleting } = useMutation({
    mutationFn: deleteFriendApi,

    onSuccess: () => {
      toast.success("Friend deleted successfully");
      queryClient.invalidateQueries({
        queryKey: ["friends"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { deleteFriend, isDeleting };
}
