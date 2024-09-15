import {Link} from 'react-router-dom';

function Sidebar(){
    const links =[
        {label: "Home", path: '/'},
        {label: "discussion", path: '/discussion'},
        {label: "About", path: '/about'},
        {label: "Example Table", path: '/table'},
    ]

    const renderedLinks = links.map((link) => {
        return <Link
            key={link.label}
            to={link.path}
            className='mb-3'
            activeClassName="font-bold border-l-4 border-blue-500 pl-2"
        >
            {link.label}</Link>
    })

    return (
        <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
            {renderedLinks}
        </div>
    )
}

export default Sidebar;