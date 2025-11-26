import React, {Component} from 'react';
import Flow from '../extension/Flow';
import '../assets/styles/Booking.css';
import { connect } from 'react-redux';

class Booking extends Component {
    render(){
        return(
            <div className="bookingFlow">
                <ul>
                    <Flow
                        flowRow={1}
                        isBooked={this.props.ongoing > 1 ? true : false}
                        title={'Indtast Afdeling'}
                        isAvailable={this.props.ongoing ===1 ? true : false}
                    />
                    <Flow
                        flowRow={2}
                        isBooked={this.props.ongoing > 2 ? true : false}
                        title={'Vælg Kayak'}
                        isAvailable={this.props.ongoing ===2 ? true : false}
                    />
                    <Flow
                        flowRow={3}
                        isBooked={this.props.ongoing > 3 ? true : false}
                        title={'Tilvalg'}
                        isAvailable={this.props.ongoing ===3 ? true : false}
                    />
                    <Flow
                        flowRow={4}
                        isBooked={this.props.ongoing > 4 ? true : false}
                        title={'Bekræftelse'}
                        isAvailable={this.props.ongoing ===4 ? true : false}
                    />
                </ul>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    ...state
});
export default connect(mapStateToProps)(Booking);
