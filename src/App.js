import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader"; // Import GLTFLoader
import { useGLTF } from "@react-three/drei";
import "./styles.css";

const Model = () => {
  const gltf = useGLTF("../robo.glb"); // Replace with your model path
  return <primitive object={gltf.scene} />;
};

const Scene = () => {
  const scene = useRef();
  useFrame(() => {
    scene.current.rotation.y += 0.04;
  });
  return (
    <group ref={scene}>
      <Model /> {/* Use your model component here */}
    </group>
  );
};

export default function App() {
  return (
    <Canvas>
      <directionalLight intensity={0.5} />
      <Scene />
    </Canvas>
  );
}
