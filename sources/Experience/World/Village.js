import * as THREE from "three";

export default class Village {
  constructor(scene, resources) {
    this.scene = scene;
    this.resources = resources;

    // Group to hold all village objects
    this.villageGroup = new THREE.Group();
    this.scene.add(this.villageGroup);

    // Example: Add a house
    this.addHouse();
    
    // Example: Add a tree
    this.addTree();
  }

  addHouse() {
    const houseGeometry = new THREE.BoxGeometry(2, 2, 2);
    const houseMaterial = new THREE.MeshStandardMaterial({ color: 0x8b4513 });
    const house = new THREE.Mesh(houseGeometry, houseMaterial);

    house.position.set(0, 1, 0); // Position above the ground
    this.villageGroup.add(house);
  }

  addTree() {
    const trunkGeometry = new THREE.CylinderGeometry(0.2, 0.2, 2);
    const trunkMaterial = new THREE.MeshStandardMaterial({ color: 0x8b4513 });
    const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);

    const foliageGeometry = new THREE.SphereGeometry(1);
    const foliageMaterial = new THREE.MeshStandardMaterial({ color: 0x228b22 });
    const foliage = new THREE.Mesh(foliageGeometry, foliageMaterial);

    trunk.position.set(-3, 1, 0);
    foliage.position.set(-3, 2.5, 0);

    this.villageGroup.add(trunk);
    this.villageGroup.add(foliage);
  }

  update() {
    // Optional: Add any animations or updates for village elements
  }
}
