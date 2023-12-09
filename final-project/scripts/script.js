document.addEventListener('DOMContentLoaded', function() {
    fetch('data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error loading data: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            if (data.about && data.skills.length > 0) {
                document.getElementById('about-me').innerHTML += `<h2>About me</h2><p>${data.about}</p>`;
                document.getElementById('skill').innerHTML = `<h2>Skills</h2>${data.skills.map(skill => `<p>${skill}</p>`).join('')}`;
            } else {
                throw new Error('Incomplete data');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('about-me').innerHTML = `<p>Information not available at this moment.</p>`;
            document.getElementById('skill').innerHTML = `<p>Information not available at this moment.</p>`;
            document.getElementById('education').innerHTML = `<p>Information not available at this moment.</p>`;
            document.getElementById('experience').innerHTML = `<p>Information not available at this moment.</p>`;
        });
});
