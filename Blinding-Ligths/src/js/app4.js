import { OrbitControls } from '../three.js/examples/jsm/controls/OrbitControls.js';
import { OBJLoader } from '../three.js/examples/jsm/loaders/OBJLoader.js';
import { EffectComposer } from '../three.js/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from '../three.js/examples/jsm/postprocessing/RenderPass.js';
import { GlitchPass } from '../three.js/examples/jsm/postprocessing/GlitchPass.js';
import { ShaderPass } from '../three.js/examples/jsm/postprocessing/ShaderPass.js';
import { UnrealBloomPass } from '../three.js/examples/jsm/postprocessing/UnrealBloomPass.js';
import { FilmPass } from '../three.js/examples/jsm/postprocessing/FilmPass.js';


//VERTEX E FRAGMENTS

const vertex = `
	varying vec3 v_position;
	varying vec2 v_uv;
	uniform float u_progress;
	uniform float u_direction;
	uniform float u_time;

	void main() {
		vec3 pos = position;
		v_uv = uv;
		float distCenter = length(uv - vec2(0.5));
		float center = length(vec2(0.5));
		float distortion = distCenter - center;
		float animation = -distortion * 1.4;
		pos.z = animation;


		gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
	}
`
const fragment = `
	varying vec3 v_position;
	varying vec2 v_uv;
	uniform float u_time;
	uniform sampler2D u_texture;
	uniform sampler2D u_texture2;
  	uniform float u_progress;

	void main() {
		vec4 color = texture2D(u_texture2, v_uv);
		gl_FragColor = color;
	}
`

//=================================================================


const vertex2 = `
	varying vec3 v_position;
	varying vec2 v_uv;
	uniform float u_progress;
	uniform float u_direction;
	uniform float u_time;

	void main() {
		vec3 pos = position;
		v_uv = uv;
		float distCenter = length(uv - vec2(0.5));
		float center = length(vec2(0.5));
		float distortion = distCenter - center;
		float animation = -distortion * 0.15;
		pos.z = animation;


		gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
	}
`
const fragment2 = `
	varying vec3 v_position;
	varying vec2 v_uv;
	uniform float u_time;
	uniform sampler2D u_texture;
	uniform sampler2D u_texture2;
  	uniform float u_progress;

	void main() {
		vec4 color = texture2D(u_texture, v_uv);
		gl_FragColor = color;
	}
`

//=================================================================

const vertex3 = `
	varying vec2 v_uv;

	void main() {

		gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
	}
`
const fragment3 = `
	varying vec2 v_uv;
	uniform sampler2D tDiffuse;

	void main() {
		vec3 bg = texture2D(tDiffuse, v_uv).rgb;
		vec3 color = vec3(length(bg));
		gl_FragColor = vec4(color, 1.0);
	}
`

//=================================================================


const vertexVideo = `
	varying vec3 v_position;
	varying vec2 v_uv;
	uniform float u_progress;
	uniform float u_direction;
	uniform float u_time;

	void main() {
		vec3 pos = position;
		v_uv = uv;
		float distCenter = length(uv - vec2(0.5));
		float center = length(vec2(0.5));
		float distortion = distCenter - center;
		float animation = -distortion * 1.4;
		pos.z = animation;


		gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
	}
`
const fragmentVideo = `
	varying vec3 v_position;
	varying vec2 v_uv;
	uniform float u_time;
	uniform sampler2D u_texture;
	uniform sampler2D u_texture2;
	uniform sampler2D u_texture_video;
  	uniform float u_progress;

	void main() {
		vec4 color = vec4(0.0,0.0,0.8,1.0);
		vec4 video = texture2D(u_texture_video, v_uv);
		gl_FragColor = video;
	}
`

//=================================================================


const vertexBase = `
	varying vec3 v_position;
	varying vec2 v_uv;
	uniform float u_progress;
	uniform float u_direction;
	uniform float u_time;

	void main() {
		vec3 pos = position;
		v_uv = uv;
		float distCenter = length(uv - vec2(0.5));
		float center = length(vec2(0.5));
		float distortion = distCenter - center;
		float animation = -distortion * 1.4;
		pos.z = animation;


		gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
	}
`
const fragmentBase = `
	varying vec3 v_position;
	varying vec2 v_uv;
	uniform float u_time;
	uniform sampler2D u_texture;
	uniform sampler2D u_texture2;
	uniform sampler2D u_texture_video;
  	uniform float u_progress;

	void main() {
		vec4 color = vec4(0.0,0.0,0.8,1.0);
		//vec4 video = texture2D(u_texture_video, v_uv);
		gl_FragColor = color;
	}
`


//=================================================================




//CENA E RENDER

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const light = new THREE.AmbientLight( 0xffffff, 0.3);
scene.add(light);

camera.position.z = 4.7;

//CONTROLES
//const controls = new OrbitControls(camera, renderer.domElement);




//PLANE BASE
var geometryBase = new THREE.PlaneBufferGeometry(8.7, 5.3, 100,100);
const materialBase = new THREE.MeshBasicMaterial();

const uniformsBase = {
	u_time: {value: 0},
	u_mouse: {value: {x:0, y:0}},
	u_progress: {value: 0}
};

