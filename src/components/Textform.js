import React, { useState } from 'react'

export default function Textform(props) {
    // Adding CSS here
    let h2Style = {
        textAlign: 'center',
        marginBottom: '10px'
    }

    let para = {
        textAlign: 'left',
    }

    // Adding JS here
    const [text, setText] = useState("Delete this and re-enter your text...");

    const handleUpCase = () => {
        setText(text.toUpperCase());
    }

    const handleLoCase = () => {
        setText(text.toLowerCase());
    }

    const handleTiCase = () => {
        let newText = text.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase()
        });
        setText(newText);
    }

    const removeExtraSpace = () => {
        setText((text.split(/[ ]+/)).join(" "));
    }

    const handleRvCase = () => {
        function ReverseString(str) {
            if (!str || str.length < 2 ||
                typeof str !== 'string') {
                return 'Not valid';
            }

            const revArray = [];
            const length = str.length - 1;

            for (let i = length; i >= 0; i--) {
                revArray.push(str[i]);
            }

            return revArray.join('');
        }
        setText(ReverseString(text));
    }

    const copyText = () => {
        let txt = document.getElementById('myBox');
        txt.select();
        navigator.clipboard.writeText(txt.value);
        document.getSelection().removeAllRanges();

        props.showAlert("success", "Text Copied");
    }

    const clearBox = () => {
        setText("");
    }

    const onHandle = (event) => {
        setText(event.target.value);
    }

    return (
        <>
            <div className="mb-3 my-3 container">
                <h2 className={`text-${props.mode}`} style={h2Style}>{text.length} characters and {text.split(/\s+/).filter((elem) => { return elem !== '' }).length} words</h2>
                <p className={`text-${props.mode}`} style={h2Style}>{0.008 * text.split(" ").filter((elem) => {return elem.length !== 0}).length} Minutes</p>
                <textarea
                    style={
                        {
                            backgroundColor: props.mode === 'dark' ? 'white' : '#303030',
                            color: props.mode === 'dark' ? 'black' : 'white'
                        }
                    }
                    className="form-control"
                    id="myBox" rows="10"
                    value={text}
                    onChange={onHandle}>
                </textarea>
            </div>
            <div style={h2Style}>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpCase}>Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoCase}>Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleTiCase}>Titlecase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleRvCase}>Reverse</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={removeExtraSpace}>Remove Extra Spaces</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={copyText}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={clearBox}>Clear</button>
            </div>
            <div className={`text-${props.mode} container my-5`} style={h2Style}>
                <h2>Preview</h2>
                <p style={para}>{text.length > 0 ? text : "Enter something to preview"}</p>
            </div>
        </>
    )
}
