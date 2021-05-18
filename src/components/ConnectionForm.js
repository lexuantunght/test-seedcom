import React, { useState } from 'react';

function isEmptyOrSpaces(str){
    return str === null || str.match(/^ *$/) !== null;
}

export function ConnectionForm({onCancel, onOK}) {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    return(
        <div className="flex flex-col bg-white w-max h-max rounded-lg p-8 space-y-4">
            <div className="flex flex-row justify-between items-center space-x-4">
                <label>From node</label>
                <input autoFocus={true} onChange={e => setFrom(e.target.value)} type="text" name="from" className="p-2 focus:outline-none border rounded-lg" maxLength={50}/>
            </div>
            <div className="flex flex-row justify-between items-center space-x-4">
                <label>To node</label>
                <input onChange={e => setTo(e.target.value)} type="text" name="to" className="p-2 focus:outline-none border rounded-lg" maxLength={50}/>
            </div>
            <div className="flex flex-row justify-between items-center">
                <button onClick={() => onCancel()} className="bg-white border border-tint-color text-tint-color px-4 py-2 w-2/5 rounded-lg font-bold">Cancel</button>
                <button disabled={isEmptyOrSpaces(from) || isEmptyOrSpaces(to)} onClick={() => onOK(from, to)} className="bg-tint-color text-white px-4 py-2 w-2/5 rounded-lg font-bold disabled:opacity-50">OK</button>
            </div>
        </div>
    );
}