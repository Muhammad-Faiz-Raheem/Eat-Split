import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBalance } from "../services/apiFriends";
import toast from "react-hot-toast";

export function useUpdateBalance() {
  const queryClient = useQueryClient();

  const { mutate: toUpdateBalance, isPending: isUpdating } = useMutation({
    mutationFn: ({ newBalance, id }) => updateBalance(newBalance, id),
    onSuccess: () => {
      toast.success("balance has benn updated");
      queryClient.invalidateQueries({
        queryKey: ["friends"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { toUpdateBalance, isUpdating };
}
