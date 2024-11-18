document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for reaching out! I will get back to you soon.');
});
// Dynamically include the header and footer
function includeHTML(containerId, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(html => {
            document.getElementById(containerId).innerHTML = html;
        })
        .catch(err => console.error('Error loading file:', filePath, err));
}

// Include header and footer for all pages
includeHTML('header-container', 'header.html');
includeHTML('footer-container', 'footer.html');

// Contact form submission alert
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Thank you for reaching out! I will get back to you soon.');
    });
}
