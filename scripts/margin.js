function makeMargin(){
    document.getElementById('margin-container').style.border='solid hotpink 2px';
    document.getElementById('date-container').style.border='solid hotpink 2px';
    document.getElementById('top-container').style.border='solid hotpink 2px';
    document.getElementById('page-container').style.border='solid hotpink 2px';


        document.getElementById('margin-container').style.borderLeft='none';
        document.getElementById('margin-container').style.borderTop='none';
        document.getElementById('margin-container').style.borderBottom='none';
        document.getElementById('date-container').style.borderTop='none';
        document.getElementById('date-container').style.borderLeft='none';
        document.getElementById('top-container').style.borderLeft='none';
        document.getElementById('top-container').style.borderTop='none';
        document.getElementById('top-container').style.borderRight='none';
        document.getElementById('page-container').style.border='none';
}

function removeMargin(){
    
    document.getElementById('margin-container').style.border='none';
    document.getElementById('date-container').style.border='none';
    document.getElementById('top-container').style.border='none';
    document.getElementById('page-container').style.border='none';
}