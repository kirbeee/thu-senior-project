import React from "react";
import Navbar from './Header';
import Footer from './Footer';
import { Provider } from "react-redux";
import { store } from "@lib/store";
import "../../index.css";

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <Provider store={store}>
            <div className="flex flex-col min-h-screen"> {/* Make layout container flex, vertical, min-height full screen */}
                <Navbar />
                <main className="flex-grow container mx-auto px-4 py-8"> {/* main content area, flex-grow to take available space, container for responsive width, padding */}
                    {children}
                </main>
                <Footer />
            </div>
        </Provider>
    );
}

