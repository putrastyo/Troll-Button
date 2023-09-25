function randButton(){
  let leftRand = Math.floor(Math.random()*350) // RIGHT MAX: 700
  let topRand = Math.floor(Math.random()*141) // TOP MAX: 140
  $('#iya').css('left', leftRand + 'px')
  $('#iya').css('top', topRand + 'px')
}

$('#iya').mousemove(randButton)
$('#iya').click(randButton)

$('#tidak').click(()=>{
  $('#dialog').css('display', 'block')
})