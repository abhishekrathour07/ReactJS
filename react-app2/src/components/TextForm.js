import { useState } from "react"
import React from 'react'

export default function TextForm(props) {

    // convert into uppercase
    const toUpper = () => {
        const upper = text.toUpperCase();
        usetext(upper);
        props.togglealert("Converted to upperCase", "success");


    }
    // convert into lowercase
    const toLOwer = () => {
        const lower = text.toLowerCase();
        usetext(lower);
        props.togglealert("Converted to lowerCase", "success");
    }

    //cut the text less then 140
    const ontweet = () => {
        const tweet = text.slice(0, 140);
        usetext(tweet);
        props.togglealert("Now it's becomes perfect for tweet", "success");
    }
    // Repeat the enter values 10 times
    const onRepeat = () => {
        const repeat = text.repeat(10);
        usetext(repeat);
        props.togglealert("Print data 10 times", "success");
    }

    //use to clear the text
    const clearText = () => {
        const text = '';
        usetext(text);
        props.togglealert("All tee text from textbox is cleared ", "success ");
    }

    // On click copy the whole content
    const onClickCopy = () => {
        const text = document.getElementById('txt');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.togglealert("Text Copy to clipboard", "success");
    }

    // it is use to remove extra spaces between sentences   
    const removeSpaces = () => {
        const text = document.querySelector('#txt').value;
        // console.log(text);
        const newtext = text.split(/[ ]+/);
        usetext(newtext.join(" "))
        props.togglealert("All the extra spaces been cleared", "success");

    }

    const onClickChange = (event) => {
        usetext(event.target.value)
    }
    const [text, usetext] = useState("");
    //    text = 'abc' not allowed to chnage stare like this
    //    usetext('abc')  allowed to chnage stare like this

    return (
        <div>
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea className="form-control" id="txt" rows="5" value={text} onChange={onClickChange} spellCheck='true' style={{backgroundColor: props.mode==='black'?'#13466e':'white',color:props.mode==='black'?'white':'black',}}></textarea>
            </div>
            <div className="all-buttons">
                <button type="button" className="btn btn-primary mx-2 my-2" onClick={toUpper} >UpperCase</button>
                <button type="button" className="btn btn-primary mx-2 my-2" onClick={toLOwer}>LowerCase</button>
                <button type="button" className="btn btn-primary  mx-2 my-2" onClick={ontweet}>Tweet</button>
                <button type="button" className="btn btn-primary mx-2 my-2" onClick={onRepeat}>Muntipyx10</button>
                <button type="button" className="btn btn-primary mx-2 my-2" onClick={clearText} >Clear text</button>
                <button type="button" className="btn btn-primary mx-2 my-2" onClick={onClickCopy}>Copy text</button>
                <button type="button" className="btn btn-primary mx-2 my-2" onClick={removeSpaces} >Remove space</button>


            </div>
            <div className="container my-3">
                <h2>Summary</h2>
                <p>  {text.split(" ").length - 1}  Words {text.length} Charcters</p>
                <p>{0.008 * text.split(" ").length} Minutes- Average time to read this text</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>

        </div>

    )
}
