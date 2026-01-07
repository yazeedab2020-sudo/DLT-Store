document.addEventListener('DOMContentLoaded', () => {
    const googleBtn = document.getElementById('google-login');
    const emailToggleBtn = document.getElementById('email-login-toggle');
    const emailForm = document.getElementById('email-login-form');
    const emailSubmit = document.getElementById('email-login-submit');
    const emailInput = document.getElementById('email-input');
    const nameInput = document.getElementById('name-input');
    if (googleBtn) {
        googleBtn.addEventListener('click', () => {
            googleBtn.disabled = true;
            googleBtn.innerHTML = `<span class="inline-flex items-center gap-2"><svg class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3.5-3.5A8 8 0 1120 12h-4"></path></svg> جاري التسجيل...</span>`;
            setTimeout(() => {
                setUser({ name: 'مستخدم قوقل', email: 'user@gmail.com', role: 'user' });
                window.location.href = 'index.html';
            }, 2000);
        });
    }
    if (emailToggleBtn && emailForm) {
        emailToggleBtn.addEventListener('click', () => {
            emailForm.classList.toggle('hidden');
        });
    }
    if (emailSubmit) {
        emailSubmit.addEventListener('click', () => {
            const email = emailInput ? emailInput.value.trim() : '';
            const name = nameInput ? nameInput.value.trim() : '';
            if (!email || !name) return;
            const role = email.toLowerCase() === 'admin@dlt.store' ? 'admin' : 'user';
            setUser({ name, email, role });
            window.location.href = 'index.html';
        });
    }
});
