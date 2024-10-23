import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apicabins";
import toast from "react-hot-toast";

export function useUpdateCabin() {
  const queryClient = useQueryClient();

  const { mutate: updateCabin, isLoading: isUpdatingCabin } = useMutation({
    mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id),
    onSuccess: (data) => {
      toast.success("Cabin successfully edited");
      // queryClient.setQueryData(["cabins"], data);
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isUpdatingCabin, updateCabin };
}
