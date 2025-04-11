import Header from "./components/layout/Header";
import Hero from "./components/layout/Hero";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Header />
      <Hero />
    </main>
  );
}