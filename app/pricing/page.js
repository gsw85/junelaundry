import Footer from "@/components/footer";
import Header from "@/app/pricing/(comp)/header";
import ZWetWash from "./(comp)/(wet-washing)/z-wet-wash";

export default function Page() {
  return (
    <main className={`bg-white`}>
      <Header />
      <ZWetWash />
      <Footer />
    </main>
  );
}
