let count = 0
const slider1 = document.getElementById('main3blok')

document.querySelector('#mainnextBut').addEventListener('click',function(){
    count = count + 900
    if(count === 6300){
        count = 0
    }
    slider1.style.left = -count + 'px'
})

document.querySelector('#mainprevBut').addEventListener('click',function(){
    count = count - 900
    if(count < 0){
        count = 6300
        return
    }
    slider1.style.left = -count + 'px'
})

let count1 = 0
const slider2 = document.getElementById('planProektIcons')

document.querySelector('#nextBut').addEventListener('click',function(){
    count1 = count1 + 880
    if(count1 === 3520){
        count1 = 0
    }
    slider2.style.left = -count1 + 'px'
})

document.querySelector('#prevBut').addEventListener('click',function(){
    count1 = count1 - 880
    if(count1 < 0){
        
        return
    }
    slider2.style.left = -count1 + 'px'
})
for(let i = 1;i<=10;i++){
    setTimeout(()=>{
console.log(i)
    },0)
}