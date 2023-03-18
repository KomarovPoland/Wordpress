//close mobile menu
document.querySelector(".mobile-close").addEventListener("click", () => {
    document.querySelector(".mobile-menu").style.cssText = `
    -webkit-transform: translateX(-85vw);
       -moz-transform: translateX(-85vw);
       -ms-transform: translateX(-85vw);
       -o-transform: translateX(-85vw); 
       transform: translateX(-85vw);`
    removeModalMenu()
})
//open mobile menu
document.querySelector(".mobile-switcher").addEventListener("click", () => {
    document.querySelector(".mobile-menu").style.cssText = `
       -webkit-transform: translateX(0);
       -moz-transform: translateX(0);
       -ms-transform: translateX(0);
       -o-transform: translateX(0); 
       transform: translateX(0); `
    addModalMenu()
})

//size of header
//sizeOfTopMenu()
document.addEventListener('DOMContentLoaded',()=>{
    sizeOfTopMenu()
})

window.onresize = () => {
    sizeOfTopMenu()
}


function sizeOfTopMenu() {
    const elem = document.querySelector(".header-box")
    const hHeader = elem.getBoundingClientRect().height
   // console.log('hHeader='+hHeader)
    let is_main_box = document.querySelector(".main-box")
    if (is_main_box) {
        is_main_box.style.cssText = `padding-top: ${hHeader}px;`
        //if(document.documentElement.clientWidth>768) {
            //is_main_box.style.cssText = `padding-top: 30px;`
        //}
    }
    const brHead = document.querySelector(".broker-head")
    if (brHead) {
        document.querySelector(".broker-head").style.cssText = `min-height: ${hHeader}px`
    }
}


function addModalMenu() {
    document.querySelector(".modal-black-menu").classList.remove("d-none")
    document.querySelector(".modal-black-menu").style.cssText = `z-index:0;`
    // document.querySelector(".head-block").classList.remove("bg-white")
    document.querySelector(".head-block").classList.add("bg-modal")
    document.querySelector(".head-block-start").classList.remove("bg-white")
    document.querySelector(".head-block-start").classList.add("bg-modal3")
}

function removeModalMenu() {
    document.querySelector(".modal-black-menu").classList.add("d-none")
    document.querySelector(".modal-black-menu").style.cssText = ``
    // document.querySelector(".head-block").classList.add("bg-white")
    document.querySelector(".head-block").classList.remove("bg-modal")
    document.querySelector(".head-block-start").classList.add("bg-white")
    document.querySelector(".head-block-start").classList.remove("bg-modal3")
}
////

let isBigImage55 = document.querySelector(".big-images")
if (isBigImage55) {
    isBigImage55.parentNode.style.cssText = 'min-width:100vw;'
}

let isAbout = document.querySelector("#about")
if (isAbout) {
    isAbout.children[0].classList.add('container')
}
let isServices = document.querySelector("#our_services")
if (isServices) {
    isServices.children[0].classList.add('container')
}
let isProperties = document.querySelector("#properties")
if (isProperties) {
    isProperties.children[0].classList.add('container')
}
let isNews = document.querySelector("#market_news")
if (isNews) {
    isNews.children[0].classList.add('container')
}
let newSizeOfScreen = document.documentElement.clientWidth
if (newSizeOfScreen > 768) {
    let isNewsBox = document.querySelector(".home-news-box")
    if (isNewsBox) {
        isNewsBox.children[0].classList.add('container')
    }
}
window.onresize = () => {
    newsBox()
}

function newsBox() {
    let newSizeOfScreen2 = document.documentElement.clientWidth
    if (newSizeOfScreen2 <= 768) {
        let isNewsBox2 = document.querySelector(".home-news-box")
        if (isNewsBox2) {
            isNewsBox2.children[0].classList.remove('container')
        }
    }
}


const mobMenClick = document.querySelector('.mobile-menu')
if (mobMenClick) {
    const arrMenus = mobMenClick.querySelectorAll('.menu-item')
    if (arrMenus) {
        arrMenus.forEach((val) => {
            val.addEventListener('click', () => {
                document.querySelector(".mobile-menu").style.cssText = `
    -webkit-transform: translateX(-85vw);
       -moz-transform: translateX(-85vw);
       -ms-transform: translateX(-85vw);
       -o-transform: translateX(-85vw);
       transform: translateX(-85vw);`
                removeModalMenu()
            })

        })
    }
}

// // delete mark on index page
function del_class() {
   url = new URL(window.location.href);
    const items2 = document.querySelectorAll('.current-menu-item ')
    for (let i = 0; i < items2.length; i++) {
        items2[i].classList.remove('current-menu-item')
    }

}


let newSizeOfScreen5 = document.documentElement.clientWidth
//if (newSizeOfScreen5 <= 768) {
    jQuery(document).ready(function ($) {
        del_class()

        let url6 = new URL(window.location.href);
        //console.log(url6)
        let gh=document.querySelectorAll(`a[href="${url6.href}"]`)
        gh.forEach((val2)=>{
            val2.classList.add('current-menu-item')
        })

        let path9 = url6.pathname
        let tarPath = path9
        if (path9 === '/investment-consulting/' || path9 === '/brokerage/' || path9 === '/commercial-lending/') {
            tarPath = '/#services'}
        if (path9 === '/properties/') {
            tarPath = '/#property_list'}
        let gh2=document.querySelectorAll(`a[href="${tarPath}"]`)
        gh2.forEach((val2)=>{
            val2.classList.add('current-menu-item')
        })

        let hash = url6.hash
        let gh3=document.querySelectorAll(`a[href="/${hash}"]`)
        gh3.forEach((val2)=>{
            val2.classList.add('current-menu-item')
        })





        let adresList = ['#about_us','#services','#news','#property_list']



        $(function () {
           if(url6.pathname==='/') {
               let hash0 = url6.hash
              // console.log("hash0" + hash0)
               if(hash0) {
                   hash0 = hash0.replace("#", '')
                   let target0 = document.getElementById(hash0)
                   target0 = $('[id=' + hash0 + ']');
                   if (target0.length) {
                       $('html,body').animate({
                           scrollTop: target0.offset().top - 70
                       }, 1000);
                   }
               }
           }
            $('a[href*=#]:not([href=#])').click(function () {


                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    var hash55 = this.hash
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        document.querySelector(".mobile-menu").style.cssText = `
    -webkit-transform: translateX(-85vw);
       -moz-transform: translateX(-85vw);
       -ms-transform: translateX(-85vw);
       -o-transform: translateX(-85vw);
       transform: translateX(-85vw);`
                        removeModalMenu()

                        $('html,body').animate({
                            scrollTop: target.offset().top - 70
                        }, 1000);

                        del_class()
                        let targMenu = document.querySelectorAll(`a[href="/${hash55}"]`)
                        if(targMenu){
                            targMenu[0].parentNode.querySelector('a').classList.add('current-menu-item')
                            targMenu[1].parentNode.querySelector('a').classList.add('current-menu-item')
                        }

                        return false;
                    }
                }


            });
        });


    })
//}


// document.addEventListener('DOMContentLoaded', () => {
//     var timeout = false;
//     window.onscroll = function () {
//         if (timeout !== false) {
//             clearTimeout(timeout);
//         }
//
//         timeout = setTimeout(function () {
//             window.scrollBy(0,-100)
//             console.log("end-of scroll")
//             timeout= false
//         }, 300);
//     };
// })


