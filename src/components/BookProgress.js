import React, {Component} from 'react';
import { connect } from 'react-redux';
import Requesting from '../extension/Requesting';
import Selection from '../extension/Selection';
import Accessories from '../extension/Accessories';
import Book from '../extension/Booking';

class BookProgress extends Component {
    render(){
        return (
            <div>
                {
                    this.props.ongoing ===1
                    &&
                    <Requesting />
                }
                {
                    this.props.ongoing ===2
                    &&
                    <Selection />
                }
                {
                    this.props.ongoing ===3
                    &&
                    <Accessories />
                }
                {
                    this.props.ongoing ===4
                    &&
                    <Book />
                }
            </div>
        )
    }
}
const mapStateToProps = state => ({
    ...state
})

export default connect(mapStateToProps)(BookProgress);
