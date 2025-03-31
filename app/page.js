
import ClientDemo from "@/components/ClientDemo";
import DataFetchingDemo from "@/components/DataFetchingDemo";
import RSCDemo from "@/components/RSCDeemo";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <DataFetchingDemo />
      <Link href='./add-data'>Add New Data</Link>
      <ClientDemo />
      <RSCDemo />
    </main>
  );
}
