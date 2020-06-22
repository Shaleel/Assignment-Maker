let mainContainer=document.getElementById('main-container')
let textArea=document.querySelector('textarea')

function changeFont(e){
    
     if(e.target.value=='Caveat'){
        changeStyle('Caveat','bold')
    }

    else if(e.target.value=='Sacramento'){
        changeStyle('Sacramento','bold')
    }

    else if(e.target.value=='Homemade Apple'){
        changeStyle('Homemade Apple','normal')
    }

    else if(e.target.value=='Dawning of a New Day'){
        changeStyle('Dawning of a New Day','bold')
    }

    else if(e.target.value=='Satisfy'){
        changeStyle('Satisfy','normal')
    }

    else if(e.target.value=='Bohemian'){
        changeStyle('Bohemian','normal')
    }

    else if(e.target.value=='Romantic'){
        changeStyle('Romantic','bold')
    }

    else if(e.target.value=='Khanela'){
        changeStyle('Khanela','bold')
    }

    else if(e.target.value=='Liberika'){
        changeStyle('Liberika','bold')
        mainContainer.style.letterSpacing=`2px`
        textArea.style.letterSpacing=`2px`
    }

}

function changeStyle(fontFamily,fontWeight){
        mainContainer.style.fontFamily=fontFamily;
        textArea.style.fontFamily=fontFamily
        mainContainer.style.fontWeight=fontWeight
        textArea.style.fontWeight=fontWeight
}

