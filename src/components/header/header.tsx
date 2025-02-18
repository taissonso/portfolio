import DarkMode from '../darkmode';

const header = () => {
    return (
        <header className="flex items-center justify-end w-full h-[80px] bg-blue-400 px-8">
            <DarkMode></DarkMode>

        </header>
    );
}

export default header;