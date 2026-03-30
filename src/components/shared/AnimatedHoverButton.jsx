export default function ({ btnTxt }) {
    return (
        <div className="mt-3 relative inline-flex items-center justify-start py-2 pl-4 pr-12 overflow-hidden font-semibold text-[#52af77] transition-all duration-150 ease-in-out rounded bg-gray-100 dark:bg-gray-800 dark:text-[#52af77] hover:pl-10 hover:pr-6 group w-full cursor-pointer active:scale-95">
            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#52af77] group-hover:h-full"></span>
                <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                    <svg className="w-5 h-5 text-[#52af77] dark:text-[#7fcf9a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                    {/* <svg class="w-5 h-5 text-[#52af77] dark:text-[#7fcf9a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 17L17 7M17 7H9M17 7V15"></path>
                    </svg> */}
                </span>
                <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                    {/* <svg className="w-5 h-5 text-white dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg> */}
                    <svg class="w-5 h-5 text-white dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 17L17 7M17 7H9M17 7V15"></path>
                    </svg>
                </span>
                <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                    {btnTxt ? btnTxt : 'View Details'}
                </span>
        </div>
    )
}
