import { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import { useBlogs } from "@/hooks/useBlogs";
import BlogList from "@/components/blog/BlogList";
import BlogDetail from "@/components/blog/BlogDetail";
import { Input } from "@/components/ui/input";

export default function Home() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("ALL");

  const { data: blogs } = useBlogs();

  // Open first blog by default
  useEffect(() => {
    if (blogs && blogs.length > 0 && selectedId === null) {
      setSelectedId(Number(blogs[0].id));
    }
  }, [blogs, selectedId]);

  const categories = useMemo(() => {
    const set = new Set<string>();
    blogs?.forEach((b) =>
      b.category.forEach((c) => set.add(c.toUpperCase()))
    );
    return ["ALL", ...Array.from(set)];
  }, [blogs]);

  return (
    <div className="mx-auto max-w-7xl px-6 pt-8 space-y-8">
      {/* Search + Filters */}
      <div className="rounded-2xl bg-card p-6 shadow-sm border space-y-4">
      <Input
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  placeholder="Search articles, topics, or keywords..."
  className="
    h-12 rounded-xl 
    bg-white 
    shadow-sm 
    border border-border
    focus-visible:ring-2 
    focus-visible:ring-primary/30
    focus-visible:border-primary/40
    placeholder:text-muted-foreground
  "
/>
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              whileTap={{ scale: 0.95 }}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                activeCategory === cat
                  ? "bg-primary text-white shadow"
                  : "bg-muted text-muted-foreground hover:bg-secondary"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Blog list */}
        <div className="lg:col-span-4 space-y-4">
          <BlogList
            search={search}
            category={activeCategory}
            onSelect={setSelectedId}
          />
        </div>

        {/* Blog detail */}
        <div className="lg:col-span-8">
          <BlogDetail id={selectedId} />
        </div>
      </div>
    </div>
  );
}
