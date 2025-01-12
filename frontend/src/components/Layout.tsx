import Navbar from './Header'
import Footer from './Footer'
import {Provider} from "react-redux";
import {store} from "../lib/store";
import "../index.css"

interface LayoutProps {
    children: React.ReactNode;  // 確保 children 屬性為 React 的元素
}

export default function Layout({ children }: LayoutProps) {
    return (
        <Provider store={store}>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </Provider>
    );
}