
  document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll(".faq-item");
  
    faqItems.forEach((item) => {
      const question = item.querySelector(".faq-question");
  
      question.addEventListener("click", () => {
        item.classList.toggle("active"); // Toggle clicked item
      });
    });
  });
  

  const openDialogBtn = document.getElementById('openDialog');
  const closeDialogBtn = document.getElementById('closeDialog');
  const dialog = document.getElementById('myDialog');
  const overlay = document.getElementById('overlay');

  // Open the dialog
  openDialogBtn.addEventListener('click', () => {
      dialog.style.display = 'block';
      overlay.style.display = 'block';
      document.body.classList.add('show-dialog');
  });

  // Close the dialog
  closeDialogBtn.addEventListener('click', () => {
      dialog.style.display = 'none';
      overlay.style.display = 'none';
      document.body.classList.remove('show-dialog');
  });

  // Close the dialog when clicking on the overlay
  overlay.addEventListener('click', () => {
      dialog.style.display = 'none';
      overlay.style.display = 'none';
      document.body.classList.remove('show-dialog');
  });