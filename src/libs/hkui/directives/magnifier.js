export const magnifier =  {
  mounted(el) {
    console.log(el)
    const oImgWrap = el,
          elMagWrap = oImgWrap.querySelector('.mag-wrap'),
          elImgWrap = oImgWrap.querySelector('.img-wrap'),
          imgWidth = parseInt(window.getComputedStyle(elImgWrap, null)['width']),
          imgHeight = parseInt(window.getComputedStyle(elImgWrap, null)['height']),
          magWidth = parseInt(window.getComputedStyle(elMagWrap, null)['width']),
          magHeight = parseInt(window.getComputedStyle(elMagWrap, null)['height']),
          imgX = oImgWrap.offsetLeft,
          imgY = oImgWrap.offsetTop;
          console.log(imgWidth,imgHeight,magWidth,magHeight,imgX,imgY)
   const init = () => {
    bindEvent()
   }       
   function  bindEvent() {
    oImgWrap.addEventListener('mouseover', function(e) {
      elMagWrap.className += ' show'
      showMag(getXY(e).x,getXY(e).y)
      document.addEventListener('mousemove', handleMouseMove, false)
    }, false)
    oImgWrap.addEventListener('mouseout', handleMouseOut, false)
   }
   function handleMouseMove(e) {
    const {x,y,mouseX,mouseY} = getXY(e)
    showMag(x,y,mouseX,mouseY)
   }
   function handleMouseOut() {
    elMagWrap.className = 'mag-wrap'
    document.removeEventListener('mousemove',handleMouseMove, false)
   }
   function showMag(x,y,mouseX,mouseY) {
    // console.log(x,y,mouseX,mouseY)
    elMagWrap.style.left = x + 'px'
    elMagWrap.style.top = y + 'px'
    elImgWrap.style.left = -x + 'px'
     elImgWrap.style.top = -y + 'px'
     console.log('mouseX',mouseX)
    if(mouseX<0 || mouseY<0 || mouseX > imgWidth || mouseY > imgHeight) {
      elMagWrap.className = 'mag-wrap'
      document.removeEventListener('mousemove',handleMouseMove, false)
    }
   }
   function getXY(e) {
    //  console.log('pageX',e.pageX)
    //  console.log('pageY', e.pageY)
    return {
      x: e.pageX - imgX - magWidth/2,
      y: e.pageY - imgY -magHeight/2,
      mouseX: e.pageX - imgX,
      mouseY: e.pageY - imgY 
    }
   }

   init()
  }
 
}