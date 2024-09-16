import {Link, useLocation} from 'react-router-dom';
import classNames from "classnames";

function Sidebar(){
    const links =[
        {label: "Home", path: '/'},
        {label: "discussion", path: '/discussion'},
        {label: "About", path: '/about'},
        {label: "Example Page - Table", path: '/table'},
        {label: "Example Page - Button", path: '/button'},
        {label: "Example Page - Modal", path: '/modal'},
        {label: "Example Page - Dropdown", path: '/dropdown'},
        {label: "Example Page - Accordion", path: '/accordion'},
        {label: "Example Page - Card", path: '/card'},
    ]
    const location = useLocation();
    const renderedLinks = links.map((link) => {
        const checkIsCurrentPath = location.pathname === link.path
        const activeClassName="font-bold border-l-4 border-blue-500 pl-2"
        const classes = classNames('mb-3 hover:text-blue-500', checkIsCurrentPath && activeClassName)

        return <Link
            key={link.label}
            to={link.path}
            className={classes}>
            {link.label}</Link>
    })

    return (
        <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
            {renderedLinks}
        </div>
    )
}

export default Sidebar;