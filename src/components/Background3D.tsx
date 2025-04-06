// import { useRef, useEffect } from 'react';
// import { useFrame, useThree } from '@react-three/fiber';
// import { Points, PointMaterial } from '@react-three/drei';
// import * as random from 'maath/random';
// import { Color, Vector3 } from 'three';

// export function Background3D({ count = 8000 }) {
//   const { mouse } = useThree();
//   const ref = useRef<any>();
//   const starRef = useRef<any>();
//   const nebulaRef = useRef<any>();

//   // Create multiple particle systems for depth
//   const starPositions = random.inSphere(new Float32Array(count * 3), { radius: 2.5 });
//   const nebulaPositions = random.inSphere(new Float32Array((count / 2) * 3), { radius: 1.8 });
//   const foregroundPositions = random.inSphere(new Float32Array((count / 4) * 3), { radius: 1.2 });

//   // Colors for different layers
//   const starColor = new Color('#ffffff');
//   const nebulaColor = new Color('#9333ea');
//   const foregroundColor = new Color('#818cf8');

//   useEffect(() => {
//     if (ref.current) {
//       ref.current.rotation.x = Math.PI / 2;
//     }
//   }, []);

//   useFrame((state, delta) => {
//     if (!ref.current || !starRef.current || !nebulaRef.current) return;

//     // Rotate the entire scene
//     ref.current.rotation.x -= delta / 15;
//     ref.current.rotation.y -= delta / 20;

//     // Make stars twinkle
//     const starMaterial = starRef.current.material;
//     starMaterial.size = Math.sin(state.clock.elapsedTime) * 0.001 + 0.002;

//     // Nebula movement
//     nebulaRef.current.rotation.z += delta / 10;

//     // Interactive mouse movement
//     const targetX = mouse.x * 0.1;
//     const targetY = mouse.y * 0.1;

//     ref.current.rotation.x += (targetY - ref.current.rotation.x) * 0.05;
//     ref.current.rotation.y += (targetX - ref.current.rotation.y) * 0.05;
//   });

//   return (
//     <group rotation={[0, 0, Math.PI / 4]}>
//       {/* Background stars */}
//       <Points
//         ref={starRef}
//         positions={starPositions}
//         stride={3}
//         frustumCulled={false}
//       >
//         <PointMaterial
//           transparent
//           color={starColor}
//           size={0.002}
//           sizeAttenuation={true}
//           depthWrite={false}
//           blending={2}
//         />
//       </Points>

//       {/* Nebula layer */}
//       <Points
//         ref={nebulaRef}
//         positions={nebulaPositions}
//         stride={3}
//         frustumCulled={false}
//       >
//         <PointMaterial
//           transparent
//           color={nebulaColor}
//           size={0.005}
//           sizeAttenuation={true}
//           depthWrite={false}
//           opacity={0.6}
//           blending={2}
//         />
//       </Points>

//       {/* Foreground interactive particles */}
//       <Points
//         ref={ref}
//         positions={foregroundPositions}
//         stride={3}
//         frustumCulled={false}
//       >
//         <PointMaterial
//           transparent
//           color={foregroundColor}
//           size={0.003}
//           sizeAttenuation={true}
//           depthWrite={false}
//           opacity={0.8}
//           blending={2}
//         />
//       </Points>
//     </group>
//   );
// }


// import { useRef, useEffect } from 'react';
// import { useFrame, useThree } from '@react-three/fiber';
// import { Points, PointMaterial } from '@react-three/drei';
// import * as random from 'maath/random';
// import { Color, Vector3 } from 'three';
// import { useTheme } from '../context/ThemeContext';

// export function Background3D({ count = 8000 }) {
//   const { theme } = useTheme();
//   const { mouse } = useThree();
//   const ref = useRef<any>();
//   const starRef = useRef<any>();
//   const nebulaRef = useRef<any>();

//   // Create multiple particle systems for depth
//   const starPositions = random.inSphere(new Float32Array(count * 3), { radius: 2.5 });
//   const nebulaPositions = random.inSphere(new Float32Array((count / 2) * 3), { radius: 1.8 });
//   const foregroundPositions = random.inSphere(new Float32Array((count / 4) * 3), { radius: 1.2 });

