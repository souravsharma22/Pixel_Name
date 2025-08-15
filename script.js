const element = document.getElementById('container')

const n = 365;

for(let i =0;i<n;i++){
    const box = document.createElement('div');
    box.classList.add('box');
    element.appendChild(box)

}



document.querySelectorAll('.box').forEach(box => {
  box.addEventListener('click', function () {
    if (box.style.background === 'rgb(57, 255, 20)') {
      
      box.style.background = '#424141';
    } else {
      
      box.style.background = '#39ff14';
    }
  });
});


