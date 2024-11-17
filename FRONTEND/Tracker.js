// Sample data for active and resolved leaks
const leaksData = {
    activeLeaks: [
        { id: 1, location: 'Kitchen', severity: 'Critical', detectionTime: '10:00 AM', status: 'Active' },
        { id: 2, location: 'Bathroom', severity: 'Moderate', detectionTime: '9:00 AM', status: 'Active' },
    ],
    resolvedLeaks: [
        { id: 3, location: 'Living Room', severity: 'Resolved', detectionTime: '8:00 AM', status: 'Resolved' },
    ]
};

// Function to populate the leaks tables
function populateLeaksTables() {
    const activeLeaksTable = document.getElementById('activeLeaks');
    const resolvedLeaksTable = document.getElementById('resolvedLeaks');

    // Clear existing table rows
    activeLeaksTable.innerHTML = '';
    resolvedLeaksTable.innerHTML = '';

    // Populate active leaks table
    leaksData.activeLeaks.forEach(leak => {
        const row = createLeakRow(leak);
        activeLeaksTable.appendChild(row);
    });

    // Populate resolved leaks table
    leaksData.resolvedLeaks.forEach(leak => {
        const row = createLeakRow(leak);
        resolvedLeaksTable.appendChild(row);
    });
}

// Function to create a table row for a leak
function createLeakRow(leak) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${leak.location}</td>
        <td><span class="severity-${leak.severity.toLowerCase()}">${leak.severity}</span></td>
        <td>${leak.detectionTime}</td>
        <td>${leak.status}</td>
        <td>
            ${leak.status === 'Active' ? 
                `<button class="btn btn-sm btn-success resolve-btn" data-id="${leak.id}">Resolve</button>` : 
                ''}
        </td>
    `;
    return row;
}

// Function to resolve a leak
function resolveLeak(id) {
    const leakIndex = leaksData.activeLeaks.findIndex(leak => leak.id === id);
    if (leakIndex !== -1) {
        const resolvedLeak = leaksData.activeLeaks.splice(leakIndex, 1)[0];
        resolvedLeak.status = 'Resolved';
        resolvedLeak.severity = 'Resolved';
        leaksData.resolvedLeaks.push(resolvedLeak);
        populateLeaksTables();
    }
}

// Initialize the page by populating the leaks tables
document.addEventListener('DOMContentLoaded', () => {
    populateLeaksTables();

    // Event delegation for resolve buttons
    document.body.addEventListener('click', (e) => {
        if (e.target.classList.contains('resolve-btn')) {
            const leakId = parseInt(e.target.getAttribute('data-id'));
            resolveLeak(leakId);
        }
    });
});

// Function to add a new leak (for demonstration purposes)
function addNewLeak(location, severity) {
    const newLeak = {
        id: Date.now(), // Using timestamp as a simple unique id
        location: location,
        severity: severity,
        detectionTime: new Date().toLocaleTimeString(),
        status: 'Active'
    };
    leaksData.activeLeaks.push(newLeak);
    populateLeaksTables();
}

// Example usage: Add a new leak after 5 seconds
setTimeout(() => {
    addNewLeak('Basement', 'Moderate');
}, 5000);
