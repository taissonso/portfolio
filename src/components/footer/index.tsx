import LaptopIcon from "../Icons/Laptop";
import Typography from "../typography";
import LinksFooter from "./components/linksfooter";
import LinksSocial from "./components/linkSocial";

const Footer = () => {
    return (
        <footer className="w-full h-max bg-blue-footer-bg flex items-center justify-center pt-10 lg:pt-16">
            <div className="container flex flex-col justify-center">
                <div className="grid grid-cols-12 gap-x-4 gap-y-8 lg:gap-x-6 lg:gap-y-6 pt-12 pb-12 border-b border-t border-solid border-footer-text ">
                    <div className="col-span-12 md:col-span-6 lg:col-span-5 w-full gap-4">
                       <div className="w-full md:w-max relative top-0 lg:top-[14px]">
                            <Typography variant="p" className="!font-machine text-[3rem]/[1.75rem] lg:text-[3.5rem]/[2.25rem] text-center text-footer-text break-all">&lt;Oliveira/&gt;</Typography>
                            <p className="!font-lato text-center text-[20px]/[24px] lg:text-[20px]/[28px] text-footer-text">Desenvolvedor Front-end</p>
                       </div>
                    </div>
                    <div className="col-span-12 md:col-span-3 lg:col-span-3 w-full">
                        <Typography variant="p" titleFontSize="p-medium" className="text-footer-title pb-2">Páginas</Typography>
                        <LinksFooter />
                    </div>
                    <div className="col-span-12 md:col-span-3 lg:col-span-4 w-full">
                        <Typography variant="p" titleFontSize="p-medium" className="text-footer-title pb-3">Redes Sociais</Typography>
                        <LinksSocial />
                    </div>
                </div>

                <div className="w-full py-6 flex justify-center gap-2">
                    <div className="flex items-center justify-center gap-2">
                        <LaptopIcon className="w-6 h-6 text-footer-text" />
                        <Typography variant="p" className="font-lato !text-footer-text">— Todos os códigos liberados</Typography>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;