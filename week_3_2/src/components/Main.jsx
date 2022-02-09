import React from 'react';

export default function Main() {

    const Submit = (e) => {
        e.preventDefault();
        const form = e.target;
        const { name, surname } = form;

        const userLength = localStorage.length
        localStorage.setItem(`user${userLength + 1}`, JSON.stringify({
            name: name.value,
            surname: surname.value
        }));



    }

    return <div className="py-10">
        <form onSubmit={Submit} className="flex flex-col border-2 space-y-3 w-[25%] mx-auto">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" className="border-2 border-black" />
            <label htmlFor="surname">Surname</label>
            <input type="text" name="surname" className="border-2 border-black" />
            <button type="submit">Submit</button>
        </form>
        <button onClick={() => { localStorage.clear() }}>
            Remove Localstorage
        </button>
    </div>;
}