//   // Colors for different layers based on theme
//   const starColor = new Color(theme === 'dark' ? '#ffffff' : '#000000');
//   const nebulaColor = new Color(theme === 'dark' ? '#9333ea' : '#c084fc');
//   const foregroundColor = new Color(theme === 'dark' ? '#818cf8' : '#4f46e5');

//   useEffect(() => {
//     if (ref.current) {
//       ref.current.rotation.x = Math.PI / 2;
//     }
//   }, []);

//   useFrame((state, delta) => {
//     if (!ref.current || !starRef.current || !nebulaRef.current) return;

//     // Rotate the entire scene
//     ref.current.rotation.x -= delta / 15;
//     ref.current.rotation.y -= delta / 20;

//     // Make stars twinkle
//     const starMaterial = starRef.current.material;
//     starMaterial.size = Math.sin(state.clock.elapsedTime) * 0.001 + 0.002;

//     // Nebula movement
//     nebulaRef.current.rotation.z += delta / 10;

//     // Interactive mouse movement
//     const targetX = mouse.x * 0.1;
//     const targetY = mouse.y * 0.1;

//     ref.current.rotation.x += (targetY - ref.current.rotation.x) * 0.05;
//     ref.current.rotation.y += (targetX - ref.current.rotation.y) * 0.05;
//   });

//   return (
//     <group rotation={[0, 0, Math.PI / 4]}>
//       {/* Background stars */}
//       <Points
//         ref={starRef}
//         positions={starPositions}
//         stride={3}
//         frustumCulled={false}
//       >
//         <PointMaterial
//           transparent
//           color={starColor}
//           size={0.002}
//           sizeAttenuation={true}
//           depthWrite={false}
//           blending={2}
//           opacity={theme === 'dark' ? 1 : 0.6}
//         />
//       </Points>

//       {/* Nebula layer */}
//       <Points
//         ref={nebulaRef}
//         positions={nebulaPositions}
//         stride={3}
//         frustumCulled={false}
//       >
//         <PointMaterial
//           transparent
//           color={nebulaColor}
//           size={0.005}
//           sizeAttenuation={true}
//           depthWrite={false}
//           opacity={theme === 'dark' ? 0.6 : 0.4}
//           blending={2}
//         />
//       </Points>

//       {/* Foreground interactive particles */}
//       <Points
//         ref={ref}
//         positions={foregroundPositions}
//         stride={3}
//         frustumCulled={false}
//       >
//         <PointMaterial
//           transparent
//           color={foregroundColor}
//           size={0.003}
//           sizeAttenuation={true}
//           depthWrite={false}
//           opacity={theme === 'dark' ? 0.8 : 0.6}
//           blending={2}
//         />
//       </Points>
//     </group>
//   );
// }



// import { useRef, useEffect, useState } from 'react';
// import { useFrame, useThree } from '@react-three/fiber';
// import { Points, PointMaterial } from '@react-three/drei';
// import * as random from 'maath/random';
// import { Color, Vector3 } from 'three';
// import { useTheme } from '../context/ThemeContext';

// export function Background3D({ count = 8000 }) {
//   const { theme } = useTheme();
//   const { mouse, viewport } = useThree();
//   const ref = useRef<any>();
//   const starRef = useRef<any>();
//   const nebulaRef = useRef<any>();
//   const interactiveRef = useRef<any>();
//   const mousePosRef = useRef<Vector3>(new Vector3(0, 0, 0));
//   const [hovered, setHovered] = useState(false);

//   // Create multiple particle systems for depth
//   const starPositions = random.inSphere(new Float32Array(count * 3), { radius: 2.5 });
//   const nebulaPositions = random.inSphere(new Float32Array((count / 2) * 3), { radius: 1.8 });
//   const foregroundPositions = random.inSphere(new Float32Array((count / 4) * 3), { radius: 1.2 });
//   const interactivePositions = random.inSphere(new Float32Array((count / 8) * 3), { radius: 0.8 });

