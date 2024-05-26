/*window.onload = function() {
    // Simulate download progress
    simulateDownload();

    function simulateDownload() {
        const progressCircle = document.getElementById('progressCircle');
       // progressCircle.classList.add('downloading');

        // Simulate download progress
        let progress = 0;
        const interval = setInterval(function() {
            progress += 10; // Increase the progress by 10% each time

            // Update circle width based on progress
            progressCircle.style.width = `${progress}%`;

            // Stop when download is complete
            if (progress >= 100) {
                clearInterval(interval);
                //progressCircle.classList.remove('downloading');
            }
        }, 1000); // Change the interval as needed
    }
}*/
