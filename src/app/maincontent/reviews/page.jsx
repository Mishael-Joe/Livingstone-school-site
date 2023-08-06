import React from 'react'

const instructors = {
    first: {
        id: 1,
        name: 'John Mark',
        role: 'Parent',
        writeUp: 'Education will be for you what you want it to be',
        src: "/image-victor.jpg",
        alt: 'abc'
    },
    second: {
        id: 2,
        name: 'Lora Shrof',
        role: 'Student',
        writeUp: 'Knowledge has to be improved, challenged, and increased constantly, or it vanishes',
        src: "/image-victor.jpg",
        alt: 'abc'
    },
    third: {
        id: 3,
        name: 'Zeng Chin',
        role: 'Teacher',
        writeUp: 'To know that we know what we know, and to know that we do not know what we do not know, that is true knowledge',
        src: "/image-victor.jpg",
        alt: 'abc'
    }
}

const Reviews = () => {
  return (
        <section className="px-4 py-10 text-[#021422] dark:text-[#021422]">
            <div>
                <div className="grid md:grid-cols-3 gap-3">
                    <div className="text-center bg-[#46aaf6]/50 px-2 py-4 rounded hover:border-blue-600 hover:border transition delay-100">
                        <div className="h-70">
                            <h1 className="font-bold text-zinc-800 font-mono">{instructors.first.name}</h1>
                            <h2 className="font-bold text-zinc-800 font-mono text-xs">{instructors.first.role}</h2>
                            <p className="text-slate-900/80 text-sm py-3">{instructors.first.writeUp}</p>
                        </div>
                    </div>

                    <div className="text-center bg-[#46aaf6]/50 px-2 py-4 rounded hover:border-blue-600 hover:border transition delay-100">
                        <div className="h-70">
                            <h1 className="font-bold text-zinc-800 font-mono">{instructors.second.name}</h1>
                            <h2 className="font-bold text-zinc-800 font-mono text-xs">{instructors.second.role}</h2>
                            <p className="text-slate-900/80 text-sm py-3">{instructors.second.writeUp}</p>
                        </div>
                    </div>
                    
                    <div className="text-center bg-[#46aaf6]/50 px-2 py-4 rounded hover:border-blue-600 hover:border transition delay-100">
                        <div className="h-70">
                            <h1 className="font-bold text-zinc-800 font-mono">{instructors.third.name}</h1>
                            <h2 className="font-bold text-zinc-800 font-mono text-xs">{instructors.third.role}</h2>
                            <p className="text-slate-900/80 text-sm py-3">{instructors.third.writeUp}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Reviews