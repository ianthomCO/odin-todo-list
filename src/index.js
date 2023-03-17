import './style/style.scss'

const sidebarBtn = document.querySelector('.sidebar');


let mobileMenuOpen = false;

sidebarBtn.addEventListener('click',()=>{
    mobileMenuOpen = !mobileMenuOpen;
    if(mobileMenuOpen){
        document.querySelector('nav').style.left = '0';
    } else {
        document.querySelector('nav').style.left = '-18rem';
    }
})