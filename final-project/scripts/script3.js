document.addEventListener('DOMContentLoaded', function() {
    fetch('data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error loading data: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            if (data.experience.length > 0 ) {
                document.getElementById('experience').innerHTML = `<h2>Work Experience</h2>${data.experience.map(exp => `<p>${exp}</p>`).join('')}`;
            } else {
                throw new Error('Incomplete data');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('experience').innerHTML = `<p>Information not available at this moment.</p>`;
        });
});