//   // Enhanced colors for light theme
//   const isLightTheme = theme === 'light';
//   const starColor = new Color(isLightTheme ? '#444444' : '#ffffff');
//   const nebulaColor = new Color(isLightTheme ? '#9333ea' : '#9333ea');
//   const foregroundColor = new Color(isLightTheme ? '#3730a3' : '#818cf8');
//   const interactiveColor = new Color(isLightTheme ? '#0891b2' : '#06b6d4');

//   const updateMousePosition = (event: MouseEvent) => {
//     // Update the mouse position reference
//     mousePosRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
//     mousePosRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
//   };

//   useEffect(() => {
//     if (ref.current) {
//       ref.current.rotation.x = Math.PI / 2;
//     }

//     // Add event listeners for mouse movement
//     window.addEventListener('mousemove', updateMousePosition);
//     window.addEventListener('mouseenter', () => setHovered(true));
//     window.addEventListener('mouseleave', () => setHovered(false));

//     return () => {
//       window.removeEventListener('mousemove', updateMousePosition);
//       window.removeEventListener('mouseenter', () => setHovered(true));
//       window.removeEventListener('mouseleave', () => setHovered(false));
//     };
//   }, []);

//   useFrame((state, delta) => {
//     if (!ref.current || !starRef.current || !nebulaRef.current || !interactiveRef.current) return;

//     // Base rotation for ambience
//     ref.current.rotation.x -= delta / 15;
//     ref.current.rotation.y -= delta / 20;

//     // Enhanced star twinkling effect - more noticeable in light mode
//     const starMaterial = starRef.current.material;
//     const t = state.clock.elapsedTime;
//     starMaterial.size = (Math.sin(t) * 0.001 + (isLightTheme ? 0.003 : 0.002));
    
//     // Light theme specific size pulsing - larger particles
//     if (isLightTheme) {
//       starMaterial.opacity = 0.5 + Math.sin(t * 0.5) * 0.2;
//     }

//     // Nebula movement - more dynamic in light mode
//     nebulaRef.current.rotation.z += delta / (isLightTheme ? 8 : 10);
//     const nebulaMaterial = nebulaRef.current.material;
//     nebulaMaterial.size = isLightTheme ? 
//       (0.005 + Math.sin(t * 0.3) * 0.001) : 
//       0.005;

//     // Interactive particles - more responsive in light theme
//     const interactiveMaterial = interactiveRef.current.material;
    
//     // Reactive sizes for interactive particles
//     interactiveMaterial.size = hovered ? 
//       (isLightTheme ? 0.006 : 0.004) : 
//       (isLightTheme ? 0.004 : 0.003);

//     // Enhanced mouse tracking - more responsive for light theme
//     const targetX = mouse.x * (isLightTheme ? 0.2 : 0.1);
//     const targetY = mouse.y * (isLightTheme ? 0.2 : 0.1);
    
//     ref.current.rotation.x += (targetY - ref.current.rotation.x) * (isLightTheme ? 0.08 : 0.05);
//     ref.current.rotation.y += (targetX - ref.current.rotation.y) * (isLightTheme ? 0.08 : 0.05);
    
//     // Interactive layer follows mouse more aggressively
//     interactiveRef.current.rotation.x += (targetY * 2 - interactiveRef.current.rotation.x) * 0.1;
//     interactiveRef.current.rotation.y += (targetX * 2 - interactiveRef.current.rotation.y) * 0.1;
    
//     // Apply a wave effect to the interactive particles
//     if (interactiveRef.current.geometry.attributes.position) {
//       const positions = interactiveRef.current.geometry.attributes.position.array;
//       const originalPositions = interactivePositions;
      
//       for (let i = 0; i < positions.length; i += 3) {
//         const x = originalPositions[i];
//         const y = originalPositions[i + 1];
//         const z = originalPositions[i + 2];
        
//         // Calculate distance from mouse position
//         const dist = Math.sqrt(
//           Math.pow(x - mousePosRef.current.x, 2) + 
//           Math.pow(y - mousePosRef.current.y, 2)
//         );
        
//         // Apply wave effect based on distance
//         const wave = Math.sin(dist * 10 - t * 2) * 0.03;
        
//         positions[i] = x + (isLightTheme ? wave * 1.5 : wave);
//         positions[i + 1] = y + (isLightTheme ? wave * 1.5 : wave);
//         positions[i + 2] = z;
//       }
      
