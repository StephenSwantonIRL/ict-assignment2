import React from 'react';
import '../../styles/styles.css'

export default function MenuButton({toplevel, links} ) {

    return (
        <div className="dropdown">
            <button className="dropbtn">{toplevel}</button>
            <div className="dropdownC">
                {links.map((link) => (
                <a key={link.url} href={link.url}>{link.label}</a>
                    ))}
            </div>
        </div>
    );
}
