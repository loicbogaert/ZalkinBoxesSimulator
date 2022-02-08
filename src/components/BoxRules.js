import React from 'react';

const items1 = JSON.parse(localStorage.getItem('item1'))
const items2 = JSON.parse(localStorage.getItem('item2'))
// Array with all items
const allItems = [];
allItems.push([...items1]);
allItems.push([...items2]);


/**Function to get a random number */
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
}

// arrays with the different rarities

var uncommon = allItems.filter(obj => {
    return obj.rarity === "uncommon"
})

var rare = allItems.filter(obj => {
    return obj.rarity === "rare"
})

var common = allItems.filter(obj => {
    return obj.rarity === "common"
})

/**Arrays loot box && array with choices */
const boxesArray = [];

/**Calcs for total points of items owned */
var onlyPointsArray = []


// Box infos component
class BoxRules extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           randomItem : "",
           imageUrl : "",
           isActive : false,
           point : 0,
           /** Calcs */
           total : 0,
           numberOfBoxes : 0,
           totalBoxPoints : 0,
           totalWorth : 0,
           leftToPay : 0,
           finalTotal : 0
        }
    }

    // Function on click to trigger random item
     handleClick() {
         /**Choice of rarity and item (random)*/
        let arrayChoice = getRandomNumber(1, 100);
        this.setState({ isActive : this.state.isActive = true})
        if (arrayChoice <= 20) {      /*RARE*/ 
            var item = rare[Math.floor(Math.random()*rare.length)];
            this.setState({ randomItem : this.state.randomItem = item.name });
            this.setState({ imageUrl : this.state.imageUrl = item.imageUrl });
            this.setState({ point : this.state.point = item.point });

            /** Array of item gotten in boxes */
            if (boxesArray.includes(item)) {
                var index = boxesArray.indexOf(item);
                boxesArray[index].number = boxesArray[index].number+=1;
                localStorage.setItem('boxesArray', JSON.stringify(boxesArray))
            }
            else {
                boxesArray.push(item);
                localStorage.setItem('boxesArray', JSON.stringify(boxesArray))
            }
        }

        else if (arrayChoice >= 55) { /*COMMON*/ 
            var item2 = common[Math.floor(Math.random()*common.length)];
            this.setState({ randomItem : this.state.randomItem = item2.name});
            this.setState({ imageUrl : this.state.imageUrl = item2.imageUrl});
            this.setState({ point : this.state.point = item2.point });

            /** Array of item gotten in boxes */
            if (boxesArray.includes(item2)) {
                var index = boxesArray.indexOf(item2);
                boxesArray[index].number = boxesArray[index].number+=1;
                localStorage.setItem('boxesArray', JSON.stringify(boxesArray))
            }
            else {
                boxesArray.push(item2);
                localStorage.setItem('boxesArray', JSON.stringify(boxesArray))
            }
        }

        else {                        /*UNCOMMON*/ 
            var item3 = uncommon[Math.floor(Math.random()*uncommon.length)];
            this.setState({ randomItem : this.state.randomItem = item3.name});
            this.setState({ imageUrl : this.state.imageUrl = item3.imageUrl});
            this.setState({ point : this.state.point = item3.point });

            /** Array of item gotten in boxes */
            if (boxesArray.includes(item3)) {
                var index = boxesArray.indexOf(item3);
                boxesArray[index].number = boxesArray[index].number+=1;
                localStorage.setItem('boxesArray', JSON.stringify(boxesArray))
            }
            else {
                boxesArray.push(item3);
                localStorage.setItem('boxesArray', JSON.stringify(boxesArray))
            }
        }
    }

    resetBox() {
        this.setState({ isActive : this.state.isActive = false})
    }


    handleClick2() {
        /**Array of choices and array of loots */
        var item2 = JSON.parse( localStorage.getItem('boxesArray') );
        var item = JSON.parse( localStorage.getItem('choicesArray') );

        /**Array with values to deduce from total points (not wanted items) */
        var notWantedTotal = [];

        onlyPointsArray.push(this.state.point);
        const total = onlyPointsArray.reduce((a, b)=> a + b, 0);
        this.setState({total : total});

        /**Calcs for number of boxes */
       // const numberOfBoxes = onlyPointsArray.length;
        var numberOfBoxes = 0;
        for (let i = 0; i < boxesArray.length; i++){
            numberOfBoxes += boxesArray[i].number;
       }
        this.setState({numberOfBoxes : numberOfBoxes});

        /**Calcs for total cost of boxes */
        const totalBoxPoints = numberOfBoxes * 30;
        this.setState({totalBoxPoints : totalBoxPoints});

        /**compare the two arrays*/
        function Negates() {
            for(let i = 0; i < item2.length; i++) {
                // if(the item is found in both arrays)
                if(item.find(x => x.item.id === item2[i].id)) {
                    // if choice array < loot array => push it in not wanted
                    var ifPositive = item.find(x => x.item.id === item2[i].id).item.number - item2[i].number;
                    if(ifPositive < 0) {
                        notWantedTotal.push(ifPositive * item2[i].point)
                    }
                }
                // else push it in not wanted anyway
                else {
                    notWantedTotal.push(item2[i].number * -item2[i].point)
                }
            }
            /**final calcs*/
            var myTotal = 0;
            for (let i = 0; i < notWantedTotal.length; i++) {
                 myTotal += notWantedTotal[i];
            }
            return myTotal;
        }

        /**total worth */
       const totalWorth = total - totalBoxPoints + Negates();
       this.setState({totalWorth : totalWorth});

        /**What's left to pay to get all the items you wanted*/
        var choiceListPrice = [];
        for (let i = 0; i < item.length; i++) {
           choiceListPrice.push(item[i].item.point * item[i].item.number)
        }
        var totalChoice = choiceListPrice.reduce((a, b)=> a + b, 0);

        const leftToPay = totalChoice - total - notWantedTotal.reduce((a, b)=> a + b, 0);
        console.log("total choice : " + totalChoice)
        console.log("total : " + total)
        console.log(notWantedTotal)
        this.setState({leftToPay : leftToPay})

        /**Final total (total he's paying to get all he wants)*/
        const finalTotal = leftToPay + totalBoxPoints;
        this.setState({finalTotal : finalTotal})
    }

    render() {
        return (<Child isActive = {this.state.isActive} point = {this.state.point} randomItem = {this.state.randomItem} imageUrl = {this.state.imageUrl} handleClick={() =>{this.handleClick(); this.handleClick2()}} resetBox={this.resetBox.bind(this)} total = {this.state.total} totalWorth={this.state.totalWorth} numberOfBoxes={this.state.numberOfBoxes} totalBoxPoints = {this.state.totalBoxPoints} leftToPay = {this.state.leftToPay} finalTotal = {this.state.finalTotal}/>);
    }
}

