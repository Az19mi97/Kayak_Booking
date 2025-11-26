import React, {Component} from 'react';
import { connect } from "react-redux";
import SetOngoingBooking from '../newAction/SetOngoingBooking';
import SelectLocation from '../newAction/SelectLocation';
import '../assets/styles/Requesting.css';

class Requesting extends Component{
    state = {
       location: '',
       textAdded: false
    }

    handleLocationOnKeyDown = event => {
        if(['Enter', 'Tab'].includes(event.key)) {
          event.preventDefault();
          const text = this.state.location.trim();

          if(text) {
            this.setState({
              location: text,
              textAdded: true
            });
          }
        }
    }

    handleLocationChange = event => {
        this.setState({
          location: event.target.value
        });
    }

    handleLocationPaste = event => {
        event.preventDefault();
        const paste = event.clipboardData.getData('text');
        if(paste){
            this.setState({
                location: paste
            });
        }
    }

    handleLocationDelete = () => {
        this.setState({
            location: '',
            textAdded: false
        });
    }

    render(){
        return(
            <main className="wrapper">
                {
                    this.state.textAdded
                    &&
                    <div className="texting">
                        {this.state.location}
                        <button
                        type="button"
                        className="button"
                        onClick={() => this.handleLocationDelete()}
                        >
                        &times;
                        </button>
                    </div>
                }
                 <input
                    className="input"
                    placeholder="Afdeling: Fisketorvet, Fields eller City2"
                    value={this.state.location}
                    onChange={this.handleLocationChange}
                    onKeyDown={this.handleLocationOnKeyDown}
                    onPaste={this.handleLocationPaste}
                  />
                {
                    this.state.textAdded
                    &&
                    <button type="button" onClick={ () => {
                        this.props.SetOngoingBooking(2);
                        this.props.setLocation(this.state.location)
                    }}>
                            <span>Fortsæt</span>
                    </button>
                }
            </main>
        )
    }
}
const mapStateToProps = state => ({
    ...state
  });

const mapDispatchToProps = dispatch => ({
    SetOngoingBooking: (payload) => dispatch(SetOngoingBooking(payload)),
    setLocation: (payload) => dispatch(SelectLocation(payload))
})
export default connect(mapStateToProps,mapDispatchToProps)(Requesting);
