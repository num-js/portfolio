import React, { useEffect } from 'react';
import './modal.css';


const Modal = () => {

    const openModal = () => {
        const modal = document.querySelector('.main-modal');

        modal.classList.remove('fadeOut');
        modal.classList.add('fadeIn');
        modal.style.display = 'flex';
    }

    const modalClose = () => {
        const modal = document.querySelector('.main-modal');
        modal.classList.remove('fadeIn');
        modal.classList.add('fadeOut');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 500);
    }



    useEffect(() => {

        const closeButton = document.querySelectorAll('.modal-close');



        // for (let i = 0; i < closeButton.length; i++) {

        // const elements = closeButton[i];

        // closeButton.click = (e) => modalClose();

        //     modal.style.display = 'none';

        //     window.onclick = function (event) {
        //         if (event.target == modal) modalClose();
        //     }
        // }

        const modal = document.querySelector('.main-modal');

        window.onclick = function (event) {
            if (event.target == modal) modalClose();
        }

    }, []);

    return (
        <>
            <div>
                <button onClick={openModal} class='nbg-pink text-white rounded font-bold p-2'>Open Modal</button>
            </div>

            <div class="main-modal modal-bg-blur fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster">
                <div class="border border-teal-500 shadow-lg modal-container bg-gray-800 w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto" style={{ width: '100%', height: '100%' }}>
                    <div class="modal-content py-4 text-left px-6">
                        {/* <!--Header--> */}
                        <div class="flex justify-between items-center pb-3">
                            <p class="text-2xl font-bold">Header</p>
                            <div class="modal-close text-white cursor-pointer z-50">
                                <svg class="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                    viewBox="0 0 18 18">
                                    <path
                                        d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        {/* <!--Body--> */}
                        <div class="my-5">
                            <p>Inliberali Persius Multi iustitia pronuntiaret expeteretur sanos didicisset laus angusti ferrentur arbitrium arbitramur huic desiderent.?</p>
                        </div>
                        {/* <!--Footer--> */}
                        <div class="flex justify-end pt-2">
                            <button
                                class="focus:outline-none modal-close px-4 bg-gray-400 p-3 rounded-lg text-black hover:bg-gray-300">Cancel</button>
                            <button
                                class="focus:outline-none px-4 bg-teal-500 p-3 ml-3 rounded-lg text-white hover:bg-teal-400">Confirm</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal;
