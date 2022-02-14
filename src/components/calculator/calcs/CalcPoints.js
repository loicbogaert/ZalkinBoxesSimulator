import React from 'react';

/** To calculate total points */

class Points extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            total : 0,
            numberOfBoxes : 0,
            totalBoxPoints : 0,
            totalWorth : 0,
            leftToPay : 0,
            finalTotal : 0
        }
    }
    handleClick() {

        /**Array of choices and array of loots */
        var item2 = JSON.parse( localStorage.getItem('secondArray') );
        var item = JSON.parse( localStorage.getItem('choicesArray') );

        /**Array with values to deduce from total points (not wanted items) */
        var notWantedTotal = [];

        /**Calcs for total points of items owned */
        var onlyPointsArray = JSON.parse(localStorage.getItem('onlyPointsArray'));
        const total = onlyPointsArray.reduce((a, b)=> a + b, 0);
        this.setState({total : total});
        localStorage.setItem('onlyPointsArray', []);

        /**Calcs for number of boxes */
       // const numberOfBoxes = onlyPointsArray.length;
       var numberOfBoxes = 0;
       for (let i = 0; i < item2.length; i++){
            numberOfBoxes += item2[i].number;
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
                    console.log(ifPositive)
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
        console.log(notWantedTotal.reduce((a, b)=> a + b, 0))
        this.setState({leftToPay : leftToPay})

        /**Final total (total he's paying to get all he wants)*/
        const finalTotal = leftToPay + totalBoxPoints;
        this.setState({finalTotal : finalTotal})
    }

    


    render() {
        return (<Child1 total = {this.state.total} totalWorth={this.state.totalWorth} numberOfBoxes={this.state.numberOfBoxes} totalBoxPoints = {this.state.totalBoxPoints} leftToPay = {this.state.leftToPay} finalTotal = {this.state.finalTotal} handleClick={this.handleClick.bind(this)}/>);
    }
}

// return Child element (shows number of items and buttons to increment / decrement)
class Child1 extends React.Component{
    render () {
        return(

        <div className='center'>
            <div className="classPointsContainer">
                <div className='classPointsContainer__flex'>
                    <div className='classPointsContainer__col1'>
                        <p className="classPointsContainer__txt">Total boxes used : {this.props.numberOfBoxes}</p>
                        <p className="classPointsContainer__txt">Total price of all items you got : {this.props.total} <img src="img/coin.png" className="classPointsContainer__img"/></p>
                        <p className="classPointsContainer__txt">Total cost of boxes : {this.props.totalBoxPoints} <img src="img/coin.png" className="classPointsContainer__img"/></p>
                    </div>

                    <div className='classPointsContainer__col2'>
                        <p className="classPointsContainer__txt">Total worth based on items you wanted : {this.props.totalWorth} <img src="img/coin.png" className="classPointsContainer__img"/></p>
                        <p className="classPointsContainer__txt">Left to pay to get all the items you wanted : {this.props.leftToPay} <img src="img/coin.png" className="classPointsContainer__img"/></p>
                        <p className="classPointsContainer__txt">Total cost to get all the items you wanted : {this.props.finalTotal} <img src="img/coin.png" className="classPointsContainer__img"/></p>
                    </div>
                </div>
            </div> 

            <button className="buttonCalculate button" onClick={this.props.handleClick}>Calculate !</button>

        </div>

        ) 
    }
}

export default Points;