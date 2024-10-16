import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { login as loginApi } from "../../services/apiAuth";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  // const { handleLogedIn } = useMain();

  const {
    mutate: login,
    isLoading,
    isError,
  } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),

    onSuccess: (user) => {
      // console.log(user);
      // handleLogedIn();
      queryClient.setQueryData(["user"], user.user);
      navigate("/", { replace: true });
      toast.success("Successfully Loged In");
    },

    onError: (err) => {
      console.log("ERROR", err);
      toast.error("Provided email or password is incorrect");
    },
  });

  return { login, isLoading, isError };
}
