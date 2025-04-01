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
import { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random';
import { Color, Vector3 } from 'three';
import { useTheme } from '../context/ThemeContext';

export function Background3D({ count = 8000 }) {
  const { theme } = useTheme();
  const { mouse } = useThree();
  const ref = useRef<any>();
  const starRef = useRef<any>();
  const nebulaRef = useRef<any>();

  // Create multiple particle systems for depth
  const starPositions = random.inSphere(new Float32Array(count * 3), { radius: 2.5 });
  const nebulaPositions = random.inSphere(new Float32Array((count / 2) * 3), { radius: 1.8 });
  const foregroundPositions = random.inSphere(new Float32Array((count / 4) * 3), { radius: 1.2 });

  // Colors for different layers based on theme
  const starColor = new Color(theme === 'dark' ? '#ffffff' : '#000000');
  const nebulaColor = new Color(theme === 'dark' ? '#9333ea' : '#c084fc');
  const foregroundColor = new Color(theme === 'dark' ? '#818cf8' : '#4f46e5');

  useEffect(() => {
    if (ref.current) {
      ref.current.rotation.x = Math.PI / 2;
    }
  }, []);

  useFrame((state, delta) => {
    if (!ref.current || !starRef.current || !nebulaRef.current) return;

    // Rotate the entire scene
    ref.current.rotation.x -= delta / 15;
    ref.current.rotation.y -= delta / 20;

    // Make stars twinkle
    const starMaterial = starRef.current.material;
    starMaterial.size = Math.sin(state.clock.elapsedTime) * 0.001 + 0.002;

    // Nebula movement
    nebulaRef.current.rotation.z += delta / 10;

    // Interactive mouse movement
    const targetX = mouse.x * 0.1;
    const targetY = mouse.y * 0.1;

    ref.current.rotation.x += (targetY - ref.current.rotation.x) * 0.05;
    ref.current.rotation.y += (targetX - ref.current.rotation.y) * 0.05;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      {/* Background stars */}
      <Points
        ref={starRef}
        positions={starPositions}
        stride={3}
        frustumCulled={false}
      >
        <PointMaterial
          transparent
          color={starColor}
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
          blending={2}
          opacity={theme === 'dark' ? 1 : 0.6}
        />
      </Points>

      {/* Nebula layer */}
      <Points
        ref={nebulaRef}
        positions={nebulaPositions}
        stride={3}
        frustumCulled={false}
      >
        <PointMaterial
          transparent
          color={nebulaColor}
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={theme === 'dark' ? 0.6 : 0.4}
          blending={2}
        />
      </Points>

      {/* Foreground interactive particles */}
      <Points
        ref={ref}
        positions={foregroundPositions}
        stride={3}
        frustumCulled={false}
      >
        <PointMaterial
          transparent
          color={foregroundColor}
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={theme === 'dark' ? 0.8 : 0.6}
          blending={2}
        />
      </Points>
    </group>
  );
}