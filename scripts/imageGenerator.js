function generateImage(){
    
    
    document.getElementById('photo-container').innerHTML=''

    let overlay=document.getElementById('overlay')
    overlay.style.zIndex=1000;
    overlay.style.background=`linear-gradient(${(Math.random()*4)*90}deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 0%, rgba(89,89,89,0.8078703703703703) 100%)`
    
    var node = document.getElementById('dumm');
  
    domtoimage.toPng(node)
        .then(function (dataUrl) {
            var img = new Image();
            img.src = dataUrl;
            document.getElementById('photo-container').style.background=""
            
           
            
             if(window.innerWidth<=420){
            document.getElementById('photo-container').style.background=`url('${dataUrl}')`
            document.getElementById('photo-container').style.backgroundSize='cover'
            }

        else if(window.innerWidth>420){

            let image=document.createElement('img')
            image.src=dataUrl
            image.draggable=true
            document.getElementById('photo-container').appendChild(image)
            image.id=''
           
        }
        
        imageCollection[noOfTimesClicked]=dataUrl
        
        let imagePlaceholder= document.createElement("div")
        document.getElementById('collection').appendChild(imagePlaceholder)
        imagePlaceholder.classList.add('image-placeholder')
        let addedImage=document.createElement('img')
        addedImage.src=dataUrl
        imagePlaceholder.appendChild(img)
        img.id='collection-image'
        img.classList.add('collection-image')

        prevContImage=document.querySelectorAll('.collection-image')
        if(window.innerWidth>420){
            prevContImage[0].style.marginLeft='-500px'
            prevContImage[noOfTimesClicked].style.height='50vh'
            prevContImage[noOfTimesClicked].style.width='200vh'

            prevContImage[noOfTimesClicked].style.marginLeft='-750px'
            prevContImage[noOfTimesClicked].style.marginLeft='-500px'
            prevContImage[noOfTimesClicked].style.marginRight='-500px'

        }
        
        if(noOfTimesClicked===0){
            document.getElementById('buttons2').style.opacity='100%'
        }
        noOfTimesClicked++;
            
        })
        .catch(function (error) {
            console.error('oops, something went wrong!', error);
        });
        setTimeout(()=>overlay.style.zIndex=-100)

        toggleSpiral()
     
    

}