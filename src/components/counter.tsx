import { useState } from 'react'

const Counter = () => {

  const [count,setCount] = useState(0);
  const [inputValue,setInputValue] = useState(0);
 
 
  function decrementHandler () {
    // 10:00 AM = count = 1   => clicked the increment button 10times
    setCount((count) => count - 1); // Recommended way of doing this. 10:00 AM  ==> 10:02AM
    // 10:01 AM count
    setInputValue((count) => count - 1)   

  }
  
  function incrementHanlder () {
      setCount((count) => count + 1)
      setInputValue((count) => count + 1)
      setInputValue(count+1)
  }
 
  function resetHandler() {
    setCount(0);    
    setInputValue(0);
  }
 
  function userInputHandler(event:any) {
    const value = event.target.value;
    setInputValue(value);
  }

  return (
    <section className="flex flex-col items-center w-2/3 gap-8 p-8 bg-white border-4 shadow-lg border-primary-500">
      <h1>Days Since the Last Accident</h1>
      <p className="text-6xl">{count}</p>
      <div className="flex gap-2">
        <button onClick={decrementHandler}>➖ Decrement</button>
        <button onClick={resetHandler}>🔁 Reset</button>
        <button onClick={incrementHanlder}>➕ Increment</button>
      </div>
      <div>
        <form 
          onSubmit={(e) => {
            e.preventDefault();
            setCount(+inputValue);
          }}
          >
          <input type="number" value={inputValue} onChange={(e) => userInputHandler(e)} />
          <button type="submit">Update Counter</button>
        </form>
      </div>
    </section>
  );
};

export default Counter;
