import Footer from "@/components/footer";
import Header from "@/app/pricing/(comp)/header";
import Main from "@/app/pricing/(comp)/z-index";

export default function Page() {
  return (
    <main className={`bg-white`}>
      <Header />
      <Main />
      <Footer />
    </main>
  );
}
