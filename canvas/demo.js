
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
ctx.fillStyle = "#00e600";
ctx.fillRect(100,100,200,200);
ctx.beginPath();
ctx.moveTo(200,100);
ctx.lineTo(200,300);
ctx.strokeStyle = "#ffffff";
ctx.arc(200,200,100,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(100,200);
ctx.lineTo(300,200);
ctx.strokeStyle = "#ffffff";
ctx.stroke();
// //Đường thẳng
// let c = document.getElementById("myCanvas");
// let ctx = c.getContext("2d");
// ctx.moveTo(0,0);
// ctx.lineTo(200,100);
// ctx.stroke();


// // Hìnhtròn
// let  c = document.getElementById("myCanvas1");
// let  ctx = c.getContext("2d");
// ctx.beginPath();
// ctx.arc(200,200,100,0,2*Math.PI);
// ctx.stroke();

// // Vẽ chữ
// let  c = document.getElementById("myCanvas2");
// let  ctx = c.getContext("2d");
// ctx.font = "30px Arial";
// ctx.fillText("Hello World",10,50);

// let  c = document.getElementById("myCanvas3");
// let  ctx = c.getContext("2d");
// ctx.font = "30px Arial";
// ctx.strokeText("Hello World",10,50);

// // Hiệu ứng Gradient 
// let  c = document.getElementById("myCanvas4");
// let  ctx = c.getContext("2d");

// // Create gradient
// let  grd = ctx.createLinearGradient(0,0,200,0);
// grd.addColorStop(0,"red");
// grd.addColorStop(1,"white");

// // Fill with gradient
// ctx.fillStyle = grd;
// ctx.fillRect(10,10,150,80);

// // Gradient Radial 
// let  c = document.getElementById("myCanvas5");
// let  ctx = c.getContext("2d");

// // Create gradient
// let  grd = ctx.createRadialGradient(75,50,5,90,60,100);
// grd.addColorStop(0,"red");
// grd.addColorStop(1,"white");

// // Fill with gradient
// ctx.fillStyle = grd;
// ctx.fillRect(10,10,150,80);


