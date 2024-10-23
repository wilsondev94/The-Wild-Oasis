import { QueryClient, useMutation } from "@tanstack/react-query";
import { deleteCabin as deleteCabinApi } from "../../services/apicabins";
import toast from "react-hot-toast";

const queryClient = new QueryClient();

export function useDeleteCabin() {
  const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: deleteCabinApi,

    onSuccess: () => {
      toast.success("Cabin successfully deleted.");

      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteCabin };
}
