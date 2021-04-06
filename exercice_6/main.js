function imageSwap(image) {
  document.getElementById(image).src = 'images/' + image + '_2.jpg'
}

function imageRevert(image) {
  document.getElementById(image).src = 'images/' + image + '.jpg'
}
