let cl = console.log;

const changeImg = document.getElementById('chnageImg');
// cl(changeImg)
const allImg = Array.from(document.querySelectorAll('.all'));

const onchangeIMGHandler = eve =>{
    let getimg = `.${eve.target.value}`;
    // cl(getimg);
    allImg.forEach(imgs =>{
        imgs.classList.add('d-none') 
    })
    let getselectedClass = Array.from(document.querySelectorAll(getimg));
    getselectedClass.forEach(imgs =>{
        imgs.classList.remove('d-none');
    })
}



changeImg.addEventListener('change', onchangeIMGHandler)