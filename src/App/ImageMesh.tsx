import React, { useMemo, useRef } from 'react';
import 'react-three-fiber';
import * as THREE from 'three';
import { Image } from 'image-js';

type ImageMeshProps = {
  image: Image;
};

export const ImageMesh = ({ image }: ImageMeshProps) => {
  const ref = useRef();

  const texture = useMemo(() => {
    return new THREE.TextureLoader().load(image.toDataURL());
  }, [image]);

  return (
    <mesh ref={ref} scale={[1.0, 1.0, 1.0]}>
      <planeBufferGeometry attach="geometry" args={[5.0, 5.0]} />
      <meshBasicMaterial attach="material" map={texture} />
    </mesh>
  );
};
