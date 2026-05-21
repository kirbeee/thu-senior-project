import { render, screen, cleanup } from '@testing-library/react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
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
            {/* Added data-testid="modal-backdrop" here */}
            <div data-testid="modal-backdrop" className="fixed inset-0 bg-gray-300 opacity-80"></div>
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

// We need a DOM element for the portal to attach to.
// We'll create one before each test and clean it up after.
let modalRoot: HTMLElement;

beforeEach(() => {
    // Create a div with the class 'modal-container' and append it to the body
    modalRoot = document.createElement('div');
    modalRoot.classList.add('modal-container');
    document.body.appendChild(modalRoot);
});

afterEach(() => {
    // Clean up the DOM after each test
    cleanup();
    document.body.removeChild(modalRoot);
    // Ensure body class is clean after each test
    document.body.classList.remove('overflow-hidden');
});

describe('Modal', () => {
    it('renders the modal content and action bar', () => {
        const mockActionBar = <button>Close</button>;
        const mockChildren = <p>This is the modal content.</p>;

        render(
            <Modal actionBar={mockActionBar}>
                {mockChildren}
            </Modal>
        );

        // Check if the children content is rendered
        expect(screen.getByText('This is the modal content.')).toBeInTheDocument();

        // Check if the action bar content is rendered
        expect(screen.getByRole('button', { name: 'Close' })).toBeInTheDocument();

        // Check if the backdrop is present (using the opacity class as a proxy)
        expect(screen.getByTestId('modal-backdrop')).toHaveClass('opacity-80'); // Add data-testid="modal-backdrop" to the backdrop div in your Modal component for this to work.
    });

    it('adds and removes the overflow-hidden class on document.body', () => {
        const mockActionBar = <button>OK</button>;
        const mockChildren = <p>Content</p>;

        // Initially, body should not have the class
        expect(document.body.classList.contains('overflow-hidden')).toBe(false);

        const { unmount } = render(
            <Modal actionBar={mockActionBar}>
                {mockChildren}
            </Modal>
        );

        // After rendering, body should have the class
        expect(document.body.classList.contains('overflow-hidden')).toBe(true);

        // Unmount the component
        unmount();

        // After unmounting, body should not have the class
        expect(document.body.classList.contains('overflow-hidden')).toBe(false);
    });

    // Note: Testing the console.error when '.modal-container' is missing
    // is tricky with standard testing-library setup because createPortal
    // might behave differently or the error might not be caught easily.
    // The current implementation relies on the presence of '.modal-container'
    // in the DOM where the component is rendered. The beforeEach block
    // ensures this is the case for the other tests. If you needed to test
    // the specific error handling path, you might need a more advanced
    // setup or mock `ReactDOM.createPortal`. For this example, we focus
    // on the successful rendering path.
});

// To make the backdrop test work, add a data-testid to the backdrop div:
// <div data-testid="modal-backdrop" className="fixed inset-0 bg-gray-300 opacity-80"></div>
