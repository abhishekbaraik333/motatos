
  document.addEventListener("DOMContentLoaded", () => {    
    const faqItems = document.querySelectorAll(".faq-item");
  
    faqItems.forEach((item) => {
      const question = item.querySelector(".faq-question");
  
      question.addEventListener("click", () => {
        item.classList.toggle("active"); // Toggle clicked item
       
      });
    });
  });
  

  // Dialogs
  const openDialogBtn1 = document.getElementById('openDialog1');
  const closeDialogBtn1 = document.getElementById('closeDialog1');
  const dialog1 = document.getElementById('myDialog1');
  const overlay1 = document.getElementById('overlay1');

  // Open the dialog
  openDialogBtn1.addEventListener('click', () => {
      dialog1.style.display = 'block';
      overlay1.style.display = 'block';
      document.body.classList.add('show-dialog');
  });

  // Close the dialog
  closeDialogBtn1.addEventListener('click', () => {
      dialog1.style.display = 'none';
      overlay1.style.display = 'none';
      document.body.classList.remove('show-dialog');
  });

  // Close the dialog when clicking on the overlay
  overlay1.addEventListener('click', () => {
      dialog1.style.display = 'none';
      overlay1.style.display = 'none';
      document.body.classList.remove('show-dialog');
  });

  const openDialogBtn2 = document.getElementById('openDialog2');
  const closeDialogBtn2 = document.getElementById('closeDialog2');
  const dialog2 = document.getElementById('myDialog2');
  const overlay2 = document.getElementById('overlay2');

  // Open the dialog
  openDialogBtn2.addEventListener('click', () => {
      dialog2.style.display = 'block';
      overlay2.style.display = 'block';
      document.body.classList.add('show-dialog');
  });

  // Close the dialog
  closeDialogBtn2.addEventListener('click', () => {
      dialog2.style.display = 'none';
      overlay2.style.display = 'none';
      document.body.classList.remove('show-dialog');
  });

  // Close the dialog when clicking on the overlay
  overlay2.addEventListener('click', () => {
      dialog2.style.display = 'none';
      overlay2.style.display = 'none';
      document.body.classList.remove('show-dialog');
  });

  document.querySelector(".hide-btn").addEventListener("click",()=>{
    document.querySelector('.banner').style.display = 'none';
  })

  const openMenuBtn = document.getElementById('openMenuBtn');
  const closeMenuBtn = document.getElementById('closeMenuBtn');
  const menu = document.getElementById('menu');

  // Open menu
  openMenuBtn.addEventListener('click', () => {
      menu.classList.add('show');
  });

  // Close menu
  closeMenuBtn.addEventListener('click', () => {
      menu.classList.remove('show');
  });

