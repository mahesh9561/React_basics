import './App.css';
import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => { // - for optimize code
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_=+-*,.`~";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);


  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, setPassword]);

  // Ref Hook
  const passwordRef = useRef(null);

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])

  return (
    <div className="App">
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-8 my-10 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center '> Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>

          {/* Input Box*  */}
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
            ref={passwordRef} />

          {/* Button */}
          <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 '>
            Copy
          </button>
        </div>

        {/* Range  */}
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-3'>
            <input type="range" min={6} max={35} value={length}
              className='cursor-pointer' onChange={(e) => { setLength(e.target.value) }} />
            <label htmlFor="">Length : {length}</label>

            {/* Checkbox for Number */}
            <input type="checkbox" defaultChecked={numberAllowed} id='numberInput'
              onChange={() => {
                setnumberAllowed((prev) => !prev)
              }} />
            <label htmlFor="numberInput">Number</label>

            {/* Checkbox for Character */}
            <input type="checkbox" defaultChecked={charAllowed} id='characterInput'
              onChange={() => {
                setnumberAllowed((prev) => !prev)
              }} />
            <label htmlFor="numberInput">Character</label>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
