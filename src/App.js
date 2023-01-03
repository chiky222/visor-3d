import './App.css';
import { Canvas } from '@react-three/fiber';
import Box from './components/Box';
import { OrbitControls } from '@react-three/drei';
import Textos from './components/Textos';
import { useState } from 'react';

function App() {

  const [elemento, setElemento] = useState(0);

  const cambiarElemento = () => {
    if (elemento < 7) {
      let nuevoElemento = +elemento + 1;
      setElemento(nuevoElemento);
    } else {
      setElemento(0);
    }
  }

  return (
    <div className="App">
      <Textos />
      <Canvas className='canvas' >
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Box elemento={elemento} />
      </Canvas>
      {/* <Canvas className='canvas' >
        <Sky distance={450000} sunPosition={[0, 1, 0]} inclination={0.35} azimuth={0.25} />
        <OrbitControls enableZoom={false} />
        <pointLight position={[-20, 10, -30]} intensity={0.5} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[15, 15, 20]} intensity={5} />
        <Model />
      </Canvas> */}
      <button type='button' className='btn' onClick={cambiarElemento} >Cambiar</button>
    </div>
  );
}

export default App;
