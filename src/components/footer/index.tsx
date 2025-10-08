import LaptopIcon from "../Icons/Laptop";
import Typography from "../typography";
import LinksFooter from "./components/linksfooter";

const Footer = () => {
    return (
        <footer className="w-full h-max bg-blue-footer-end flex items-center justify-center">
            <div className="container flex flex-col justify-center">
                <div className="grid grid-cols-12 gap-4 pt-16 pb-6 border-b border-t border-solid border-red-500">
                    <div className="col-span-5 w-full gap-4">
                       <div className="w-max">
                            <p className="!font-machine text-[56px]/[36px] text-footer-text">&lt;Oliveira/&gt;</p>
                            <p className="!font-lato text-center text-[20px]/[28px] text-footer-text">Desenvolvedor Front-end</p>
                       </div>
                    </div>
                    <div className="col-span-3 w-full">
                        <Typography variant="h4" titleFontSize="p-medium" className="text-footer-text">— Páginas —</Typography>
                        <LinksFooter />
                    </div>
                    <div className="col-span-4 bg-blue-100 w-full">Redes</div>
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