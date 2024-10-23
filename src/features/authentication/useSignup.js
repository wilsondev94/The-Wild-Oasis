import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const queryClient = useQueryClient();

  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (data) => {
      toast.success(
        "Account successfully created! Please verify the new account from the user's email address."
      );
      queryClient.setQueryData(["user"], data.user);
    },

    onError: (err) => {
      toast.error("Provided email or password are incorrect");
    },
  });

  return { signup, isLoading };
}
