import React from 'react';
import { connect } from 'react-redux';

class Footer extends React.Component{
    render(){
    return (<div> </div>)
    }
}

const mapStateToProps = state => ({
    ...state
});

export default connect(mapStateToProps)(Footer);
