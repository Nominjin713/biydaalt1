import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-blue-100">
      <Header />

      <main className="flex-grow w-full flex justify-center px-4 py-10">
        <div className="w-full max-w-5xl bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-8 border border-white/40">
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
}
