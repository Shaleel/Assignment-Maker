function pdfDownloader(){
    alert("Please Wait while your pdf is being processed....")
    let doc=new jsPDF()
    for(var i=0;i<imageCollection.length;i++){
        let imgpdf= new Image()
        imgpdf.src=imageCollection[i]
        let width = doc.internal.pageSize.getWidth();
        let height = doc.internal.pageSize.getHeight(); 
        if(window.innerWidth>420){
        doc.addImage(`${imageCollection[i]}`,'PNG',-395,5,1000,height)
        }
        else {
            doc.addImage(`${imageCollection[i]}`,'PNG',0,0,width,height)
        }

        if(i<imageCollection.length-1){
            doc.addPage()
        }
    }
    doc.save('assignment.pdf')
    
}