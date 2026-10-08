document.addEventListener("DOMContentLoaded", () => {
    const card = document.querySelector(".profile-card");

    if (card) {

        card.addEventListener("mousemove", (event) => {

            const rect = card.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX =
                ((y - centerY) / centerY) * -8;

            const rotateY =
                ((x - centerX) / centerX) * 8;

            card.style.transform =
                `rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-5px)`;
        });


        card.addEventListener("mouseleave", () => {

            card.style.transform =
                "rotateX(0deg) rotateY(0deg) translateY(0)";
        });
    }


    const cursorGlow =
        document.createElement("div");

    cursorGlow.className =
        "cursor-glow";

    document.body.appendChild(cursorGlow);


    document.addEventListener("mousemove", (event) => {

        cursorGlow.style.left =
            `${event.clientX}px`;

        cursorGlow.style.top =
            `${event.clientY}px`;
    });


    const revealElements =
        document.querySelectorAll(
            ".section, .skill-card, .project-card, .about-stats div"
        );


    revealElements.forEach((element) => {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(40px)";

        element.style.transition =
            "opacity 0.8s ease, transform 0.8s ease";
    });


    const revealObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.style.opacity = "1";

                        entry.target.style.transform =
                            "translateY(0)";

                        revealObserver.unobserve(
                            entry.target
                        );
                    }
                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach((element) => {

        revealObserver.observe(element);
    });


    const sections =
        document.querySelectorAll("section[id]");

    const navLinks =
        document.querySelectorAll(".navbar nav a");


    window.addEventListener("scroll", () => {

        let currentSection = "";

        sections.forEach((section) => {

            const sectionTop =
                section.offsetTop - 180;

            const sectionHeight =
                section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY <
                    sectionTop + sectionHeight
            ) {

                currentSection =
                    section.getAttribute("id");
            }
        });


        navLinks.forEach((link) => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                `#${currentSection}`
            ) {

                link.classList.add("active");
            }
        });
    });

    document
        .querySelectorAll('a[href^="#"]')
        .forEach((link) => {

            link.addEventListener("click", (event) => {

                const targetId =
                    link.getAttribute("href");

                if (targetId === "#") return;

                const target =
                    document.querySelector(targetId);

                if (!target) return;

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            });
        });

    const heroTitle =
        document.querySelector(".hero h2");

    if (heroTitle) {

        const originalText =
            heroTitle.textContent.trim();

        heroTitle.textContent = "";

        let index = 0;

        function typeText() {

            if (index < originalText.length) {

                heroTitle.textContent +=
                    originalText.charAt(index);

                index++;

                setTimeout(typeText, 60);
            }
        }

        setTimeout(typeText, 700);
    }

    const buttons =
        document.querySelectorAll(
            ".primary-btn, .secondary-btn, .nav-btn"
        );


    buttons.forEach((button) => {

        button.addEventListener(
            "click",
            function (event) {

                const ripple =
                    document.createElement("span");

                const rect =
                    button.getBoundingClientRect();

                const size =
                    Math.max(
                        rect.width,
                        rect.height
                    );

                ripple.style.width =
                    `${size}px`;

                ripple.style.height =
                    `${size}px`;

                ripple.style.left =
                    `${event.clientX - rect.left - size / 2}px`;

                ripple.style.top =
                    `${event.clientY - rect.top - size / 2}px`;

                ripple.classList.add("ripple");

                button.appendChild(ripple);

                setTimeout(() => {

                    ripple.remove();

                }, 600);
            }
        );
    });
    console.log(
        "%c Md Masum Parvej ",
        "background:#8b5cf6;color:white;font-size:20px;padding:10px;border-radius:8px;"
    );

    console.log(
        "Welcome to my personal website 🚀"
    );

});