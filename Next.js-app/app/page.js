import Link from "next/link";

import Header from "@/components/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p>
        <Link t href="/about">
          About Us
        </Link>
      </p>
    </main>
  );
}
