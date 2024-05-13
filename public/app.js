const root = document.querySelectorAll('#root');
console.log("better");
function tick() {
  const element = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Jam sekarang"), new Date().toLocaleTimeString());
  ReactDOM.render(element, root);
}
tick();
setInterval(function () {
  tick();
}, 100);