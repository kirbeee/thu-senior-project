import Navbar from './Header'
import Footer from './Footer'
import {Provider} from "react-redux";
import {store} from "../lib/store";
import "../index.css"
export default function Layout({ children }) {
    return (
        <Provider store={store}>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </Provider>
    )
}