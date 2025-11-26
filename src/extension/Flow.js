import React from 'react';
import PropTypes from "prop-types";

class Flow extends React.Component {
    render() {
        return(
            <li className={this.props.isAvailable ? 'active' : 'inActive'}>
                <div>
                    <div className="circle">
                        <h3>
                        {
                            this.props.isBooked
                            ?
                            <i class="fas fa-check"></i>
                            :
                            this.props.flowRow
                        }
                        </h3>
                    </div>
                    <h3>{this.props.title}</h3>
                </div>
            </li>
        )
    }
}

Flow.propTypes = {
  flowRow: PropTypes.number.isRequired,
  isBooked: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  isAvailable: PropTypes.bool.isRequired
};

export default Flow;
