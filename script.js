/* ====== Data: Projects (fill images later in assets/projects/) ====== */
const projects = {
  1: {
    title: "Stock Management System",
    description: "A full-stack SaaS application for managing inventory, tracking stock movements, handling suppliers and customers, and generating various types of invoices. Built with Angular and Spring Boot, using PostgreSQL for data storage and secured with Keycloak. Supports payment processing and user management, with Docker and GitLab CI/CD for DevOps and deployment automation.",
     tech: ["angular", "spring", "postgresql","docker", "gitlabcicd", "keycloak"],

    images: [
      "assets/projects/fs1.png",
            "assets/projects/fs2.png",
      "assets/projects/fs3.png",
      "assets/projects/fs4.png",
      "assets/projects/fs5.png",
      "assets/projects/fs6.png",
      "assets/projects/fs7.png",
      "assets/projects/fs8.png",
      "assets/projects/fs9.png",
      "assets/projects/fs10.png",
      "assets/projects/fs11.png",
      "assets/projects/fs12.png",
      "assets/projects/fs13.png",
      "assets/projects/fs14.png",
      "assets/projects/fs15.png",
            "assets/projects/fs16.png"

    ],
    github: "#"
  },
  2: {
    title: "Student Enrollment System",
         tech: ["java", "postgresql"],

    description: "A Java Swing desktop application designed to manage teachers, students, and enrollments efficiently. It handles payment management and allows generating customized PDF reports for individual trainings as well as complete data tables. Built with PostgreSQL, the system streamlines administrative tasks, scheduling, and record-keeping for training centers.",
    images: [
      "assets/projects/BritishAcademy2.png",
      "assets/projects/BritishAcademy1.png",
      "assets/projects/BritishAcademy4.png",
      "assets/projects/BritishAcademy3.png",
      "assets/projects/BritishAcademy5.png"
    ],
    github: "#"
  },
  3: {
    title: "Carpooling & Cargo Management System",
             tech: ["symfony", "mysql"],

    description: "Platform to manage carpool trips and cargo shipments. Users can book trips without overbooking, and shipping companies can reserve and track cargo based on weight. Companies can post trips, enabling seamless booking and full management for users, drivers, and shippers.",
    images: [
      "assets/projects/carpooling2.png",
      "assets/projects/carpooling3.png",
      "assets/projects/carpooling4.png",
      "assets/projects/carpooling5.png",
      "assets/projects/carpooling6.png",
      "assets/projects/carpooling7.png",
      "assets/projects/carpooling8.png",
      "assets/projects/carpooling9.png",
      "assets/projects/carpooling10.png",
      "assets/projects/carpooling11.png",
      "assets/projects/carpooling12.png",
      "assets/projects/carpooling13.png",
      "assets/projects/carpooling14.png"
    ],
    github: "#"
  },
  4: {
    title: "Library Management System",
                 tech: ["c", "excel"],

    description: "Desktop application using Excel as the database, serving as a digital library to manage members and the existing book collection efficiently.",
    images: [
      "assets/projects/library3.png",
      "assets/projects/library5.png",
      "assets/projects/library6.png",
      "assets/projects/library7.png",
      "assets/projects/library8.png",
      "assets/projects/library2.png"
    ],
    github: "#"
  },
  5: {
    title: "Gaming & Player Management Platform",
                 tech: ["symfony", "mysql"],

    description: "Web application to manage games and players, including detailed game information, player profiles, and tracking which games each player engages with.",
    images: [
      "assets/projects/gaming.png",
            "assets/projects/gaming3.png",
                        "assets/projects/gaming1.png",

      "assets/projects/gaming2.png",
      "assets/projects/gaming4.png"
    ],
    github: "#"
  },
  6: {
    title: "Digital Library Platform",
                tech: ["angular", "nodejs", "mongodb"],

    description: "A lightweight web application for managing books, authors, and their relationships, providing an intuitive interface for browsing and organizing content.",
    images: [
      "assets/projects/lib1.png",
            "assets/projects/lib3.png",
      "assets/projects/lib2.png",
      "assets/projects/lib4.png"

    ],
    github: "#"
  },
  7: {
    title: "Beauty Clinic Website",
                tech: ["html", "css", "javascript", "php"],

    description: "Interactive website showcasing the clinic’s services and offerings with a professional design and smooth user experience.",
    images: [
      "assets/projects/BeautyClinic1.jpg",
      "assets/projects/BeautyClinic2.jpg",
      "assets/projects/BeautyClinic3.jpg",
      "assets/projects/BeautyClinic4.jpg"
        ],
    github: "#"
  },
  8: {
    title: "Flight Management System ",
                tech: ["java", "mysql"],

    description: "Desktop application for managing flights, airports, and transit operations, providing a complete overview of schedules and bookings.",
    images: [
      "assets/projects/vol2.png",
            "assets/projects/vol1.png",
      "assets/projects/vol5.png",
      "assets/projects/vol4.png",
      "assets/projects/vol6.png",
      "assets/projects/vol7.png"
    ],
    github: "#"
  },
  9: {
    title: "E-commerce Website",
                tech: ["wordpress", "mysql"],

    description: "A complete e-commerce platform showcasing and selling a wide range of electronic accessories, with product catalog and shopping cart.",
    images: [  
      "assets/projects/E-commerce1.png",
      "assets/projects/E-commerce2.png",
      "assets/projects/E-commerce3.png",
      "assets/projects/E-commerce4.png",
      "assets/projects/E-commerce5.png",
      "assets/projects/E-commerce6.png",
      "assets/projects/E-commerce7.png",
      "assets/projects/E-commerce8.png",
      "assets/projects/E-commerce9.png",
      "assets/projects/E-commerce10.png",
      "assets/projects/E-commerce11.png",
      "assets/projects/E-commerce12.png",
      "assets/projects/E-commerce13.png",
      "assets/projects/E-commerce14.png",
      "assets/projects/E-commerce15.png"
    ],
    github: "#"
  },
  10: {
    title: "Data Analytics Dashboard",
    tech: ["powerbi", "superset", "angular"],
    description: "A comprehensive dashboard built with Power BI, Apache Superset, and Angular, enabling analysis and visualization of data from multiple sources, including databases, XML tables, and other structured datasets.",
    images: [
      "assets/projects/dashboard.png",
      "assets/projects/dashboard2.png",
      "assets/projects/dashboard3.png",
      "assets/projects/dashboard4.png"
    ],
    github: "#"
  },
  // add more projects if needed
};

