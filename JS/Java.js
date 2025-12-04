console.log ("El script cargo");


document.getElementById('checkNativeSwitch').addEventListener('change', function() {
  document.body.classList.toggle('dark-mode', this.checked);
});
