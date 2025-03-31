'use client';

import { use, useState } from 'react';


export default function UsePromiseDemo({fetchUsers}) {
    const [count, setCounter] = useState(0);
    const users = use(fetchUsers);
    
    return (
        <div className='rsc'>
            <h2>RSC with Data Fetching</h2>
            <p>
                Uses <strong>async / await</strong> for data fetching.
            </p>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} ({user.title})
                    </li>
                ))}
            </ul>
            <p>
                <button onClick={()=> setCounter(prevCount => prevCount + 1)}>
                    Counter +
                </button>
            </p>
            <p>
                <button onClick={()=> setCounter(prevCount => prevCount - 1)}>
                    Counter -
                </button>
            </p>
            <p>Counter Value: {count}</p>
        </div>
    );
}