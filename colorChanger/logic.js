const a= document.querySelector('#grey')
const b= document.querySelector('#white')
const c= document.querySelector('#blue')
const d= document.querySelector('#yellow')

a.addEventListener( "click",function(){
  document.body.style.backgroundColor = 'grey';
})
b.addEventListener( "click",function(){
  document.body.style.backgroundColor = 'white';
})
c.addEventListener( "click",function(){
  document.body.style.backgroundColor = 'blue';
})
d.addEventListener( "click",function(){
  document.body.style.backgroundColor = 'yellow';
})