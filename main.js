var tabsName = document.querySelector('.tabs')
var tabs = document.querySelectorAll('.tab')
var texttabs = document.querySelectorAll('.textTab')
var line = document.querySelector('.line')
var def = document.querySelector('.tab.active')
line.style.left = def.offsetLeft + 'px'
line.style.width = def.offsetWidth + 'px'
tabs.forEach((tab, index) => {
    tab.onclick = (e) =>{
        document.querySelector('.tab.active').classList.remove('active')
        document.querySelector('.textTab.active').classList.remove('active')
        e.target.closest('.tab').classList.add('active')
        texttabs[index].classList.add('active')
        line.style.left = e.target.closest('.tab').offsetLeft + 'px'
        line.style.width = e.target.closest('.tab').offsetWidth + 'px'
    }
})