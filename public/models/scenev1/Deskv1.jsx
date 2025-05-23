/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 deskv1.gltf --transform 
Files: deskv1.gltf [77.11KB] > C:\Users\jonti\OneDrive\Desktop\web_remaster\web-portfolio-joe-v2\public\models\scenev1\deskv1-transformed.glb [2.79MB] (-3520%)
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/deskv1-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-0.098, 1.413, -1.288]} rotation={[1.2, 0, 0]} scale={[0.05, 0.057, 0.052]}>
        <mesh geometry={nodes.Plane003.geometry} material={materials.note_1} />
        <mesh geometry={nodes.Plane003_1.geometry} material={materials['Plastic White 13']} />
        <mesh geometry={nodes.Plane003_2.geometry} material={materials['Plastic Black 3']} />
        <mesh geometry={nodes.Plane003_3.geometry} material={materials.PaletteMaterial002} />
        <mesh geometry={nodes.Plane003_4.geometry} material={materials.PaletteMaterial003} />
        <mesh geometry={nodes.Plane003_5.geometry} material={materials['Golden metal']} />
        <mesh geometry={nodes.Plane003_6.geometry} material={materials.ComputerCase} />
        <mesh geometry={nodes.Plane003_7.geometry} material={materials['09_-_Default']} />
        <mesh geometry={nodes.Plane003_8.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Plane003_9.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Plane003_10.geometry} material={materials.standing_picture_frame_01_artwork} />
        <mesh geometry={nodes.Plane003_11.geometry} material={materials['Dark iron']} />
        <mesh geometry={nodes.Plane003_12.geometry} material={materials.Speaker_mat} />
        <mesh geometry={nodes.Plane003_13.geometry} material={materials.flag_colorado} />
        <mesh geometry={nodes.Plane003_14.geometry} material={materials.DUBANNER_MAT} />
        <mesh geometry={nodes.Plane003_15.geometry} material={materials.PaletteMaterial001} />
        <mesh geometry={nodes.Plane003_16.geometry} material={materials.standing_picture_frame_01_glass} />
      </group>
      <mesh geometry={nodes.Office_table.geometry} material={materials.PaletteMaterial004} />
      <mesh geometry={nodes.BézierCurve.geometry} material={nodes.BézierCurve.material} />
      <mesh geometry={nodes.Cube001.geometry} material={materials['Plastic White 13']} />
      <mesh geometry={nodes.Cube001_1.geometry} material={materials['Plastic Black 3']} />
      <mesh geometry={nodes.Cube001_2.geometry} material={materials.PaletteMaterial002} />
      <mesh geometry={nodes.Cube001_3.geometry} material={materials.PaletteMaterial003} />
      <mesh geometry={nodes.Cube001_4.geometry} material={materials['Golden metal']} />
      <mesh geometry={nodes.Cube001_5.geometry} material={materials.PaletteMaterial001} />
    </group>
  )
}

useGLTF.preload('/deskv1-transformed.glb')
