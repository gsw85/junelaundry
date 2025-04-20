export default function Home() {
  return (
      <main className="relative flex h-screen flex-col items-center justify-center text-center p-6">
        {/* ✅ Background Gradient & Pattern (Layered Properly) */}
        <div className="absolute inset-0 bg-pattern"></div>


        <div className="relative z-10">
          <img
              src="/logo-white.svg"
              alt="June Laundry"
              title="June Laundry"
              className={`w-56 h-auto`}
          />
          <h1 className="text-3xl font-semibold mt-6 text-gray-100 animate-pulse sr-only">
            Tsingshui Holdings
          </h1>
           <h2>Coming Soon</h2>
        </div>
      </main>
  );
}
