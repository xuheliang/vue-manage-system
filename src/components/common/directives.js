import Vue from 'vue';
Vue.directive('dialogDrag',{
  bind(el,bind,vnode,oldVnode) {
    const dialogHeaderE1 = el.querySelector('.el-dialog__header')
    const dragDom = el.querySelector('.el-dialog')
    dialogHeaderE1.style.cssText += ';cursor;move'
    dragDom.style.cssText += ';top;0px'
    const sty =(()=> {
      if(window.document.currentStyle){
        return (dom,attr) => dom.currentStyle[attr]
      }else{
        return (dom,attr) => getComputedStyle(dom,false)[attr]
      }
    })()

    dialogHeaderE1.onmousedown = (e)=>{
      const disX = e.clientX - dialogHeaderE1.offsetLeft
      const disY = e.clientY - dialogHeaderE1.offsetTop

      const screenWidth = document.body.clientWidth
      const screenHeight = document.documentElement.clientHeight

      const dragDomWidth = dragDom.offsetWidth
      const dragDomHeight = dragDom.offsetHeight

      const minDragDomLeft = dragDom.offsetLeft
      const maxDragDomLeft = screenWidth - dragDom.offsetLeft - dragDomWidth

      const minDragDomTop = dragDom.offsetTop
      const maxDragDomTop = screenHeight - dragDom.offsetTop - dragDomHeight


      let styL = sty(dragDom,'left')
      let styT = sty(dragDom,'top')

      if(styL.includes('%')) {
        styL = +document.body.clientWidth * (+styL.replace(/\px/g,'')/100)
        styT = +document.body.clientHeight * (+styT.replace(/\px/g,'')/100)
      }else{
        styL = +styL.replace(/\px/g,'')
        styT = +styT.replace(/\px/g,'')
      }

      document.onmousemove = function(e){
        let left = e.clientX - disX
        let top = e.clientY - disY
        console.log(maxDragDomLeft)
        if(-(left) > minDragDomLeft) {
          left = -(minDragDomLeft)
        }else if(left > maxDragDomLeft){
          left = maxDragDomLeft
        }

        if(-(top) > minDragDomTop){
          top = -(minDragDomTop)
        }else if(top>maxDragDomTop){
          top = maxDragDomTop
        }

        dragDom.style.cssText += `;left:${left + styL}px;top:${top + styT}px;`
      }

      document.onmouseup = function(e){
        document.onmousemove = null
        document.onmouseup = null
      }
    }
  }
})