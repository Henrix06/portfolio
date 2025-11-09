const { createApp } = Vue;

createApp({
    data() {
        return {
            profileName: 'Henrix Moyo',
            status: 'Available',
            username: '@henrixmoyo',
            timestamp: 'Online now',
            userInitials: 'HM',
            rotateX: 0,
            rotateY: 0,
            mouseX: 50,
            mouseY: 50,
            showPanel: false,
            memberDetails: {
                name: 'Henrix Moyo',
                username: '@henrixmoyo',
                email: 'henrixmoyo@example.com', // Replace with actual email if available
                role: 'Software Developer',
                status: 'Active',
                bio: 'Experienced software developer with expertise in web technologies and modern development frameworks. Passionate about creating efficient and user-friendly applications.',
                joined: 'LinkedIn since 2025'
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
        }
    }
}).mount('#app');