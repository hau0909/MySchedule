// app/(protected)/layout.tsx
import SideBar from "@/components/layout/sidebar/SideBar";
import Aside from "@/components/layout/aside/Aside";
import Header from "@/components/layout/header/Header";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="grid grid-cols-[100px_1fr_332px] h-screen">
      {/* Sidebar */}
      <aside className="">
        <SideBar />
      </aside>

      {/* Main Content */}
      <section className="overflow-y-auto bg-neutral-100/75">
        <div className="my-7 mx-10">
          <Header />
          <div className="mt-10">{children}</div>
        </div>
      </section>

      {/* Right Aside */}
      <aside className="">
        <Aside />
      </aside>
    </main>
  );
}
