import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';

export const Coin = () => {
  const coinRef = useRef();

  useFrame(() => {
    coinRef.current.rotation.y += 0.003;
    coinRef.current.rotation.x += 0.003;
  });

  return (
    <group ref={coinRef} rotation={[Math.PI / 2, 0, 0]} scale={[2.8, 2.8, 2.8]}>
      <mesh >
        <cylinderGeometry args={[1, 1, 0.1, 32]} />
        <meshStandardMaterial color="#212F4D" />
      </mesh>

      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1, 0.06, 16, 100]} />
        <meshBasicMaterial color="#64ffda" />
      </mesh>

      
      <Text
        position={[0, 0.06, -0.08]}
        rotation={[-Math.PI / 2, 0, 0]}
        fontSize={0.8}
        fontWeight={600}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        DG
      </Text>
      <Text
        position={[0, -0.06, -0.08]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        fontSize={0.5}
        fontWeight={600}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        Dev
      </Text>
    </group>

  );
}