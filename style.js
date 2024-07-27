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

    // Obtenez la date actuelle et l'heure
    const currentDateStr = new Date().toISOString().split('T')[0];
    const currentTimeStr = getCurrentTime();

    // Récupérer la date du jour depuis l'attribut data-date
    const pageDateStr = document.body.getAttribute('data-date');

    // Si la date actuelle est supérieure à la date de la page
    if (currentDateStr > pageDateStr) {
        // Appliquer la transparence aux lignes passées
        document.querySelectorAll('.table tbody tr').forEach(row => {
            const timeCell = row.cells[1];
            const timeStr = timeCell.textContent.trim();

            if (isMoreThan30MinutesAgo(timeStr)) {
                row.style.opacity = '0.2'; // 80% de transparence
            }
        });
    } else if (currentDateStr === pageDateStr) {
        // Appliquer la transparence aux lignes passées de plus de 30 minutes dans la journée
        document.querySelectorAll('.table tbody tr').forEach(row => {
            const timeCell = row.cells[1];
            const timeStr = timeCell.textContent.trim();

            if (isMoreThan30MinutesAgo(timeStr)) {
                row.style.opacity = '0.2'; // 80% de transparence
            }
        });
    }
});







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

    // Fonction pour vérifier si une heure donnée est dans les 30 minutes après le début
    const isWithin30Minutes = (timeStr) => {
        const [eventHours, eventMinutes] = timeStr.split(':').map(Number);
        const eventTime = new Date();
        eventTime.setHours(eventHours, eventMinutes, 0, 0);

        const now = new Date();
        const diffMinutes = (now - eventTime) / (1000 * 60); // Différence en minutes

        return diffMinutes <= 30 && diffMinutes >= 0;
    };

    // Fonction pour déplacer une ligne à la fin du tableau
    const moveRowToEnd = (row) => {
        const tbody = row.parentNode;
        tbody.appendChild(row);
    };

    // Fonction pour alterner l'opacité d'une ligne spécifique
    const alternateOpacityForRow = (row) => {
        let isTransparent = false;
        const intervalId = setInterval(() => {
            if (isWithin30Minutes(row.cells[1].textContent.trim())) {
                row.style.opacity = isTransparent ? '0.2' : '1';
                isTransparent = !isTransparent;
            } else {
                clearInterval(intervalId);
                row.style.opacity = '1'; // Assurer que la ligne est normale si l'événement est passé
            }
        }, 1000); // Alterner toutes les secondes
    };

    // Obtenez la date actuelle et l'heure
    const currentDateStr = new Date().toISOString().split('T')[0];
    const currentTimeStr = getCurrentTime();

    // Récupérer la date du jour depuis l'attribut data-date
    const pageDateStr = document.body.getAttribute('data-date');

    // Appliquer la transparence et déplacer les lignes passées à la fin du tableau
    document.querySelectorAll('.table tbody tr').forEach(row => {
        const timeCell = row.cells[1];
        const timeStr = timeCell.textContent.trim();

        if (currentDateStr >= pageDateStr) {
            if (isMoreThan30MinutesAgo(timeStr)) {
                row.style.opacity = '0.2'; // 80% de transparence
                moveRowToEnd(row); // Déplacer la ligne à la fin du tableau
            } else if (isWithin30Minutes(timeStr)) {
                alternateOpacityForRow(row); // Appliquer l'alternance d'opacité uniquement à la ligne concernée
            }
        }
    });
});
