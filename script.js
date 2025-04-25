const toggleBtn = document.getElementById('toggleBtn');
const sidebar = document.getElementById('sidebar');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('collapsed');
});

function toggleProfileMenu() {
    const menu = document.getElementById('profileMenu');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
  }
  
  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    const menu = document.getElementById('profileMenu');
    const profileImg = document.querySelector('.profile-header img');
    if (!profileImg.contains(e.target) && !menu.contains(e.target)) {
      menu.style.display = 'none';
    }
  });
  
// Function to handle the form submission
     document.getElementById('assessmentForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const studentName = document.getElementById('studentName').value;
  const participation = document.querySelector('input[name="participation"]:checked').value;
  const assignments = document.querySelector('input[name="assignments"]:checked').value;
  const behavior = document.querySelector('input[name="behavior"]:checked').value;

  const result = `
    <h3>Assessment Submitted</h3>
    <p><strong>Student:</strong> ${studentName}</p>
    <p><strong>Participation:</strong> ${participation}</p>
    <p><strong>Assignments:</strong> ${assignments}</p>
    <p><strong>Behavior:</strong> ${behavior}</p>
  `;

  document.getElementById('result').innerHTML = result;
});

// Function to handle the form submission
document.getElementById('assessmentForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const teacherName = document.getElementById('teacherName').value;
  const participation = document.querySelector('input[name="participation"]:checked').value;
  const assignments = document.querySelector('input[name="assignments"]:checked').value;
  const behavior = document.querySelector('input[name="behavior"]:checked').value;

  const result = `
    <h3>Assessment Submitted</h3>
    <p><strong>Teacher:</strong> ${teacherName}</p>
    <p><strong>Teaching Competence:</strong> ${participation}</p>
    <p><strong>Classroom Management:</strong> ${assignments}</p>
    <p><strong>Safety and Wellbeing:</strong> ${behavior}</p>
  `;

  document.getElementById('result').innerHTML = result;
});

  