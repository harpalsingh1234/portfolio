document.querySelector('.cross').Style.display='none';
document.querySelector('.cross').Style.display='none';
document.querySelector('.hamburger').addEventListener('click',()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.hamb').style.display='inline'
        document.querySelector('.cross').style.display='none'
    }
    else{
        document.querySelector('.hamb').style.display='none'
        setTimeout(()=>{
        document.querySelector('.cross').style.display='inline'
     },300);
   }
})

