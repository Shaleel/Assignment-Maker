function drawSpiral(){
    if(spiral.checked===true){
            leftSpiral()
    
    }
    else{
        clearSpiral()
    }
    
}
function leftSpiral(){
    document.getElementById('spiral-image-left').style.backgroundImage="url('spiral left.png')"
    document.getElementById('margin-container').style.width='8.9%'
    document.getElementById('margin-container').style.left='6%'

    document.getElementById('bottom-page-overlay').style.width='91%'
    document.getElementById('bottom-page-overlay').style.left='9%'

    document.getElementById('full-page-overlay').style.width='91%'
    document.getElementById('full-page-overlay').style.left='9%'

    
    document.getElementById('page-container').style.left='6%'
}

function rightSpiral(){
            document.getElementById('spiral-image-right').style.backgroundImage="url('spiral right.png')"
            document.getElementById('page-container').style.width='77%'
            document.getElementById('spiral-image-left').style.backgroundImage=""
            document.getElementById('margin-container').style.width='15%'
            document.getElementById('margin-container').style.left=''
            document.getElementById('page-container').style.left='0'

            document.getElementById('bottom-page-overlay').style.width='100%'
            document.getElementById('bottom-page-overlay').style.left='0%'

            document.getElementById('full-page-overlay').style.width='100%'
            document.getElementById('full-page-overlay').style.left='0%'
}
function clearSpiral(){
    document.getElementById('spiral-image-left').style.backgroundImage=""
    document.getElementById('spiral-image-right').style.backgroundImage=""
    document.getElementById('bottom-page-overlay').style.width='100%'
            document.getElementById('bottom-page-overlay').style.left='0%'

            document.getElementById('full-page-overlay').style.width='100%'
            document.getElementById('full-page-overlay').style.left='0%'

            document.getElementById('page-container').style.width='85%'
            document.getElementById('margin-container').style.width='15%'
            document.getElementById('margin-container').style.left=''
            document.getElementById('page-container').style.left=''

}

function toggleSpiral(){
    if(spiral.checked===true&&spiralToggle===0){
        clearSpiral()
        leftSpiral()
        spiralToggle=1
    }
    else if(spiral.checked===true&&spiralToggle===1){
        clearSpiral()
        rightSpiral()
        spiralToggle=0
    }
}
