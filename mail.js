// Configura EmailJS (necesitas registrarte en emailjs.com)
(function () {
    emailjs.init("mZfMxCKowXw8wZ4Yd"); // Reemplaza con tu ID
})();


document.querySelector('.contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    var recaptchaResponse = grecaptcha.getResponse();
    if (recaptchaResponse.length === 0) {
        alert("Por favor, verifica que no eres un robot.");
        return;
    }

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

    const form = e.target;
    form.style.opacity = '0.5';

    setTimeout(() => {
        form.reset();
        form.style.opacity = '1';

        const confirmation = document.createElement('div');
        confirmation.className = 'form-confirmation';
        confirmation.textContent = '✓ El mensaje fue enviado con éxito!';
        document.querySelector('.contact-container').appendChild(confirmation);

        setTimeout(() => confirmation.remove(), 3000);

    }, 1000);

});

