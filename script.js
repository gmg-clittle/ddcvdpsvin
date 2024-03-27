 document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        var vinLabels = Array.prototype.slice.call(document.querySelectorAll('#quick-specs1-app-root dt'));
        var vinLabel = vinLabels.find(function(el) { return el.textContent.trim() === 'VIN'; });

        if (vinLabel) {
            var vinValue = vinLabel.nextElementSibling;
            if (vinValue) {
                var vinNumber = vinValue.textContent.trim();
                var vinDisplayDiv = document.getElementById('vinId');
                if (vinDisplayDiv) {
                    vinDisplayDiv.textContent = vinNumber;
                } else {
                    console.error('Div with id "vinId" not found.');
                }
            } else {
                console.error('VIN value element not found.');
            }
        } else {
            console.error('VIN label element not found.');
        }
    }, 1000); // 1000 ms delay
});
