import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { resetPassword } from "../../services/apiAuth";

export function useForgetPass() {
  const { mutate: forgotPass, isLoading } = useMutation({
    mutationFn: ({ email }) => resetPassword({ email }),

    onSuccess: () => {
      toast.success("Check you mail for reset password");
    },

    onError: (err) => {
      console.log("ERROR", err);
      toast.error("Provided email is incorrect");
    },
  });

  return { forgotPass, isLoading };
}
