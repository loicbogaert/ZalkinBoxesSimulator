import React, {Fragment} from 'react';
import ItemsNum from '../components/calculator/calcs/ItemsNum';
import CalcPoints from '../components/calculator/calcs/CalcPoints';

const Calculator = () => {

    const items = JSON.parse(localStorage.getItem("item1"));
    const items2 = JSON.parse(localStorage.getItem("item2"));

//page
    return (
        <div  className="calcContainer">   

            <CalcPoints/>
            <Fragment>
                <ul className="lists">
                    {items.map(allItems =>(
                        <li className="items" key={allItems.id}>
                            <img className="items__image" src={allItems.imageUrl} alt={allItems.name}/>
                            <div className="items__infos">   
                                <p className="items__name">{allItems.name}</p>
                                <p className="items__price">{allItems.point}{" "}{"coins"}</p>
                                <div className="items__input">
                                    <ItemsNum id={allItems.id} points={allItems.point} item={allItems}/>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>

                <ul className="lists">
                    {items2.map(allItems =>(
                        <li className="items" key={allItems.id}>
                            <img className="items__image" src={allItems.imageUrl} alt={allItems.name}/>
                            <div className="items__infos">   
                                <p className="items__name">{allItems.name}</p>
                                <p className="items__price">{allItems.point}{" "}{"coins"}</p>
                                <div className="items__input">
                                    <ItemsNum className="items__number" id={allItems.id} points={allItems.point} item={allItems}/>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </Fragment>
        </div>
    );
};


export default Calculator;