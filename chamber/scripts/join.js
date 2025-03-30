const timestamp = new Date().toISOString().replace('T', ' ').slice(0, 19);
document.getElementById('timestamp').value = timestamp;
