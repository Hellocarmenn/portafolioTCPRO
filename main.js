let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Desarrollo sitios web y hago proyectos de UI/UX')
  .pauseFor(200)
  .deleteChars(10)
  .start();
