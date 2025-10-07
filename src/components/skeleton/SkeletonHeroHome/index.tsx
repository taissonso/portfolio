
const SkeletonHeroHome = () => {
    return (
        <div className="w-full h-screen bg-skeleton-component">
            <div className="h-[80px] w-full border-b border-solid border-skeleton">
                <div className="container flex items-center justify-between w-full h-full mx-auto animate-pulse">
                    <div className="w-10 h-10 rounded-[4px] bg-skeleton-highlight"></div>
                    <div className="hidden lg:flex items-center justify-between w-full ml-12">
                        <div className="">
                            <div className="hidden lg:flex items-center justify-between w-full gap-4">
                                <div className="w-[96px] h-10 rounded-[4px] bg-skeleton-highlight"></div>
                                <div className="w-[122px] h-10 rounded-[4px] bg-skeleton-highlight"></div>
                                <div className="w-[112px] h-10 rounded-[4px] bg-skeleton-highlight"></div>
                                <div className="w-[112px] h-10 rounded-[4px] bg-skeleton-highlight"></div>
                            </div>
                        </div>
                        <div className="h-10 w-10 rounded-full bg-skeleton-highlight"></div>
                    </div>
                    <div className="flex lg:hidden">
                         <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-[4px] bg-skeleton"></div>
                            <div className="h-10 w-10 rounded-full bg-skeleton"></div>
                         </div>
                    </div>
                </div>
            </div>
                
            <div className="w-full h-auto min-h-[80vh] md:h-[100vh] pb-10 overflow-hidden flex items-center justify-center">
                <div className="container h-full flex flex-col lg:flex-row gap-16 lg:gap-[4.375vw] xl:gap-[5.833vw] items-center justify-center animate-pulse">
                    <div className="w-full max-w-[260px] lg:min-w-[260px] lg:max-w-[260px] xl:max-w-[360px] bg-skeleton-highlight aspect-[4/4] rounded-[36px]"></div>

                    <div className=" w-full 2xl:w-[60vw] ">
                        <div className="w-full h-16 mb-4 rounded-[4px] bg-skeleton-highlight"></div>
                        <div className="w-full h-16 mb-4 rounded-[4px] bg-skeleton-highlight"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkeletonHeroHome;