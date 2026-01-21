import CreateBlogForm from "@/components/blog/CreateBlogForm";
import { Card } from "@/components/ui/card";

export default function CreateBlog() {
  return (
    <div className="min-h-screen bg-muted/40 flex items-center justify-center px-4">
      <Card className="w-full max-w-xl p-6">
        <h1 className="text-2xl font-bold mb-4">Create New Blog</h1>
        <CreateBlogForm />
      </Card>
    </div>
  );
}
