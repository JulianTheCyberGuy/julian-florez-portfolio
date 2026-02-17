document.addEventListener("DOMContentLoaded", () => {
    // Footer year
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  });
  
  // Mailto "form" handler (no backend needed)
  function sendMail(e){
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const msg = document.getElementById("message").value.trim();
  
    const subject = encodeURIComponent("Project Inquiry (Website or Automation)");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${msg}\n`
    );
  
    window.location.href = `mailto:florezdigitalsolutions@gmail.com?subject=${subject}&body=${body}`;
    return false;
  }  