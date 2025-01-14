// JavaScript for Fitness Pro website

// Add smooth scrolling to navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Add click events to service cards
document.querySelectorAll('.service').forEach(service => {
    service.addEventListener('click', () => {
        const serviceName = service.querySelector('h3').innerText;
        alert(`You clicked on ${serviceName}`);
    });
});
