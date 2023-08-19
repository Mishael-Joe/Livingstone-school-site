import React from 'react'
import Image from 'next/image'

const Content_1 = () => {
  return (
    <section className="p-5 text-[#021422] dark:text-[#021422]">
        <div>
            <div className="items-center justify-between gap-8 flex flex-col md:flex-row">
                <div className=" basis-1/2">
                    <Image src="/images/speaker-business-meeting-conference-hall.jpg" className="rounded w-[60rem]" width={300} quality={100} height={20} alt="" />
                </div>
                <div className=" basis-1/2">
                    <h2>Welcome to the official website of Grene Academy</h2>
                    <p>We empower teachers to support their entire classroom.
                        You can learn anything.
                        Build a deep, solid understanding in math, science, and more.
                    </p>
                    <p className="lead">Every child deserves the chance to learn.
                        Across the globe, 570 million children are missing basic math and reading skills. We&apos;re here to deliver the education they need, and we need your help.
                    </p>
                    <a href="#" className=""><i className="underline text-blue-500 text-xs font-mono">learn more</i></a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Content_1