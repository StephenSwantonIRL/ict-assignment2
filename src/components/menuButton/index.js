import React from 'react';
import '../../styles/styles.css'
import { Link } from "react-router-dom"

export default function MenuButton({toplevel, links} ) {

    return (
        <div className="dropdown">
            <button className="dropbtn">{toplevel}</button>
            <div className="dropdownC">
                {links.map((link) => (
                    <Link key={link.url} to={link.url}>{link.label}</Link>
                    ))}
            </div>
        </div>
    );
}
