import React from 'react';

var choicesArray = [];

/**Props for item number */
class Array extends React.Component{
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

        if (choicesArray.includes(this.props)){
            var index = choicesArray.indexOf(this.props);
            choicesArray[index].item.number = choicesArray[index].item.number+=1;
            localStorage.setItem('choicesArray', JSON.stringify(choicesArray))
            console.log(choicesArray)
        }
        else {
            var index = choicesArray.indexOf(this.props);
            choicesArray.push(itemInfos);
            localStorage.setItem('choicesArray', JSON.stringify(choicesArray))
        }
    }
//decrement function
    decrement() {
        if(this.state.number > 0) {
            // Display of the number of items on the screen
            this.setState({ number : this.state.number -1});
        }

        // Save values in the array + calc
        const itemInfos = this.props;
        
        // If number of item === 1
        if (this.state.number === 1){
            var index = choicesArray.indexOf(itemInfos);
            choicesArray.splice(index, 1);
            localStorage.setItem('choicesArray', JSON.stringify(choicesArray))
        }
        // If not
        else if(this.state.number > 1){
            var index = choicesArray.indexOf(itemInfos);
            choicesArray[index].item.number = choicesArray[index].item.number-=1;
            localStorage.setItem('choicesArray', JSON.stringify(choicesArray))
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

export default Array;