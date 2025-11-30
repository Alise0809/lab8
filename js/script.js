document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.color = '#ff6b6b';
    });
    link.addEventListener('mouseleave', () => {
        link.style.color = '#333';
    });
});
const links = document.querySelectorAll('nav a');
links.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetUrl = this.getAttribute('href');
        window.location.href = targetUrl;
    });
});
