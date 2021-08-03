import React, { Component } from 'react'
import Player from './Player'
import Scores from './Scores';
import './style.css';
import Move from './Move';

export default class Home extends Component {
    render() {
        return (
            <div className="Home">
                <div className="container text-center py-3">
                    <h1>Game oẵn tù tì</h1>
                    <div className="d-flex justify-content-between px-4">
                        <Player srcImg="./img/player.png" isRandom={false}/>
                        <Player srcImg="./img/playerComputer.png" isRandom={true}/>
                    </div>
                    <div className="options text-left position-absolute d-flex flex-column">
                        <Move srcImg="./img/keo.png" type="keo" />
                        <Move srcImg="./img/bua.png" type="bua" />
                        <Move srcImg="./img/bao.png" type="bao" />
                    </div>
                    <Scores />
                </div>
            </div>
        )
    }
}