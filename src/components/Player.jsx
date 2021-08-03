import React, { Component } from 'react';
import { connect } from 'react-redux';

class Player extends Component {
    render() {
        const {selectedImgSrc, randomImgSrc, srcImg, isRandom} = this.props;

        return (
            <div className="player">
                <div className="speech-bubble text-center">
                    <img src={ isRandom? randomImgSrc : selectedImgSrc} alt="" className="w-50" />
                </div>
                <img src={srcImg} alt="" className="w-100" />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    selectedImgSrc: state.GameReducer.selectedImgSrc, 
    randomImgSrc: state.GameReducer.randomImgSrc
})

export default connect(mapStateToProps)(Player);