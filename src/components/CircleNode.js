import React from 'react';
import { sizeWithValue } from '../utils/main.config';
import Draggable from 'react-draggable'

const showAsMoney = (money) => {
    var index = 0;
    var result = '';
    while (index < money.length)
    {
      var i = money.length - 1 - index;
      result += money[i];
      index += 1;
      if (index < money.length && index % 3 === 0) {
        result += ',';
      }
    }
    return result.split('').reverse().join('');
}

export function CircleNode({value, obj, name, pos, action, zIndex}) {
    const [isDeleted, setIsDeleted] = React.useState(false);
    return(
        isDeleted ? null :
        <Draggable allowAnyClick={false}>
            <button className={"flex flex-col justify-center items-center rounded-full bg-tint-color focus:outline-black" 
            + sizeWithValue[(value + '').length - 1]}
            style={{position: 'absolute', top: pos.top + 'px', left: pos.left + 'px', zIndex: zIndex}}
            onKeyDown={e => {
                if (e.key === "Backspace") {
                    setIsDeleted(true);
                }
            }}>
                <div className="flex flex-col justify-center items-center bg-white w-3/4 h-3/4 rounded-full">
                    <span className="select-none font-body text-sm bg-gray-400 text-white w-4 h-4 flex items-center justify-center rounded-full">{name}</span>
                    <span className={"select-none font-body font-bold" + ((value + '').length > 3 ? " text-3xl" : " text-xl")}>{showAsMoney(value + '')}</span>
                    <span className="select-none font-body text-xs">{obj}</span>
                </div>
                <span className="absolute font-light text-base" style={{marginTop: '125%'}}>{action}</span>
            </button>
        </Draggable>
    )
}