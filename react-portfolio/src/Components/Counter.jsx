import React, { Component } from 'react';

class Counter extends Component {
    state = {  
        count: 0,
        imageUrl: 'https://picsum.photos/200'
    }


    render() {
            
        return (
            <React.Fragment>
                
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button className='btn btn-success btn-sm' onClick={this.increment}>Increment</button>
            </React.Fragment>
          );
    }


    getBadgeClasses() {
        let classes = 'badge m-2 badge-';
        classes += (this.state.count === 0) ? 'warning' : 'primary';
        return classes;
    }

    formatCount(){
        const {count} = this.state
        return count === 0 ? <p>Zero</p> : count
    }
}
 
export default Counter;
