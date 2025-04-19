const init = () => {
    // console.log('loding...')


const hamburger = document.querySelector('.hamburger')
const sidebarcontainer = document.querySelector('.sidebar-container')
const sidebarClosebtn = document.querySelector('.close-button')

const openSidebar = () => {
    sidebarcontainer.classList.add('show-sidebar')
}
const closeSidebar = () => {
    sidebarcontainer.classList.remove('show-sidebar')
}

hamburger.addEventListener('click', openSidebar)
sidebarClosebtn.addEventListener('click', closeSidebar)
}
init()


function navRelated() {
    const navbarcontainer = document.querySelector('.nav-container')
    
    window.addEventListener('scroll', function(){
        const scrollNumer = window.scrollY
        const targetNumer = window.innerWidth >= 992 ? 70 : 50
        // console.log("sn::"+scrollNumer)
        // console.log("targetNumer::"+targetNumer)
        
        if(scrollNumer >= targetNumer) {
            navbarcontainer.classList.add('sticky-nav')
        }else{
            navbarcontainer.classList.remove('sticky-nav')
        }

    })

}
navRelated()