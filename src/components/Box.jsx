import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import texture from '../images/floor.jpg';
import esfera from '../images/esfera.jpg';
import madera from '../images/madera.jpg';
import { Sphere, MeshDistortMaterial, Stars } from '@react-three/drei';
import Model from './Worldcup';
import Modelo from './Lux';
import Katarina from './Katarina';
import { useEffect, useState } from 'react';

const Box = ({elemento}) => {

  const colorMap = useLoader(TextureLoader, texture);
  const esferaMap = useLoader(TextureLoader, esfera);
  const maderaMap = useLoader(TextureLoader, madera);
  const [dataRot, setDataRot] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (dataRot < 6) {
        let newData = dataRot + 0.001;
        setDataRot(newData);
      } else {
        setDataRot(0);
      }
    }, 10);    
  }, [dataRot]);

  if (elemento === 0) {
    return (
      <mesh>
        <Katarina />
        <directionalLight position={[15, 15, 20]} intensity={1} />
      </mesh>
    )
  } else if (elemento === 1) {
    return (
        <mesh rotation={[90, 0, dataRot]} >
            <sphereGeometry attach='geometry' args={[2, 45, 45]} ></sphereGeometry>
            <meshStandardMaterial map={esferaMap} />
        </mesh>
    )
  } else if (elemento === 2) {
    return (
        <mesh rotation={[90, 0, dataRot]} >
            <sphereGeometry attach='geometry' args={[2, 45, 45]} />
            <meshStandardMaterial map={maderaMap} />
        </mesh>
    )
  } else if (elemento === 3) {
    return (
        <mesh rotation={[90, 0, dataRot]} >
            <Sphere visible args={[1.5, 100, 100]} >
                <MeshDistortMaterial color='#8352FD' attach='material' distort={0.3} speed={1.5} roughness={0.35} />
            </Sphere>
            <directionalLight position={[20, 0, 50]} intensity={0.5} />
        </mesh>
    )
  } else if (elemento === 4) {
    // "World Cup Trophy" (https://skfb.ly/6AnZw) by waimus is licensed under Creative Commons Attribution-ShareAlike (http://creativecommons.org/licenses/by-sa/4.0/).
    return (
      <mesh>
        <pointLight position={[-20, 10, -30]} intensity={0.5} />
        <directionalLight position={[15, 15, 20]} intensity={5} />
        <Model rotation={[0, dataRot, 0]} />
      </mesh>
    )
  } else if (elemento === 5) {
    return (
      <mesh>
        <Modelo />
      </mesh>
    )
  } else if (elemento === 6) {
    return (
      <mesh rotation={[0, dataRot, 0]}>
        <Stars radius={150} depth={50} count={2500} factor={6} fade={true} />
      </mesh>
    )
  } else if (elemento === 7) {
    return (
      <mesh rotation={[90, 0, dataRot]} >
          <boxGeometry attach='geometry' args={[3, 3, 3]} ></boxGeometry>
          <meshStandardMaterial map={colorMap} />
      </mesh>
    )
  }

  
}

export default Box