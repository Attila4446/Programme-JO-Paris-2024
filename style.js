document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('#jo2024 input[type="checkbox"]');
    
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', function() {
        const row = this.closest('tr');
        if (this.checked) {
          row.classList.add('checked');
        } else {
          row.classList.remove('checked');
        }
      });
    });

    // Initial check for already checked checkboxes
    checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
        checkbox.closest('tr').classList.add('checked');
      }
    });
  });


// Par Chat GPT
document.addEventListener('DOMContentLoaded', () => {
    const currentDate = new Date(); // Obtenez la date actuelle
    const day = 27; // Définissez le jour de la page
    const month = 6; // Mois de juillet (les mois sont indexés à partir de 0)
  
    const eventDate = new Date(currentDate.getFullYear(), month, day);
    const rows = document.querySelectorAll('#jo2024 tbody tr');
    rows.forEach(row => {
      const timeCell = row.children[1];
      const eventTime = timeCell.textContent;
      const [hours, minutes] = eventTime.split(':').map(Number);
      const eventDateTime = new Date(eventDate.getTime());
      eventDateTime.setHours(hours, minutes);
  
      if (currentDate - eventDateTime > 30 * 60 * 1000) { // Si l'événement est passé de 30 minutes
        row.style.opacity = '0.2';
        row.parentNode.appendChild(row); // Déplacez la ligne à la fin du tableau
      }
    });
  });
