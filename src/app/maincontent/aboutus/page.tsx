import React from 'react'

//style="height: 250;"

const AboutUS = () => {
  return (
    <section className="px-4 py-10">
        <div>
            <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center h-48 bg-[#46aaf6]/50 px-2 py-4 rounded hover:scale-105">
                    <div className="">
                        {/* <img className="card-img-top" src="/images/best.png" alt="web" /> */}
                    </div>
                    <div className="">
                        <h1 className="font-bold text-zinc-800 font-serif">Trusted Content</h1>
                        <p className="text-slate-900/80 text-sm py-3">Created by experts, livingstone Academy&apos;s libary of trusted practice and lessons covers math, science, and more.</p>
                        <button className="bg-[#0b80da]/50 flex items-center font-mono text-sm justify-between w-28 mx-auto pr-4 group p-1 rounded-sm font-semibold">Courses <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">-&gt;</span></button>
                    </div>
                </div>

                <div className="text-center h-48 bg-[#46aaf6]/50 px-2 py-4 rounded hover:scale-105">
                    <div className="">
                        {/* <img className="card-img-top" src="/images/17947.jpg" alt="web" /> */}
                    </div>
                    <div className="">
                        <h1 className="font-bold text-zinc-800 font-serif">Personalized Learning</h1>
                        <p className="text-slate-900/80 text-sm py-3">Students practice at their pace, first filling in gaps in their understading then accelerating their learning.</p>
                        <button className="bg-[#0b80da]/50 flex items-center font-mono text-sm justify-between w-32 mx-auto pr-4 group p-1 rounded-sm font-semibold">Learn More <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">-&gt;</span></button>
                    </div>
                </div>
                

                <div className="text-center h-48 bg-[#46aaf6]/50 px-2 py-4 rounded hover:scale-105">
                    <div className="">
                        {/* <img className="card-img-top" src="/images/colleagues-making-business-plan-meeting-close-up.jpg" alt="web" /> */}
                    </div>
                    <div className="">
                        <h1 className="font-bold text-zinc-800 font-serif">Tools to empower teachers</h1>
                        <p className="text-slate-900/80 text-sm py-3">With Grene Academy, teachers can identify gaps in their student&apos;s understading, tailor instructions, and meet the needs of every student.</p>
                        <button className="bg-[#0b80da]/50 flex items-center font-mono text-sm justify-between w-28 mx-auto pr-4 group p-1 rounded-sm font-semibold">Find out <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">-&gt;</span></button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutUS