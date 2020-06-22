

// // This code by default creates lines on the page we created in html
let lines=document.querySelector('#lines')
        
        for(var i=0;i<23;i++){
            let created_line=document.createElement("div")
            lines.append(created_line)
            created_line.classList.add("page-line")
            created_line.id=`${i}`
        }

let pageSelect= document.getElementById('page-select')

pageSelect.addEventListener('change',changePageLayout)

let spiral=document.getElementById('spiral')
let noOfTimesClicked=0
let spiralToggle=0

let imageCollection=[]

spiral.addEventListener('click',drawSpiral)

let font=document.getElementById('font-select')
font.addEventListener('change',changeFont)



let imageGenerator=document.getElementById('image-generator')


imageGenerator.addEventListener('click',generateImage)



let download=document.getElementById('download')

download.addEventListener('click',downloadImage)


let downloadAllImages = document.getElementById('download-images')

downloadAllImages.addEventListener('click',downloadImages)


   
let downloadPDF=document.getElementById('download-pdf')

downloadPDF.addEventListener('click',pdfDownloader)