//       interactiveRef.current.geometry.attributes.position.needsUpdate = true;
//     }
//   });

//   return (
//     <group rotation={[0, 0, Math.PI / 4]}>
//       {/* Background stars - more visible in light theme */}
//       <Points
//         ref={starRef}
//         positions={starPositions}
//         stride={3}
//         frustumCulled={false}
//       >
//         <PointMaterial
//           transparent
//           color={starColor}
//           size={isLightTheme ? 0.003 : 0.002}
//           sizeAttenuation={true}
//           depthWrite={false}
//           blending={2}
//           opacity={isLightTheme ? 0.7 : 1}
//         />
//       </Points>

//       {/* Nebula layer */}
//       <Points
//         ref={nebulaRef}
//         positions={nebulaPositions}
//         stride={3}
//         frustumCulled={false}
//       >
//         <PointMaterial
//           transparent
//           color={nebulaColor}
//           size={isLightTheme ? 0.006 : 0.005}
//           sizeAttenuation={true}
//           depthWrite={false}
//           opacity={isLightTheme ? 0.5 : 0.6}
//           blending={2}
//         />
//       </Points>

//       {/* Foreground particles */}
//       <Points
//         ref={ref}
//         positions={foregroundPositions}
//         stride={3}
//         frustumCulled={false}
//       >
//         <PointMaterial
//           transparent
//           color={foregroundColor}
//           size={isLightTheme ? 0.004 : 0.003}
//           sizeAttenuation={true}
//           depthWrite={false}
//           opacity={isLightTheme ? 0.7 : 0.8}
//           blending={2}
//         />
//       </Points>

//       {/* Interactive layer - highly responsive to mouse */}
//       <Points
//         ref={interactiveRef}
//         positions={interactivePositions}
//         stride={3}
//         frustumCulled={false}
//       >
//         <PointMaterial
//           transparent
//           color={interactiveColor}
//           size={isLightTheme ? 0.004 : 0.003}
//           sizeAttenuation={true}
//           depthWrite={false}
//           opacity={isLightTheme ? 0.9 : 0.7}
//           blending={2}
//         />
//       </Points>
//     </group>
//   );
// }


"use client"

import { useRef, useEffect, useState } from "react"
import { useFrame, useThree } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import * as random from "maath/random"
import { Color, Vector3 } from "three"
import { useTheme } from "../context/ThemeContext"

