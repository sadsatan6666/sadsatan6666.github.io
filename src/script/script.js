- **CDN Link:** This includes the latest version (0.147) of Three.js from the jsDelivr CDN. You can find alternative CDN providers and versions at [https://www.jsdelivr.com/package/npm/three-js](https://www.jsdelivr.com/package/npm/three-js).

**4. JavaScript File (`script.js`):**

- Create a JavaScript file named `script.js` in your project directory. Your Three.js code to create and render the 3D scene will reside here.

**5. Basic Three.js Code:**

- In your `script.js` file, add the following code to create a scene with a camera, renderer, and a cube:

```javascript
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}

animate();

