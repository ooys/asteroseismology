import "/styles/Sun.module.css";
import React, { useEffect } from "react";
import * as THREE from "three";

function Sun() {
    useEffect(() => {
        const _VS = `
        uniform float u_time;
            void main(){
                gl_Position = projectionMatrix * modelViewMatrix* vec4(position,1.0);
            }
        `;
        const _FS = `
        uniform float u_time;
            void main(){
                gl_FragColor = vec4(0.0,1.0,0.5,1.0);
            }
        `;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );

        const renderer = new THREE.WebGLRenderer({
            canvas: document.querySelector("#sun_canvas"),
        });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.position.setZ(2);
        camera.position.setX(0);
        renderer.render(scene, camera);

        const geometry = new THREE.SphereBufferGeometry(1, 50, 50);

        const uniforms = {};
        uniforms.u_time = { value: 0.0 };

        const material2 = new THREE.ShaderMaterial({
            vertexShader: _VS,
            fragmentShader: _FS,
        });
        const torus = new THREE.Mesh(geometry, material2);

        scene.add(torus);
        const pointLight = new THREE.PointLight(0xffffff);
        pointLight.position.set(5, 5, 5);

        const ambientLight = new THREE.AmbientLight(0xffffff);
        scene.add(ambientLight);

        function animate() {
            requestAnimationFrame(animate);

            torus.rotation.x += 0.01;
            torus.rotation.y += 0.005;
            torus.rotation.z += 0.01;

            renderer.render(scene, camera);
        }
        animate();
    });

    return (
        <>
            <canvas id="sun_canvas"></canvas>
        </>
    );
}

export default Sun;
