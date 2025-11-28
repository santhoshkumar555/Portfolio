'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useState, useEffect } from 'react';
import { Group } from 'three';
import { Environment, ContactShadows } from '@react-three/drei';

function Avatar() {
    const group = useRef<Group>(null);
    const head = useRef<Group>(null);
    const rightArm = useRef<Group>(null);
    const [hovered, setHovered] = useState(false);
    const mouse = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            // Normalize mouse position (-1 to 1) based on window size
            mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useFrame((state) => {
        if (!group.current || !head.current || !rightArm.current) return;

        // Use global mouse position for tracking
        const targetX = (mouse.current.x * Math.PI) / 6; // Reduced range for more natural look
        const targetY = (mouse.current.y * Math.PI) / 6;

        head.current.rotation.y += (targetX - head.current.rotation.y) * 0.1;
        head.current.rotation.x += (-targetY - head.current.rotation.x) * 0.1;

        // Body follows slightly
        group.current.rotation.y += (targetX * 0.3 - group.current.rotation.y) * 0.05;

        // Waving animation
        if (hovered) {
            const time = state.clock.getElapsedTime();
            rightArm.current.rotation.z = Math.sin(time * 10) * 0.5 + 2.5; // Wave
        } else {
            rightArm.current.rotation.z += (0 - rightArm.current.rotation.z) * 0.1; // Return to side
        }
    });

    return (
        <group
            ref={group}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
            position={[0, -1, 0]}
        >
            {/* Head Group */}
            <group ref={head} position={[0, 1.7, 0]}>
                {/* Head */}
                <mesh position={[0, 0, 0]}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color="#ffdbac" />
                </mesh>
                {/* Eyes */}
                <mesh position={[-0.2, 0.1, 0.51]}>
                    <sphereGeometry args={[0.1, 16, 16]} />
                    <meshStandardMaterial color="black" />
                </mesh>
                <mesh position={[0.2, 0.1, 0.51]}>
                    <sphereGeometry args={[0.1, 16, 16]} />
                    <meshStandardMaterial color="black" />
                </mesh>
                {/* Glasses */}
                <mesh position={[0, 0.1, 0.55]}>
                    <boxGeometry args={[0.9, 0.3, 0.1]} />
                    <meshStandardMaterial color="#333" transparent opacity={0.8} />
                </mesh>
                {/* Hair/Hoodie Hood */}
                <mesh position={[0, 0.1, -0.1]}>
                    <boxGeometry args={[1.1, 1.1, 1.1]} />
                    <meshStandardMaterial color="#38bdf8" /> {/* Sky blue hoodie */}
                </mesh>
            </group>

            {/* Body */}
            <mesh position={[0, 0.5, 0]}>
                <boxGeometry args={[1.2, 1.5, 0.8]} />
                <meshStandardMaterial color="#0f172a" /> {/* Dark blue shirt */}
            </mesh>

            {/* Laptop Logo on Shirt */}
            <mesh position={[0, 0.5, 0.41]}>
                <circleGeometry args={[0.2, 32]} />
                <meshStandardMaterial color="#38bdf8" emissive="#38bdf8" emissiveIntensity={0.5} />
            </mesh>

            {/* Arms */}
            <group position={[-0.7, 1.1, 0]}> {/* Left Arm */}
                <mesh position={[0, -0.6, 0]}>
                    <boxGeometry args={[0.3, 1.2, 0.3]} />
                    <meshStandardMaterial color="#0f172a" />
                </mesh>
            </group>

            <group ref={rightArm} position={[0.7, 1.1, 0]}> {/* Right Arm (Waving) */}
                <mesh position={[0, -0.6, 0]}>
                    <boxGeometry args={[0.3, 1.2, 0.3]} />
                    <meshStandardMaterial color="#0f172a" />
                </mesh>
                <mesh position={[0, -1.3, 0]}> {/* Hand */}
                    <sphereGeometry args={[0.2]} />
                    <meshStandardMaterial color="#ffdbac" />
                </mesh>
            </group>

        </group>
    );
}

export default function InteractiveAvatar() {
    return (
        <div className="w-full h-full cursor-pointer">
            <Canvas
                camera={{ position: [0.2, 0, 5], fov: 50 }}
                gl={{ preserveDrawingBuffer: true }}
            >
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#38bdf8" />

                <Avatar />

                <ContactShadows resolution={1024} scale={10} blur={2} opacity={0.5} far={10} color="#000000" />
                <Environment preset="city" />
            </Canvas>
        </div>
    );
}
