'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment } from '@react-three/drei';
import { motion, useInView } from 'framer-motion';
import * as THREE from 'three';

/* ===== Minimal 3D Machine Models ===== */

function WasherModel() {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (ref.current) ref.current.rotation.y = state.clock.elapsedTime * 0.3;
  });
  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.4}>
      <group ref={ref} scale={0.9}>
        <mesh><boxGeometry args={[1.8, 2.1, 1.5]} /><meshPhysicalMaterial color="#e2e8f0" metalness={0.4} roughness={0.15} clearcoat={0.6} /></mesh>
        <mesh position={[0, -0.1, 0.76]} rotation={[Math.PI / 2, 0, 0]}><torusGeometry args={[0.5, 0.06, 16, 48]} /><meshPhysicalMaterial color="#94a3b8" metalness={0.7} roughness={0.1} /></mesh>
        <mesh position={[0, -0.1, 0.77]}><circleGeometry args={[0.45, 48]} /><meshPhysicalMaterial color="#bfdbfe" metalness={0.1} roughness={0.05} transparent opacity={0.6} /></mesh>
        <mesh position={[0, 0.75, 0.76]}><boxGeometry args={[1.4, 0.3, 0.02]} /><meshPhysicalMaterial color="#f1f5f9" metalness={0.1} roughness={0.3} /></mesh>
        <mesh position={[0.4, 0.75, 0.78]}><cylinderGeometry args={[0.08, 0.08, 0.03, 32]} /><meshPhysicalMaterial color="#1F4E79" metalness={0.6} roughness={0.2} /></mesh>
      </group>
    </Float>
  );
}

function DryerModel() {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (ref.current) ref.current.rotation.y = state.clock.elapsedTime * 0.3;
  });
  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.4}>
      <group ref={ref} scale={0.9}>
        <mesh><boxGeometry args={[1.8, 2.1, 1.5]} /><meshPhysicalMaterial color="#e2e8f0" metalness={0.4} roughness={0.15} clearcoat={0.6} /></mesh>
        <mesh position={[0, -0.1, 0.76]} rotation={[Math.PI / 2, 0, 0]}><torusGeometry args={[0.5, 0.06, 16, 48]} /><meshPhysicalMaterial color="#94a3b8" metalness={0.7} roughness={0.1} /></mesh>
        <mesh position={[0, -0.1, 0.77]}><circleGeometry args={[0.45, 48]} /><meshPhysicalMaterial color="#fde68a" metalness={0.1} roughness={0.05} transparent opacity={0.4} /></mesh>
        <mesh position={[0, 0.75, 0.76]}><boxGeometry args={[1.4, 0.3, 0.02]} /><meshPhysicalMaterial color="#f1f5f9" metalness={0.1} roughness={0.3} /></mesh>
        {[0, 1, 2, 3].map((i) => (
          <mesh key={i} position={[-0.4 + i * 0.25, 0.75, 0.78]}><sphereGeometry args={[0.04, 16, 16]} /><meshPhysicalMaterial color={i === 1 ? '#3B82F6' : '#cbd5e1'} emissive={i === 1 ? '#3B82F6' : '#000'} emissiveIntensity={i === 1 ? 0.5 : 0} /></mesh>
        ))}
      </group>
    </Float>
  );
}

function SteamIronModel() {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (ref.current) ref.current.rotation.y = state.clock.elapsedTime * 0.3;
  });
  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.4}>
      <group ref={ref} scale={0.9}>
        <mesh position={[0, -0.3, 0]} rotation={[0.1, 0, 0]}><boxGeometry args={[0.5, 0.15, 1.4]} /><meshPhysicalMaterial color="#d0d5db" metalness={0.6} roughness={0.1} clearcoat={0.8} /></mesh>
        <mesh position={[0, -0.05, -0.2]}><boxGeometry args={[0.35, 0.35, 0.7]} /><meshPhysicalMaterial color="#e2e8f0" metalness={0.3} roughness={0.2} /></mesh>
        <mesh position={[0, 0.25, -0.4]} rotation={[-0.3, 0, 0]}><boxGeometry args={[0.15, 0.12, 0.4]} /><meshPhysicalMaterial color="#1F4E79" metalness={0.4} roughness={0.3} /></mesh>
        {[0, 1, 2].map((i) => (
          <mesh key={i} position={[(i - 1) * 0.2, 0.5 + i * 0.15, -0.3]} scale={[0.06, 0.06, 0.06]}><sphereGeometry args={[1, 16, 16]} /><meshPhysicalMaterial color="#bfdbfe" transparent opacity={0.3 - i * 0.08} /></mesh>
        ))}
      </group>
    </Float>
  );
}

function BoilerModel() {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (ref.current) ref.current.rotation.y = state.clock.elapsedTime * 0.3;
  });
  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.4}>
      <group ref={ref} scale={0.9}>
        <mesh><cylinderGeometry args={[0.7, 0.7, 2, 32]} /><meshPhysicalMaterial color="#d0d5db" metalness={0.6} roughness={0.15} clearcoat={0.5} /></mesh>
        <mesh position={[0, 1.05, 0]}><sphereGeometry args={[0.72, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2]} /><meshPhysicalMaterial color="#c0c5cc" metalness={0.5} roughness={0.2} /></mesh>
        <mesh position={[0.3, 1.2, 0]}><cylinderGeometry args={[0.06, 0.06, 0.4, 16]} /><meshPhysicalMaterial color="#94a3b8" metalness={0.6} roughness={0.2} /></mesh>
        <mesh position={[0, 0, 0.72]}><cylinderGeometry args={[0.08, 0.08, 0.1, 16]} /><meshPhysicalMaterial color="#1F4E79" metalness={0.5} roughness={0.2} /></mesh>
        <mesh position={[0, -0.5, 0.72]}><boxGeometry args={[0.15, 0.08, 0.05]} /><meshPhysicalMaterial color="#3B82F6" emissive="#3B82F6" emissiveIntensity={0.3} /></mesh>
      </group>
    </Float>
  );
}

function MiniCanvas({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ width: '100%', height: '220px' }}>
      <Canvas camera={{ position: [0, 0.5, 4], fov: 35 }} gl={{ alpha: true, antialias: true }} style={{ background: 'transparent' }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <pointLight position={[0, 0, 3]} intensity={0.3} color="#3B82F6" />
        {children}
        <Environment preset="city" environmentIntensity={0.2} />
      </Canvas>
    </div>
  );
}

const machines = [
  {
    title: '20KG Industrial Washing Machine',
    features: ['Automatic water optimization', 'Premium detergent injection', 'Fabric protection system'],
    Component: WasherModel,
  },
  {
    title: 'Industrial Dryer',
    features: ['Temperature controlled drying', 'Fast moisture removal', 'Energy efficient operation'],
    Component: DryerModel,
  },
  {
    title: 'Steam Iron Station',
    features: ['Professional steam finishing', 'Wrinkle-free guarantee', 'Perfect fold technology'],
    Component: SteamIronModel,
  },
  {
    title: 'Industrial Boiler',
    features: ['High pressure steam', 'Complete sterilization', 'Professional quality output'],
    Component: BoilerModel,
  },
];

export default function Machines() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="section-lg" style={{ background: 'var(--surface)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
          style={{ marginBottom: '64px' }}
        >
          <div className="section-label" style={{ margin: '0 auto 24px' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary)' }} />
            Our Equipment
          </div>
          <h2 className="section-title">
            Powered by Industrial{' '}
            <span className="gradient-text">Precision</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            State-of-the-art machines that deliver consistent, professional results every time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: '24px' }}>
          {machines.map((machine, i) => (
            <motion.div
              key={machine.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-card overflow-hidden"
              style={{ padding: 0 }}
            >
              <div style={{ background: 'linear-gradient(180deg, rgba(31,78,121,0.03), transparent)', padding: '16px 16px 0' }}>
                <MiniCanvas>
                  <machine.Component />
                </MiniCanvas>
              </div>
              <div style={{ padding: '24px' }}>
                <h3 style={{
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  color: 'var(--heading)',
                  fontFamily: 'var(--font-heading)',
                  marginBottom: '12px',
                }}>
                  {machine.title}
                </h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {machine.features.map((f) => (
                    <li key={f} className="flex items-center" style={{ gap: '8px', fontSize: '0.8rem', color: 'var(--paragraph)' }}>
                      <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--primary)', flexShrink: 0 }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