export function Background3D({ count = 12000 }) {
  // Increased star count
  const { theme } = useTheme()
  const { mouse, viewport } = useThree()
  const ref = useRef<any>()
  const starRef = useRef<any>()
  const nebulaRef = useRef<any>()
  const interactiveRef = useRef<any>()
  const shootingStarRef = useRef<any>() // New ref for shooting stars
  const mousePosRef = useRef<Vector3>(new Vector3(0, 0, 0))
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false) // Track click state

  // Create multiple particle systems for depth with more particles
  const starPositions = random.inSphere(new Float32Array(count * 3), { radius: 2.5 })
  const nebulaPositions = random.inSphere(new Float32Array((count / 2) * 3), { radius: 1.8 })
  const foregroundPositions = random.inSphere(new Float32Array((count / 4) * 3), { radius: 1.2 })
  const interactivePositions = random.inSphere(new Float32Array((count / 6) * 3), { radius: 0.8 }) // More interactive particles

  // Shooting stars - new feature
  const shootingStarPositions = random.inSphere(new Float32Array((count / 20) * 3), { radius: 2.0 })
  const shootingStarDirections = useRef<Float32Array>(new Float32Array((count / 20) * 3))
  const shootingStarSpeeds = useRef<Float32Array>(new Float32Array(count / 20))

  // Initialize shooting star properties
  useEffect(() => {
    for (let i = 0; i < shootingStarSpeeds.current.length; i++) {
      shootingStarSpeeds.current[i] = Math.random() * 0.02 + 0.01

      // Random direction vector
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      shootingStarDirections.current[i * 3] = Math.sin(phi) * Math.cos(theta)
      shootingStarDirections.current[i * 3 + 1] = Math.sin(phi) * Math.sin(theta)
      shootingStarDirections.current[i * 3 + 2] = Math.cos(phi)
    }
  }, [])

  // Enhanced colors with more variety
  const isLightTheme = theme === "light"
  const starColor = new Color(isLightTheme ? "#444444" : "#ffffff")
  const nebulaColor = new Color(isLightTheme ? "#9333ea" : "#9333ea")
  const foregroundColor = new Color(isLightTheme ? "#3730a3" : "#818cf8")
  const interactiveColor = new Color(isLightTheme ? "#0891b2" : "#06b6d4")
  const shootingStarColor = new Color(isLightTheme ? "#f59e0b" : "#fbbf24") // Golden color for shooting stars

  const updateMousePosition = (event: MouseEvent) => {
    // Update the mouse position reference
    mousePosRef.current.x = (event.clientX / window.innerWidth) * 2 - 1
    mousePosRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1
  }

  const handleClick = () => {
    setClicked(!clicked) // Toggle click state for explosion effect
  }

  useEffect(() => {
    if (ref.current) {
      ref.current.rotation.x = Math.PI / 2
    }

    // Add event listeners for mouse movement and clicks
    window.addEventListener("mousemove", updateMousePosition)
    window.addEventListener("mouseenter", () => setHovered(true))
    window.addEventListener("mouseleave", () => setHovered(false))
    window.addEventListener("click", handleClick)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      window.removeEventListener("mouseenter", () => setHovered(true))
      window.removeEventListener("mouseleave", () => setHovered(false))
      window.removeEventListener("click", handleClick)
    }
  }, [])

  useFrame((state, delta) => {
    if (!ref.current || !starRef.current || !nebulaRef.current || !interactiveRef.current || !shootingStarRef.current)
      return

    // Base rotation for ambience - more dynamic
    ref.current.rotation.x -= delta / (clicked ? 10 : 15)
    ref.current.rotation.y -= delta / (clicked ? 15 : 20)

    // Enhanced star twinkling effect - more noticeable in light mode
    const starMaterial = starRef.current.material
    const t = state.clock.elapsedTime
    starMaterial.size = Math.sin(t) * 0.001 + (isLightTheme ? 0.003 : 0.002)

    // Light theme specific size pulsing - larger particles
    if (isLightTheme) {
      starMaterial.opacity = 0.5 + Math.sin(t * 0.5) * 0.2
    }

    // Nebula movement - more dynamic in light mode
    nebulaRef.current.rotation.z += delta / (isLightTheme ? 8 : 10)
    const nebulaMaterial = nebulaRef.current.material
    nebulaMaterial.size = isLightTheme ? 0.005 + Math.sin(t * 0.3) * 0.001 : 0.005

    // Interactive particles - more responsive in light theme
    const interactiveMaterial = interactiveRef.current.material

    // Reactive sizes for interactive particles - larger when clicked
    interactiveMaterial.size = hovered
      ? clicked
        ? 0.008
        : isLightTheme
          ? 0.006
          : 0.004
      : clicked
        ? 0.006
        : isLightTheme
          ? 0.004
          : 0.003

    // Enhanced mouse tracking - more responsive for light theme
    const targetX = mouse.x * (isLightTheme ? 0.2 : 0.1)
    const targetY = mouse.y * (isLightTheme ? 0.2 : 0.1)

    ref.current.rotation.x += (targetY - ref.current.rotation.x) * (isLightTheme ? 0.08 : 0.05)
    ref.current.rotation.y += (targetX - ref.current.rotation.y) * (isLightTheme ? 0.08 : 0.05)

    // Interactive layer follows mouse more aggressively
    interactiveRef.current.rotation.x += (targetY * 2 - interactiveRef.current.rotation.x) * 0.1
    interactiveRef.current.rotation.y += (targetX * 2 - interactiveRef.current.rotation.y) * 0.1

    // Apply a wave effect to the interactive particles
    if (interactiveRef.current.geometry.attributes.position) {
      const positions = interactiveRef.current.geometry.attributes.position.array
      const originalPositions = interactivePositions

      for (let i = 0; i < positions.length; i += 3) {
        const x = originalPositions[i]
        const y = originalPositions[i + 1]
        const z = originalPositions[i + 2]

        // Calculate distance from mouse position
        const dist = Math.sqrt(Math.pow(x - mousePosRef.current.x, 2) + Math.pow(y - mousePosRef.current.y, 2))

        // Apply wave effect based on distance - enhanced when clicked
        const waveIntensity = clicked ? 0.06 : 0.03
        const wave = Math.sin(dist * 10 - t * 2) * waveIntensity

        positions[i] = x + (isLightTheme ? wave * 1.5 : wave)
        positions[i + 1] = y + (isLightTheme ? wave * 1.5 : wave)
        positions[i + 2] = z
      }

      interactiveRef.current.geometry.attributes.position.needsUpdate = true
    }

    // Update shooting stars
    if (shootingStarRef.current.geometry.attributes.position) {
      const positions = shootingStarRef.current.geometry.attributes.position.array

      for (let i = 0; i < positions.length / 3; i++) {
        const idx = i * 3

        // Move shooting stars in their direction
        positions[idx] += shootingStarDirections.current[idx] * shootingStarSpeeds.current[i]
        positions[idx + 1] += shootingStarDirections.current[idx + 1] * shootingStarSpeeds.current[i]
        positions[idx + 2] += shootingStarDirections.current[idx + 2] * shootingStarSpeeds.current[i]

        // Reset shooting stars that go too far
        const distance = Math.sqrt(
          positions[idx] * positions[idx] +
            positions[idx + 1] * positions[idx + 1] +
            positions[idx + 2] * positions[idx + 2],
        )

        if (distance > 3.0) {
          // Reset to a random position near the center
          const newPos = random.inSphere(new Float32Array(3), { radius: 1.0 })
          positions[idx] = newPos[0]
          positions[idx + 1] = newPos[1]
          positions[idx + 2] = newPos[2]

          // New random direction
          const theta = Math.random() * Math.PI * 2
          const phi = Math.acos(2 * Math.random() - 1)
          shootingStarDirections.current[idx] = Math.sin(phi) * Math.cos(theta)
          shootingStarDirections.current[idx + 1] = Math.sin(phi) * Math.sin(theta)
          shootingStarDirections.current[idx + 2] = Math.cos(phi)

          // New random speed
          shootingStarSpeeds.current[i] = Math.random() * 0.02 + 0.01
        }
      }

      shootingStarRef.current.geometry.attributes.position.needsUpdate = true
    }

    // Click explosion effect
    if (clicked) {
      // Pulse the star sizes
      starMaterial.size = 0.003 + Math.sin(t * 5) * 0.001
      nebulaMaterial.size = 0.006 + Math.sin(t * 4) * 0.002

      // Increase shooting star speed
      for (let i = 0; i < shootingStarSpeeds.current.length; i++) {
        shootingStarSpeeds.current[i] = Math.random() * 0.04 + 0.02
      }
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      {/* Background stars - more visible in light theme */}
      <Points ref={starRef} positions={starPositions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color={starColor}
          size={isLightTheme ? 0.003 : 0.002}
          sizeAttenuation={true}
          depthWrite={false}
          blending={2}
          opacity={isLightTheme ? 0.7 : 1}
        />
      </Points>

      {/* Nebula layer */}
      <Points ref={nebulaRef} positions={nebulaPositions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color={nebulaColor}
          size={isLightTheme ? 0.006 : 0.005}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={isLightTheme ? 0.5 : 0.6}
          blending={2}
        />
      </Points>

      {/* Foreground particles */}
      <Points ref={ref} positions={foregroundPositions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color={foregroundColor}
          size={isLightTheme ? 0.004 : 0.003}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={isLightTheme ? 0.7 : 0.8}
          blending={2}
        />
      </Points>

      {/* Interactive layer - highly responsive to mouse */}
      <Points ref={interactiveRef} positions={interactivePositions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color={interactiveColor}
          size={isLightTheme ? 0.004 : 0.003}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={isLightTheme ? 0.9 : 0.7}
          blending={2}
        />
      </Points>

      {/* Shooting stars - new feature */}
      <Points ref={shootingStarRef} positions={shootingStarPositions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color={shootingStarColor}
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.8}
          blending={2}
        />
      </Points>
    </group>
  )
}