// return dom elements
class Child extends React.Component{
    render () {

        // setting classes and class changes
        let chest = 'chestOpening__chestImg';
        if(this.props.isActive) {
            chest = 'chest hidden'
        }

        let iteminfos = 'chestOpening__info';
        if(this.props.isActive) {
            iteminfos = 'iteminfos'
        }

        let resetButton = 'hidden';
        if(this.props.isActive) {
            resetButton = 'chestOpening__reset'
        }


        if(this.props.isActive === false) {
            iteminfos = 'hidden'
        }

        return(
            <div className="container">
                <div className="chestOpening">
                    <h2 className="chestOpening__openIt">Click the box to open it !</h2>
                    <div className={iteminfos}>
                        <p className="chestOpening__itemName">{this.props.randomItem}</p>
                        <img className="chestOpening__itemImg" src={this.props.imageUrl} alt={this.props.name}/>
                    </div>
                    <img className={chest} src="img/poe box.png" onClick={this.props.handleClick} alt="Poe box to open"/>
                    <button className={resetButton} onClick={this.props.resetBox}>Open another box !</button>
                </div>

                <div className="classPointsContainer white lists_simulator">
                <p className="classPointsContainer__txt">Total boxes used : {this.props.numberOfBoxes}</p>
                <p className="classPointsContainer__txt">Total price of all items you got : {this.props.total} <img src="img/coin.png" className="classPointsContainer__img" alt="Path of exile coin"/></p>
                <p className="classPointsContainer__txt">Total cost of boxes : {this.props.totalBoxPoints} <img src="img/coin.png" className="classPointsContainer__img" alt="Path of exile coin"/></p>
                <p className="classPointsContainer__txt">(based on items you want) Gains / loss : {this.props.totalWorth} <img src="img/coin.png" className="classPointsContainer__img" alt="Path of exile coin"/></p>
                <p className="classPointsContainer__txt">Left to pay to get all the items you wanted : {this.props.leftToPay} <img src="img/coin.png" className="classPointsContainer__img" alt="Path of exile coin"/></p>
                <p className="classPointsContainer__txt">Total cost to get all the items you wanted : {this.props.finalTotal} <img src="img/coin.png" className="classPointsContainer__img" alt="Path of exile coin"/></p>
                </div> 

                 <div className="lists">
                    {boxesArray.map((lootItem) => (
                        <div className="loots">
                            <img src={lootItem.imageUrl} alt={lootItem.name}/>
                            <p className="loots__img">{lootItem.name}</p>
                            <p className="loots__number">x {lootItem.number}</p>
                        </div>
                    ))}
                 </div>
            </div> 
        ) 
    }
}

export default BoxRules;