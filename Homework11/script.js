document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');

    function removeError(input) {
        const parent = input.parentNode;
        const errorElement = parent.querySelector('.error-text');
        if (errorElement) {
            errorElement.remove();
        }
    }

    function makeError(input, errorMessage) {
        const parent = input.parentNode;
        let errorElement = parent.querySelector('.error-text');
        if (!errorElement) {
            errorElement = document.createElement('div');
            errorElement.classList.add('error-text');
            parent.appendChild(errorElement);
        }
        errorElement.textContent = errorMessage;
    }

    function validateField(input) {
        const value = input.value.trim();
        const validationType = input.getAttribute('data-validation');

        switch (validationType) {
            case 'name':
                if (!value) {
                    makeError(input, 'Please enter your name');
                    return false;
                }
                break;
            case 'message':
                if (value.length < 5) {
                    makeError(input, 'Message must be at least 5 characters long');
                    return false;
                }
                break;
            case 'phone':
                const phoneRegex = /^\+380\d{9}$/;
                if (!phoneRegex.test(value)) {
                    makeError(input, 'Please enter a valid phone number starting with +380');
                    return false;
                }
                break;
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) {
                    makeError(input, 'Please enter a valid email address');
                    return false;
                }
                break;
        }

        removeError(input);
        return true;
    }

    function validateAllFields() {
        let isValid = true;
        const inputs = form.querySelectorAll('.form-input');

        inputs.forEach(input => {
            const fieldIsValid = validateField(input);
            if (!fieldIsValid) {
                isValid = false;
            }
        });

        return isValid;
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        if (validateAllFields()) {
            const formData = new FormData(this);
            formData.forEach((value, key) => {
                console.log(`${key}: ${value}`);
            });
            alert('Success');
        }
    });
});
