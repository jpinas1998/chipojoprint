// Configura EmailJS (necesitas registrarte en emailjs.com)
(function () {
    emailjs.init("mZfMxCKowXw8wZ4Yd"); // Reemplaza con tu ID
})();


document.querySelector('.contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const btn = this.querySelector('.btn');
    btn.disabled = true;
    btn.textContent = 'Sending...';

    emailjs.sendForm('service_vyop0ng', 'template_3rami58', this)
        .then(() => {
            this.reset();
        })
        .catch((error) => {
            alert('Error sending message: ' + error.text);
        })
        .finally(() => {
            btn.disabled = false;
            btn.textContent = 'Send Message';
        });
});