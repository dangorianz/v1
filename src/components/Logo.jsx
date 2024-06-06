import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React  from 'react';
import { Coin } from './Coin';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

export const Logo = () => {

    
    return (
        <Canvas style={{ height: '150px', width: '150px', }}>
            <ambientLight intensity={1} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            <Coin />
            <OrbitControls enableZoom={false}/>
            <EffectComposer>
            <Bloom luminanceThreshold={0.7} luminanceSmoothing={1} height={300} />
            </EffectComposer>
        </Canvas>  
    )
}
  