document.getElementById('boards').addEventListener('change', function() {
    var selectedBoard = this.value; // Get the selected board ID
    updateWeatherDisplay(selectedBoard);
});

function updateWeatherDisplay(boardId) {
    // For now, just update the text content as a placeholder
    document.getElementById('weather-display').textContent = 'Weather data for ' + boardId;
}
