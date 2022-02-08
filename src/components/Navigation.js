import React from 'react';

const Navigation = () => {
    return (
        <div className="navigation">
            <ul className="navigation__ul">
                <li className="navigation__li">
                    <a href="/" className="navigation__a"><p className="navigation__p">Home</p></a>
                </li>

                <li className="navigation__li">
                    <a href="/items_choice_box" className="navigation__a"><p className="navigation__p">Simulator</p></a>
                </li>

                <li className="navigation__li">
                    <a href="/items_choice" className="navigation__a"><p className="navigation__p">Calculator</p></a>
                </li>
            </ul>
        </div>
    );
};

export default Navigation;