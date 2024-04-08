'use client'
import { useState } from 'react';
import Navbar from './components/Navbar/page';

export default function Home() {
  const [text, setText] = useState('');
  const [mode, setMode] = useState('light'); // State to manage light/dark mode

  // Function to toggle between light and dark mode
  const toggleMode = () => {
    setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const handleOnClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const clearText = () => {
    setText("");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  return (
    <main className='w-full overflow-x-hidden h-screen' style={{ backgroundColor: mode === 'dark' ? '#12171f' : 'white' }}>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <hr />
      <div className='container my-3' style={{ color: mode === 'dark' ? 'white' : 'black' }}>
        <h1 className='text-lg font-bold mx-16'>Enter the text to analyze: </h1>
        <div className='mb-3'>
          <textarea className='form-control p-4 rounded-lg w-5/6 mx-16 my-4 border border-gray-400' value={text} style={{ backgroundColor: mode === 'dark' ? '#12171f' : 'white' }} onChange={handleOnChange} id="myBox" cols="15" rows="7">
          </textarea>
        </div>
        <button disabled={text.length === 0} className="bg-blue-400 text-white hover:bg-blue-500 py-2 px-4 rounded-md ml-16 mx-2" onClick={handleOnClick}>Convert to UpperCase</button>
        <button disabled={text.length === 0} className="bg-blue-400 text-white hover:bg-blue-500 py-2 px-4 rounded-md mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
        <button disabled={text.length === 0} className="bg-blue-400 text-white hover:bg-blue-500 py-2 px-4 rounded-md mx-2" onClick={clearText}>Clear text</button>
        <button disabled={text.length === 0} className="bg-blue-400 text-white hover:bg-blue-500 py-2 px-4 rounded-md mx-2" onClick={handleCopy}>Copy text</button>
        <button disabled={text.length === 0} className="bg-blue-400 text-white hover:bg-blue-500 py-2 px-4 rounded-md mx-2" onClick={handleExtraSpace}>Remove Extra Spaces</button>
      </div>
      <div className="container mx-16 my-3" style={{ color: mode === 'dark' ? 'white' : 'black' }}>
        <h1 className='text-lg font-bold'>Your text summary:</h1>
        <p className='text-lg font-base mx-4'>{text.split(/\s+/).filter((Element) => { return Element.length !== 0 }).length} Words & {text.length} Characters</p>
        <p className='text-lg font-base mx-4'>{0.08 * text.split(" ").filter((Element) => { return Element.length !== 0 }).length} Minutes to read</p>
        <h2 className='text-lg font-semibold'>Preview:</h2>
        <p className='text-lg font-base mx-4'><i>{text.length > 0 ? text : "Nothing to preview"}</i></p>
      </div>
    </main>
  );
}
