import Link from "next/link";
import { ReactNode } from "react";

export default function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-100 flex">

      {/* Sidebar */}

      <aside className="w-72 bg-black text-white">

        <div className="p-8 border-b border-white/10">

          <h1 className="text-3xl font-bold">
            EstateOne
          </h1>

          <p className="text-sm text-gray-400 mt-2">
            CRM Dashboard
          </p>

        </div>

        <nav className="p-5 space-y-2">

          <Link
            href="/admin/dashboard"
            className="block rounded-xl px-5 py-4 hover:bg-white/10"
          >
            📊 Dashboard
          </Link>

          <Link
            href="/admin/leads"
            className="block rounded-xl px-5 py-4 hover:bg-white/10"
          >
            👥 Leads
          </Link>

          <Link
            href="/admin/analytics"
            className="block rounded-xl px-5 py-4 hover:bg-white/10"
          >
            📈 Analytics
          </Link>

          <Link
            href="/admin/settings"
            className="block rounded-xl px-5 py-4 hover:bg-white/10"
          >
            ⚙ Settings
          </Link>

        </nav>

      </aside>

      {/* Content */}

      <main className="flex-1 p-10">

        {children}

      </main>

    </div>
  );
}