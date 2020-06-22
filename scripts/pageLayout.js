
function changePageLayout(e){

    // for selecting page layout
    let fullPageOverlay=document.getElementById('full-page-overlay')
    let bottomPageOverlay=document.getElementById('bottom-page-overlay')
    if(e.target.value=='Lines w/o Margin'){
        makeMargin()
        document.getElementById('margin-container').style.border='none';
        document.getElementById('date-container').style.borderRight='none';
        makeLines()
        fullPageOverlay.style.zIndex='-10'
        bottomPageOverlay.style.zIndex='10'
        document.getElementById('margin-container').innerText='';
        document.getElementById('top-container').innerText='';
        document.getElementById('date-container').innerText='';
        document.getElementById('page-container').innerText='';
        bottomPageOverlay.innerText='Lorem ipsum dolor sit amet consectetur adipisicing elit. In beatae libero alias iusto ratione quae. Ea animi architecto facilis perferendis, pariatur incidunt labore accusantium maiores natus nesciunt! Esse, laborum nihil.';
        fullPageOverlay.innerText=''

    }
    else if(e.target.value=='Plain'){
        removeMargin()
        removeLines()
        bottomPageOverlay.style.zIndex='-10'
        fullPageOverlay.style.zIndex='10'
        document.getElementById('margin-container').innerText='';
        document.getElementById('top-container').innerText='';
        document.getElementById('date-container').innerText='';
        document.getElementById('page-container').innerText='';
        bottomPageOverlay.innerText='';
        fullPageOverlay.innerText='Lorem ipsum dolor sit amet consectetur adipisicing elit. In beatae libero alias iusto ratione quae. Ea animi architecto facilis perferendis, pariatur incidunt labore accusantium maiores natus nesciunt! Esse, laborum nihil.'
    }
    else if(e.target.value=='Plain with Margin'){
        makeMargin()
        removeLines()
        document.getElementById('margin-container').innerText='';
        document.getElementById('top-container').innerText='';
        document.getElementById('date-container').innerText='';
        document.getElementById('page-container').innerText='Lorem ipsum dolor sit amet consectetur adipisicing elit. In beatae libero alias iusto ratione quae. Ea animi architecto facilis perferendis, pariatur incidunt labore accusantium maiores natus nesciunt! Esse, laborum nihil.';
        fullPageOverlay.style.zIndex='-10'
        bottomPageOverlay.style.zIndex='-10'
        
    }
    else if(e.target.value=='Lines with Margin'){
        makeMargin()
        makeLines()
        fullPageOverlay.style.zIndex='-10'
        bottomPageOverlay.style.zIndex='-10'
        document.getElementById('margin-container').innerText='';
        document.getElementById('top-container').innerText='';
        document.getElementById('date-container').innerText='';
        document.getElementById('page-container').innerText='Lorem ipsum dolor sit amet consectetur adipisicing elit. In beatae libero alias iusto ratione quae. Ea animi architecto facilis perferendis, pariatur incidunt labore accusantium maiores natus nesciunt! Esse, laborum nihil.';
        bottomPageOverlay.innerText='';
        fullPageOverlay.innerText=''

    }

    
}