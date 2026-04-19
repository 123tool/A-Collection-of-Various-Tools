document.addEventListener('DOMContentLoaded', function () {
    const downloadBtn = document.getElementById('download-pdf-btn');
    const element = document.getElementById('content-to-pdf'); // The main content to convert

    downloadBtn.addEventListener('click', function () {
        // Show generating message
        const originalText = downloadBtn.innerHTML;
        downloadBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Generating...';
        downloadBtn.disabled = true;

        // Use html2canvas to create an image of the element
        html2canvas(element, {
            scale: 2, // Higher scale for better quality
            useCORS: true, // To handle images from different origins if any
            logging: false, // Disable logging for cleaner console
        }).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            
            // Initialize jsPDF
            const { jsPDF } = window.jspdf;
            const pdf = new jsPDF('p', 'mm', 'a4'); // portrait, millimeters, A4 size

            const imgWidth = 210; // A4 width in mm
            const pageHeight = 295; // A4 height in mm
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            let heightLeft = imgHeight;
            let position = 0;

            // Add the image to the PDF
            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;

            // If the content is longer than one page, add new pages
            while (heightLeft >= 0) {
                position = heightLeft - imgHeight;
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }

            // Save the PDF
            pdf.save('startup-promotion-directory.pdf');

            // Reset button
            downloadBtn.innerHTML = originalText;
            downloadBtn.disabled = false;

        }).catch(error => {
            console.error('Error generating PDF:', error);
            alert('Sorry, there was an error generating the PDF. Please try again.');
            downloadBtn.innerHTML = originalText;
            downloadBtn.disabled = false;
        });
    });
});
