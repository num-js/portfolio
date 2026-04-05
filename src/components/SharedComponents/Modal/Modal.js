import React, { useEffect, useState } from 'react';

const Modal = ({ children, buttonComponent, docTitle }) => {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {}, []);

    return (
        <>
            <div onClick={() => setShowModal(true)} className="cursor-pointer">
                {buttonComponent ? (
                    buttonComponent
                ) : (
                    <div className="rounded bg-primary p-2 font-bold text-white">Open Modal</div>
                )}
            </div>

            <div
                className={`main-modal fixed inset-0 z-50 h-full w-full overflow-hidden bg-black/70 transition-opacity duration-300 ${
                    showModal ? 'flex items-center justify-center opacity-100' : 'pointer-events-none hidden opacity-0'
                }`}
            >
                <div
                    className="modal-container z-50 mx-auto w-11/12 max-h-[90vh] overflow-y-auto rounded-lg border border-primary/40 bg-surface shadow-lg md:max-w-md"
                    style={{ maxHeight: '90vh' }}
                >
                    <div className="modal-content text-left">
                        <div className="flex items-center justify-between py-2 pl-2">
                            <p>{docTitle}</p>
                            <div
                                className="relative -top-1.5 right-1 z-50 cursor-pointer text-right"
                                onClick={() => setShowModal(false)}
                                onKeyDown={(e) => e.key === 'Enter' && setShowModal(false)}
                                role="button"
                                tabIndex={0}
                            >
                                <img src="../icons/close-circle.svg" alt="close" width="16" />
                            </div>
                        </div>
                        <div>{children}</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;
