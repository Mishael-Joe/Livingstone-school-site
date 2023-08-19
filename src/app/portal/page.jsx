"use client"

import { useState } from "react"
import Link from "next/link"

function Portal() {
    const [studentData, setStudentData] = useState({
        studentName: '',
        acadamicSection: '',
        term: ''
    })
    console.log(studentData)
    
    function handleChange(event) {
        const {name, value} = event.target; 

        setStudentData(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }
    
    function handleSubmit(event) {
        event.preventDefault()
        // console.log(studentData)
    }

    return (
        <section className="bg-gradient-to-r from-[#b6dbfc] to-[#e2f2fe]">
            <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
                <form className="w-full max-w-md border p-4 bg-blue-500/50 rounded-md" onSubmit={handleSubmit}>
                    <Link href={'#'} className="mt-3 text-2xl font-semibold text-gray-800 capitalize">LIVINGSTONE ACADEMY</Link>

                    <div className="relative flex items-center mt-8 w-full">
                        <label className=" w-full">
                            NAME:
                            <input 
                            name="studentName"
                            value={studentData.studentName}
                            onChange={handleChange}
                            type="text" 
                            className="block w-full mt-1 py-3 text-gray-700 bg-white border rounded-lg px-4 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" 
                            placeholder="Student's Name" 
                            required
                            />
                        </label>
                    </div>

                    <div className="relative flex items-center mt-8">
                        <label className=" w-full">
                            ACADAMIC SECTION: <br />
                            <select
                            name="acadamicSection"
                            value={studentData.acadamicSection}
                            onChange={handleChange}
                            className="block w-full mt-1 py-3 text-gray-700 bg-white border rounded-lg px-4 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" 
                            required
                            >
                                <option value=''> --choose-- </option>
                                <option value='2020/2021'> 2020/2021 </option>
                                <option value='2021/2022'> 2021/2022 </option>
                                <option value='2022/2023'> 2022/2023 </option>
                            </select>
                            
                        </label>
                    </div>

                    <div className="relative flex items-center mt-4">
                        <label className=" w-full">
                            TERM: <br />
                            <select
                            name="term"
                            value={studentData.term}
                            onChange={handleChange}
                            className="block w-full mt-1 py-3 text-gray-700 bg-white border rounded-lg px-4 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" 
                            required
                            >
                                <option value=''>--select Term--</option>
                                <option value='First Term'>First Term</option>
                                <option value='Second Term'>Second Term</option>
                                <option value='Third Term'>Third Term</option>
                            </select>
                        </label>
                    </div>

                    <button className="w-full mt-6 px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400">
                        Check Result
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Portal