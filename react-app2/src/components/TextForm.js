import { useState } from "react"
import React from 'react'

export default function TextForm(props) {

    const toUpper = () => {
        const upper = text.toUpperCase();
        usetext(upper);

    }

    const toLOwer = () => {
        const upper = text.toLowerCase();
        usetext(upper);

    }
    const ontweet = () => {
        const tweet = text.slice(0, 140);
        usetext(tweet);
    }
    const onRepeat = () => {
        const repeat = text.repeat(10, ' ');
        usetext(repeat);
    }

    const clearText = () => {
        const text = '';
        usetext(text);
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
                <textarea className="form-control" id="txt" rows="5" value={text} onChange={onClickChange} spellCheck='false'></textarea>
            </div>
            <div className="all-buttons">
                <button type="button" className="btn btn-primary mx-2" onClick={toUpper} >UpperCase</button>
                <button type="button" className="btn btn-secondary mx-2" onClick={toLOwer}>LowerCase</button>
                <button type="button" className="btn btn-success  mx-2" onClick={ontweet}>Tweet</button>
                <button type="button" className="btn btn-danger mx-2" onClick={onRepeat}>Muntipy x10</button>
                <button type="button" className="btn btn-warning mx-2" onClick={clearText} >Clear text</button>
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
