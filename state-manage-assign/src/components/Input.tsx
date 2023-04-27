import * as React from 'react';

export interface InputProps {
    text : 'Input'
} 




function Search() {
    let inp = window.document.getElementById('myInput');
  

} 

export default function Input({text} : InputProps) {
    const textType = text;
    return (
        <div>
            <input type={textType} placeholder='Search by name' id='myInput' onChange={Search}>
               
            </input>
        </div>
    );

}