/* ====== Modal & Swiper handling ====== */
let swiperInstance = null;

function createModalDesc() {
  const desc = document.createElement("p");
  desc.id = "modalTech";
  document.querySelector(".modal-inner").appendChild(desc);
  return desc;
}
function openProject(id) {
  const modal = document.getElementById("projectModal");
  const title = document.getElementById("modalTitle");
  const desc = document.getElementById("modalTech") || createModalDesc();
  const imagesContainer = document.getElementById("modalImages");
  const techContainer = document.getElementById("modalTechContainer");

  const p = projects[id];
  if (!p) return;

  // تنظيف المحتوى السابق
  imagesContainer.innerHTML = "";
  techContainer.innerHTML = "";

  // العنوان والوصف
  title.textContent = p.title;
  desc.textContent = p.description;

  /* ====== إضافة أيقونات التكنولوجيات ====== */
  if (p.tech) {
    p.tech.forEach(t => {
      if (techIcons[t]) {
        const circle = document.createElement("div");
        circle.className = "tech-circle";
        circle.innerHTML = `<img src="${techIcons[t]}" alt="${t}">`;
        techContainer.appendChild(circle);
      }
    });
  }

  // إضافة الصور في السلايدر
  if (p.images) {
    p.images.forEach(src => {
      const slide = document.createElement("div");
      slide.className = "swiper-slide";
      slide.innerHTML = `<img src="${src}" alt="${p.title} image">`;
      imagesContainer.appendChild(slide);
    });
  }

  // إظهار المودال
  modal.style.display = "flex";
  modal.style.justifyContent = "center";
  modal.style.alignItems = "center";
  modal.style.position = "fixed";
  modal.style.top = "0";
  modal.style.left = "0";
  modal.style.width = "100%";
  modal.style.height = "100%";
  modal.style.zIndex = "9999";
  modal.style.backgroundColor = "rgba(0,0,0,0.5)";

  // تدمير أي swiper سابق
  if (swiperInstance && swiperInstance.destroy) {
    swiperInstance.destroy(true, true);
    swiperInstance = null;
  }

  swiperInstance = new Swiper('.mySwiper', {
    loop: false,
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    pagination: { el: '.swiper-pagination', clickable: true },
  });
}



