export default function Footer() {
  return (
    <footer className="mt-16 border-t bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">CA Monk</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Empowering the next generation of finance and accounting
              professionals with insights, tools, and career guidance.
            </p>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide">
              Resources
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-foreground cursor-pointer">Blog</li>
              <li className="hover:text-foreground cursor-pointer">Webinars</li>
              <li className="hover:text-foreground cursor-pointer">Case Studies</li>
            </ul>
          </div>

          {/* Platform */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide">
              Platform
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-foreground cursor-pointer">Job Board</li>
              <li className="hover:text-foreground cursor-pointer">Practice Tests</li>
              <li className="hover:text-foreground cursor-pointer">Mentorship</li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide">
              Connect
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-foreground cursor-pointer">LinkedIn</li>
              <li className="hover:text-foreground cursor-pointer">Twitter</li>
              <li className="hover:text-foreground cursor-pointer">Instagram</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-3 border-t pt-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} CA Monk. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="hover:text-foreground cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-foreground cursor-pointer">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
