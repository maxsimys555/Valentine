import Link from "next/link";

export default function SecondPage() {
    return (
      <main>
        <h1>Second Page</h1>
        <Link href="/first">first</Link>
      </main>
    );
}