const shareBtn = document.querySelector('#share-icon');
const modal = document.querySelector('#modal');

function showModal(){
modal.style.visibility = 'visible';
}

shareBtn.addEventListener('click', showModal);

window.addEventListener('click', e => {
    if(e.target != modal && e.target != shareBtn){modal.style.visibility = 'hidden'};
});
