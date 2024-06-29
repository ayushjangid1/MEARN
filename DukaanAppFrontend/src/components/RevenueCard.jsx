
export const RevenueCard = () => {
    return <div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

        <div className="bg-blue-400 rounded-lg shadow-sm m-4 mb-0">
            <div className="flex p-2 m-2 text-white">New Payout 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.1" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                </svg>
            </div>
            <div className="flex justify-between p-2 m-2 text-white">
                <div className="text-3xl font-semibold">₹2,312.23</div>
                <div className="flex underline underline-offset-2 text-md">23 Orders
                    <div className="mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" class="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                    </div>
                </div>
            </div>
            <div className="flex justify-between bg-blue-300 rounded-lg shadow-sm text-white p-2">
                <div>New Payout Date:</div>
                <div>Today, 04:00PM</div>
            </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm mt-4 mr-4 ml-4 mb-8 p-2">
            <div className="flex p-2 m-2 text-gray-text">Amount Pending 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.1" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                </svg>
            </div>
            <div className="flex justify-between p-2">
                <div className="text-3xl font-semibold">₹92,312.20</div>
                <div className="flex underline underline-offset-2 text-md text-blue-500">13 Orders
                    <div className="mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" class="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                    </div>
                </div>
            </div>
            
        </div>
        <div className="bg-white rounded-lg shadow-sm mt-4 mr-4 ml-4 mb-8 p-2">
            <div className="flex p-2 m-2 text-gray-text">Amount Processed 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.1" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                </svg>
            </div>
            <div className="flex justify-between p-2 ">
                <div className="text-3xl font-semibold">₹23,92,312.19</div>
            </div>
        </div>

    </div>
    </div>
}