const shaderMaterialBase = new THREE.ShaderMaterial( {
	uniforms: uniformsBase,
	vertexShader: vertexBase,
  	fragmentShader: fragmentBase,
  	//wireframe: true
} );


var planeBase = new THREE.Mesh( geometryBase, shaderMaterialBase );
scene.add(planeBase);
planeBase.position.z = -0.8;
planeBase.position.y = -5.4;


//PLANE VIDEO
var geometryVideo = new THREE.PlaneBufferGeometry(8.7, 5.3, 100,100);
const materialVideo = new THREE.MeshBasicMaterial();

const videoBro = document.getElementById('videobro');


const uniformsVideo = {
	u_time: {value: 0},
	u_mouse: {value: {x:0, y:0}},
	u_progress: {value: 0},
	u_texture_video: {value: new THREE.VideoTexture(videoBro)}
};

const shaderMaterialVideo = new THREE.ShaderMaterial( {
	uniforms: uniformsVideo,
	vertexShader: vertexVideo,
	  fragmentShader: fragmentVideo,
	  transparent: true
  	//wireframe: true
} );


var planeVideo = new THREE.Mesh( geometryVideo, shaderMaterialVideo );
scene.add(planeVideo);
planeVideo.position.z = -0.8;
planeVideo.position.y = -5.4;





//PLANE 1
var geometry = new THREE.PlaneBufferGeometry(7.5, 5, 100,100);
const material = new THREE.MeshBasicMaterial();


const uniforms = {
	u_time: {value: 0},
	u_mouse: {value: {x:0, y:0}},
	u_progress: {value: 0},
	u_texture: {value: new THREE.TextureLoader().load('./assets/play.png')},
	u_texture2: {value: new THREE.TextureLoader().load('./assets/weekn-bg-title.png')}
};

const shaderMaterial = new THREE.ShaderMaterial( {
	uniforms: uniforms,
	vertexShader: vertex,
	  fragmentShader: fragment,
	  transparent: false
  	//wireframe: true
} );


var plane = new THREE.Mesh( geometry, shaderMaterial );
scene.add(plane);





//PLANE 2
var geometry2 = new THREE.PlaneBufferGeometry(1.5, 3.8, 100,100);

const uniforms2 = {
	u_texture: {value: new THREE.TextureLoader().load('./assets/play.png')}
};
const shaderMaterial2 = new THREE.ShaderMaterial( {
	uniforms: uniforms2,
	vertexShader: vertex2,
	fragmentShader: fragment2,
	transparent: true,
	//wireframe: true
} );
var plane2 = new THREE.Mesh( geometry2, shaderMaterial2 );
scene.add(plane2);
plane2.position.z = 0.4;
plane2.position.x = -2.58;


//EVENTOS DO MOUSE
/*let mouseX = 0;
let mouseY = 0;
const windowHalfX = window.innerWidth / 2;
const windowHalfY = window.innerHeight / 2;

document.addEventListener('mousemove', (e)=> {
	mouseX = e.clientX - windowHalfX;
	mouseY = e.clientY - windowHalfY;
});

function render() {
	camera.position.x += (mouseX - camera.position.x) * 0.00000100;
	camera.position.y += (-mouseY - camera.position.y) * 0.00000100;
};*/



//EVENTOS DE SCROLL
let speed = 0;
document.addEventListener('wheel', (event)=>{
	console.log(event);
	speed += event.deltaY*0.0009;
	//gsap.to('.tip', {opacity: 0.5, duration: 2, delay: 1.5});
});


function raf(){
	plane.position.y += speed;
	//plane.rotation.x += (-speed)*0.01;
	//plane.position.z += speed*0.09;

	planeVideo.position.y += speed;
	//planeBase.rotation.x += (-speed)*0.01;
	//planeBase.position.z += speed*0.09;

	planeBase.position.y += speed;

	speed *= 0.9;
	window.requestAnimationFrame(raf);
};
raf();


//BOTAO PLAY
const play = document.querySelector('.play');
play.addEventListener('click', ()=>{
	//gsap.to('.play-frame', {left: '0', duration: 2, ease: Power1.easeInOut});
	videoBro.play();
	planeBase.material.transparent = false;
	//gsap.to('.tip', {opacity: 0, duration: 0.5});
});


const clock = new THREE.Clock();

//COMPOSER EFFECTS
const composer = new EffectComposer(renderer);

const renderPass = new RenderPass( scene, camera );
renderPass.renderToScreen = true;
composer.addPass( renderPass );

//FILMPASS
var filmPass = new FilmPass(
    0.5,   // noise intensity
    0.400,  // scanline intensity
    300,    // scanline count
    false,  // grayscale
);
filmPass.renderToScreen = true;
composer.addPass(filmPass);

//GLITCHPASS
var glitchPass = new GlitchPass();

function callGlitch(){
	composer.addPass(glitchPass);
};
function removeGlitch(){
	composer.removePass(glitchPass);
};




//ANIMATE
function animate() {
	requestAnimationFrame( animate );
	uniforms.u_time.value = clock.getElapsedTime();
	//renderer.render(scene, camera);
	composer.render();
}
animate();