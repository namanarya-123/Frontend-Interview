import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { formatDistanceToNow } from "date-fns";
import { TrendingUp, Briefcase, ShieldCheck } from "lucide-react";

const iconMap: Record<string, JSX.Element> = {
  FINANCE: <TrendingUp className="h-4 w-4" />,
  CAREER: <Briefcase className="h-4 w-4" />,
  REGULATIONS: <ShieldCheck className="h-4 w-4" />,
};

export default function BlogCard({
  blog,
  onClick,
}: {
  blog: any;
  onClick: () => void;
}) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="cursor-pointer rounded-xl border bg-card p-5 shadow-sm transition-shadow hover:shadow-md"
    >


      {/* Header */}
      <div className="mb-2 flex items-center justify-between">
        <Badge variant="secondary" className="flex items-center gap-1">
          {iconMap[blog.category[0]]}
          {blog.category[0]}
        </Badge>

        <span className="text-xs text-muted-foreground">
          {formatDistanceToNow(new Date(blog.date), { addSuffix: true })}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold leading-snug">
        {blog.title}
      </h3>

      {/* Description */}
      <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
        {blog.description}
      </p>
    </motion.div>
  );
}
