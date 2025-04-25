document.getElementById('resultsForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const studentName = document.getElementById('studentName').value;
    const studentClass = document.getElementById('class').value;
    const pdfFile = document.getElementById('pdfUpload').files[0];
  
    if (!pdfFile || pdfFile.type !== "application/pdf") {
      alert("Please upload a valid PDF file.");
      return;
    }
  
    // Simulate upload (you can replace this with actual backend logic)
    console.log("Uploading PDF for", studentName, "Class:", studentClass);
  
    // Show pop-up
    document.getElementById('popup').style.display = 'block';
  
    // Reset form
    this.reset();
  });
  
  function closePopup() {
    document.getElementById('popup').style.display = 'none';
  }
  