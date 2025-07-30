let tombol = document.getElementById('tombol');
let modal = document.querySelector('.modal');
let closeModal = document.querySelector('.close');

function tombolDiklik() {
  modal.style.display = 'block';
}
function tutupModal() {
  modal.style.display = 'none';
}

tombol.addEventListener('click', tombolDiklik);
closeModal.addEventListener('click', tutupModal);