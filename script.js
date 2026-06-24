// ======================
// LANGUAGE
// ======================

let lang = "uz";

const translations = {
    uz: {
        "nav.home": "Bosh sahifa",
        "nav.skills": "Ko'nikmalar",
        "nav.projects": "Loyihalar",
        "nav.contact": "Aloqa",

        "hero.tag": "Full Stack Developer",
        "hero.title": "Salom, men",
        "hero.name": "Ro'ziqulova Oybarchin",
        "hero.desc": "Men zamonaviy va foydalanuvchilar uchun qulay web-ilovalar yarataman.",

        "hero.btn1": "Loyihalarni ko'rish →",
        "hero.btn2": "Bog'lanish",

        "hero.scroll": "Pastga aylantiring",

        "skills.label": "Ko'nikmalar",
        "skills.title": "Foydalanadigan texnologiyalar",
        "skills.sub": "Zamonaviy texnologiyalar bilan ishlash tajribasi.",

        "proj.label": "Portfolio",
        "proj.title": "Tanlangan loyihalar",
        "proj.sub": "Real muammolarni hal qiluvchi loyihalar.",

        "contact.label": "Aloqa",
        "contact.title": "Birgalikda ishlaylik",
        "contact.sub": "Loyiha yoki savol bo'lsa yozing.",

        "contact.name": "Ismingiz",
        "contact.email": "Email",
        "contact.msg": "Xabar",
        "contact.send": "Xabar yuborish →",

        "toast.sent": "Xabar yuborildi!"
    },

    en: {
        "nav.home": "Home",
        "nav.skills": "Skills",
        "nav.projects": "Projects",
        "nav.contact": "Contact",

        "hero.tag": "Full Stack Developer",
        "hero.title": "Hi, I'm",
        "hero.name": "Oybarchin Ro'ziqulova",
        "hero.desc": "I build modern and user-friendly web applications.",

        "hero.btn1": "View Projects →",
        "hero.btn2": "Contact",

        "hero.scroll": "Scroll",

        "skills.label": "Skills",
        "skills.title": "Technologies I Use",
        "skills.sub": "Experience with modern technologies.",

        "proj.label": "Portfolio",
        "proj.title": "Selected Projects",
        "proj.sub": "Projects solving real problems.",

        "contact.label": "Contact",
        "contact.title": "Let's Work Together",
        "contact.sub": "Feel free to send a message.",

        "contact.name": "Your Name",
        "contact.email": "Email",
        "contact.msg": "Message",
        "contact.send": "Send Message →",

        "toast.sent": "Message sent!"
    }
};

// ======================
// SKILLS
// ======================

const skills = [
    { icon: "⚛️", name: "React", level: 92 },
    { icon: "🟨", name: "JavaScript", level: 95 },
    { icon: "🔷", name: "TypeScript", level: 85 },
    { icon: "🐍", name: "Python", level: 80 },
    { icon: "🎨", name: "CSS", level: 90 },
    { icon: "🗄️", name: "Node.js", level: 78 },
    { icon: "🐘", name: "PostgreSQL", level: 72 },
    { icon: "🐙", name: "Git", level: 88 }
];

// ======================
// PROJECTS
// ======================

const projects = {
    uz: [
        {
            emoji: "🚗",
            title: "AvtoShop",
            tags: ["React", "Node.js", "MongoDB"],
            desc: "Avtomobil savdo platformasi.",
            demo: "https://oybarchinroziqulova23-beep.github.io/AvtoShop",
            code: "https://oybarchinroziqulova23-beep.github.io/AvtoShop"
        },
        {
            emoji: "🏠",
            title: "DormitoryFinder",
            tags: ["Next.js", "Firebase"],
            desc: "Talabalar uchun yotoqxona tizimi.",
            demo: "https://preview--syntax-sanctuary-app.lovable.app/",
            code: "https://preview--syntax-sanctuary-app.lovable.app/"
        },
        {
            emoji: "📚",
            title: "Library",
            tags: ["React", "Express"],
            desc: "Kutubxona boshqaruv tizimi.",
            demo: "#",
            code: "#"
        }
    ],

    en: [
        {
            emoji: "🚗",
            title: "AvtoShop",
            tags: ["React", "Node.js", "MongoDB"],
            desc: "Vehicle marketplace platform.",
            demo: "https://preview--syntax-sanctuary-app.lovable.app/",
            code: "https://preview--syntax-sanctuary-app.lovable.app/"
        },
        {
            emoji: "🏠",
            title: "DormitoryFinder",
            tags: ["Next.js", "Firebase"],
            desc: "Student dormitory platform.",
            demo: "https://preview--syntax-sanctuary-app.lovable.app/",
            code: "https://preview--syntax-sanctuary-app.lovable.app/"
        },
        {
            emoji: "📚",
            title: "Library",
            tags: ["React", "Express"],
            desc: "Library management system.",
            demo: "#",
            code: "#"
        }
    ]
};

