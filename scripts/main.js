const { createApp } = Vue;

createApp({
    data() {
        return {
            profileName: 'Henrix Moyo',
            showPanel: false,
            showAllExperience: false,
            activeTab: 'about',
            socialLinks: {
                github: 'https://github.com/Henrix06',
                linkedin: 'https://www.linkedin.com/in/henrix-moyo-a7289b11a',
                website: 'https://henrix.co.zw'
            },
            memberDetails: {
                name: 'Henrix Moyo',
                role: 'Software Developer | Full-Stack Engineer | C# / PHP Developer',
                mobile: '+263 777 982 884',
                email: 'henrixm@protonmail.com',
                linkedin: 'linkedin.com/in/henrix-moyo-a7289b11a',
                topSkills: 'PHP, C#, Laravel, .NET, JavaScript',
                certifications: [
                    { name: 'Cybersecurity Essentials (LFC108)' },
                    { name: 'Introduction to Cloud Infrastructure Technologies' }
                ],
                workExperience: [
                    {
                        title: 'Software Developer',
                        company: 'National University of Science and Technology (NUST)',
                        duration: 'Feb 2024 – Present',
                        location: 'Zimbabwe',
                        responsibilities: [
                            'Designed and deployed scalable web platforms to improve accessibility and usability across university systems',
                            'Developed an internal intranet system, improving staff communication and information access',
                            'Built a job application portal, streamlining recruitment workflows and reducing manual processes',
                            'Engineered an alumni management system, enabling user engagement and data connectivity',
                            'Improved application performance and user experience through system optimization'
                        ]
                    },
                    {
                        title: 'Freelance Software Developer',
                        company: 'Remote',
                        duration: 'Feb 2022 – Present',
                        location: 'Remote',
                        responsibilities: [
                            'Designed, developed, and maintained client web applications across multiple industries',
                            'Improved website performance through optimization techniques, reducing load times and increasing engagement',
                            'Implemented security best practices to safeguard applications and user data',
                            'Provided technical support, debugging, and system maintenance',
                            'Built dynamic web solutions using PHP, Laravel, and frontend technologies'
                        ]
                    },
                    {
                        title: 'Unity Game Developer',
                        company: 'ShiftSpace',
                        duration: 'Jun 2022 – Jun 2024',
                        location: 'Zimbabwe',
                        responsibilities: [
                            'Developed cross-platform applications using Unity and C#',
                            'Built interactive gameplay systems and prototypes',
                            'Integrated APIs and third-party services into applications',
                            'Collaborated with cross-functional teams to deliver high-quality user experiences',
                            'Wrote clean, maintainable, and reusable code'
                        ]
                    },
                    {
                        title: 'Game Developer',
                        company: 'ShiftSpace',
                        duration: 'Feb 2021 – Jun 2022',
                        location: 'Zimbabwe',
                        responsibilities: [
                            'Developed gameplay mechanics and system features using C#',
                            'Participated in collaborative development and version control workflows',
                            'Rapidly learned and implemented new tools and technologies'
                        ]
                    },
                    {
                        title: 'Webmaster',
                        company: 'NivaCity',
                        duration: 'Jun 2022 – Jul 2023',
                        location: 'South Africa',
                        responsibilities: [
                            'Managed website infrastructure, databases, and hosting environments',
                            'Monitored and improved system performance and uptime',
                            'Implemented SEO strategies to increase traffic and engagement',
                            'Strengthened website security and reliability',
                            'Resolved technical issues and maintained system stability'
                        ]
                    },
                    {
                        title: 'Website Developer & Webmaster',
                        company: 'Kingstone Brand Management Agency',
                        duration: 'Aug 2021 – Jan 2022',
                        location: 'Zimbabwe',
                        responsibilities: [
                            'Developed and deployed websites from concept to production',
                            'Designed user interfaces and navigation systems',
                            'Improved performance through caching and optimization techniques',
                            'Increased website traffic through SEO implementation',
                            'Maintained backend systems and databases'
                        ]
                    },
                    {
                        title: 'Intern – Web Development',
                        company: 'Kingstone Brand Management Agency',
                        duration: 'Dec 2020 – Jul 2021',
                        location: 'Zimbabwe',
                        responsibilities: [
                            'Tested, debugged, and maintained web applications',
                            'Collaborated with developers and designers on production systems',
                            'Ensured compliance with web standards and best practices',
                            'Contributed to development of new features'
                        ]
                    }
                ],
                coreCompetencies: 'API Development, System Design, Performance Optimization, Web Security, Backend Architecture, Database Management, SEO, Git, Linux Servers',
                education: 'Bachelor of Science in Computer Science — National University of Science and Technology (2018 – 2022)',
                yearsExperience: 4,
                currentRole: 'Software Developer'
            }
        }
    },
    computed: {
        visibleWorkExperience() {
            if (this.showAllExperience) {
                return this.memberDetails.workExperience;
            }
            return this.memberDetails.workExperience.slice(0, 2);
        },
        hasMoreExperience() {
            return this.memberDetails.workExperience.length > 2;
        }
    },
    mounted() {
        this._onKeydown = (e) => { if (e.key === 'Escape' && this.showPanel) this.closePanel(); };
        document.addEventListener('keydown', this._onKeydown);
        this._rafPending = false;
        this._depthEls = [];
        this.$nextTick(() => this._initParallax());
    },
    unmounted() {
        document.removeEventListener('keydown', this._onKeydown);
    },
    methods: {
        handleMouseMove(e) {
            // No-op if parallax disabled (touch/reduced-motion)
            if (!this._depthEls.length) return;
            // Throttle to one update per animation frame
            if (this._rafPending) return;
            this._rafPending = true;

            requestAnimationFrame(() => {
                this._rafPending = false;
                const card = this.$refs.card;
                if (!card) return;

                const rect = card.getBoundingClientRect();
                const nx = ((e.clientX - rect.left) / rect.width  - 0.5) * 2;
                const ny = ((e.clientY - rect.top)  / rect.height - 0.5) * 2;

                // Write card tilt directly to style — bypasses Vue reactivity
                card.style.transform = `perspective(1000px) rotateX(${ny * -10}deg) rotateY(${nx * 10}deg) scale3d(1.02,1.02,1.02)`;
                card.style.transition = 'none';

                // Shine
                card.style.setProperty('--mouse-x', `${(nx * 50 + 50)}%`);
                card.style.setProperty('--mouse-y', `${(ny * 50 + 50)}%`);

                // Per-layer parallax — use cached node list
                this._depthEls.forEach(el => {
                    const depth = el._depth;
                    el.style.transform = `translateZ(${depth}px) translate(${nx * depth * 0.4}px, ${ny * depth * 0.4}px)`;
                });
            });
        },
        handleMouseLeave() {
            this._rafPending = false;
            const card = this.$refs.card;
            if (!card) return;

            card.style.transition = 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)';

            this._depthEls.forEach(el => {
                el.style.transition = 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
                el.style.transform = `translateZ(${el._depth}px) translate(0px, 0px)`;
            });

            // Remove will-change after animation settles
            setTimeout(() => {
                card.style.willChange = 'auto';
                this._depthEls.forEach(el => { el.style.willChange = 'auto'; });
            }, 650);
        },
        _initParallax() {
            // Skip on touch devices and when user prefers reduced motion
            if (window.matchMedia('(hover: none)').matches) return;
            if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

            const card = this.$refs.card;
            if (!card) return;
            // Cache depth elements and parse depth once
            this._depthEls = Array.from(card.querySelectorAll('[data-depth]'));
            this._depthEls.forEach(el => { el._depth = parseFloat(el.dataset.depth); });
            // Prime will-change only on first hover
            card.addEventListener('mouseenter', () => {
                card.style.willChange = 'transform';
                this._depthEls.forEach(el => { el.style.willChange = 'transform'; });
            }, { passive: true });
        },
        viewMember() {
            this.showPanel = true;
            this.activeTab = 'about';
            document.body.style.overflow = 'hidden';
        },
        closePanel() {
            this.showPanel = false;
            document.body.style.overflow = '';
        },
        viewGitHub() {
            window.open('https://github.com/Henrix06', '_blank');
        },
        goToPortfolio() {
            window.location.href = 'portfolio.html';
        },
        toggleExperience() {
            this.showAllExperience = !this.showAllExperience;
        }
    }
}).mount('#app');