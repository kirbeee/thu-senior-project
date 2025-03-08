import React from "react";
import ReactDOM from "react-dom";
import { useEffect } from "react";

interface ModalProps { // Define props interface for type safety
    actionBar: React.ReactNode; // actionBar prop can be any React node
    children: React.ReactNode;  // children prop can be any React node
}

function Modal({ actionBar, children }: ModalProps) { // Use the ModalProps interface
    useEffect(() => {
        document.body.classList.add('overflow-hidden');

        return () => {
            document.body.classList.remove('overflow-hidden');
        }
    }, []);

    const modalContainer = document.querySelector('.modal-container'); // Get the container element

    if (!modalContainer) { // Null check: If modalContainer is not found
        console.error("Modal container element with class '.modal-container' not found in the DOM.");
        return null; // Or return a fallback UI, or throw an error, depending on your needs
    }

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
        modalContainer // Use the modalContainer variable, which is now guaranteed to be an Element or DocumentFragment
    );
}

export default Modal;