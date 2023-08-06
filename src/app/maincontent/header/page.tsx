import React from 'react'
import Image from 'next/image'
const Header = () => {
  return (
    <header id='Home' className="px-4 pt-14 text-[#021422] dark:text-[#021422]">
        <div>
            <h1 className="pt-4 text-xs font-mono font-semibold">Admission in progress... contact us to place your child</h1>
            {/* <h1 className="pt-4 font-bold">LIVINGSTONE <span className="">ACADEMY</span></h1> */}
            <div className="flex flex-col md:flex-row items-center justify-between">
                <p className="my-5 p-3"> Learning that gets you skills for your present and your future. Get stated with us. created by experts, here LIVINGSTONE Academy&apos;s libary 
                                      of trusted practice and lessons covers math, sciene, and more.</p>
                <Image width={500} height={400} src="/images/book-with-green-board-background.jpg" className="w-auto rounded-md md:w-[30rem]" alt="" />
            </div>
        </div>
    </header>
  )
}

export default Header