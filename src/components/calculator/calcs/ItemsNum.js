import React from 'react';

var arrayNumbers = [];
var onlyPointsArray = [];
var secondArray = [];

/**Props for item number */
class ItemsNum extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            number : 0
        }
    }
//increment function
    increment(){
        // Display of the number of items on the screen
        this.setState({ number : this.state.number +1});
        // Save values in the array + calc
        const itemInfos = this.props;
        const basePoint = this.props.points;

        if (arrayNumbers.includes(this.props)){
            //poits array
            onlyPointsArray.push(basePoint);
            localStorage.setItem('onlyPointsArray', JSON.stringify(onlyPointsArray))

            /**boxes loot*/
            var index = secondArray.indexOf(this.props.item);
            secondArray[index].number = secondArray[index].number+=1;
            localStorage.setItem('secondArray', JSON.stringify(secondArray))
        }
        else if (this.state.number > -1){
            //poits array
            arrayNumbers.push(itemInfos)
            onlyPointsArray.push(basePoint);
            localStorage.setItem('onlyPointsArray', JSON.stringify(onlyPointsArray))

             /*boxes loot*/
            var index = secondArray.indexOf(this.props.item);
            secondArray.push(this.props.item);
            localStorage.setItem('secondArray', JSON.stringify(secondArray))
        }
    }
//decrement function
    decrement() {
        // Display of the number of items on the screen
        this.setState({ number : this.state.number -1});
        // Save values in the array + calc
        const itemInfos = this.props;
        const basePoint = -this.props.points;
        
        // If number of item === 1
        if (this.state.number === 1){
            //poits array
            arrayNumbers.splice(itemInfos);
            onlyPointsArray.push(basePoint);
            localStorage.setItem('onlyPointsArray', JSON.stringify(onlyPointsArray));
            
            //second array (boxes loot)
            var index = secondArray.indexOf(this.props.item);
            secondArray.splice(index, 1);
            localStorage.setItem('secondArray', JSON.stringify(secondArray));
        }
        // If not
        else if (this.state.number > 1){
            // points array
            onlyPointsArray.push(basePoint);
            localStorage.setItem('onlyPointsArray', JSON.stringify(onlyPointsArray));

            //second array (boxes loot)
            var index = secondArray.indexOf(this.props.item);
            secondArray[index].number = secondArray[index].number-=1;
            localStorage.setItem('secondArray', JSON.stringify(secondArray))
        }
    }

//bind increment and decrement function to number of items (count)
    render() {
        return (<Child count={this.state.number} increment={this.increment.bind(this)} decrement={this.decrement.bind(this)}/>);
    }
}
// return Child element (shows number of items and buttons to increment / decrement)
class Child extends React.Component{
    render () {
   return(
    <div className="items__calcs">
        <div className="items__number">{this.props.count}</div>
        <div className="items__buttons-container">
            <button className="items__button" onClick={this.props.decrement}>-</button>
            <button className="items__button" onClick={this.props.increment} >+</button>
        </div>
    </div>) 
    }
}

export default ItemsNum;