// ======================
// RENDER SKILLS
// ======================

function renderSkills() {

    const grid = document.getElementById("skillsGrid");

    grid.innerHTML = skills.map(skill => `
        <div class="skill-card animate">
            <div class="skill-icon">${skill.icon}</div>
            <div class="skill-name">${skill.name}</div>

            <div class="skill-bar-wrap">
                <div class="skill-bar"
                     data-level="${skill.level}">
                </div>
            </div>
        </div>
    `).join("");
}

// ======================
// RENDER PROJECTS
// ======================

function renderProjects() {

    const grid =
        document.getElementById("projectsGrid");

    grid.innerHTML =
        projects[lang]
        .map(project => `
        <div class="project-card animate">

            <div class="project-img">
                ${project.emoji}
            </div>

            <div class="project-body">

                <div class="project-tags">
                    ${project.tags.map(tag =>
                        `<span class="tag">${tag}</span>`
                    ).join("")}
                </div>

                <div class="project-title">
                    ${project.title}
                </div>

                <div class="project-desc">
                    ${project.desc}
                </div>

                <div class="project-links">

                    <a href="${project.demo}"
                       class="project-link">
                        🚀 Demo
                    </a>

                    <a href="${project.code}"
                       class="project-link">
                        💻 Code
                    </a>

                </div>

            </div>

        </div>
    `).join("");

    observeAnimations();
}

// ======================
// LANGUAGE APPLY
// ======================

function applyLang() {

    document
        .querySelectorAll("[data-i18n]")
        .forEach(el => {

            const key =
                el.getAttribute("data-i18n");

            if (translations[lang][key]) {

                el.textContent =
                    translations[lang][key];
            }
        });

    document
        .getElementById("langBtn")
        .textContent =
        lang === "uz"
            ? "EN"
            : "UZ";

    renderProjects();
}

function toggleLang() {

    lang =
        lang === "uz"
        ? "en"
        : "uz";

    applyLang();
}

// ======================
// THEME
// ======================

let dark = true;

function toggleTheme() {

    dark = !dark;

    document.documentElement.setAttribute(
        "data-theme",
        dark ? "dark" : "light"
    );

    document.getElementById("themeBtn")
        .textContent =
        dark
            ? "🌙"
            : "☀️";
}

// ======================
// TOAST
// ======================

function showToast(message) {

    const toast =
        document.getElementById("toast");

    document.getElementById("toastMsg")
        .textContent = message;

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}

// ======================
// FORM
// ======================

function submitForm() {

    const name =
        document.getElementById("cName").value.trim();

    const email =
        document.getElementById("cEmail").value.trim();

    const msg =
        document.getElementById("cMsg").value.trim();

    if (!name || !email || !msg) {

        showToast(
            lang === "uz"
                ? "Barcha maydonlarni to'ldiring"
                : "Fill all fields"
        );

        return;
    }

    showToast(
        translations[lang]["toast.sent"]
    );

    document.getElementById("cName").value = "";
    document.getElementById("cEmail").value = "";
    document.getElementById("cMsg").value = "";
}

// ======================
// ANIMATION
// ======================

function observeAnimations() {

    const observer =
        new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target
                        .classList
                        .add("visible");

                    const bar =
                        entry.target.querySelector(".skill-bar");

                    if (bar) {

                        bar.style.width =
                            bar.dataset.level + "%";
                    }
                }
            });

        }, {
            threshold: 0.2
        });

    document
        .querySelectorAll(".animate")
        .forEach(el =>
            observer.observe(el)
        );
}

// ======================
// CURSOR
// ======================

const cursor =
    document.getElementById("cursor");

const ring =
    document.getElementById("cursorRing");

document.addEventListener("mousemove", e => {

    cursor.style.left =
        e.clientX + "px";

    cursor.style.top =
        e.clientY + "px";

    ring.style.left =
        e.clientX + "px";

    ring.style.top =
        e.clientY + "px";
});

// ======================
// ACTIVE MENU
// ======================

window.addEventListener("scroll", () => {

    const sections =
        document.querySelectorAll("section");

    const links =
        document.querySelectorAll(".nav-links a");

    let current = "";

    sections.forEach(section => {

        const top =
            section.offsetTop - 150;

        if (scrollY >= top) {
            current = section.id;
        }
    });

    links.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href")
            === "#" + current
        ) {
            link.classList.add("active");
        }
    });
});

// ======================
// INIT
// ======================

renderSkills();
renderProjects();
applyLang();
observeAnimations();