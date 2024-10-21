import './globals.css';

export default function Home() {
  return (
    <main className="flex items-center justify-center w-full h-lvh">
      <h1 className=" text-[48px] leading-[56px] lg:text-[72px] lg:leading-[50px] flex items-end gap-2">Em construção
        <div className="box-to-circles flex gap-2 ">
          <span className='w-3 h-3 rounded-[100%] bg-[#00592D] up-and-down delay-1'></span>
          <span className='w-3 h-3 rounded-[100%] bg-[#CD3742] up-and-down delay-2'></span>
          <span className='w-3 h-3 rounded-[100%] bg-[#E9C727] up-and-down delay-3'></span>
        </div>


      </h1>
    </main>
  );
}
