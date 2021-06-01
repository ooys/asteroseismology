import "/styles/Sun.module.css";
import React, { useEffect } from "react";
import * as THREE from "three";

function Sun() {
    useEffect(() => {
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

        // controls = new THREE.OrbitControls(camera, renderer.domElement);

        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.position.setZ(2);
        camera.position.setX(0);
        renderer.render(scene, camera);

        const geometry = new THREE.SphereBufferGeometry(1, 100, 100);
        // const material = new THREE.MeshBasicMaterial({
        //     color: 0xffffff,
        //     wireframe: true,
        // });
        const sunTexture = new THREE.TextureLoader().load("/images/sun.jpeg");
        const material2 = new THREE.MeshBasicMaterial({
            map: sunTexture,
            wireframe: false,
        });

        const sun = new THREE.Mesh(geometry, material2);

        scene.add(sun);
        const pointLight = new THREE.PointLight(0xffffff);
        pointLight.position.set(5, 5, 5);

        const ambientLight = new THREE.AmbientLight(0xffffff);
        scene.add(ambientLight);

        function animate() {
            requestAnimationFrame(animate);

            sun.rotation.x += 0.001;
            sun.rotation.y += 0.002;
            sun.rotation.z += 0.001;
            // controls.update();
            renderer.render(scene, camera);
        }
        animate();

        //renderer.render(scene, camera);
    });

    return (
        <>
            <canvas id="sun_canvas"></canvas>
        </>
    );
}

export default Sun;
