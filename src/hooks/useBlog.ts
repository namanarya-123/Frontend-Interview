import { useQuery } from "@tanstack/react-query";
import { getBlogById } from "../api/blogs";

export const useBlog = (id: number | null) =>
  useQuery({
    queryKey: ["blog", id],
    queryFn: () => getBlogById(id as number),
    enabled: !!id,
  });
