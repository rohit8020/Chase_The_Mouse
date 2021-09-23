let items=document.querySelectorAll(".item")

items.forEach(item=>{
    item.addEventListener('mousemove', ()=>{
        item.style.backgroundColor=`rgb(${Math.random()*256},${Math.random()*256},${Math.random()*256})`
        setTimeout(()=>{item.style.backgroundColor="transparent"},400)
    })
})