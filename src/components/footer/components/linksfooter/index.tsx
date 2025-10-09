import footerLinks from "../../footer-items";


const LinksFooter = () => {


    return (
        <div className="flex flex-col gap-2">
            <ul className="list-none flex flex-col flex-wrap gap-2 ">
                {footerLinks.footerLinks.map((item) => (
                    <li key={item.href}>
                        <a href={item.href} data-text={item.label} aria-label={item.label} className="text-footer-text relative group text-[16px]/[24px]">
                            {item.label}
                            <span className="w-0 h-[1px] absolute left-0 bottom-0 group-hover:w-full bg-footer-text transition-all duration-300 ease-in-out"></span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default LinksFooter;