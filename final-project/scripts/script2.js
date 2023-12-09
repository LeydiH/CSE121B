document.addEventListener('DOMContentLoaded', function() {
    fetch('data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error loading data: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            if (data.education.length > 0 ) {
                document.getElementById('education').innerHTML = `<h2>Education</h2>${data.education.map(edu => `<p>${edu}</p>`).join('')}`;
            } else {
                throw new Error('Incomplete datas');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('education').innerHTML = `<p>Information not available at this moment.</p>`;
            document.getElementById('experience').innerHTML = `<p>Information not available at this moment.</p>`;
        });
});
