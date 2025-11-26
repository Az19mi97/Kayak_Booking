import React, {Component} from 'react';
import { connect } from "react-redux";
import SetOngoingBooking from '../../newAction/SetOngoingBooking';
import SelectKayak from '../../newAction/SelectKayak';
import PropTypes from "prop-types";
import sit_on from '../../assets/images/kayak/sit-on-kayak.jpg';
import sit_in from '../../assets/images/kayak/sit-in-kayak.jpg';
import recreational from '../../assets/images/kayak/recreational-kayak.jpg';
import crossover from '../../assets/images/kayak/crossover-kayak.jpg';
import inflatable from '../../assets/images/kayak/inflatable-kayak.jpg';

class Kayaks extends Component {
    getImage = kayakID => {
        if(kayakID === 'Sit On Kayaks') {
            return sit_on;
        }else if(kayakID === 'Sit In Kayaks'){
            return sit_in;
        }else if(kayakID === 'Recreational Kayaks') {
            return recreational;
        } else if(kayakID === 'Crossover Kayaks') {
            return crossover;
        } else if(kayakID === 'Inflatable Kayaks') {
            return inflatable;
        }
    }
    render(){
        const {
          kayakID,description,price
        }= this.props
        return(
            <div>
                <div className="kayak-details">
                    <img src={this.getImage(kayakID)} alt="kayak"/>
                    <div className="details">
                        <div><p className="kayak-name">{kayakID}</p></div>
                        <ul><li><i></i>{description}</li></ul>
                    </div>
                </div>
                <div>
                    <p>DKK<strong>{`${price}`}</strong></p>
                    <button onClick={() => {
                        this.props.SetOngoingBooking(3);
                        this.props.setKayak(kayakID);
                    }}>Select</button>
                  <p>..</p>
                  <p>..</p>
                </div>
            </div>
        )
    }
}

Kayaks.propTypes = {
  kayakID: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}

const mapStateToProps = state => ({
    ...state
  });

const mapDispatchToProps = dispatch => ({
    SetOngoingBooking: (payload) => dispatch(SetOngoingBooking(payload)),
    setKayak: (payload) => dispatch(SelectKayak(payload))
})
export default connect(mapStateToProps,mapDispatchToProps)(Kayaks);
