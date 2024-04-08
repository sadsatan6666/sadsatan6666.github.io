// Wait for the DOM to be ready before executing Three.js code
window.addEventListener('DOMContentLoaded', () => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = [
    new THREE.MeshBasicMaterial({ color: 0xff0000 }), // Red
    new THREE.MeshBasicMaterial({ color: 0x00ff00 }), // Green
    new THREE.MeshBasicMaterial({ color: 0x0000ff }), // Blue
    new THREE.MeshBasicMaterial({ color: 0xffff00 }), // Yellow
    new THREE.MeshBasicMaterial({ color: 0xff00ff }), // Magenta
    new THREE.MeshBasicMaterial({ color: 0x00ffff }), // Cyan
  ]; // Use a material that supports shadows

  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  // Add a light
  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(10, 10, 10);
  scene.add(light);

  // Enable shadows
  renderer.shadowMap.enabled = true;

  // Allow the cube to cast and receive shadows
  cube.castShadow = true;
  cube.receiveShadow = true;

let isDragging = false;
  let lastMousePos = { x: 0, y: 0 };

  // Event listeners for dragging
  renderer.domElement.addEventListener('mousedown', onMouseDown);
  renderer.domElement.addEventListener('mouseup', onMouseUp);
  renderer.domElement.addEventListener('mousemove', onMouseMove);

  function onMouseDown(event) {
    isDragging = true;
    lastMousePos = { x: event.clientX, y: event.clientY };
  }

  function onMouseUp() {
    isDragging = false;
  }

  function onMouseMove(event) {
    if (isDragging) {
      const deltaX = event.clientX - lastMousePos.x;
      const deltaY = event.clientY - lastMousePos.y;

      const sensitivity = 0.05; // Adjust sensitivity for smoother dragging
      cube.position.x += deltaX * sensitivity;
      cube.position.y -= deltaY * sensitivity; // Invert y-axis for natural dragging

      lastMousePos = { x: event.clientX, y: event.clientY };
    }
  }

  function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  }

  animate();
});
