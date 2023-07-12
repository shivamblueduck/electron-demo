const {electron} = require('electron')
// Importing the net Module from electron remote
const net = electron.remote.net;
 
let get = document.getElementById('get');
get.addEventListener('click', () => {
   console.log("hello")
});
 