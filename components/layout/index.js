import TopNav from "@/components/layout/nav";

export default function MainLayout({ children }) {
  return (
    <div>
      <TopNav />
      {children}
    </div>
  );
}
