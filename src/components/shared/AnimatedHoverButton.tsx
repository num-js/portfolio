type AnimatedHoverButtonProps = {
    btnTxt?: string;
    btnClass?: string;
};

function AnimatedHoverButton({ btnTxt, btnClass }: AnimatedHoverButtonProps) {
    return (
        <div
            className={
                'relative inline-flex w-full cursor-pointer items-center justify-start overflow-hidden rounded-md border border-white/10 bg-surface-card py-2 pl-4 pr-12 font-semibold text-primary transition-all duration-150 ease-in-out hover:pl-10 hover:pr-6 group active:scale-95 ' +
                (btnClass ? btnClass : '')
            }
        >
            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-primary group-hover:h-full"></span>
            <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
            </span>
            <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H9M17 7V15"></path>
                </svg>
            </span>
            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                {btnTxt ? btnTxt : 'View Details'}
            </span>
        </div>
    );
}

export default AnimatedHoverButton;
