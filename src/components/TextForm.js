import React, { useState } from 'react';

export default function Textform(props) {
    const [text, setText] = useState('');

    const handleUpclick = () => {
    let newText = text.toUpperCase();
        setText(newText);
        props.showalert("converted to uppercase " , 'success')
    };
    const handleUpclick2 = () => {
    let newText = text.toLowerCase();
        setText(newText);
        props.showalert("converted to lowercase " , 'success')

    };
    const handleUpclick3 = () => {
    let newText ='';
        setText(newText);
        props.showalert("your text cleard" , 'success')
    };

    const handlecopy  =  () =>{
        var text = document.getElementById('mybox')
        text.select()
        navigator.clipboard.writeText(text.value)
        props.showalert("your text clpied" , 'success')


    }

    const handlePaste = async () => {
        try {
            const clipboardText = await navigator.clipboard.readText();
            setText(clipboardText);
        } catch (err) {
            console.error("Failed to read clipboard: ", err);
        }
    };


    const handlextraspaces = () =>{
        let handle = text.split(/[ ] + /)
        setText(handle.join(" "))
        props.showalert("remooved extra spaces from your pera" , 'success')

    }

    const handleOnchange = (event) => {
        setText(event.target.value);
    };

    return (
        <>
        <div className='containar' style={{color : props.mode === 'dark' ? 'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className='mb-3'>
                <textarea
                    className='form-control'  style={{backgroundColor : props.mode === 'dark' ? 'grey':'white', color : props.mode === 'dark' ? 'white':'#042743' }}
                    value={text}
                    onChange={handleOnchange}
                    id='mybox'
                    rows="8"
                ></textarea>
            </div>
            <button className='btn btn-primary mx-4' onClick={handleUpclick}>
                Convert to Uppercase
            </button>
            <button className='btn btn-primary mx-4' onClick={handleUpclick2}>
                Convert to lovercase
            </button>
            <button className='btn btn-primary mx-4' onClick={handleUpclick3}>
                clear text
            </button>
            <button className='btn btn-primary mx-4' onClick={handlecopy}>
                copy text
            </button>
            <button className='btn btn-primary mx-4' onClick={handlextraspaces}>
                remoove extra space
            </button>
            <button className='btn btn-primary mx-4' onClick={handlePaste}>
                paste text
            </button>

        </div>

        <div className="container my-3"  style={{color : props.mode === 'dark' ? 'white':'#042743'}}>
            <h1>hi your next summary</h1> 
          <p> 
          
             {text.trim() === ""? 0 : text.trim().split(/\s+/).length} words and {text.length} characters

            {/* its a sort of conuting 00 */}
                 
                 
           
         </p>
            <p>{0.008 * text.split(" ").length} total read time</p>
            <h2>priview</h2>
            <p>{text.length >0  ? text : "enter somthing here first"}</p>
        </div>
        
        </>
    );
}
