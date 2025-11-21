import React from 'react'

export default function ThirdPriceTable() {
    return (
        <div className=" bg-gray-100 p-6">
            <div className="w-full max-w-full flex flex-col gap-7">
                <div className='bg-[#002A46] py-3 flex justify-center text-center text-4xl text-white font-tilt-wrap'>

                    Non - Membership

                </div>
                <div className="overflow-hidden border border-gray-300 bg-white shadow-2xl">
                    <table className="w-full table-fixed text-sm">
                        <thead>
                            <tr className="bg-gray-50">
                                <th className="w-1/4 py-3 border-r  font-inter border-t border-[#ccc]"></th>
                                <th className="w-1/4 py-3 text-center border-r  font-inter border-t border-[#ccc]">Saturday</th>
                                <th className="w-1/4 py-3 text-center border-r  font-inter border-t border-[#ccc]">Sunday</th>
                                <th className="w-1/4 py-3 text-center">Sat + Sun</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-gray-200">
                                <td className="py-3 px-6 font-medium border-r  font-inter border-t border-[#ccc]">Early</td>
                                <td className="py-3 text-center border-r  font-inter border-t border-[#ccc]">$400</td>
                                <td className="py-3 text-center border-r  font-inter border-t border-[#ccc]">$450</td>
                                <td className="py-3 text-center border-r  font-inter border-t border-[#ccc]">$700</td>
                            </tr>

                            <tr className="bg-white">
                                <td className="py-3 px-6 font-medium border-r  font-inter border-t border-[#ccc]">Regular</td>
                                <td className="py-3 text-center border-r  font-inter border-t  border-[#ccc]">$450</td>
                                <td className="py-3 text-center border-r  font-inter border-t border-[#ccc]">$500</td>
                                <td className="py-3 text-center border-r  font-inter border-t border-[#ccc]">$800</td>
                            </tr>

                            <tr className="bg-gray-200">
                                <td className="py-3 px-6 font-medium border-r  font-inter border-t border-b border-[#ccc]">Late</td>
                                <td className="py-3 text-center border-r  font-inter border-t border-b border-[#ccc]">$500</td>
                                <td className="py-3 text-center border-r  font-inter border-t border-b border-[#ccc]">$600</td>
                                <td className="py-3 text-center border-r  font-inter border-t border-b border-[#ccc]">$900</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}
