import React, { useState } from 'react'

export default function TextForm(props) {

    const handlePaste = async () => {
        let clipboard_text = await navigator.clipboard.readText()
        setText(clipboard_text)
        props.showAlert('Text pasted Successfully!')
    }

    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert('Text converted to upperCase Successfully!')
    }
    const handleLoClick = () => {
        // console.log("Lowercase was clicked" + text) 
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert('Text converted to lowerCase Successfully!')

    }
    const handleSpaceClick = () => {
        let newText = text.replace(/\s+/g, ' ').trim();
        setText(newText);
        props.showAlert('Extra spaces removed successfully!');
      }
    const handleCopyClick = () => {
        // console.log("Lowercase was clicked" + text)
        let copiedText = document.getElementById('myBox');
        copiedText.select();
        navigator.clipboard.writeText(copiedText.value)
        props.showAlert('Text copied to clipboard Successfully!')
        
    }
    
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert('System is reading text!')
    }
    const handleClearClick = () => {
        // console.log("Lowercase was clicked" + text)
        let newText = '';
        setText(newText)
        props.showAlert('TextBox cleared Successfully!')

    }
    const wordCount = () => {
        if (text.trim() === '') {
            return 0; // Return 0 if the text is empty
          }
        let newText = text.replace(/\s+/g, ' ').trim();
        let count =newText.split(' ').length
        return count
      }
      
      const sentenceCount = () => {
        if (text.trim() === '') {
          return 0; // Return 0 if the text is empty
        }
        let sentences = text.split('.').filter(sentence => sentence.trim() !== '');
        return sentences.length;
      };

    const handleOnChange = (event) => {
        // console.log('On change');
        setText(event.target.value)
    }

    const [text, setText] = useState('Enter text');     //usestate hook hume ek text variable benane me madat karta hai 
    //usme humne jo hai text aur setText initialise kar die usestate ki sahayata se
    //text jo hai vo value hai jo humne by default 'enter text here rakhi hai'
    //setText ek function hai jo hum use kar sakte hai apni text value ko update karne ke liye



    return (
        <div className={`container-fluid-xxl text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <div className={`container text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className={`form-control bg-${props.mode} text-${props.mode === 'light' ? 'dark' : 'light'}`} value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
                </div>
                {/* value aur onchange ke bagir hum text box me type nai kar sakte */}
                <button className={`btn btn-${props.mode==='danger'?'danger':props.mode==='warning'?'warning':props.mode==='success'?'success':'primary'} mx-2`}  onClick={handlePaste}>Paste CopiedText</button>
                <button className={`btn btn-${props.mode==='danger'?'danger':props.mode==='warning'?'warning':props.mode==='success'?'success':'primary'} mx-2`} onClick={handleUpClick}>Convert to Uppercase</button>
                <button className={`btn btn-${props.mode==='danger'?'danger':props.mode==='warning'?'warning':props.mode==='success'?'success':'primary'} mx-2`} onClick={handleLoClick}>Convert to Lowercase</button>
                <button className={`btn btn-${props.mode==='danger'?'danger':props.mode==='warning'?'warning':props.mode==='success'?'success':'primary'} mx-2`} onClick={handleSpaceClick}>Remove extra Spaces</button>
                <button className={`btn btn-${props.mode==='danger'?'danger':props.mode==='warning'?'warning':props.mode==='success'?'success':'primary'} mx-2`} onClick={handleCopyClick}>Copy Text</button>
                <button className={`btn btn-${props.mode==='danger'?'danger':props.mode==='warning'?'warning':props.mode==='success'?'success':'primary'} mx-2`} onClick={speak}>Speak</button>
                <button className={`btn btn-${props.mode==='danger'?'danger':props.mode==='warning'?'warning':props.mode==='success'?'success':'primary'} mx-2`} onClick={handleClearClick}>Clear Text</button>
            </div>

            <div className={`container my-3 text-${props.mode === 'light' ? 'dark' : 'light'}`} >
                <h2>Summary</h2>
                <p>{wordCount()} words, {text.length} characters and {sentenceCount()} sentences</p>
                <p>{0.008 * text.split(' ').length} Minutes to read</p>
                <h2 className='my-3'>Preview</h2>
                <p>{text}</p>
            </div>
        </div>
    )
}













// export default function TextForm() {

//     const handleUpClick = () => {
//         let newText = text.toUpperCase();
//         setText(newText)

//     }

//     const handleLoClick = () => {
//         let newText = text.toLowerCase();
//         setText(newText)

//     }

//     const handleClear=()=>{
//         setText('')
//     }

//     const handleCopy=()=>{
//         let copied_text=document.getElementById('myBox')
//         copied_text.select();
//         navigator.clipboard.writeText(copied_text.value)
//     }
//     const handlePaste=async ()=>{
//         let clipboard_text=await navigator.clipboard.readText()
//         setText(clipboard_text)
//     }

//     const handleOnChange = (event) => {
//         setText(event.target.value)
//     }

//     const [text, setText] = useState('');

//     return (
//         <>
//             <div className="container my-3">
//                 <h2>Text area</h2>
//                 <div className="mb-3">
//                     <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="12"></textarea>
//                 </div>

//             <button className="btn btn-primary mx-2" onClick={handlePaste}>PasteCopiedText</button>
//             <button className="btn btn-primary mx-2" onClick={handleUpClick}>UpperCase</button>
//             <button className="btn btn-primary mx-2" onClick={handleLoClick}>LowerCase</button>
//             <button className="btn btn-primary mx-2" onClick={handleClear}>ClearTextbox</button>
//             <button className="btn btn-primary mx-2" onClick={handleCopy}>CopyText</button>
//             </div>

//             <div className="container">
//                 <p>{text.split('').length} Characters</p>
//                 <h3>Preview</h3>
//                 <p>{text}</p>
//             </div>
//         </>
//     );
// }
