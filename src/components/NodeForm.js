import React, { useState } from 'react';

function isEmptyOrSpaces(str){
    return str === null || str.match(/^ *$/) !== null;
}

export function NodeForm({onCancel, onOK}) {
    const [nameObj, setNameObj] = useState('');
    const [value, setValue] = useState('');
    const [action, setAction] = useState('');
    return(
        <div className="flex flex-col bg-white w-max h-max rounded-lg p-8 space-y-4">
            <div className="flex flex-row justify-between items-center space-x-4">
                <label>Action name</label>
                <input autoFocus={true} onChange={e => setAction(e.target.value)} type="text" name="action" className="p-2 focus:outline-none border rounded-lg" maxLength={50}/>
            </div>
            <div className="flex flex-row justify-between items-center space-x-4">
                <label>Object name</label>
                <input onChange={e => setNameObj(e.target.value)} type="text" name="obj" className="p-2 focus:outline-none border rounded-lg" maxLength={50}/>
            </div>
            <div className="flex flex-row justify-between items-center space-x-4">
                <label>Value</label>
                <input onChange={e => setValue(e.target.value)} type="number" name="value" min={1} className="p-2 focus:outline-none border rounded-lg" maxLength={9}/>
            </div>
            <div className="flex flex-row justify-between items-center">
                <button onClick={() => onCancel()} className="bg-white border border-tint-color text-tint-color px-4 py-2 w-2/5 rounded-lg font-bold">Cancel</button>
                <button disabled={isEmptyOrSpaces(nameObj) || isEmptyOrSpaces(value) || isEmptyOrSpaces(action)} onClick={() => onOK(action, value, nameObj)} className="bg-tint-color text-white px-4 py-2 w-2/5 rounded-lg font-bold disabled:opacity-50">OK</button>
            </div>
        </div>
    );
}