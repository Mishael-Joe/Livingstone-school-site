import React from 'react'
import Image from 'next/image'

const Facilities = () => {
  return (
    <section>
        <div className="flex gap-4 px-4 flex-col sm:flex-row text-[#021422] dark:text-[#021422]">
            <div id='Facilities' className='basis-3/5 bg-[#0b80da]/50 p-4 shrink'>
                <h1 className="font-bold font-serif text-lg pb-4">Our Facilities.</h1>
                <div className="gap-4 grid sm:grid-cols-2">
                    <div className="">
                        <div className="">
                            <h2 className="font-mono">Spacious Classes</h2>
                            <div className="sm:w-40">
                                <Image width={200} height={200} src="/IMG_20230616_101647_338.jpg" className=" rounded" alt="web" />
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <div className="">
                            <h2 className="font-mono">Library</h2>
                            <div className="sm:w-40">
                                <Image width={200} height={200} src="/pexels-rdne-stock-project-8500340.jpg" className=" rounded" alt="web" />
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <div className="">
                            <h2 className="font-mono">Sporting Equipment</h2>
                            <div className="sm:w-40">
                                <Image width={200} height={200} src="/pexels-cottonbro-studio-4430308.jpg" className=" rounded" alt="web" />
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <div className="">
                            <h2 className="font-mono">Musical Equipment</h2>
                            <div className="sm:w-40">
                                <Image width={200} height={200} src="/pexels-jean-marc-bonnel-14993742.jpg" className=" rounded" alt="web" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id='News' className='basis-2/5 bg-[#0b80da]/50 p-4'>
                <h1 className='text-center text-[#021422] font-bold pb-4 font-serif text-lg'>NEWS ROOM</h1>
                <div className='flex flex-col gap-4'>
                    <a href="#" className="border-blue-500 border">
                        <div className="">
                            <span className="bg-blue-500 p-1">01</span>
                            {/* <Image width={200} height={200} src="/./assets/images/trending/trending_1.jpg" alt="" className="article-image" /> */}
                        </div>

                        <div className="grid">

                            <div className=" text-xs mx-auto">
                                <span>23 Dec 2021</span>
                                <span className="pr-4"></span>
                                <span>3 Min read</span>
                            </div>

                            <h3 className="text-center font-semibold text-[#021422] font-mono">Sample article title</h3>

                        </div>
                    </a>

                    <a href="#" className="border-blue-500 border">
                        <div className="">
                            <span className="bg-blue-500 p-1">02</span>
                            {/* <Image width={200} height={200} src="/./assets/images/trending/trending_1.jpg" alt="" className="article-image" /> */}
                        </div>

                        <div className="grid">

                            <div className=" text-xs mx-auto">
                                <span>23 Dec 2021</span>
                                <span className="pr-4"></span>
                                <span>3 Min read</span>
                            </div>

                            <h3 className="text-center font-semibold text-[#021422] font-mono">Sample article title</h3>

                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Facilities