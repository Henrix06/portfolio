const { createApp } = Vue;

createApp({
    data() {
        return {
            profileName: 'Henrix Bradley Moyo',
            status: 'Available',
            username: '@henrixmoyo',
            timestamp: 'Online now',
            userInitials: 'HM',
            rotateX: 0,
            rotateY: 0,
            mouseX: 50,
            mouseY: 50,
            showPanel: false,
            showAllExperience: false,
            socialLinks: {
                github: 'https://github.com/Henrix06',
                linkedin: 'https://www.linkedin.com/in/henrix-moyo-a7289b11a',
                website: 'https://certdirectory.io/profile/6cb8f4b7-5d5a-45e6-9357-dffec9b345d7'
            },
            memberDetails: {
                name: 'Henrix Bradley Moyo',
                role: 'Web Developer @ National University of Science and Technology | Computer Science',
                mobile: '+263777982884',
                email: 'henrixm@gmail.com',
                linkedin: 'www.linkedin.com/in/henrix-moyo-a7289b11a',
                topSkills: 'Web Development, DevOps, C#',
                certifications: [
                    { name: 'LFC108: Cybersecurity Essentials' },
                    { name: 'Introduction to Cloud Infrastructure Technologies' }
                ],
                workExperience: [
                    {
                        title: 'Web Developer',
                        company: 'National University of Science and Technology',
                        duration: 'February 2024 - Present (1 year 10 months)',
                        location: 'Bulawayo Province, Zimbabwe',
                        responsibilities: [
                            'Designed and rebuilt faculty websites to improve user experience and navigation',
                            'Developed an intranet site for internal operations and communication',
                            'Launched a job application portal, streamlining recruitment processes',
                            'Revamped the main university website to enhance functionality and accessibility',
                            'Collaborated with cross-functional teams to deliver seamless digital experiences'
                        ]
                    },
                    {
                        title: 'Web Developer and Webmaster',
                        company: 'Freelance',
                        duration: 'February 2022 - Present (3 years 10 months)',
                        location: 'Remote',
                        responsibilities: [
                            'Managed website performance, security, and optimization for multiple clients',
                            'Optimized websites for speed, usability, and search engine visibility',
                            'Developed and implemented content updates using HTML, CSS, and PHP',
                            'Troubleshot technical issues and provided ongoing maintenance support',
                            'Configured web servers and managed database operations'
                        ]
                    },
                    {
                        title: 'Unity3D Game Developer',
                        company: 'ShiftSpace',
                        duration: 'June 2022 - June 2024 (2 years 1 month)',
                        location: 'Bulawayo, Bulawayo, Zimbabwe',
                        responsibilities: [
                            'Leveraged Unity for mobile game development projects',
                            'Created engaging gameplay mechanics and user interfaces',
                            'Optimized game performance for mobile platforms',
                            'Collaborated with designers and artists to bring concepts to life'
                        ]
                    },
                    {
                        title: 'Game Developer',
                        company: 'ShiftSpace',
                        duration: 'February 2021 - June 2022 (1 year 5 months)',
                        location: 'Bulawayo, Bulawayo, Zimbabwe',
                        responsibilities: [
                            'Wrote clean, maintainable code following best practices',
                            'Coordinated cross-platform prototype development',
                            'Managed creative assets and source code using version control',
                            'Created and managed APIs for game services and integrations'
                        ]
                    },
                    {
                        title: 'Webmaster',
                        company: 'NivaCity',
                        duration: 'June 2022 - July 2023 (1 year 2 months)',
                        location: 'South Africa',
                        responsibilities: [
                            'Troubleshot web development issues and resolved technical problems',
                            'Configured and maintained web servers for optimal performance',
                            'Managed databases and ensured data integrity',
                            'Monitored websites for security vulnerabilities and performance metrics',
                            'Implemented SEO strategies to improve search engine rankings',
                            'Upgraded software, plugins, and maintained system security',
                            'Provided customer service and technical support'
                        ]
                    },
                    {
                        title: 'Website Developer & Webmaster',
                        company: 'Kingstone Brand Management Agency',
                        duration: 'August 2021 - January 2022 (6 months)',
                        location: 'Bulawayo, Zimbabwe',
                        responsibilities: [
                            'Developed websites from concept to completion',
                            'Created responsive layouts and user interfaces',
                            'Increased website traffic through SEO optimization',
                            'Implemented new design features and functionality',
                            'Reduced server response time for improved performance',
                            'Upgraded software and plugins to maintain security',
                            'Managed databases and ensured data integrity'
                        ]
                    },
                    {
                        title: 'Intern',
                        company: 'Interm',
                        duration: 'December 2020 - July 2021 (8 months)',
                        location: 'Bulawayo, Zimbabwe',
                        responsibilities: [
                            'Tested and debugged websites to ensure functionality',
                            'Collaborated with developers and designers on projects',
                            'Contributed to new and existing website development',
                            'Ensured W3C compliance and web standards adherence'
                        ]
                    }
                ],
                coreCompetencies: 'Web development, DevOps, HTML, PHP, WordPress, Unity3D, Mobile Development, SEO, Database Management, Web Server Configuration, API Development, Source Code Management',
                education: 'National University of Science and Technology - Computer Science (August 2018 - July 2022)',
                yearsExperience: 4,
                currentRole: 'Web Developer'
            }
        }
    },
    computed: {
        cardStyle() {
            return {
                transform: `perspective(1000px) rotateX(${this.rotateX}deg) rotateY(${this.rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
                transition: this.rotateX === 0 && this.rotateY === 0 ? 'transform 0.5s ease' : 'none'
            };
        },
        shineStyle() {
            return {
                '--mouse-x': `${this.mouseX}%`,
                '--mouse-y': `${this.mouseY}%`
            };
        },
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
    methods: {
        handleMouseMove(e) {
            const card = this.$refs.card;
            const rect = card.getBoundingClientRect();
            
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY) * -10;
            const rotateY = ((x - centerX) / centerX) * 10;
            
            this.rotateX = rotateX;
            this.rotateY = rotateY;
            
            this.mouseX = (x / rect.width) * 100;
            this.mouseY = (y / rect.height) * 100;
        },
        handleMouseLeave() {
            this.rotateX = 0;
            this.rotateY = 0;
        },
        viewMember() {
            this.showPanel = true;
        },
        closePanel() {
            this.showPanel = false;
        },
        sendMessage() {
            alert('Contact Henrix: https://www.linkedin.com/in/henrix-moyo-a7289b11a/');
        },
        viewProfile() {
            window.open('https://www.linkedin.com/in/henrix-moyo-a7289b11a/', '_blank');
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