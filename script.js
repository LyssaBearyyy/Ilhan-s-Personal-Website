function displayDateTime() {
    const dateTimeElement = document.getElementById('date-time');
    const now = new Date();
    dateTimeElement.textContent = now.toLocaleString(); 
}



setInterval(displayDateTime, 1000); 
displayDateTime(); 