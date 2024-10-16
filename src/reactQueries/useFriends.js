import { useQuery } from "@tanstack/react-query";
import { getFriends } from "../services/apiFriends";

export function useFriends(userID) {
  const {
    data: friends,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["friends", userID],
    queryFn: () => getFriends(userID),
    enabled: !!userID,
  });

  return { friends, isLoading, error };
}
