let children
let items
const shuffle = (array) => { 
    return array.sort(() => Math.random() - 0.5);
}; 
let emptyIndex
let RandomArray
let ra
let emptyItem
let count=0
let item_e
function getIndex(params,item) {
    emptyIndex=params
    emptyItem=item
}
let arry=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
let arrry=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
const inter=setInterval(()=>{ 
    RandomArray=shuffle(arry)
    ra=shuffle(arrry)
    items=document.querySelectorAll(".game ul li")
    items2=document.querySelectorAll(".game1 ul li")
    items.forEach((item,index)=>{
        item.innerHTML=ra[index] 
        item.style.backgroundImage =`url(./images/${ra[index]}.png)`
        if (item.innerText==16){
            item.classList.add("empty")
            
            item.style.backgroundImage="none"
            getIndex(index,item)
        } else{
            item.classList.remove("empty")
        }
    })
    items2.forEach((item,index)=>{
        item.innerHTML=RandomArray[index] 
        item.style.backgroundImage =`url(./images/${RandomArray[index]}.png)`
        if (item.innerText==16){
            item.classList.add("empty")
            
            item.style.backgroundImage="none"
            
        } else{
            item.classList.remove("empty")
        }
    })
    children=document.querySelector("ul").children
},100)
function game_status(array){
    for (let i=0; i<array.length; i++){
       const dd =array[i].innerText 
       const array2=[dd]
       for (let j=0; j<array.length; j++){
           
       }
    }
}
setTimeout(()=>{
    clearInterval(inter)
     items.forEach((item,index,array)=>{
        item.addEventListener("click",(e)=>{
            e.preventDefault();    
            move(e)

            slide_move(e)
            game_status(array)
        })
        let touchArea = item
    //Initial mouse X and Y positions are 0
            let mouseX,
            initialX = 0;
            let mouseY,
            initialY = 0;
            let isSwiped;
            //Events for touch and mouse
            let events = {
            mouse: {
                down: "mousedown",
                move: "mousemove",
                up: "mouseup",
            },
            touch: {
                down: "touchstart",
                move: "touchmove",
                up: "touchend",
            },
            };
            let deviceType = "";
            //Detect touch device
            const isTouchDevice = () => {
                try {
                    //We try to create TouchEvent (it would fail for desktops and throw error)
                    document.createEvent("TouchEvent");
                    deviceType = "touch";
                    return true;
                } catch (e) {
                    deviceType = "mouse";
                    return false;
                }
            };
            //Get left and top of touchArea
            let rectLeft = touchArea.getBoundingClientRect().left;
            let rectTop = touchArea.getBoundingClientRect().top;
            //Get Exact X and Y position of mouse/touch
            const getXY = (e) => {
            mouseX = (!isTouchDevice() ? e.pageX : e.touches[0].pageX) - rectLeft;
            mouseY = (!isTouchDevice() ? e.pageY : e.touches[0].pageY) - rectTop;
            };
            isTouchDevice();
            //Start Swipe
            touchArea.addEventListener(events[deviceType].down, (event) => {
                isSwiped = true;
                //Get X and Y Position
                getXY(event);
                initialX = mouseX;
                initialY = mouseY;
            });
        //Mousemove / touchmove
        touchArea.addEventListener(events[deviceType].move, (event) => {
            if (!isTouchDevice()) {
                event.preventDefault();
            }
            if (isSwiped) {
                getXY(event);
                let diffX = mouseX - initialX;
                let diffY = mouseY - initialY;
                let keystuff
                // if (Math.abs(diffY) > Math.abs(diffX)) {
                //     // keystuff = diffY > 0 ? "ArrowDown" : "ArrowUp";
                //     move(event)

                // } else {
                //     keystuff = diffX > 0 ? "ArrowRight" : "ArrowLeft";
                // }
                move(event)
            }
        });
        //Stop Drawing
        touchArea.addEventListener(events[deviceType].up, () => {
        isSwiped = false;
        });
        touchArea.addEventListener("mouseleave", () => {
        isSwiped = false;
        });
        window.onload = () => {
        isSwiped = false;
        };
    }) 
},3000)
function move(e){
    var firstPos=parseInt(e.target.dataset.pos)
    var empty=emptyItem
    var secondPos=parseInt(empty.dataset.pos)
    let top=secondPos-4,left=secondPos-1,right=secondPos+1,bottom=secondPos+4
    if (secondPos%4-left%4<1){
        left=-1
    }
    if(right%4-secondPos%4<1){
        right=-1
    }
    var possibilites=[left,right,top,bottom]
    if(possibilites.includes(firstPos)){
        empty.dataset.pos=firstPos
        e.target.dataset.pos=secondPos
        // count++
        document.querySelector("h3 span").innerHTML=count
        document.querySelector(".h3").innerHTML=count
    }
    else{
        e.target.classList.add("shake")
        setTimeout(()=>{
            e.target.classList.remove("shake")
        },400)
    }
}

function slide_move(e){
    

}