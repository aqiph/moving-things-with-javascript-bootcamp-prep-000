const app = "I don't do much."

var dodger = document.getElementById('dodger')

function moveDodgerRight(){
  let rightStr = dodger.style.right.replace('px', '');
  let right = parseInt(rightStr, 10);
  if (right > 0){
    dodger.style.right = `${right-1}px`;
  }
}

function moveDodgerLeft(){
  let leftStr = dodger.style.left.replace('px', '');
  let left = parseInt(leftStr, 10);
  if (left > 0){
    dodger.style.left = `${left-1}px`;
  }
}

document.addEventListener('keydown', (event)=>{
  if (event.which === 37){
    moveDodgerLeft()
  }
  else if (event.which === 39) {
    moveDodgerRight()
  }
})

