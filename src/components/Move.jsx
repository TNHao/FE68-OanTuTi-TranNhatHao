import React, { Component } from 'react'
import { connect } from 'react-redux';
import { actSelect } from '../store/actions/GameActions';

class Move extends Component {
    render() {
        const { selection, type, srcImg } = this.props;

        return (
            <img type="button" src={srcImg} alt="" width="70px"
                className={`rounded-circle p-2 ml-3 mt-4 ${selection === type ? "bg-warning" : ""}`}
                onClick={() => { this.props.select(type) }} />
        )
    }
}

const mapStateToProps = (state) => ({
    selection: state.GameReducer.selection 
});

const mapDispatchToProps = (dispatch) => ({
    select: (selection) => {
        dispatch(actSelect(selection));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Move);
