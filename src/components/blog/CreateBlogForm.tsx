import { useState } from "react";
import { useCreateBlog } from "@/hooks/useCreateBlog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";


export default function CreateBlog() {
  const { mutate, isPending } = useCreateBlog();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();
  

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  mutate(
    {
      id: crypto.randomUUID(),
      title,
      description,
      content,
      coverImage,
      category: category.split(",").map(c => c.trim().toUpperCase()),
      date: new Date().toISOString(),
    },
    {
      onSuccess: () => {
        navigate("/"); // ✅ redirect to home
      },
    }
  );
};

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-2xl space-y-4 rounded-xl border bg-card p-6"
    >
      <h2 className="text-xl font-semibold">Create Blog</h2>

      <Input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <Input
        placeholder="Cover image URL"
        value={coverImage}
        onChange={(e) => setCoverImage(e.target.value)}
      />

      <Input
        placeholder="Categories (comma separated)"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />

      <Textarea
        placeholder="Short description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      <Textarea
        placeholder="Full content"
        rows={6}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />

      <Button type="submit" disabled={isPending}>
        {isPending ? "Publishing..." : "Publish Blog"}
      </Button>
    </form>
  );
}
