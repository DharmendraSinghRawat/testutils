import React, { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('');

    const hendelOnChange = (event) => {
        setText(event.target.value);
    }

    const hendelUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const hendelLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const hendelClearClick = () => {
        let newText = '';
        setText(newText)
    }

    const hendelSpeakClick = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }

    const handleCapClick = () => {
        let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
        setText(newText);
    }

    const handleReverse = (event) => {
        /* Convert string to array*/
        let strArr = text.split("");
        /* Reverse array*/
        strArr = strArr.reverse();
        /* Convert array to string*/
        let newText = strArr.join("");
        setText(newText);
    };

    const WhiteSpace = () => {
        // let updated_text = text.replace(/\s/g, '')
        // setText(updated_text)

        let words = text.split(' ');
        let joinedWords = '';
        words.forEach((elem)=>{
            if(elem[0] !== undefined){
                joinedWords += elem + " ";
                console.log(joinedWords);
            }
        })
        setText(joinedWords);
    };

    const handleSPerLineClick =() =>{
        let newText = text.replaceAll('.',"\n");
        setText(newText);
    }




    return (
        <>
            <div className='container my-3'>

                <h1 className='text-center mb-3'>{props.formHeading}</h1>

                <div className="mb-3">
                    <textarea className="form-control" id="myBox1" rows="6" value={text} onChange={hendelOnChange}></textarea>
                </div>

                <button className="btn btn-primary" onClick={hendelUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary" onClick={hendelLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary" onClick={hendelClearClick}>Convert to Lowercase</button>
                <button className="btn btn-primary" onClick={handleCapClick}>Convert to Capitalize</button>
                <button className="btn btn-primary" onClick={handleReverse}>Reverse</button>
                <button className="btn btn-primary" onClick={WhiteSpace}>Remove Space</button>
                <button className="btn btn-primary" onClick={handleSPerLineClick}>Breack Line</button>
                <button className="btn btn-info" onClick={hendelSpeakClick} >Speak</button>

            </div>
            <div className="container my-3">
                <h2>Your Text Summary</h2>
                <div className="d-flex sammery_pera">
                    <p>{text.split(" ").length} words and {text.length} characters</p>
                    <p>{0.008 * text.split(" ").length} Minutes Read</p>
                </div>
                <h2>Preview</h2>
                <p className="preview_text">{text}</p>
            </div>
        </>
    )
}
