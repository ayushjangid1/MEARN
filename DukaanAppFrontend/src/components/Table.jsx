
export const Table = () => {
    return <div className="m-4 py-4">
        <div className="text-xl px-2">Transactions | This Month</div>
        <div className="flex justify-start gap-3 py-4">
            <div className="bg-gray-100 py-1 px-3 rounded-3xl text-gray-text font-normal text-lg hover:cursor-pointer">Payouts (22) </div>
            <div className="bg-blue-400 py-1 px-3 rounded-3xl text-white font-normal text-lg hover:cursor-pointer">Returns (6) </div>
        </div>
{/* 
        <div class="flex items-center gap-2 px-4 py-[6px] border border-[#D9D9D9] text-[#808080] rounded w-full max-w-[300px]"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z"></path></svg><input type="text" placeholder="Order ID or transactions ID" class="bg-transparent outline-none w-full"></div> */}

        <div className="flex items-center justify-between gap-3 my-4">
            <div className="flex items-center gap-2 px-4 py-[6px] border border-[#D9D9D9] text-[#808080] rounded w-full max-w-[300px]">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z"></path></svg>
                <input className="w-full text-lg" placeholder="Order ID or Transaction ID"/>
            </div>
            <div className="flex gap-2">
                <div className="flex items-center gap-2 px-4 py-[6px] border border-[#D9D9D9] rounded">
                    <div className="text-lg">Sort</div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                    </svg>
                </div>
                
                <div className="flex items-center gap-2 px-4 py-[6px] border border-[#D9D9D9] rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>

                </div>
            </div>
        </div>

        <div className="overflow-x-auto">
            <table className="min w-full">
                <colgroup>
                    <col className="w-1/5"></col>
                    <col className="w-1/5"></col>
                    <col className="w-1/5"></col>
                    <col className="w-1/5"></col>
                    <col className="w-1/5"></col>
                </colgroup>
                <thead className="text-[#4D4D4D]">
                    <tr className="bg-[#F2F2F2]">
                        <th className="px-3 py-[10px] text-left font-medium text-sm rounded-1">Order ID</th>
                        <th className="px-3 py-[10px] text-left font-medium text-sm">Status</th>
                        <th className="px-3 py-[10px] text-left font-medium text-sm">Trasaction ID</th>
                        <th className="px-3 py-[10px] text-left font-medium text-sm">Refund Date</th>
                        <th className="px-3 py-[10px] text-left font-medium text-sm rounded-1">Order Amount</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-[#E6E6E6]">
                    <tr className="text-sm">
                        <td className="px-3 py-[10px] text-[#146EB4] font-medium">#281209</td>
                        <td className="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px] text-[#1A181E]">
                            <span className="bg-green-500 w-[10px] h-[10px] rounded-full"></span>
                            "Successful"
                        </td>
                        <td className="px-3 py-[10px] text-[#4D4D4D] font-medium">TRX123456</td>
                        <td className="px-3 py-[10px] text-[#4D4D4D] font-medium">	Today, 8:45 PM</td>
                        <td className="px-3 py-[10px] text-[#4D4D4D] font-medium">₹1125.00</td>
                    </tr>
                    <tr className="text-sm">
                        <td className="px-3 py-[10px] text-[#146EB4] font-medium">#281210</td>
                        <td className="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px] text-[#1A181E]">
                            <span className="bg-green-500 w-[10px] h-[10px] rounded-full"></span>
                            "Successful"
                        </td>
                        <td className="px-3 py-[10px] text-[#4D4D4D] font-medium">TRX123497</td>
                        <td className="px-3 py-[10px] text-[#4D4D4D] font-medium">	Tomorrow, 9:45 PM</td>
                        <td className="px-3 py-[10px] text-[#4D4D4D] font-medium">₹125.00</td>
                    </tr>
                    <tr className="text-sm">
                        <td className="px-3 py-[10px] text-[#146EB4] font-medium">#281211</td>
                        <td className="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px] text-[#1A181E]">
                            <span className="bg-green-500 w-[10px] h-[10px] rounded-full"></span>
                            "Successful"
                        </td>
                        <td className="px-3 py-[10px] text-[#4D4D4D] font-medium">TRX123556</td>
                        <td className="px-3 py-[10px] text-[#4D4D4D] font-medium">	Yesterday, 10:45 PM</td>
                        <td className="px-3 py-[10px] text-[#4D4D4D] font-medium">₹1995.00</td>
                    </tr>
                    <tr className="text-sm">
                        <td className="px-3 py-[10px] text-[#146EB4] font-medium">#281212</td>
                        <td className="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px] text-[#1A181E]">
                            <span className="bg-gray-200 w-[10px] h-[10px] rounded-full"></span>
                            "Processing"
                        </td>
                        <td className="px-3 py-[10px] text-[#4D4D4D] font-medium">TRX123296</td>
                        <td className="px-3 py-[10px] text-[#4D4D4D] font-medium">	Today, 7:45 PM</td>
                        <td className="px-3 py-[10px] text-[#4D4D4D] font-medium">₹225.00</td>
                    </tr>
                    <tr className="text-sm">
                        <td className="px-3 py-[10px] text-[#146EB4] font-medium">#281213</td>
                        <td className="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px] text-[#1A181E]">
                            <span className="bg-green-500 w-[10px] h-[10px] rounded-full"></span>
                            "Successful"
                        </td>
                        <td className="px-3 py-[10px] text-[#4D4D4D] font-medium">TRX123996</td>
                        <td className="px-3 py-[10px] text-[#4D4D4D] font-medium">	Tomorrow, 1:45 PM</td>
                        <td className="px-3 py-[10px] text-[#4D4D4D] font-medium">₹999.00</td>
                    </tr>
                    <tr className="text-sm">
                        <td className="px-3 py-[10px] text-[#146EB4] font-medium">#281214</td>
                        <td className="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px] text-[#1A181E]">
                            <span className="bg-green-500 w-[10px] h-[10px] rounded-full"></span>
                            "Successful"
                        </td>
                        <td className="px-3 py-[10px] text-[#4D4D4D] font-medium">TRX123450</td>
                        <td className="px-3 py-[10px] text-[#4D4D4D] font-medium">	Yesterday, 8:55 PM</td>
                        <td className="px-3 py-[10px] text-[#4D4D4D] font-medium">₹925.00</td>
                    </tr>
                    <tr className="text-sm">
                        <td className="px-3 py-[10px] text-[#146EB4] font-medium">#281215</td>
                        <td className="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px] text-[#1A181E]">
                            <span className="bg-green-500 w-[10px] h-[10px] rounded-full"></span>
                            "Successful"
                        </td>
                        <td className="px-3 py-[10px] text-[#4D4D4D] font-medium">TRX128856</td>
                        <td className="px-3 py-[10px] text-[#4D4D4D] font-medium">	Today, 2:45 PM</td>
                        <td className="px-3 py-[10px] text-[#4D4D4D] font-medium">₹11200.00</td>
                    </tr>
                    <tr className="text-sm">
                        <td className="px-3 py-[10px] text-[#146EB4] font-medium">#281216</td>
                        <td className="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px] text-[#1A181E]">
                            <span className="bg-gray-200 w-[10px] h-[10px] rounded-full"></span>
                            "Processing"
                        </td>
                        <td className="px-3 py-[10px] text-[#4D4D4D] font-medium">TRX123411</td>
                        <td className="px-3 py-[10px] text-[#4D4D4D] font-medium">	Tomorrow, 8:00 PM</td>
                        <td className="px-3 py-[10px] text-[#4D4D4D] font-medium">₹9925.00</td>
                    </tr>
                    <tr className="text-sm">
                        <td className="px-3 py-[10px] text-[#146EB4] font-medium">#281217</td>
                        <td className="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px] text-[#1A181E]">
                            <span className="bg-green-500 w-[10px] h-[10px] rounded-full"></span>
                            "Successful"
                        </td>
                        <td className="px-3 py-[10px] text-[#4D4D4D] font-medium">TRX123416</td>
                        <td className="px-3 py-[10px] text-[#4D4D4D] font-medium">	Yesterday, 8:45 PM</td>
                        <td className="px-3 py-[10px] text-[#4D4D4D] font-medium">₹1100.00</td>
                    </tr>
                    <tr className="text-sm">
                        <td className="px-3 py-[10px] text-[#146EB4] font-medium">#281218</td>
                        <td className="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px] text-[#1A181E]">
                            <span className="bg-gray-200 w-[10px] h-[10px] rounded-full"></span>
                            "Processing"
                        </td>
                        <td className="px-3 py-[10px] text-[#4D4D4D] font-medium">TRX123996</td>
                        <td className="px-3 py-[10px] text-[#4D4D4D] font-medium">	Today, 12:45 PM</td>
                        <td className="px-3 py-[10px] text-[#4D4D4D] font-medium">₹2525.00</td>
                    </tr>
                </tbody>
            </table>

        </div>
    </div>
}