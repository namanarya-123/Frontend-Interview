import { useBlog } from "@/hooks/useBlog";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";

export default function BlogDetail({ id }: { id: number | null }) {
  const { data: blog, isLoading } = useBlog(id);

  if (!id) {
    return (
      <div className="rounded-xl border bg-card p-6 text-sm text-muted-foreground">
        Select a blog to read
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="rounded-xl border bg-card p-6">
        <p className="text-sm text-muted-foreground">Loading blog...</p>
      </div>
    );
  }

  if (!blog) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.article
        key={blog.id}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="rounded-xl border bg-card p-6 space-y-6"
      >
        {/* Cover image */}
        {blog.coverImage && (
          <img
            src={blog.coverImage}
            alt={blog.title}
            className="h-64 w-full rounded-lg object-cover"
          />
        )}

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-3">
          {blog.category.map((cat: string) => (
            <Badge key={cat} variant="secondary">
              {cat}
            </Badge>
          ))}

          <span className="text-sm text-muted-foreground">
            {new Date(blog.date).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold leading-tight">
          {blog.title}
        </h1>

        {/* Description */}
        <p className="text-muted-foreground">
          {blog.description}
        </p>

        {/* Content */}
        <div className="prose prose-neutral max-w-none leading-relaxed">
          {blog.content
            .split("\n\n")
            .map((para: string, idx: number) => (
              <p key={idx}>{para}</p>
            ))}
        </div>
      </motion.article>
    </AnimatePresence>
  );
}
