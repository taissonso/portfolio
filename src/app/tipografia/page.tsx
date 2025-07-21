import Typography from "@/components/typography";

export default function tipografia() {

    return (
        <main className="h-[100vh] flex flex-col gap-6 items-center justify-center w-full overflow-hidden">
            <section className="flex flex-row flex-wrap gap-6 items-center justify-center w-full">
                <div className='flex flex-col items-center justify-center gap-4 p-6'>
                    <Typography tag="h1" className="font-machine">Special Elite h1</Typography>
                    <Typography tag="h2" className="font-machine!">Tipografia h2</Typography>
                    <Typography tag="h3" className="font-machine!">Tipografia h3</Typography>
                    <Typography tag="h4" className="font-machine!">Tipografia h4</Typography>
                    <Typography tag="h5" className="font-machine!">Tipografia h5</Typography>
                    <Typography tag="h6" className="font-machine!">Tipografia h6</Typography>
                    <Typography tag="p" className="font-machine!">Tipografia p</Typography>
                    <Typography tag="label" className="font-machine!">Tipografia label</Typography>
                </div>

                <div className='flex flex-col items-center justify-center gap-4 p-6 '>
                    <Typography tag="h1" className="font-lato!">Lato h1</Typography>
                    <Typography tag="h2" >Tipografia h2</Typography>
                    <Typography tag="h3">Tipografia h3</Typography>
                    <Typography tag="h4">Tipografia h4</Typography>
                    <Typography tag="h5">Tipografia h5</Typography>
                    <Typography tag="h6">Tipografia h6</Typography>
                    <Typography tag="p">Tipografia p</Typography>
                    <Typography tag="label">Tipografia label</Typography>
                </div>

            </section>
        </main>);
}