
import UsePromiseDemo from "@/components/UsePromisesDemo";
import Link from "next/link";
import { Suspense } from "react";
import fs from 'node:fs';



export default async function showDataPage() {
  const fetchUsersPromise = new Promise((resolve)=> setTimeout(async ()=>{
    const data = fs.readFileSync('dummy-db.json', 'utf-8');
    const users = JSON.parse(data);
    resolve(users)
  }, 1000));
    

  return (
    <main>
      <Link href='../'>Home Page</Link>
      <Suspense fallback={<p>Data is loading...</p>}>
        <UsePromiseDemo fetchUsers={fetchUsersPromise} />
      </Suspense>
    </main>
  );
}
