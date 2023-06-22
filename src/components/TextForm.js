import React, { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('');

    const hendelOnChange = (event) => {
        setText(event.target.value);
    }

    const hendelUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }

    const hendelLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }

    const hendelClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text cleared!", "success");
    }

    const hendelSpeakClick = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Listen to text!", "success");
    }

    const handleCapClick = () => {
        let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
        setText(newText);
        props.showAlert("Converted to captilize!", "success");
    }

    const handleReverse = (event) => {
        /* Convert string to array*/
        let strArr = text.split("");
        /* Reverse array*/
        strArr = strArr.reverse();
        /* Convert array to string*/
        let newText = strArr.join("");
        setText(newText);

        props.showAlert("Text reversed!", "success");
    };

    const removeExtraSpace = () => {

        // let words = text.split(' ');
        // let joinedWords = '';
        // words.forEach((elem)=>{
        //     if(elem[0] !== undefined){
        //         joinedWords += elem + " ";
        //         console.log(joinedWords);
        //     }
        // })
        // setText(joinedWords);

        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));

        props.showAlert("Extra spaces removed!", "success");
    };

    const handleSPerLineClick =() =>{
        let newText = text.replaceAll('.',"\n");
        setText(newText);
        props.showAlert("Break lines!", "success");
    }

    const hendelCopy = ()=>{
        let text = document.getElementById("myBox1");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to cipboard!", "success");
    }

    return (
        <>
            <div className='container my-2' style={{color: props.mode==='dark'?'white':'#0c2a58'}}>

                <h1 className='text-center mb-3'>{props.formHeading}</h1>

                <div className="mb-3">
                    <textarea className="form-control" id="myBox1" rows="6" value={text} onChange={hendelOnChange} style={{backgroundColor: props.mode==='dark'?'#2f62ae':'white', color: props.mode==='dark'?'white':'#0c2a58'}}></textarea>
                </div>

                <button disabled={text.length===0} className="btn btn-primary" onClick={hendelUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary" onClick={hendelLoClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary" onClick={hendelClearClick}>Clear Text</button>
                <button disabled={text.length===0} className="btn btn-primary" onClick={handleCapClick}>Convert to Capitalize</button>
                <button disabled={text.length===0} className="btn btn-primary" onClick={handleReverse}>Reverse</button>
                <button disabled={text.length===0} className="btn btn-primary" onClick={removeExtraSpace}>Remove Extra  Space</button>
                <button disabled={text.length===0} className="btn btn-primary" onClick={handleSPerLineClick}>Break Line</button>
                <button disabled={text.length===0} className="btn btn-primary" onClick={hendelCopy}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-info" onClick={hendelSpeakClick} >Speak</button>

            </div>
            <div className="container my-3" style={{color: props.mode==='dark'?'white':'#0c2a58'}}>
                <h2>Your Text Summary</h2>
                <div className="d-flex sammery_pera">
                    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                    {/* <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.length} characters</p> */}
                    <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes Read</p>
                </div>
                <h2>Preview</h2>
                <p className="preview_text" style={{backgroundColor: props.mode==='dark'?'#2f62ae':'#ddd', color: props.mode==='dark'?'white':'#000'}}>{text.length>0?text: "Nothing to preview!"}</p>
            </div>
        </>
    )
}
