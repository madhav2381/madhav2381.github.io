/* author: Andrew Burks */
"use strict";

/* Get or create the application global variable */
var App = App || {};

/* Create the scene class */
const Scene = function(options) {

    // setup the pointer to the scope 'this' variable
    const self = this;

    // Scene
    self.scene = new THREE.Scene();
    //self.scene.background = new THREE.Color( 0xdadaeb );

    // Lights
    const light = new THREE.DirectionalLight( 0xffffff, 1.5);
    light.position.set(0,2,20);
    light.lookAt(0,0,0);
   

    // Sizes
    //const width = d3.select('.particles').node().clientWidth*.95;
    //const height = width * 0.51;
    const width = window.innerWidth * 0.65;
    const height = window.innerHeight * 0.85;

    // Camera setup
    self.camera = new THREE.PerspectiveCamera( 75, width / height, 0.1, 1000 );
    self.camera.position.set(-10,8,-2);

    self.camera.add(light);
    self.scene.add(self.camera);

    //  Renderer
    self.renderer = new THREE.WebGLRenderer();
    self.renderer.setSize( width, height );

    // sets up the background color
    document.getElementById(options.container).appendChild( self.renderer.domElement );

    self.controls = new THREE.OrbitControls( self.camera, self.renderer.domElement );
    self.controls.enableKeys = false;
    self.controls = new THREE.OrbitControls( self.camera, self.renderer.domElement );
    self.controls.enableKeys = false;
    self.controls.enablePan = false;
	self.controls.enableZoom = false; 
	self.controls.enableDamping = true;
	self.controls.dampingFactor = 0.07; // friction
    self.controls.rotateSpeed = 0.07;   // mouse sensitivity

    self.public = {

        resize: function() {

        },

        addObject: function(obj) {
            self.scene.add( obj );
        },

        render: function() {
            requestAnimationFrame( self.public.render );
            self.renderer.render( self.scene, self.camera );
        }

    };

    return self.public;
    
};