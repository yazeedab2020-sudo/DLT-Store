const USER_KEY = 'dlt_user';
function getUser() {
    try {
        const raw = localStorage.getItem(USER_KEY);
        return raw ? JSON.parse(raw) : null;
    } catch {
        return null;
    }
}
function setUser(user) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
}
function clearUser() {
    localStorage.removeItem(USER_KEY);
}
function renderAccountArea() {
    const container = document.getElementById('account-area');
    if (!container) return;
    const user = getUser();
    if (user) {
        const initial = user.name && user.name.length ? user.name[0] : '👤';
        container.innerHTML = `
            <div class="relative">
                <button id="account-menu-btn" class="flex items-center gap-2 bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 transition">
                    <span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/10 border border-white/10 text-white">${initial}</span>
                    <span class="text-sm font-bold">${user.name}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-300" viewBox="0 0 20 20" fill="currentColor"><path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"/></svg>
                </button>
                <div id="account-dropdown" class="absolute right-0 mt-2 w-44 bg-cardBg border border-white/10 rounded-lg shadow-lg hidden">
                    <a href="profile.html" class="block px-3 py-2 text-sm text-white hover:bg-white/5 transition">طلباتي</a>
                    ${user.role === 'admin' ? `<a href="admin.html" class="block px-3 py-2 text-sm text-white hover:bg-white/5 transition">لوحة التحكم</a>` : ``}
                    <button id="logout-menu" class="w-full text-left px-3 py-2 text-sm text-red-400 hover:bg-white/5 transition">تسجيل خروج</button>
                </div>
            </div>
        `;
        const menuBtn = container.querySelector('#account-menu-btn');
        const dropdown = container.querySelector('#account-dropdown');
        const logoutMenu = container.querySelector('#logout-menu');
        if (menuBtn && dropdown) {
            menuBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                dropdown.classList.toggle('hidden');
            });
            document.addEventListener('click', (e) => {
                if (!container.contains(e.target)) {
                    dropdown.classList.add('hidden');
                }
            });
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') dropdown.classList.add('hidden');
            });
        }
        if (logoutMenu) {
            logoutMenu.addEventListener('click', () => {
                clearUser();
                window.location.reload();
            });
        }
    } else {
        container.innerHTML = `
            <a href="login.html" class="hover:text-neonBlue transition transform hover:scale-110" title="تسجيل الدخول">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            </a>
        `;
    }
}
document.addEventListener('DOMContentLoaded', renderAccountArea);
