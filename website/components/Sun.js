import "/styles/Sun.module.css";
import React, { useEffect } from "react";
import * as THREE from "three";

function Sun() {
    useEffect(() => {
        // Rendering Canvas
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

        // Camera Settings
        const camX = -1.2;
        const camY = 0.5;
        const camZ = 1.2;
        camera.position.set(camX, camY, camZ);

        renderer.render(scene, camera);

        // Object Settings
        const sunGeometry = new THREE.SphereBufferGeometry(1, 100, 100);
        const sunTexture = new THREE.TextureLoader().load("/images/sun.jpeg");
        const sunMaterial = new THREE.MeshBasicMaterial({
            map: sunTexture,
            wireframe: false,
        });
        const sun = new THREE.Mesh(sunGeometry, sunMaterial);
        scene.add(sun);

        function addStar() {
            const starGeometry = new THREE.SphereBufferGeometry(0.25, 24, 24);
            const starMaterial = new THREE.MeshStandardMaterial({
                color: 0xffffff,
            });
            const star = new THREE.Mesh(starGeometry, starMaterial);
            const [x, y, z] = Array(3)
                .fill()
                .map(() => THREE.MathUtils.randFloatSpread(200));
            star.position.set(x, y, z);
            scene.add(star);
            // const light = new THREE.PointLight(0xffffff, 1, 200);
            // light.position.set(x, y, z);
            // scene.add(light);
        }
        Array(1000).fill().forEach(addStar);

        // Lighting Settings
        // const pointLight = new THREE.PointLight(0xffffff);
        // pointLight.position.set(5, 5, 5);

        const ambientLight = new THREE.AmbientLight(0xffffff, 0);
        scene.add(ambientLight);

        // Scrolling Animation
        function moveOnScroll() {
            const t = document.body.getBoundingClientRect().top;
            const frame = -t / window.innerHeight;
            console.log(frame);
            if (frame <= 1) {
                camera.position.x = camX + frame * 0.1;
                camera.position.y = camY + frame * 0.2;
                camera.position.z = camZ + frame * 5;
                camera.rotation.y = frame * -0.1;
                ambientLight.intensity = frame * 2;
            }
            if (frame > 1 && frame <= 2) {
                camera.position.x = camX + 0.1 + (frame - 1) * 0.2;
                camera.position.y = camY + 0.2 + (frame - 1) * -0.5;
                camera.position.z = camZ + 5 + (frame - 1) * -3;
                camera.rotation.y = -0.1 + (frame - 1) * -0.8;
            }
        }
        document.body.onscroll = moveOnScroll;
        // document.getElementsByClassName("section").onscroll = moveOnScroll;

        // Animation Settings
        function animate() {
            requestAnimationFrame(animate);

            // Update Camera Screen Ratio
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);

            // Update Object
            sun.rotation.x += -0.0001;
            sun.rotation.y += 0.002;

            // Update Camera
            // camera.position.z += 0.002;

            // Rerender
            renderer.render(scene, camera);
        }
        animate();

        //renderer.render(scene, camera);
    });

    return <canvas id="sun_canvas"></canvas>;
}

export default Sun;
