
import ClientDemo from "@/components/ClientDemo";
import DataFetchingDemo from "@/components/DataFetchingDemo";
import RSCDemo from "@/components/RSCDeemo";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <DataFetchingDemo />
      <p>
        <Link href='./add-data'>Add New Data</Link>
      </p>
      <p>
        <Link href='./show-data'>Show Data</Link>
      </p>
      <ClientDemo />
      <RSCDemo />
    </main>
  );
}
