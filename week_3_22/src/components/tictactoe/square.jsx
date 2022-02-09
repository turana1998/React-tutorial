

export default function Square({ value, onClick }) {
    return <div onClick={onClick} className={`flex items-center justify-center border-2 h-[100px] cursor-pointer`}>
        {value}
    </div>;
}


