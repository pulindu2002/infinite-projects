'use client'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import Image from 'next/image';

const Navbar = () => {
    const [search,setSearch] = useState();
    const pathName = usePathname().substring(1); 
    return (
        <header className='pt-3  top-0 right-0 border-b'>
            <nav className='w-full p-3 flex justify-between '>
                <section>
                    {/* icon */}
                    <h2>{pathName}</h2>
                </section>

                <section className='flex justify-evenly gap-x-4'>
                  <div className='relative items-center'>
                    <Image className='absolute right-4 top-[2px] ' src={"/search.svg"} width={20} height={20} />
                    <input className='flex-initial w-[460px] bg-[#E7E7E7] rounded-full text-zinc-500 px-3 ' type='search'/>
                  </div>

                  <Image src={"/bell.svg"} width={20} height={20}/>
                  <Image src={"/sign-out.svg"} width={20} height={20}/>
                  <Image src={"/user1.png"} width={20} height={20}/>
                </section>

               
            </nav>
        </header>
    )
}

export default Navbar;
