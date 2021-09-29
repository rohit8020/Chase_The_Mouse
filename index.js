let container=document.querySelector(".container")

const num_of_div=5000

for(let i=0;i<num_of_div;i++){
    let div=document.createElement("div")
    container.appendChild(div)
}



container.childNodes.forEach(item=>{
    item.addEventListener('mousemove', ()=>{
        item.style.backgroundColor=`rgb(${Math.random()*256},${Math.random()*256},${Math.random()*256})`
        setTimeout(()=>{item.style.backgroundColor="transparent"},400)
    })
})