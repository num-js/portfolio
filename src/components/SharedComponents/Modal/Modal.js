import React, { useEffect, useState } from 'react';
import './modal.css';


const Modal = ({ children, buttonComponent, docTitle }) => {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        // Close on outside click of Modal
        // const modal = document.querySelector('.main-modal');
        // window.onclick = function (event) {
        //     if (event.target == modal) setShowModal(false);
        // }
    }, []);

    return (
        <>
            <div onClick={() => setShowModal(true)} className="cursor-pointer">
                {buttonComponent ? buttonComponent : (
                    <div class='nbg-pink text-white rounded font-bold p-2'>Open Modal</div>
                )}
            </div>

            <div class={`main-modal modal-bg-blur fixed w-full h-100 inset-0 z-50 overflow-hidden animated fadeIn faster ${showModal ? 'fadeIn flex justify-center items-center' : 'hidden fadeOut'}`}>
                <div class="border border-teal-500 shadow-lg modal-container bg-gray-800 w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto" style={{ maxHeight: '90vh' }}>
                    <div class="modal-content text-left">
                        {/* <!--Header--> */}
                        <div class="flex justify-between items-center py-2 pl-2">
                            <p>{docTitle}</p>
                            <div class="text-right cursor-pointer z-50"
                                onClick={() => setShowModal(false)}
                                style={{
                                    position: 'relative',
                                    top: '-7px',
                                    right: '5px',
                                }}
                            >
                                <img src="../icons/close-circle.svg" width="16" />
                            </div>
                        </div>
                        {/* <!--Body--> */}
                        <div>
                            {children}
                        </div>
                        {/* <!--Footer--> */}
                        {/* <div class="flex justify-end pt-2">
                            <button
                                class="focus:outline-none modal-close px-4 bg-gray-400 p-3 rounded-lg text-black hover:bg-gray-300"
                                onClick={() => setShowModal(false)}
                            >Cancel</button>    
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal;