'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useState, useEffect, useMemo } from 'react';
import { Group, MeshStandardMaterial, Color } from 'three';
import { Environment, ContactShadows } from '@react-three/drei';

function Avatar() {
    const group = useRef<Group>(null);
    const head = useRef<Group>(null);
    const rightArm = useRef<Group>(null);
    const orbitalsRef = useRef<Group>(null);
    const screenRef = useRef<Group>(null);

    const [hovered, setHovered] = useState(false);
    const [spinTarget, setSpinTarget] = useState(0);
    const mouse = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const handleClick = () => {
        // Trigger a 360 degree spin on click
        setSpinTarget(prev => prev + Math.PI * 2);
    };

    // 5. Dynamic Color Material (Sky Blue to Purple)
    const dynamicGlowMaterial = useMemo(() => new MeshStandardMaterial({
        color: '#0ea5e9',
        emissive: '#0ea5e9',
        emissiveIntensity: 2
    }), []);

    const dynamicScreenMaterial = useMemo(() => new MeshStandardMaterial({
        color: '#0ea5e9',
        emissive: '#0ea5e9',
        emissiveIntensity: 0.5,
        transparent: true,
        opacity: 0.3,
        side: 2
    }), []);

    useFrame((state) => {
        if (!group.current || !head.current || !rightArm.current || !orbitalsRef.current || !screenRef.current) return;

        const targetX = (mouse.current.x * Math.PI) / 5;
        const targetY = (mouse.current.y * Math.PI) / 5;

        // Smooth head tracking
        head.current.rotation.y += (targetX - head.current.rotation.y) * 0.1;
        head.current.rotation.x += (-targetY - head.current.rotation.x) * 0.1;

        // 3. Body Rotation (includes mouse tracking + Click-to-spin animation)
        const currentSpin = group.current.rotation.y;
        const desiredSpin = (targetX * 0.3) + spinTarget;
        group.current.rotation.y += (desiredSpin - currentSpin) * 0.05;

        // Waving animation
        const time = state.clock.getElapsedTime();
        if (hovered) {
            rightArm.current.rotation.z = Math.sin(time * 8) * 0.4 + 2.2;
            rightArm.current.rotation.x = Math.sin(time * 4) * 0.2;
        } else {
            rightArm.current.rotation.z += (0.2 - rightArm.current.rotation.z) * 0.1;
            rightArm.current.rotation.x += (0 - rightArm.current.rotation.x) * 0.1;
        }

        // Hover/Hover floating effect for the entire robot
        group.current.position.y = -1.20 + Math.sin(time * 2) * 0.05;

        // 6. Holographic Screen Floating
        screenRef.current.position.y = Math.sin(time * 3) * 0.02;

        // 2. Floating Orbitals Rotation
        orbitalsRef.current.rotation.y += 0.02;
        orbitalsRef.current.rotation.z = Math.sin(time * 0.5) * 0.2;

        // 5. Dynamic Color Shifting Math
        // Pulses seamlessly between 0 and 1
        const pulse = (Math.sin(time * 1.5) + 1) / 2; 
        const colorA = new Color('#0ea5e9'); // Sky blue
        const colorB = new Color('#a855f7'); // Purple
        const lerpedColor = colorA.lerp(colorB, pulse);
        
        dynamicGlowMaterial.color.copy(lerpedColor);
        dynamicGlowMaterial.emissive.copy(lerpedColor);
        
        dynamicScreenMaterial.color.copy(lerpedColor);
        dynamicScreenMaterial.emissive.copy(lerpedColor);
    });

    // Material optimizations using a regular object reference to avoid re-instantiation
    const materials = {
        metal: <meshStandardMaterial color="#94a3b8" metalness={0.9} roughness={0.2} />,
        darkMetal: <meshStandardMaterial color="#334155" metalness={0.8} roughness={0.5} />,
    };

    return (
        <group
            ref={group}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
            onClick={handleClick}
            position={[0, -1.20, 0]}
        >
            {/* 6. Holographic Floating Screen */}
            <group ref={screenRef} position={[0, 1.2, 1.2]}>
                {/* Translucent Screen Panel */}
                <mesh material={dynamicScreenMaterial}>
                    <planeGeometry args={[1.6, 1]} />
                </mesh>
                {/* Screen Data/Code Lines */}
                <group position={[0, 0, 0.01]}>
                    <mesh position={[-0.4, 0.3, 0]}><planeGeometry args={[0.5, 0.04]} /><meshBasicMaterial color="#ffffff" opacity={0.6} transparent /></mesh>
                    <mesh position={[-0.1, 0.1, 0]}><planeGeometry args={[1.0, 0.04]} /><meshBasicMaterial color="#ffffff" opacity={0.6} transparent /></mesh>
                    <mesh position={[-0.5, -0.1, 0]}><planeGeometry args={[0.3, 0.04]} /><meshBasicMaterial color="#ffffff" opacity={0.6} transparent /></mesh>
                    <mesh position={[0.2, -0.3, 0]}><planeGeometry args={[0.7, 0.04]} /><meshBasicMaterial color="#ffffff" opacity={0.6} transparent /></mesh>
                </group>
            </group>

            {/* 2. Orbiting Data Packets */}
            <group ref={orbitalsRef} position={[0, 1.0, 0]}>
                {[0, 1, 2].map((i) => (
                    <mesh key={i} position={[
                        Math.cos((i * Math.PI * 2) / 3) * 1.5,
                        Math.sin((i * Math.PI * 2) / 3) * 0.4,
                        Math.sin((i * Math.PI * 2) / 3) * 1.5
                    ]} material={dynamicGlowMaterial}>
                        <sphereGeometry args={[0.08, 16, 16]} />
                    </mesh>
                ))}
            </group>

            {/* Holographic Base Ring */}
            <mesh position={[0, -0.8, 0]} rotation={[-Math.PI / 2, 0, 0]} material={dynamicScreenMaterial}>
                <ringGeometry args={[0.8, 1, 32]} />
            </mesh>

            {/* Head Group */}
            <group ref={head} position={[0, 1.8, 0]}>
                <mesh>
                    <boxGeometry args={[0.9, 0.8, 0.9]} />
                    {materials.metal}
                </mesh>
                
                {/* Robot Visor */}
                <mesh position={[0, 0.1, 0.46]} material={dynamicGlowMaterial}>
                    <boxGeometry args={[0.7, 0.2, 0.1]} />
                </mesh>

                {/* Ear Sensors */}
                <mesh position={[-0.46, 0, 0]}>
                    <boxGeometry args={[0.1, 0.4, 0.4]} />
                    {materials.darkMetal}
                </mesh>
                <mesh position={[0.46, 0, 0]}>
                    <boxGeometry args={[0.1, 0.4, 0.4]} />
                    {materials.darkMetal}
                </mesh>

                {/* Antenna */}
                <mesh position={[0, 0.5, 0]}>
                    <cylinderGeometry args={[0.02, 0.05, 0.4, 8]} />
                    {materials.darkMetal}
                </mesh>
                <mesh position={[0, 0.7, 0]} material={dynamicGlowMaterial}>
                    <sphereGeometry args={[0.08, 16, 16]} />
                </mesh>
            </group>

            {/* Neck */}
            <mesh position={[0, 1.3, 0]}>
                <cylinderGeometry args={[0.2, 0.3, 0.4, 16]} />
                {materials.darkMetal}
            </mesh>

            {/* Core Body */}
            <mesh position={[0, 0.5, 0]}>
                <boxGeometry args={[1.2, 1.2, 0.8]} />
                {materials.metal}
            </mesh>
            
            {/* Chest Armor Detail */}
            <mesh position={[0, 0.5, 0.41]}>
                <boxGeometry args={[0.8, 0.8, 0.1]} />
                {materials.darkMetal}
            </mesh>

            {/* Reactor Core */}
            <mesh position={[0, 0.5, 0.47]} rotation={[Math.PI / 2, 0, 0]} material={dynamicGlowMaterial}>
                <cylinderGeometry args={[0.2, 0.2, 0.05, 32]} />
            </mesh>

            {/* Pelvis / Lower Body */}
            <mesh position={[0, -0.3, 0]}>
                <boxGeometry args={[0.9, 0.4, 0.6]} />
                {materials.metal}
            </mesh>

            {/* Left Arm */}
            <group position={[-0.8, 1.0, 0]}>
                <mesh>
                    <sphereGeometry args={[0.25, 16, 16]} />
                    {materials.darkMetal}
                </mesh>
                <mesh position={[0, -0.5, 0]}>
                    <cylinderGeometry args={[0.15, 0.15, 0.8, 16]} />
                    {materials.metal}
                </mesh>
                <mesh position={[0, -1, 0]} material={dynamicGlowMaterial}>
                    <sphereGeometry args={[0.2, 16, 16]} />
                </mesh>
            </group>

            {/* Right Arm (Waving) */}
            <group position={[0.8, 1.0, 0]}>
                {/* Shoulder Orbit/Joint */}
                <mesh>
                    <sphereGeometry args={[0.25, 16, 16]} />
                    {materials.darkMetal}
                </mesh>
                
                {/* Arm setup pivoting from shoulder */}
                <group ref={rightArm}>
                    <mesh position={[0, -0.5, 0]}>
                        <cylinderGeometry args={[0.15, 0.15, 0.8, 16]} />
                        {materials.metal}
                    </mesh>
                    <mesh position={[0, -1.0, 0]} material={dynamicGlowMaterial}>
                        <sphereGeometry args={[0.2, 16, 16]} />
                    </mesh>
                </group>
            </group>
        </group>
    );
}

export default function InteractiveAvatar() {
    return (
        <div className="w-full h-full cursor-pointer">
            <Canvas
                camera={{ position: [0.2, 0, 5.5], fov: 50 }}
                gl={{ preserveDrawingBuffer: true, antialias: true }}
                dpr={[1, 2]}
            >
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#0ea5e9" />

                <Avatar />

                <ContactShadows resolution={512} scale={10} blur={2} opacity={0.4} far={10} color="#000000" />
                <Environment preset="city" />
            </Canvas>
        </div>
    );
}
