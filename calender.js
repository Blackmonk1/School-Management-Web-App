
    async function downloadPDF() {
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF();
  
      
  
      // Title next to logo
      doc.setFontSize(18);
      doc.text("Shield Academy", 45, 20);
      doc.setFontSize(14);
      doc.text("Academic Calendar - 2025", 45, 30);
  
      let y = 50;
  
      const calendarData = [
        { term: "First Term", activities: [
          ["School Reopens", "Jan 13, 2025"],
          ["Mid-Term Break", "Feb 20 – Feb 21"],
          ["School Closes", "April 4, 2025"]
        ]},
        { term: "Second Term", activities: [
          ["School Reopens", "April 28, 2025"],
          ["Mid-Term Break", "June 5 – June 6"],
          ["School Closes", "July 18, 2025"]
        ]},
        { term: "Third Term", activities: [
          ["School Reopens", "Aug 18, 2025"],
          ["Mid-Term Break", "Sept 25 – Sept 26"],
          ["Exams", "Oct 27 – Oct 31"],
          ["School Closes", "Nov 28, 2025"]
        ]}
      ];
  
      calendarData.forEach(term => {
        doc.setFontSize(13);
        doc.text(term.term, 10, y);
        y += 6;
        doc.setFontSize(11);
        term.activities.forEach(([activity, date]) => {
          doc.text(`${activity}: ${date}`, 12, y);
          y += 6;
        });
        y += 6;
      });
  
      doc.save("Academic_Calendar_2025.pdf");
    }

  