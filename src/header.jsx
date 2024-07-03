
const Header=()=> {
  return ( 
    <header className=" flex justify-between ">
             <div className="flex flex-col gap-[4px] items-center justify-center px-[25px]  rotate-[0deg]">
            <div className="w-[20px] h-[3px] bg-[black] rotate-[35deg] ml-[10px]"></div>
            <div className="w-[30px] h-[3px] bg-[black]"></div>
            <div className="w-[20px] h-[3px] bg-[black] rotate-[-35deg] ml-[10px]"></div>
          </div>


        <div className=" flex justify-cenetr items-center pr-[25px] " >
   
            <img className="" src='/logo.png' width='70px' height='70px' />
            <div className="flex flex-col ">
              <b className="text-[29px] max-h-[30px] transition hover:text-[red]
              ">Aniline.UZ</b>
              <p>Линия твоей Радости
                </p>
            </div>
        </div>
        <div></div>
    </header>
  )
}

export default Header