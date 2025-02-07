// Show the popup when the website loads
window.onload = function() {
    document.getElementById('popup').classList.remove('hidden');
};

// Close the popup when the button is clicked
document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('popup').classList.add('hidden');
});