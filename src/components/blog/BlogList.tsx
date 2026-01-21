import BlogCard from "./BlogCard";
import { useBlogs } from "@/hooks/useBlogs";

export default function BlogList({
  search,
  category,
  onSelect,
}: {
  search: string;
  category: string;
  onSelect: (id: number) => void;
}) {
  const { data: blogs, isLoading } = useBlogs();

  if (isLoading) {
    return <p className="text-sm text-muted-foreground">Loading...</p>;
  }

  const filteredBlogs =
    blogs?.filter((b) => {
      const matchesSearch =
        b.title.toLowerCase().includes(search.toLowerCase()) ||
        b.description.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        category === "ALL" ||
        b.category.map((c) => c.toUpperCase()).includes(category);

      return matchesSearch && matchesCategory;
    }) ?? [];

  return (
    <div className="space-y-4">
      {filteredBlogs.map((blog) => (
        <BlogCard
          key={blog.id}
          blog={blog}
          onClick={() => onSelect(Number(blog.id))}
        />
      ))}
    </div>
  );
}
