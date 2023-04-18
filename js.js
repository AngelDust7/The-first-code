// let WBGL = document.querySelector('#WBGL');
// let Rings = document.querySelector('#Rings');
// let NameOfRings = document.querySelector('#NameOfRings');
// window.onscroll = function () {
//   if (window.pageYOffset > 200) {
//     WBGL.classList.add('WBGL-fixed');
// 		Rings.classList.add('Rings-fixed');
// 		NameOfRings.classList.add('NameOfRings-fixed');
//   }
// 	else
// 	{
// 		WBGL.classList.remove('WBGL-fixed');
// 		Rings.classList.remove('Rings-fixed');
// 		NameOfRings.classList.remove('NameOfRings-fixed');
// 	}
// };

let channel = document.querySelector("#channel");
let ofshit = document.querySelector("#ofshit");
function dissapper() {
  if (channel.style.opacity == 1) {
    channel.style.opacity = 0;
  } else {
    channel.style.opacity = 1;
  }
}

function dissapper1() {
  if (ofshit.style.opacity == 1) {
    ofshit.style.opacity = 0;
  } else {
    ofshit.style.opacity = 1;
  }
}

setInterval(dissapper, 3000);
setInterval(dissapper1, 3000);
