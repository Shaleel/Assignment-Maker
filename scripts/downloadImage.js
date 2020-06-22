function downloadImage(){
    let overlay=document.getElementById('overlay')
    overlay.style.zIndex=1000;
    overlay.style.background=`linear-gradient(${(Math.random()*4)*90}deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 0%, rgba(89,89,89,0.8078703703703703) 100%)`
    document.getElementById('photo-container').classList.add('photo-container')
    var node = document.getElementById('dumm');
  
    domtoimage.toPng(node)
    .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'page.png';
        link.href = dataUrl;
        link.click();
    });
        setTimeout(()=>overlay.style.zIndex=-100)

}

function downloadImages(){
    for(let i=0;i<imageCollection.length;i++){
        var link = document.createElement('a');
        link.download = `page${i+1}.png`;
        link.href = imageCollection[i];
        link.click();
    }
}