import { useQuery, useQueryClient } from "react-query";
import { useSearchParams } from "react-router-dom";

export function useDataQuery<T>(dataProvider: (params:URLSearchParams) => Promise<T>, uniqueKey?: string) {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  

  const { data, isLoading } = useQuery({
    queryKey: [uniqueKey ?? 'useQuery', searchParams.toString()],
    queryFn: () => dataProvider(searchParams),
  });

  const invalidateQuery = () => {
    queryClient.invalidateQueries({
      queryKey: [uniqueKey ?? searchParams.toString()],
    });
  };


  return {
    data,
    isLoading,
    queryClient,
    invalidateQuery,
  };
}

export default useDataQuery;