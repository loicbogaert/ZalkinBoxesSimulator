import React, {Fragment} from 'react';
import Array from '../components/calculator/user wish/ItemsArray';


const UserChoices = () => {

    const items = JSON.parse(localStorage.getItem("item1"));
    const items2 = JSON.parse(localStorage.getItem("item2"));

    return (
        <div  className="choicesContainer">
            <Fragment>
                <div className="infos_container">
                    <h2 className="infos_container__title">Choose the items you would like to get</h2>
                    <p className="infos_container__text">(This is used tu calculate how worth is your opening)</p>
                    <a className="infos_container__link" href="#/calculator"><button className="button">I made my choice</button></a>
                </div>

                    <h3 className="listTitle">Set 1 : (nom du set)</h3>

                <ul className="lists">
                    {items.map(allItems =>(
                        <li className="items" key={allItems.id}>
                            <img className="items__image" src={allItems.imageUrl} alt={allItems.name}/>
                            <div className="items__infos">   
                                <p className="items__name">{allItems.name}</p>
                                <div className="items__input">
                                    <Array className="items__number" item={allItems}/>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>

                    <h3 className="listTitle">Set 2 : (nom du set)</h3>

                <ul className="lists">
                    {items2.map(allItems =>(
                        <li className="items" key={allItems.id}>
                            <img className="items__image" src={allItems.imageUrl} alt={allItems.name}/>
                            <div className="items__infos">   
                                <p className="items__name">{allItems.name}</p>
                                <div className="items__input">
                                    <Array className="items__number" item={allItems}/>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </Fragment>
        </div>
    );
};

export default UserChoices;