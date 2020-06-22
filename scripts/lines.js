function makeLines(){
    for (let i=0;i<23;i++){
        document.getElementById(`${i}`).style.border='solid rgb(168, 168, 168) 1px'
    }
    
}

function removeLines(){
    for (let i=0;i<23;i++){
        document.getElementById(`${i}`).style.border='none'
    }
}
