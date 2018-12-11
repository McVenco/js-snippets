// open modal on window load
window.onload = function(){

    const modal = document.getElementById('modal');
    const clickToDismiss = document.querySelectorAll('[data-dismiss="modal"]');

    // show modal
    modal.style.display = 'block';
    
    // hide modal when (one of the) close button(s) is clicked
    [...clickToDismiss].forEach(e => e.addEventListener('click', function(){
        modal.style.display = 'none';
    }));
}