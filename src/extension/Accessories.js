import React, {Component} from 'react';
import { connect } from "react-redux";
import SetOngoingBooking from '../newAction/SetOngoingBooking';

class Accessories extends Component {
    render(){
        return (
            <div>
                <h1>.....</h1>
                <h3>Tilvalg er i øjeblikket ikke tilgængelig.</h3>
                <button onClick={() => this.props.SetOngoingBooking(4)}>Fortsæt til Bekræftelse</button>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    ...state
  });

const mapDispatchToProps = dispatch => ({
    SetOngoingBooking: (payload) => dispatch(SetOngoingBooking(payload)),
});
export default connect(mapStateToProps,mapDispatchToProps)(Accessories);
