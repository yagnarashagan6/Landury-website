'use client';

import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Environment, Float } from '@react-three/drei';
import * as THREE from 'three';

import { useGLTF, OrbitControls } from '@react-three/drei';

function WashingMachineModel() {
  const groupRef = useRef<THREE.Group>(null);
  
  const { scene } = useGLTF('/new_model/washer.glb');

  const clonedObj = useMemo(() => {
    const clone = scene.clone();
    clone.traverse((child: THREE.Object3D) => {
      const mesh = child as THREE.Mesh;
      if (mesh.isMesh) {
        if (!mesh.geometry.attributes.normal) {
          mesh.geometry.computeVertexNormals();
        }
        if (mesh.material) {
          const oldMat = mesh.material as THREE.MeshStandardMaterial;
          mesh.material = new THREE.MeshPhysicalMaterial({
            color: oldMat.color || 0xffffff,
            map: oldMat.map || null,
            metalness: 0.3,
            roughness: 0.2,
            clearcoat: 0.8,
            clearcoatRoughness: 0.1,
            side: THREE.DoubleSide
          });
        }
      }
    });
    return clone;
  }, [scene]);


  return (
    <group ref={groupRef} position={[0, -0.8, 0]}>
      <primitive object={clonedObj} scale={0.03} />
    </group>
  );
}


// Generate random positions outside component to satisfy purity rules
function generateBubblePositions(count: number) {
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
}

function Bubbles() {
  const bubblesRef = useRef<THREE.InstancedMesh>(null);
  const count = 20;

  const positions = useMemo(() => generateBubblePositions(count), [count]);

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

        <Suspense fallback={null}>
          <Float
            speed={1.5}
            rotationIntensity={0.3}
            floatIntensity={0.5}
          >
            <WashingMachineModel />
          </Float>
        </Suspense>

        <Bubbles />

        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={1} 
          minPolarAngle={Math.PI / 3} 
          maxPolarAngle={Math.PI / 1.5} 
        />

        <Environment preset="city" environmentIntensity={0.3} />
      </Canvas>
    </div>
  );
}
