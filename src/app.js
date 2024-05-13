const root =document.querySelectorAll('#root');

console.log("better");
function tick() {
  const element = (
    <div>
      <h1>Jam sekarang</h1>
      {new Date().toLocaleTimeString()}
    </div>
  );

  ReactDOM.render(element, root);
}

tick();

setInterval(function () {
  tick();
}, 100);