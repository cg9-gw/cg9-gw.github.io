const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
const renderer = new THREE.WebGLRenderer({ antialias: true})
renderer.setSize( window.innerWidth, window.innerHeight )
document.body.appendChild( renderer.domElement )
var geometry = new THREE.BoxGeometry( 1, 1, 1)
var material = new THREE.MeshStandardMaterial( { color: 0xff0051 })
var cube = new THREE.Mesh ( geometry, material )
scene.add( cube )
renderer.render( scene, camera )
camera.position.set(0,0,8)
var ambientLight = new THREE.AmbientLight ( 0xffffff, 0.5)
scene.add( ambientLight )
var pointLight = new THREE.PointLight( 0xffffff, 1 );
pointLight.position.set( 25, 5, 15 );
scene.add( pointLight );
var g2 = new THREE.TorusGeometry(3,0.5,16,100)
var m2 = new THREE.MeshStandardMaterial({ color: 0xd500bb})
var torus = new THREE.Mesh( g2, m2)
scene.add(torus)



function animate() {
    requestAnimationFrame( animate )
    cube.rotation.x += 0.005;
    cube.rotation.y += 0.005;
    torus.rotation.y -= 0.008;
    torus.rotation.x+=0.005;
    renderer.render( scene, camera )
}
animate()