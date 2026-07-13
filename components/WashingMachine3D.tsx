'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';

function WashingMachineModel() {
  const groupRef = useRef<THREE.Group>(null);
  const drumRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.15;
    }
    if (drumRef.current) {
      drumRef.current.rotation.z += 0.01;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.3, 0]} scale={1.6}>
      {/* Machine Body */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2.2, 2.6, 1.8]} />
        <meshPhysicalMaterial
          color="#e8ecf0"
          metalness={0.3}
          roughness={0.2}
          clearcoat={0.8}
          clearcoatRoughness={0.1}
        />
      </mesh>

      {/* Top Panel */}
      <mesh position={[0, 1.35, 0]}>
        <boxGeometry args={[2.22, 0.08, 1.82]} />
        <meshPhysicalMaterial color="#d0d5db" metalness={0.4} roughness={0.15} />
      </mesh>

      {/* Control Panel */}
      <mesh position={[0, 0.95, 0.91]}>
        <boxGeometry args={[2.0, 0.5, 0.02]} />
        <meshPhysicalMaterial color="#f0f2f5" metalness={0.1} roughness={0.3} />
      </mesh>

      {/* Knob */}
      <mesh position={[0.5, 0.95, 0.93]}>
        <cylinderGeometry args={[0.1, 0.1, 0.04, 32]} />
        <meshPhysicalMaterial color="#1F4E79" metalness={0.6} roughness={0.2} />
      </mesh>

      {/* LED Display */}
      <mesh position={[-0.3, 0.95, 0.93]}>
        <boxGeometry args={[0.5, 0.15, 0.02]} />
        <meshPhysicalMaterial color="#1a1a2e" metalness={0.1} roughness={0.1} emissive="#3B82F6" emissiveIntensity={0.5} />
      </mesh>

      {/* Door Frame - Ring */}
      <mesh position={[0, -0.15, 0.92]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.65, 0.08, 16, 48]} />
        <meshPhysicalMaterial color="#c0c5cc" metalness={0.6} roughness={0.15} />
      </mesh>

      {/* Door Glass */}
      <mesh position={[0, -0.15, 0.92]}>
        <circleGeometry args={[0.6, 48]} />
        <MeshTransmissionMaterial
          backside
          samples={6}
          thickness={0.3}
          chromaticAberration={0.05}
          anisotropy={0.1}
          distortion={0.1}
          distortionScale={0.2}
          temporalDistortion={0.1}
          color="#a8d4f0"
          transmission={0.95}
          roughness={0.05}
        />
      </mesh>

      {/* Rotating Drum inside (visible through glass) */}
      <group ref={drumRef} position={[0, -0.15, 0.4]}>
        {/* Drum cylinder */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.5, 0.5, 0.6, 32, 1, true]} />
          <meshPhysicalMaterial
            color="#bcc3cb"
            metalness={0.7}
            roughness={0.3}
            side={THREE.DoubleSide}
          />
        </mesh>
        {/* Drum fins */}
        {[0, 1, 2].map((i) => (
          <mesh key={i} rotation={[Math.PI / 2, 0, (i * Math.PI * 2) / 3]} position={[0, 0, 0]}>
            <boxGeometry args={[0.08, 0.55, 0.9]} />
            <meshPhysicalMaterial color="#a0a8b0" metalness={0.5} roughness={0.3} />
          </mesh>
        ))}
      </group>

      {/* Bottom Panel */}
      <mesh position={[0, -1.2, 0.5]}>
        <boxGeometry args={[2.0, 0.15, 0.8]} />
        <meshPhysicalMaterial color="#d5dae0" metalness={0.2} roughness={0.3} />
      </mesh>

      {/* Feet */}
      {[[-0.8, -1.35, 0.7], [0.8, -1.35, 0.7], [-0.8, -1.35, -0.7], [0.8, -1.35, -0.7]].map((pos, i) => (
        <mesh key={i} position={pos as [number, number, number]}>
          <cylinderGeometry args={[0.06, 0.08, 0.08, 16]} />
          <meshPhysicalMaterial color="#505860" metalness={0.4} roughness={0.3} />
        </mesh>
      ))}
    </group>
  );
}

function Bubbles() {
  const bubblesRef = useRef<THREE.InstancedMesh>(null);
  const count = 20;

  const positions = useMemo(() => {
    const pos = [];
    for (let i = 0; i < count; i++) {
      pos.push({
        x: (Math.random() - 0.5) * 4,
        y: (Math.random() - 0.5) * 4,
        z: (Math.random() - 0.5) * 2,
        speed: Math.random() * 0.5 + 0.2,
        scale: Math.random() * 0.08 + 0.03,
      });
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (!bubblesRef.current) return;
    const dummy = new THREE.Object3D();

    positions.forEach((p, i) => {
      const t = state.clock.elapsedTime * p.speed;
      dummy.position.set(
        p.x + Math.sin(t * 1.5) * 0.3,
        p.y + ((t * 0.5) % 5) - 2.5,
        p.z + Math.cos(t) * 0.2
      );
      dummy.scale.setScalar(p.scale);
      dummy.updateMatrix();
      bubblesRef.current!.setMatrixAt(i, dummy.matrix);
    });
    bubblesRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={bubblesRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 16, 16]} />
      <meshPhysicalMaterial
        color="#a8d4f0"
        transparent
        opacity={0.3}
        roughness={0}
        metalness={0.1}
        transmission={0.6}
      />
    </instancedMesh>
  );
}

export default function WashingMachine3D() {
  return (
    <div style={{ width: '100%', height: '100%', minHeight: '400px' }}>
      <Canvas
        camera={{ position: [0, 0.5, 5], fov: 40 }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
        <directionalLight position={[-3, 3, -3]} intensity={0.3} color="#a8d4f0" />
        <pointLight position={[0, 0, 3]} intensity={0.5} color="#3B82F6" />

        <Float
          speed={1.5}
          rotationIntensity={0.3}
          floatIntensity={0.5}
        >
          <WashingMachineModel />
        </Float>

        <Bubbles />

        <Environment preset="city" environmentIntensity={0.3} />
      </Canvas>
    </div>
  );
}
