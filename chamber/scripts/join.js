const timestamp = new Date().toISOString().replace("T", " ").slice(0, 19);
document.getElementById("timestamp").value = timestamp;

const closeDialogButtons = document.querySelectorAll('#close-gold-dialog, #close-silver-dialog, #close-bronze-dialog, #close-nonprofit-dialog');

closeDialogButtons.forEach(button => {
  button.addEventListener('click', () => {
    const dialog = button.parentNode;
    dialog.close();
  });
});

  
    // Dialog handling (example)
    const dialogs = document.querySelectorAll('dialog');
    const learnMoreButtons = document.querySelectorAll('.learn-more');
    const closeButtons = document.querySelectorAll('dialog button');
  
    learnMoreButtons.forEach((button, index) => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        dialogs[index].showModal(); // Use showModal for accessibility
      });
    });
  
    closeButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        dialogs[index].close();
      });
    });