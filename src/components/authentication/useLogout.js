import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { logout as logoutApi } from "../../services/apiAuth";
import { useMain } from "../../context/MainContext";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { handleLogedIn } = useMain();

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi,

    onSuccess: () => {
      handleLogedIn();
      queryClient.invalidateQueries({ queryKey: ["user"] });
      queryClient.removeQueries();
      toast.success("Loged out");
      navigate("/login", { replace: true });
    },
  });

  return { logout, isLoading };
}
