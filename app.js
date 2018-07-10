
AFRAME.registerComponent('wood-ball', {
    schema: {
        color: { type: 'string', default: '#545443' }
    },
    update: function () {
        // Adding the sphere
        var geometry = new THREE.SphereBufferGeometry(1, 100, 100);
        var material = new THREE.MeshPhongMaterial({
            shininess: 90,
            color: this.data.color,
            // alphaMap: 0xdddddd,
            map: new THREE.TextureLoader().load("assets/wood_COLOR.png"),
            normalMap: new THREE.TextureLoader().load("assets/wood_NRM.png"),
            aoMap: new THREE.TextureLoader().load("assets/wood_OCC.png"),
            aoMapIntensity: 3,
            normalScale: new THREE.Vector2(0.8, 0.8)
        });
        var sphere = new THREE.Mesh(geometry, material);

        // add sphere to scene
        this.el.setObject3D('mesh', sphere)
    },
})