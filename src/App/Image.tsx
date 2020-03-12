import React, {useRef, useState} from 'react';
import {Mesh} from "three";
import {Canvas, useFrame} from "react-three-fiber";
import Grid from "@material-ui/core/Grid";
import {useStyles} from "./Image.css";

const Geometry = (props: any) => {
  const mesh = useRef<Mesh>();

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame(() => {
    const current = mesh.current!;

    return current.rotation.x = current.rotation.y += 0.01;
  });

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={[1, 1, 1]}
      onClick={e => setActive(!active)}
      onPointerOver={e => setHover(true)}
      onPointerOut={e => setHover(false)}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
};

export const Image = () => {
  const classes = useStyles();

  return (
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container>
          <Canvas>
            <pointLight position={[10, 10, 10]} />
            <Geometry position={[1.2, 0, 0]} />
          </Canvas>
        </Grid>
      </main>
  )
};
