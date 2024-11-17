// Sample data for active and resolved leaks
const leaksData = {
    activeLeaks: [
        { location: 'Kitchen', severity: 'Critical', detectionTime: '10:00 AM', status: 'Active' },
        { location: 'Bathroom', severity: 'Moderate', detectionTime: '9:00 AM', status: 'Active' },
    ],
    resolvedLeaks: [
        { location: 'Living Room', severity: 'Resolved', detectionTime: '8:00 AM', status: 'Resolved' },
    ]
};

// Function to populate the leaks tables
function populateLeaksTables() {
    const activeLeaksTable = document.getElementById('activeLeaks');
    const resolvedLeaksTable = document.getElementById('resolvedLeaks');

    // Populate active leaks table
    leaksData.activeLeaks.forEach(leak => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${leak.location}</td>
            <td><span class="severity-${leak.severity.toLowerCase()}">${leak.severity}</span></td>
            <td>${leak.detectionTime}</td>
            <td>${leak.status}</td>
        `;
        activeLeaksTable.appendChild(row);
    });

    // Populate resolved leaks table
    leaksData.resolvedLeaks.forEach(leak => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${leak.location}</td>
            <td><span class="severity-${leak.severity.toLowerCase()}">${leak.severity}</span></td>
            <td>${leak.detectionTime}</td>
            <td>${leak.status}</td>
        `;
        resolvedLeaksTable.appendChild(row);
    });
}

// Initialize the page by populating the leaks tables
document.addEventListener('DOMContentLoaded', () => {
    populateLeaksTables();
});
