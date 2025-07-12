export const Logo = () => {

    return (
        <div className="flex flex-col items-center justify-center gap-1">
            <span className="uppercase font-manrope tracking-[2px] text-center text-[72px]/[62px] font-bold">oliveira</span>
            <span className="subtitle flex items-center gap-3 w-full">
                <div className="flex-1 flex items-center">
                    <div className="w-[6px] h-[6px] bg-purplelogo"></div>
                    <i className="block flex-1 bg-purplelogo h-[2px] rounded-full" />
                </div>
                <span className="whitespace-nowrap text-3xl">Dev. Front-end</span>
                <div className="flex-1 flex items-center">
                    <i className="block flex-1 bg-purplelogo h-[2px] rounded-full" />
                    <div className="w-[6px] h-[6px] bg-purplelogo"></div>
                </div>
            </span>
        </div>
    )
}