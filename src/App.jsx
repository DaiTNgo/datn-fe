import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    socket.emit('daingo', 'daingo');
  }, []);
  const handleClick = () => {
    socket.emit('daingo', count);
  };
  return (
    <div className='App'>
      <A />
      <h1>Vite + React</h1>
      <div className='card'>
        <button
          onClick={() => {
            setCount((count) => count + 1);
            handleClick();
          }}
        >
          count is {count}
        </button>
      </div>
    </div>
  );
}
function A() {
  const [msg, setMsg] = useState('');
  const [c, setC] = useState(0);
  useEffect(() => {
    socket.on('test', (m) => {
      setMsg(m);
    });
  }, []);
  return (
    <>
      <h1>{msg}</h1>
      <button onClick={() => setC(c + 1)}>{c}</button>
    </>
  );
}
export default App;
