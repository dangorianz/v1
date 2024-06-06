import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React  from 'react';
import { Coin } from './Coin';

export const Logo = () => {

    
    return (
        <Canvas style={{ height: '150px', width: '150px', }}>
            <ambientLight intensity={1} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            <Coin />
            <OrbitControls enableZoom={false}/>
        </Canvas>  
    )
}
  