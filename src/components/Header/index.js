import React from 'react'
import './Header.css'


function Header({black}) {
    return (
        <header className={ black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" />
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/c7906d33850498.56ba69ac353e1.png" alt="" />
                </a>
            </div>
        </header>
    )
}

export default Header
