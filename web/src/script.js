// This layer controls the functionality for toggling the sidebar
// If you want to move this out of React state and manage sidebar manually via vanilla JS:

document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.toggle-sidebar-btn');
    const sidebar = document.querySelector('.sidebar');
  
    toggleButton.addEventListener('click', () => {
      if (sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
      } else {
        sidebar.classList.add('open');
      }
    });
  });
  