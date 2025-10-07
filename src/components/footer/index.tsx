import BugIcon from "../Icons/Bug";
import LaptopIcon from "../Icons/Laptop";
import Typography from "../typography";

const Footer = () => {
    return (
        <footer className="w-full h-max bg-blue-footer-end flex items-center justify-center">
            <div className="container flex flex-col justify-center">
                <div className="grid grid-cols-12 gap-4 pt-16 pb-6">
                    <div className="col-span-5 w-full gap-4">
                       <div className="w-max">
                            <p className="!font-machine text-[56px]/[42px] text-footer-text">&lt;Oliveira/&gt;</p>
                            <p className="!font-lato text-center text-[20px]/[28px] text-footer-text">Desenvolvedor Front-end</p>
                       </div>

                    </div>
                    <div className="col-span-3 bg-blue-300 w-full">Páginas</div>
                    <div className="col-span-4 bg-blue-100 w-full">Redes</div>
                </div>

                {/* <div className="py-6 mt-16 border-solid border-t-1 border-b-1 border-footer-text"></div> */}

                <div className="w-full py-6 flex justify-center gap-2">
                    <div className="flex items-center justify-center gap-2">
                         <LaptopIcon className="w-6 h-6 text-footer-text" />
                        <Typography tag="p" className="font-lato !text-footer-text">— Todos os códigos liberados</Typography>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;