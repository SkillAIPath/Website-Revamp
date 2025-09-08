function loadHeader() {
    const headerHTML = `
        <div class="header-top">
            <div class="left">
                <span>📍India</span>
                <span>+91 9301310154</span>
                <span class="email-contact">tech@skillaipath.com</span>
            </div>
            <div class="right">
                <span class="follow-text">Follow us:</span>
                <div class="social-links">
                    <a href="#" aria-label="Facebook"><img src="https://img.icons8.com/ios-glyphs/24/32ddb8/facebook-new.png" alt="Facebook"></a>
                    <a href="#" aria-label="Twitter"><img src="https://img.icons8.com/ios-glyphs/24/32ddb8/twitter--v1.png" alt="Twitter"></a>
                    <a href="#" aria-label="LinkedIn"><img src="https://img.icons8.com/ios-glyphs/24/32ddb8/linkedin.png" alt="LinkedIn"></a>
                </div>
            </div>
        </div>
        <div class="header-main">
            <div class="logo-brand">
                <img src="Assets/Skill-Logo.png" alt="SkillAI Path Logo">
                <span class="brand-text">SkillAI Path</span>
            </div>
            <button class="mobile-menu-toggle" aria-label="Toggle navigation menu" aria-expanded="false">
                <span class="hamburger-line"></span>
                <span class="hamburger-line"></span>
                <span class="hamburger-line"></span>
            </button>
            <nav class="main-nav">
                <a href="index.html">Home</a>
                <a href="courses.html">Courses</a>
                <a href="success-stories.html">Success Stories</a>
                <a href="strategy-call.html">Free Strategy Call</a>
                <a href="contact.html">Contact</a>
            </nav>
        </div>
    `;
    
    document.getElementById('shared-header').innerHTML = headerHTML;
    
    // Add mobile menu functionality
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileToggle && mainNav) {
        mobileToggle.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            mainNav.classList.toggle('nav-open');
            document.body.classList.toggle('nav-open');
        });

        // Close menu when clicking on nav links
        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('nav-open');
                document.body.classList.remove('nav-open');
                mobileToggle.setAttribute('aria-expanded', 'false');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileToggle.contains(e.target) && !mainNav.contains(e.target)) {
                mainNav.classList.remove('nav-open');
                document.body.classList.remove('nav-open');
                mobileToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', loadHeader);
