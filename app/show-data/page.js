
import UsePromiseDemo from "@/components/UsePromisesDemo";
import Link from "next/link";
import { Suspense } from "react";
import fs from 'node:fs';
import ErrorBoundary from "@/components/ErrorBoundary";



export default async function showDataPage() {
  const fetchUsersPromise = new Promise((resolve)=> setTimeout(async ()=>{
    const data = fs.readFileSync('dummy-db.json', 'utf-8');
    const users = JSON.parse(data);
    resolve(users)
    //reject(new Error('sdf'))
  }, 1000));
    

  return (
    <main>
      <Link href='../'>Home Page</Link>
      <ErrorBoundary fallback={<p>Something went wrong!</p>}>
        <Suspense fallback={<p>Data is loading...</p>}>
          <UsePromiseDemo fetchUsers={fetchUsersPromise} />
        </Suspense>
      </ErrorBoundary>
    </main>
  );
}
