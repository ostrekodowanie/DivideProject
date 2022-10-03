export default function CodeBox({ title, properties, className }) {
    return (
        <div className={`rounded border-[1px] flex flex-col gap-2 border-[#B91DFF]/10 bg-blend-soft-light backdrop-blur-md bg-pros px-6 py-3 pr-16 absolute ${className}`}>
            <h4 className="text-font font-medium flex items-center"><div className="h-[1.2em] bg-font mr-4 w-[1px]" />{title}</h4>
            {properties.map((prop, i) => <p className="text-fontLight flex items-center text-sm"><div style={{width: `${i*10 + 20}px`}} className='h-[1px] mr-4 bg-fontLight' />{prop}</p>)}
        </div>
    )
}