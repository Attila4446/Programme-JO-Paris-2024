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
document.addEventListener("DOMContentLoaded", () => {
    // Fonction pour obtenir l'heure actuelle sous forme de chaîne (HH:MM)
    const getCurrentTime = () => {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    };

    // Fonction pour vérifier si une heure donnée est passée de plus de 30 minutes
    const isMoreThan30MinutesAgo = (timeStr) => {
        const [eventHours, eventMinutes] = timeStr.split(':').map(Number);
        const eventTime = new Date();
        eventTime.setHours(eventHours, eventMinutes, 0, 0);

        const now = new Date();
        const diffMinutes = (now - eventTime) / (1000 * 60); // Différence en minutes

        return diffMinutes > 30;
    };

    // Fonction pour déplacer une ligne à la fin du tableau
    const moveRowToEnd = (row) => {
        const tbody = row.parentNode;
        tbody.appendChild(row);
    };

    // Obtenez la date actuelle et l'heure
    const currentDateStr = new Date().toISOString().split('T')[0];
    const currentTimeStr = getCurrentTime();

    // Récupérer la date du jour depuis l'attribut data-date
    const pageDateStr = document.body.getAttribute('data-date');

    // Appliquer la transparence et déplacer les lignes passées à la fin du tableau
    if (currentDateStr >= pageDateStr) {
        document.querySelectorAll('.table tbody tr').forEach(row => {
            const timeCell = row.cells[1];
            const timeStr = timeCell.textContent.trim();

            if (isMoreThan30MinutesAgo(timeStr)) {
                row.style.opacity = '0.2'; // 80% de transparence
                moveRowToEnd(row); // Déplacer la ligne à la fin du tableau
            }
        });
    }
});
