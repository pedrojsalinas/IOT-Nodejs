const http = require('http');
var gpio = require('rpi-gpio')
var gpiop = gpio.promise;

const hostname = '127.0.0.1';
const port = 3000;


const server = http.createServer((req, res)=>{
  res.statusCode  =200;
  res.setHeader('Content-Type', 'text-plain');
  res.end('Hola Mundo!\n');
});

server.listen(port, hostname, ()=>{
  console.log(`Server running at http://${hostname}:${port}/`);
})

function encenderLed() {
  gpiop.setup(13, gpio.DIR_OUT)
      .then(() => {
          return gpiop.write(13, true)
      })
      .catch((err) => {
          console.log('Error: ', err.toString())
      })
}
