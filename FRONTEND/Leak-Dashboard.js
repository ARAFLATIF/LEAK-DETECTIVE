document.addEventListener('DOMContentLoaded', function() {
    // Sample data for water usage chart
    const ctx = document.getElementById('waterUsageChart').getContext('2d');
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
            datasets: [{
                label: 'Water Usage (Gallons)',
                data: [30, 25, 40, 60, 50, 35],
                borderColor: '#3498db',
                backgroundColor: 'rgba(52, 152, 219, 0.1)',
                borderWidth: 2,
                pointBackgroundColor: '#3498db'
            }]
        },
        options: {
            responsive: true,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

    // Sample alerts data
    const alerts = [
        { message: 'Leak detected in pipe X', severity: 'high' },
        { message: 'Unusual water usage pattern detected', severity: 'medium' },
        { message: 'Scheduled maintenance tomorrow', severity: 'low' }
    ];

    // Populate alerts
    const alertsList = document.getElementById('alertsList');
    
    alerts.forEach(alert => {
        const li = document.createElement('li');
        li.className = `list-group-item list-group-item-${getSeverityClass(alert.severity)}`;
        li.textContent = alert.message;
        alertsList.appendChild(li);
    });

    // Sample water consumption data
    document.getElementById('todayUsage').textContent = '150';
    document.getElementById('weekUsage').textContent = '1,050';
    document.getElementById('monthUsage').textContent = '4,500';

   // Helper function to get Bootstrap class for alert severity
   function getSeverityClass(severity) {
       switch(severity) {
           case 'high': return 'danger';
           case 'medium': return 'warning';
           case 'low': return 'info';
           default: return 'secondary';
       }
   }

   // Back to top button functionality
   const backToTopButton = document.getElementById('backToTop');

   window.addEventListener('scroll', () => {
       if (window.pageYOffset > 100) {
           backToTopButton.style.display = 'block';
       } else {
           backToTopButton.style.display = 'none';
       }
   });

   backToTopButton.addEventListener('click', () => {
       window.scrollTo({ top: 0, behavior: 'smooth' });
   });
});
