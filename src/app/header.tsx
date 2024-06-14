'use client';

interface NavElement {
    name:string,
    link: string
}
type Props = {
    navs : Array<NavElement>
};

export default function Header({navs}: Props) {

    
    

    /*
    useEffect(()=>{
        const intr = setInterval(()=>{
            setLoaderProg((prevState)=>(loader + 25) % 101)
        },1000)

        return ()=> {clearInterval(intr)}
    })
    */

    


  return (
    <header className={"flex flex-col bg-[var(--bg-color)] z-50 shadow select-none w-screen fixed"}>
        <div className={"py-3 flex flex-row justify-center"} >
              <div className="w-full xl:w-[1280px] flex flex-row items-center" >
                <img height={50} src="https://res.cloudinary.com/dqtlhm4to/image/upload/v1718314738/fre5teegghvhzqbj1sce.png" className="w-[70px] xl:w-[70px] h-[50px] mx-4 xl:mx-6 bg-cover bg-no-repeat  "/>
                <div className="flex sm:hidden flex-1 flex-col justify-center text-2xl text-white font-semibold" >
                    PodBrand
                </div>   
                <nav className="hidden sm:flex  flex-1">
                    {
                        navs.map((item,index)=>{
                            const clicked = ()=>{
                                //gotoPlace(item.link)
                            }
                            return (
                                <button key={index} onClick={clicked} className="text-sm text-white xl:text-[15px] font-medium leading-6 rounded-xl px-4 xl:px-6 py-2 xl:py-3 transition ease-in hover:text-blue-500 hover:bg-slate-900 ">
                                    {item.name}
                                </button>
                            )
                        })
                    }


                </nav>
                {/* <div className="flex-grow-0 md:flex-1"></div> */}
                
              </div>
        </div>
        <div className={"flex flex-row justify-start"} >
            <div className={"rounded-full h-[3px] transition-all ease-in duration-300 bg-gradient-to-r from-indigo-600 to-cyan-400"}   >

            </div>
        </div>
    </header>
  );
}