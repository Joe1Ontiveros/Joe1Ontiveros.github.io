"use client";

import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import clsx from 'clsx';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';

const RenderModel = ({ children, className }) => {
    return (
        <Canvas className={clsx('w-full h-full', className)}>
            <Suspense fallback={null}>
                <PerspectiveCamera makeDefault fov={70} position={[0.38, 1.757, -.55]} rotation={[0.098, 0.154, .084]} />
                {children}
            </Suspense>
            <OrbitControls 
                enablePan={false} 
                maxPolarAngle={Math.PI / 2} 
                minPolarAngle={-Math.PI / 2} 
                maxAzimuthAngle={Math.PI / 6} 
                minAzimuthAngle={-Math.PI / 6}
                minDistance={.1}
                maxDistance={0.35} // Ensure we can't zoom out
                // target={[0.22, 1.757, -0.58]}
                target={[-0.098, 1.84, -1.288]} 
            />
        </Canvas>
    );
};

export default RenderModel;