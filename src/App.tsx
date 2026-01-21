import { Routes, Route, Link } from "react-router-dom";
import Home from "@/pages/Home";
import CreateBlog from "@/pages/CreateBlog";
import { Button } from "@/components/ui/button";
import Footer from "@/components/layouts/Footer";

export default function App() {
  return (
    <>
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b">
  <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
    <div>
      <h1 className="text-xl font-bold tracking-tight">
        CA Monk Blog
      </h1>
      <p className="text-xs text-muted-foreground">
        Finance • Career • Tech • Regulations
      </p>
    </div>

    <a href="/create">
      <button className="inline-flex items-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white shadow hover:bg-primary/90">
        Create Blog
      </button>
    </a>
  </div>
</header>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateBlog />} />
      </Routes>
        <Footer />
    </>
  );
}
