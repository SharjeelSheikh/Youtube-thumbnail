window.addEventListener('load', () => {
    const canvas = document.getElementById('thumbnailCanvas');
    const tx = canvas.getContext('2d');

    // Function to draw the thumbnail
    function drawThumbnail() {
        tx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw a background
    tx.fillStyle = 'Black';  
    tx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw some text
        tx.fillStyle = '#ffffff';  
        tx.font = 'bold 80px Arial';
        tx.textAlign = 'center';
        tx.textBaseline = 'middle';
        tx.fillText('DO AND DIE', canvas.width / 2, canvas.height / 2 - 30);

        // Draw a subtitle
        tx.font = 'bold 50px Arial';
        tx.fillText('GO A HEAD!', canvas.width / 2, canvas.height / 2 + 30);

    }

    // Event listener for the button
    document.getElementById('generateThumbnail').addEventListener('click', () => {
        drawThumbnail();

        // Set up the download link
        const link = document.getElementById('downloadLink');
        link.href = canvas.toDataURL('image/png');
        link.style.display = 'block';
        link.textContent = 'Download Thumbnail' ;
    });

    // Initial drawing
    drawThumbnail();
});
