import React from 'react';
import icon_arrow from '../assets/imgs/arrow.png';
import icon_node from '../assets/imgs/poligon.png';
import icon_select from '../assets/imgs/select.png';

export function HeaderBar({onSelect}) {
    const [selectedButton, setSelectedButton] = React.useState("1");
    React.useEffect(() => {
        let btns = document.getElementsByClassName("btn-act");
        for (let i = 0; i < btns.length; i++) {
            if (btns[i].id === selectedButton) {
                btns[i].classList.add("bg-back-color");
            } else {
                btns[i].classList.remove("bg-back-color");
            }
        }
        onSelect(selectedButton);
    }, [selectedButton, onSelect]);
    return(
        <div className="w-full h-16 flex justify-center items-center bg-tint-color">
            <div className="flex flex-row space-x-4 px-16 justify-center items-center py-2 w-max rounded-lg bg-white">
                <button id="1" className="btn-act flex flex-row items-center justify-center py-2 px-4 rounded-lg space-x-2 border-2 border-dotted"
                onClick={() => setSelectedButton("1")}>
                    <img className="select-none w-4 h-4" src={icon_select} alt="select"/>
                </button>
                <button id="2" className="btn-act flex flex-row items-center justify-center py-2 px-4 rounded-lg space-x-2 border-2 border-dotted"
                onClick={() => setSelectedButton("2")}>
                    <img className="select-none w-4 h-4" src={icon_node} alt="node"/>
                </button>
                <button id="3" className="btn-act flex flex-row items-center justify-center py-2 px-4 rounded-lg space-x-2 border-2 border-dotted"
                onClick={() => setSelectedButton("3")}>
                    <img className="select-none w-4 h-4" src={icon_arrow} alt="arrow"/>
                </button>
            </div>
        </div>
    )
}