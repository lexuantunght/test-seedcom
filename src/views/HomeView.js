import React, { useState } from 'react';
import { CircleNode } from '../components/CircleNode';
import { Modal, Backdrop, Fade } from '@material-ui/core';
import { HeaderBar } from '../components/Header';
import { NodeForm } from '../components/NodeForm';
import { ConnectionForm } from '../components/ConnectionForm';
import { Stage, Layer, Arrow } from 'react-konva';

function nextLetter(s){
    return s.replace(/([a-zA-Z])[^a-zA-Z]*$/, function(a){
        var c= a.charCodeAt(0);
        switch(c){
            case 90: return 'A';
            case 122: return 'a';
            default: return String.fromCharCode(++c);
        }
    });
}

export function HomeView() {
    const [currentLabel, setCurrentLabel] = useState('A');
    const [currentZIndex, setCurrentZIndex] = useState(10);
    const [currentButton, setCurrentButton] = useState("1");
    const [mainBoard, setMainBoard] = useState([]);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [isOpenModalConnection, setIsOpenModalConnect] = useState(false);
    const [clickPos, setClickPos] = useState({x: 0, y: 0});

    const addNode = (x, y, action, value, obj) => {
        let temp = mainBoard;
        temp.push(
            <CircleNode value={value} action={action} 
            name={currentLabel} obj={obj} pos={{top: y, left: x}} zIndex={currentZIndex} canSelect={false}/>
        );
        setMainBoard(temp);
        setCurrentLabel(nextLetter(currentLabel));
        setCurrentZIndex(currentZIndex => currentZIndex + 1);
    }

    const addConnection = (from, to) => {
        /*let temp = mainBoard;
        let fromPos = {x: 0, y: 0};
        let toPos = {x: 0, y: 0};
        for (let i = 0; i < mainBoard.length; i++) {
            if (mainBoard[i].props.name === from) fromPos = {x: mainBoard[i].props.pos.left, y: mainBoard[i].props.pos.top};
            if (mainBoard[i].props.name === to) toPos = {x: mainBoard[i].props.pos.left, y: mainBoard[i].props.pos.top};
        }
        temp.push(
            <Stage className="connection" name="connection" style={{position: 'absolute', top: 0, left: 0, zIndex: 1}} width={window.innerWidth} height={window.innerHeight}>
                <Layer>
                    <Arrow points={[fromPos.y, fromPos.x, toPos.y, toPos.x]} fill="black" stroke="black" strokeWidth={2}/>
                </Layer>
            </Stage>
        );
        setMainBoard(temp);
        setCurrentZIndex(currentZIndex => currentZIndex + 1);*/
    }

    const clickHandler = (e) => {
        if (currentButton === "2") {
            setIsOpenModal(true);
            setClickPos({x: e.clientX - document.getElementById('board').offsetLeft, y: e.clientY - document.getElementById('board').offsetTop});
        } else if (currentButton === "3") {
            setIsOpenModalConnect(true);
        }
    }

    return(
        <div className="w-screen h-screen flex flex-col">
            <HeaderBar onSelect={id => setCurrentButton(id)}/>
            <div id="board" className="flex flex-1 flex-row overflow-scroll" style={{zIndex: 1}} onClick={clickHandler}>
                <div style={{position: 'relative', zIndex: 1}}>
                {mainBoard}
                </div>
            </div>
            <div style={{zIndex: currentZIndex + 1}}>
                <Modal open={isOpenModal}
                BackdropComponent={Backdrop}
                BackdropProps={{timeout: 500}}
                className="flex justify-center items-center">
                    <Fade in={isOpenModal}>
                        <NodeForm onCancel={() => setIsOpenModal(false)} onOK={(action, value, nameObj) => {
                            setIsOpenModal(false);
                            addNode(clickPos.x, clickPos.y, action, value, nameObj);
                        }}/>
                    </Fade>
                </Modal>
                <Modal open={isOpenModalConnection}
                BackdropComponent={Backdrop}
                BackdropProps={{timeout: 500}}
                className="flex justify-center items-center">
                    <Fade in={isOpenModalConnection}>
                        <ConnectionForm onCancel={() => setIsOpenModalConnect(false)} onOK={(from, to) => {
                            setIsOpenModalConnect(false);
                            addConnection(from, to);
                        }}/>
                    </Fade>
                </Modal>
            </div>
        </div>
    );
}