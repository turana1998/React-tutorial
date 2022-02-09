import React from 'react';

export default function Navbar() {
    // const storage = JSON.parse(localStorage.getItem('user1') ?? '{}')


    return <div className="h-[75px] bg-red-300 w-full">
        <div>
            Hello,
            {Array(localStorage.length).fill(0).map((_, index) => {
                const user = JSON.parse(localStorage.getItem(`user${index + 1}`) ?? '{}')
                return <div key={index}>
                    {user.name} {user.surname}
                </div>
            })}
        </div>
    </div>;
}
