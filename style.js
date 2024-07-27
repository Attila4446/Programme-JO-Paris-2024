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
    const sportsDurations = {
        "Natation": 15,
        "Escrime": 20,
        "Judo": 10,
        "Basket": 90,
        "Volleyball": 90
    };

    const defaultDuration = 30;

    const getCurrentTime = () => {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    };

    const getSportDuration = (sport) => {
        return sportsDurations[sport] || defaultDuration;
    };

    const isMoreThanMinutesAgo = (timeStr, minutes) => {
        const [eventHours, eventMinutes] = timeStr.split(':').map(Number);
        const eventTime = new Date();
        eventTime.setHours(eventHours, eventMinutes, 0, 0);

        const now = new Date();
        const diffMinutes = (now - eventTime) / (1000 * 60);

        return diffMinutes > minutes;
    };

    const pageDateStr = document.body.getAttribute('data-date');
    const currentDateStr = new Date().toISOString().split('T')[0];

    document.querySelectorAll('.table tbody tr').forEach(row => {
        const timeCell = row.cells[1];
        const sportCell = row.cells[2];
        const timeStr = timeCell.textContent.trim();
        const sportStr = sportCell.textContent.trim();
        const duration = getSportDuration(sportStr);
        
        if (currentDateStr >= pageDateStr) {
            if (isMoreThanMinutesAgo(timeStr, duration)) {
                row.style.opacity = '0.2';
                setTimeout(() => {
                    document.querySelector('.table tbody').appendChild(row);
                }, 0);
            } else if (isMoreThanMinutesAgo(timeStr, duration - 15)) {
                let isTransparent = false;
                const intervalId = setInterval(() => {
                    isTransparent = !isTransparent;
                    row.style.opacity = isTransparent ? '0.2' : '1';
                    if (isMoreThanMinutesAgo(timeStr, duration)) {
                        clearInterval(intervalId);
                        row.style.opacity = '0.2';
                        setTimeout(() => {
                            document.querySelector('.table tbody').appendChild(row);
                        }, 0);
                    }
                }, 1000);
            }
        }
    });
});
