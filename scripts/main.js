

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

let ink=document.getElementById('ink')
ink.value='#334fff'
document.getElementById('main-container').style.color=ink.value;
document.querySelector('textarea').style.color=ink.value;

ink.addEventListener('change',changeInk)

function changeInk(e)
{
    document.getElementById('main-container').style.color=e.target.value;
    document.querySelector('textarea').style.color=e.target.value;
}
let imageGenerator=document.getElementById('image-generator')


imageGenerator.addEventListener('click',generateImage)



let download=document.getElementById('download')

download.addEventListener('click',downloadImage)


let downloadAllImages = document.getElementById('download-images')

downloadAllImages.addEventListener('click',downloadImages)


   
let downloadPDF=document.getElementById('download-pdf')

downloadPDF.addEventListener('click',pdfDownloader)