// إغلاق الـ modal عند الضغط على الخلفية أو زر الإغلاق
document.getElementById("projectModal").addEventListener("click", (e) => {
  if (e.target.id === "projectModal" || e.target.classList.contains("modal-close")) {
    e.currentTarget.style.display = "none";
    if (swiperInstance && swiperInstance.destroy) {
      swiperInstance.destroy(true, true);
      swiperInstance = null;
    }
  }
});

// تعديل استدعاء الكارت
document.querySelectorAll('.project-card').forEach((card, idx) => {
  card.addEventListener('click', () => openProject(idx + 1));
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openProject(idx + 1);
    }
  });
});



/* ====== Theme Toggle (Dark Mode) ====== */
const themeToggle = document.getElementById("themeToggle");

function applyTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    document.documentElement.removeAttribute('data-theme');
    themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
  localStorage.setItem('preferred-theme', theme);
}

const savedTheme = localStorage.getItem('preferred-theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
applyTheme(savedTheme);

themeToggle.addEventListener('click', () => {
  const current = localStorage.getItem('preferred-theme') === 'dark' ? 'dark' : 'light';
  applyTheme(current === 'dark' ? 'light' : 'dark');
});

/* ====== Hamburger (mobile nav) ====== */
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.style.display = (navLinks.style.display === 'flex') ? '' : 'flex';
});

document.querySelectorAll('.nav-link').forEach(a => {
  a.addEventListener('click', () => {
    if (window.innerWidth < 860) navLinks.style.display = '';
  });
});

/* ====== Smooth scroll ====== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ====== Footer year ====== */
document.getElementById('year').textContent = new Date().getFullYear();

/* ====== Contact Form via EmailJS ====== */
emailjs.init("JnHBl_JvPmKvIIh_v");

function submitContactForm(event) {
    event.preventDefault();

    let params = {
        name: document.getElementById("senderName").value,
        email: document.getElementById("senderEmail").value,
        title: document.getElementById("mailSubject").value,
        message: document.getElementById("mailMessage").value
    };

    emailjs.send("service_n62gr7f", "template_msxqqcb", params)
        .then(() => {
            showToast("Your message has been sent successfully!", true);

            // تفريغ الحقول
            document.getElementById("senderName").value = "";
            document.getElementById("senderEmail").value = "";
            document.getElementById("mailSubject").value = "";
            document.getElementById("mailMessage").value = "";
        })
        .catch(error => {
            showToast("Failed to send message. Please try again.", false);
            console.log(error);
        });
}

window.submitContactForm = submitContactForm;

function showToast(message, success = true) {
    const toast = document.getElementById("toast");
    toast.textContent = message;

    // تغيير لون حسب نوع الرسالة
    toast.style.backgroundColor = success ? "#4caf50" : "#f44336"; // أخضر أو أحمر

    toast.classList.add("show");

    // إخفاء الرسالة بعد 3 ثواني
    setTimeout(() => {
        toast.classList.remove("show");
    }, 7000);
}

/* ====== Icons Map (skills icons already existing) ====== */
const techIcons = {
  java: "assets/icons/java.png",
  javascript: "assets/icons/javascript.png",
  html: "assets/icons/html.png",
  css: "assets/icons/css.png",
  angular: "assets/icons/angular.png",
  php: "assets/icons/php.png",
  mysql: "assets/icons/mysql.png",
  postgresql: "assets/icons/postgresql.png",

  spring: "assets/icons/springboot.png",
  nodejs: "assets/icons/nodejs.png",
  devops: "assets/icons/devops.png",
  symfony: "assets/icons/symfony.png",
    wordpress: "assets/icons/wordpress.png",
        c: "assets/icons/c.png",
    excel: "assets/icons/excel.png",
mongodb: "assets/icons/mongodb.png",
powerbi: "assets/icons/powerbi.png",
superset: "assets/icons/superset.png",
gitlabcicd:"assets/icons/gitlabcicd.png",
docker: "assets/icons/docker.png",
  keycloak: "assets/icons/keycloak.png"
};
