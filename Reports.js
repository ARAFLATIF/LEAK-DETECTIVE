document.addEventListener('DOMContentLoaded', function() {
    
    // Monthly Usage Chart
    const monthlyCtx = document.getElementById('monthlyUsageChart').getContext('2d');
    new Chart(monthlyCtx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Water Usage (Gallons)',
                data: [4500, 5000, 4800, 4200, 4600, 4300],
                backgroundColor: 'rgba(52, 152, 219, 0.6)',
                borderColor: 'rgba(52, 152, 219, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
 
    // Weekly Comparison Chart
    const weeklyCtx = document.getElementById('weeklyComparisonChart').getContext('2d');
    new Chart(weeklyCtx, {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'This Week',
                data: [100, 120, 115, 134, 108, 87, 95],
                borderColor: 'rgba(52, 152, 219, 1)',
                backgroundColor: 'rgba(52, 152, 219, 0.1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(52, 152, 219, 1)'
            }, {
                label: 'Last Week',
                data: [110, 130, 125, 140, 115, 95, 105],
                borderColor: 'rgba(231, 76, 60, 1)',
                backgroundColor: 'rgba(231, 76, 60, 0.1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(231, 76, 60, 1)'
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
 
    // Populate Leak History Table
    const leakHistory = [
        { date: '2023-06-15', location: 'Kitchen', severity: 'Moderate', status: 'Resolved' },
        { date: '2023-06-10', location: 'Bathroom', severity: 'Minor', status: 'Resolved' },
        { date: '2023-05-28', location: 'Garden', severity: 'Critical', status: 'Resolved' }
    ];
 
    const leakHistoryTable = document.getElementById('leakHistoryTable');
    leakHistory.forEach(leak => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${leak.date}</td>
            <td>${leak.location}</td>
            <td>${leak.severity}</td>
            <td>${leak.status}</td>`;
        leakHistoryTable.appendChild(row);
    });
 
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
        window.scrollTo({ top: 0, behavior:'smooth' });
    });
 });
