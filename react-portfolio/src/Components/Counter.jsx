import React, { Component } from 'react';

class Counter extends Component {


    render() {
        

        return (
            <div>
                {this.props.children}
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button 
                onClick={()=> this.props.onIncrement(this.props.counter)}
                className='btn btn-success btn-sm'
                >Increment
                </button>

                <button 
                onClick={() => this.props.onDelete(this.props.counter.id)} 
                className='btn btn-danger btn-sm m-2'
                >Delete
                </button> {/*Counter raise onDelete and Counters handle event */}
            </div>
        );
    }


    getBadgeClasses() {
        let classes = 'badge m-2 badge-';
        classes += (this.props.counter.value === 0) ? 'warning' : 'primary';
        return classes;
    }

    formatCount() {
        const { value } = this.props.counter
        return value === 0 ? <p>Zero</p> : value
    }
}

export default Counter;
