document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Typewriter Animation
    const textEl = document.getElementById('type-text');
    const roles = [
        "website developer.", 
        "photo editor.", 
        "video editor.", 
        "AI master."
    ];
    
    let rIdx = 0;
    let charIdx = 0;
    let isDeleting = false;

    function playTypewriter() {
        const currentRole = roles[rIdx];
        
        if (isDeleting) {
            textEl.textContent = currentRole.substring(0, charIdx - 1);
            charIdx--;
        } else {
            textEl.textContent = currentRole.substring(0, charIdx + 1);
            charIdx++;
        }

        let speed = isDeleting ? 50 : 100;

        if (!isDeleting && charIdx === currentRole.length) {
            speed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIdx === 0) {
            isDeleting = false;
            rIdx = (rIdx + 1) % roles.length;
            speed = 500;
        }

        setTimeout(playTypewriter, speed);
    }

    // 2. Theme Toggle Logic
    const toggleBtn = document.getElementById('theme-toggle');
    const html = document.documentElement;

    toggleBtn.addEventListener('click', () => {
        if (html.hasAttribute('data-theme')) {
            html.removeAttribute('data-theme');
            toggleBtn.textContent = 'Dark Mode';
        } else {
            html.setAttribute('data-theme', 'dark');
            toggleBtn.textContent = 'Light Mode';
        }
    });

    // Initialize
    playTypewriter();
});

const projectData = [
    { title: "THE VOID", tag: "Literature", desc: "Psychological exploration of the digital era." },
    { title: "REZIES_ELECTRO", tag: "Hardware", desc: "Custom PCB and circuit engineering." },
    { title: "RH_ARCHITECT", tag: "Dev", desc: "System-level optimization for Linux." }
];

function loadProjects() {
    const grid = document.querySelector('.project-grid');
    if(!grid) return;
    
    grid.innerHTML = projectData.map(p => `
        <article class="p-card">
            <div class="p-header"><span class="p-tag">${p.tag}</span></div>
            <h3>${p.title}</h3>
            <p>${p.desc}</p>
            <div class="p-footer">STATUS: ACTIVE</div>
        </article>
    `).join('');
}

window.addEventListener('DOMContentLoaded', loadProjects);

