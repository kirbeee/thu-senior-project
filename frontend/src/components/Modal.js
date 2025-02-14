import React from "react"; // Import React to use JSX
import ReactDOM from "react-dom";
import { useEffect } from "react";

function Modal({ actionBar, children }) {
    // When Modal is rendered, you can't scroll the page
    useEffect(() => {
        document.body.classList.add('overflow-hidden');

        return () => {
            document.body.classList.remove('overflow-hidden');
        }
    }, [])
    return ReactDOM.createPortal(
        <div>
            <div className="fixed inset-0 bg-gray-300 opacity-80"></div>
            <div className="fixed inset-40 p-10 bg-white">
                <div className="flex flex-col justify-between h-full">
                    {children}
                    <div className="flex justify-end">
                        {actionBar}
                    </div>
                </div>
            </div>
        </div>,
        document.querySelector('.modal-container')
    )

}

export default Modal;