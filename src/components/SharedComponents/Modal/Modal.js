import React, { useEffect, useState } from 'react';
import './modal.css';


const Modal = ({ children, buttonComponent, docTitle }) => {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
    }, []);

    return (
        <>
            <div onClick={() => setShowModal(true)} className="cursor-pointer">
                {buttonComponent ? buttonComponent : (
                    <div className='nbg-pink text-white rounded font-bold p-2'>Open Modal</div>
                )}
            </div>

            <div className={`main-modal modal-bg-blur fixed w-full h-100 inset-0 z-50 overflow-hidden animated fadeIn faster ${showModal ? 'fadeIn flex justify-center items-center' : 'hidden fadeOut'}`}>
                <div className="border border-teal-500 shadow-lg modal-container bg-gray-800 w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto" style={{ maxHeight: '90vh' }}>
                    <div className="modal-content text-left">
                        <div className="flex justify-between items-center py-2 pl-2">
                            <p>{docTitle}</p>
                            <div className="text-right cursor-pointer z-50"
                                onClick={() => setShowModal(false)}
                                style={{
                                    position: 'relative',
                                    top: '-7px',
                                    right: '5px',
                                }}
                            >
                                <img src="../icons/close-circle.svg" alt="close" width="16" />
                            </div>
                        </div>
                        <div>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal;
