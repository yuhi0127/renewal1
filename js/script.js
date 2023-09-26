window.addEventListener('DOMContentLoaded',function(){
    const headerOn = document.querySelector("#main_header");
    const headerHeight = headerOn.offsetHeight;
    const gnb = document.querySelector("#main_header>.gnb");
    const gnbMain=document.querySelectorAll('#main_header>.gnb>ul>li>a');
    const subBg=gnb.nextElementSibling;
    const toggle = document.querySelector("#main_header>#toggle");
    const tnb = document.querySelector("#main_header>.tnb")
    const icons = document.querySelectorAll("#main_header>.tnb>ul>li");
    const joinbtn = icons[1];
    const closeJoin = document.querySelector("#join_form>.join_wrap>.close");
    const searchbtn = icons[2];
    const closeSearch = document.querySelector("#search_form>.close");
    const darkmode = document.querySelector("#main_header>.tnb>ul>.darkmode");
    const darkmodeIcon = document.querySelector("#main_header>.tnb>ul>.darkmode>a>div");

    const banner=document.querySelector("#main_visual");
    
    const promotionTarget = document.querySelector("#promotion>.wrap>.target");
    const promotionTargetList = promotionTarget.querySelectorAll(".content>.list>ul>li>a");//console.log(promotionTargetList.length);
    const promotionTargetImgWrap=promotionTarget.querySelector('.content>.vgaImg')

    const listBtn = document.querySelectorAll("#items>.item_list>ul>li>a");
    const itemBox = document.querySelectorAll("#items>.items_wrap>div");

    const support=document.querySelectorAll('#support>ul>li>a');//console.log(support)
    const footer=document.querySelector('#main_footer');

    const Side=document.querySelector('#side');//console.log(Side)
    const TopBottom=document.querySelector('#TopBottom');
    const Top=document.querySelector('#TopBottom>.ToTop');//console.log(Top)
    const Bottom=document.querySelector('#TopBottom>.ToBottom');//console.log(Bottom)
    const header=()=>{
        headerOn.classList.add("scrollUp");
        //console.log(headerHeight, window.scrollY);
        if(window.innerWidth<768){
            headerOn.style.position='fixed';
        };
        window.addEventListener('resize',function(){
            if(window.innerWidth<768){
                headerOn.style.position='fixed';
            }else{
                headerOn.style.position='absolute'
            };
        });
        
        window.addEventListener("scroll", function(){
            //console.log(headerHeight)
            if(window.innerWidth>767){
                if(headerHeight<window.scrollY){
                    headerOn.classList.remove("scrollUp");
                    headerOn.classList.add("scrollDown");
                }else{
                    headerOn.classList.remove("scrollDown");
                    headerOn.classList.add("scrollUp");
                };
            };
        });

        window.addEventListener('mousemove',function(evt){//console.log(evt.clientY)
            (headerHeight>evt.clientY)?(headerOn.classList.add('show')):(null);
        });

        headerOn.addEventListener('mouseleave',function(){
            headerOn.classList.remove('show');
        });
    };
    header();

    const gnbF=()=>{
        const classDefault=()=>{
            if(window.innerWidth>1023){//desktop
                gnb.classList.remove('mobile');
                gnb.classList.remove('tablet');
                toggle.style.display='none';
                gnb.style.display='block'
                gnbMain.forEach((main)=>{
                    main.nextElementSibling.style.height='0px';
                    main.href=main.nextElementSibling.querySelectorAll('li>a')[0].href;
                });
                for(let i=0;i<gnbMain.length;i++){
                    gnbMain[i].addEventListener('mouseenter',function(){
                        subBg.style.transition='all 0.8s'
                        subBg.style.height="300px";
                        gnbMain.forEach((main)=>{main.nextElementSibling.style.height='300px';});
                    });
                    gnbMain[i].nextElementSibling.addEventListener('mouseleave',function(){
                        subBg.style.height="0px";
                        gnbMain.forEach((main)=>{main.nextElementSibling.style.height='0px';});
                    })
                };
            }else if(window.innerWidth<768){//mobile
                gnb.classList.remove('desktop');
                gnb.classList.remove('tablet');
                toggle.style.display='flex';
                gnb.style.display='none'
                gnbMain.forEach((main)=>{main.nextElementSibling.style.height='unset';});
                
                for(let i=0;i<gnbMain.length;i++){
                    gnbMain[i].addEventListener('mouseenter',function(){
                        gnbMain.forEach((main)=>{main.nextElementSibling.style.height='unset';});
                    });
                    gnbMain[i].nextElementSibling.addEventListener('mouseleave',function(){
                        subBg.style.transition='all 0.8s'
                        subBg.style.height="0px";
                        gnbMain.forEach((main)=>{main.nextElementSibling.style.height='unset';});
                    })
                };
            }else{//tablet
                gnb.classList.remove('desktop');
                gnb.classList.remove('mobile');
                // gnb.classList.add('tablet');
                toggle.style.display='flex';
                gnb.style.display='none'
                gnbMain.forEach((main)=>{main.nextElementSibling.style.height='unset';});

                
            }; 
        };
        classDefault();
        let subState=false;
        const ClickInMobile=()=>{
            for(let i=0;i<gnbMain.length;i++){
                gnbMain[i].addEventListener('click',function(){
                    if(subState==false){
                        gnbMain.forEach((main)=>{
                            main.nextElementSibling.style.display='none';
                            main.style.setProperty('--linkAfter','#cc96aa')
                            main.style.setProperty('--fontColor','#fff')
                        });
                        gnbMain[i].nextElementSibling.style.display='block'
                        gnbMain[i].nextElementSibling.style.left='35%'
                        this.style.setProperty('--linkAfter','#fff');
                        this.style.setProperty('--fontColor','#fc0');
                        subState=true;
                        console.log(!subState)
                    }
                    else{
                        gnbMain.forEach((main)=>{
                            main.nextElementSibling.style.display='none';
                            main.style.setProperty('--linkAfter','#cc96aa')
                            main.style.setProperty('--fontColor','#fff')
                        });
                        gnbMain[i].nextElementSibling.style.left='-100%'
                        gnbMain[i].nextElementSibling.style.display='block'
                        subState=false;
                    }
                })
            }
            if(!gnb.classList.contains('mobile')){
                toggle.classList.add('on');
                gnb.classList.add('mobile');
                gnb.style.display = "block";
            }else{
                toggle.classList.remove('on');
                gnb.classList.remove('mobile');
                gnb.style.display = "none";
            };
        }
        
        const ClickInTablet=()=>{
            for(let i=0;i<gnbMain.length;i++){
                gnbMain[i].addEventListener('click',function(){
                    if(subState==false){
                        gnbMain.forEach((main)=>{
                            main.nextElementSibling.style.display='none';
                            main.style.setProperty('--linkAfter','#cc96aa')
                            main.style.setProperty('--fontColor','#fff')
                        });
                        gnbMain[i].nextElementSibling.style.display='block'
                        gnbMain[i].nextElementSibling.style.left='35%'
                        this.style.setProperty('--linkAfter','#fff');
                        this.style.setProperty('--fontColor','#fc0');
                        subState=true;
                    }
                    else{
                        gnbMain.forEach((main)=>{
                            main.nextElementSibling.style.display='none';
                            main.style.setProperty('--linkAfter','#cc96aa')
                            main.style.setProperty('--fontColor','#fff')
                        });
                        gnbMain[i].nextElementSibling.style.left='-100%'
                        gnbMain[i].nextElementSibling.style.display='block'
                        subState=false;
                    }
                })
            }
            if(!gnb.classList.contains('tablet')){
                toggle.classList.add('on');
                gnb.classList.add('tablet');
                gnb.style.display = "block";
                
                
            }else{
                toggle.classList.remove('on');
                gnb.classList.remove('tablet');
                gnb.style.display = "none";
            };
        }

        const toggleClick=()=>{
            toggle.addEventListener('click',function(){
                gnb.style.top=headerOn.offsetHeight+'px';
                if(window.innerWidth>1023){
                    null;
                }else{
                    if(window.innerWidth<1024 && window.innerWidth>767){
                        console.log('tablet')
                        ClickInTablet();
                    }else{
                        console.log('mobile')
                        ClickInMobile();
                    };
                };
            })
        };
        toggleClick();
        window.onresize=()=>{
            classDefault();
        }
        

    }
    gnbF();

    const tnbF=()=>{
        
        joinbtn.addEventListener("click", () => {
            if(document.getElementById("join_form").style.display=='block'){
                document.getElementById("join_form").style.display='none'
            }else{
                document.getElementById("join_form").style.display="block"
            }
        });

        closeJoin.addEventListener("click", function () {
            document.getElementById("join_form").style.display="none";
        });

        searchbtn.addEventListener("click", () => {
            if(document.getElementById("search_form").style.display=="block"){
                document.getElementById("search_form").style.display='none'
            }else{
                document.getElementById("search_form").style.display="block"
            };
        });
        
        closeSearch.addEventListener("click", function () {
            document.getElementById("search_form").style.display = "none";
        });

        document.querySelector('body,html').classList.add('light');
        darkmode.addEventListener("click", function (evt) {
            evt.preventDefault();
            if (darkmodeIcon.className=="moon") {
                darkmode.style.background = "linear-gradient(270deg,#f37135,#c5c1bc)";
                darkmodeIcon.classList.remove("moon");
                darkmodeIcon.classList.add("sun");
                document.querySelector('body,html').classList.remove('dark');
                document.querySelector('body,html').classList.add('light');
            } else {
                darkmode.style.background = "linear-gradient(90deg,#031033,#232264)";
                darkmodeIcon.classList.remove("sun");
                darkmodeIcon.classList.add("moon");
                document.querySelector('body,html').classList.remove('light');
                document.querySelector('body,html').classList.add('dark');
            };
        });
    };
    tnbF();

    const swiper = new Swiper(".swiper", {
        loop: true,
        speed: 800,
        autoplay: {delay: 4000,disableOnInteraction: false,},
        spacebetween: 0,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    const bannerMarginTop=()=>{
        banner.style.marginTop=headerOn.offsetHeight+"px";
        window.addEventListener('resize',function(){
            banner.style.marginTop=headerOn.offsetHeight+"px";
            //console.log(banner.style.marginTop);
        });
    };
    bannerMarginTop();

    const promotion=()=>{
        const ImgCreate=document.createElement('img');//console.log(ImgCreate)
        const ImgAppend=promotionTargetImgWrap.appendChild(ImgCreate);
        // console.log(promotionTargetImgWrap)
        const promotionTargetImg = promotionTargetImgWrap.querySelector("img");
        ImgAppend.src="img/promotion_Radeon6800_XT.png";
        for (let i = 0; i < promotionTargetList.length; i++) {
            promotionTargetList[i].parentElement.classList.add('glassmorphic');
            promotionTargetList[i].addEventListener("click", function (evt) {
                evt.preventDefault();
                const listHref = evt.currentTarget.getAttribute("href");
                //console.log(listHref)
                promotionTargetImg.src = listHref;
                //console.log(promotionTargetImg.src)
                // console.log(listHref)
                // console.log(promotionTargetImg.src);
                let listText = evt.currentTarget.innerText;
                //console.log(listText)
                promotionTargetImg.setAttribute('alt', listText)
            });
        }
    };
    promotion();

    const item=()=>{
        itemBox.forEach((box1) => {
            const h2Elm=document.createElement('h2');
            const divImg=box1.querySelector(".img");
            box1.insertBefore(h2Elm, divImg);
            box1.style.display = "none";
        });
        itemBox[0].style.display = "grid";
        itemBox[0].querySelector('h2').innerText=itemBox[0].querySelector('.img>img').alt;
        for (let i = 0; i < listBtn.length; i++) {
            listBtn[i].addEventListener("click", (evt) => {
                evt.preventDefault();
                itemBox.forEach((box2) => {box2.style.display = "none";});
                itemBox[i].style.display = "grid";
                itemBox[i].querySelector('h2').innerText=itemBox[i].querySelector('.img>img').alt;
            });
        };
    };
    item();

    support.forEach((sup)=>{sup.classList.add('glassmorphic');})

    const SideF=()=>{
        Side.addEventListener('click',function(){
            if(!Side.classList.contains('mobile')){
                Side.classList.add('mobile');
                tnb.classList.remove('mobile');
                TopBottom.classList.remove('mobile');
            }else{
                Side.classList.remove('mobile');
                tnb.classList.add('mobile');
                TopBottom.classList.add('mobile');
                // notDarkmode.forEach((notdark)=>{notdark.style.display='none'});
                
            }
        });
        
        Top.addEventListener('click',function(){
            window.scrollTo({
                top:0,
                behavior:'smooth'
            });
        });
        Bottom.addEventListener('click',function(){
            window.scrollTo({
                top:footer.offsetTop,
                behavior:'smooth'
            });
        });
    }
    SideF();
})