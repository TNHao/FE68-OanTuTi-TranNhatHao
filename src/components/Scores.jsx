import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actPlay } from '../store/actions/GameActions';

class Scores extends Component {
    render() {
        return (
            <div className="score text-success position-absolute">
                <h1>Số bàn thắng: <span>{this.props.wins}</span></h1>
                <h1>Số bàn chơi: <span>{this.props.played}</span></h1>
                <button className="btn btn-success mt-4"
                    onClick={this.props.play}>
                        Oẵn tù tì
                </button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    wins: state.GameReducer.wins, 
    played: state.GameReducer.played
})

const mapDispatchToProps = (dispatch) => ({
    play: () => {
        dispatch(actPlay());
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Scores);