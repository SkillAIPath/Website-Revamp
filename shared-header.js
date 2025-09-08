function loadHeader() {
    const headerHTML = `
        <div class="header-main">
            <a href="index.html" class="logo-brand" aria-label="SkillAI Path - Go to Homepage">
                <img src="Assets/Skill-Logo.png" alt="SkillAI Path Logo">
                <span class="brand-text">SkillAI Path</span>
            </a>
            <button class="mobile-menu-toggle" aria-label="Toggle navigation menu" aria-expanded="false">
                <span class="hamburger-line"></span>
                <span class="hamburger-line"></span>
                <span class="hamburger-line"></span>
            </button>
            <nav class="main-nav">
                <a href="index.html">Home</a>
                <a href="courses.html">Courses</a>
                <a href="success-stories.html">Success Stories</a>
                <a href="Strategy Call.html">Free Strategy Call</a>
                <a href="contact.html">Contact</a>
            </nav>
        </div>
        
        <!-- Mobile Bottom Navigation -->
        <nav class="mobile-bottom-nav">
            <div class="bottom-nav-container">
                <a href="index.html" class="nav-item" data-page="index">
                    <span class="nav-icon">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                        </svg>
                    </span>
                    <span class="nav-label">Home</span>
                </a>
                <a href="courses.html" class="nav-item" data-page="courses">
                    <span class="nav-icon">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                        </svg>
                    </span>
                    <span class="nav-label">Courses</span>
                </a>
                <a href="#" class="nav-item nav-cta" onclick="openGiftPopup(); return false;" data-page="strategy">
                  <span class="nav-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"/>
                    </svg>
                  </span>
                  <span class="nav-label">Free Gift</span>
                </a>
                <a href="success-stories.html" class="nav-item" data-page="success">
                    <span class="nav-icon">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                    </span>
                    <span class="nav-label">Stories</span>
                </a>
                <a href="contact.html" class="nav-item" data-page="contact">
                    <span class="nav-icon">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                        </svg>
                    </span>
                    <span class="nav-label">Contact</span>
                </a>
            </div>
        </nav>
    `;
    
    document.getElementById('shared-header').innerHTML = headerHTML;
    
    // Add mobile menu functionality for hamburger (existing functionality)
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

        // Close menu when clicking outside (but not on logo)
        document.addEventListener('click', function(e) {
            const logoClick = e.target.closest('.logo-brand');
            if (!mobileToggle.contains(e.target) && !mainNav.contains(e.target) && !logoClick) {
                mainNav.classList.remove('nav-open');
                document.body.classList.remove('nav-open');
                mobileToggle.setAttribute('aria-expanded', 'false');
            }
        });

        // Close menu on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && mainNav.classList.contains('nav-open')) {
                mainNav.classList.remove('nav-open');
                document.body.classList.remove('nav-open');
                mobileToggle.setAttribute('aria-expanded', 'false');
                mobileToggle.focus();
            }
        });

        // Handle window resize
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                mainNav.classList.remove('nav-open');
                document.body.classList.remove('nav-open');
                mobileToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // Set active navigation link based on current page (desktop nav)
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const desktopNavLinks = document.querySelectorAll('.main-nav a');
    
    desktopNavLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || 
            (currentPage === '' && linkPage === 'index.html') ||
            (currentPage === 'index.html' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });

    // Set active navigation for bottom nav
    const bottomNavLinks = document.querySelectorAll('.mobile-bottom-nav .nav-item');
    
    bottomNavLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        const dataPage = link.getAttribute('data-page');
        
        // Check for active page
        if (linkPage === currentPage || 
            (currentPage === '' && linkPage === 'index.html') ||
            (currentPage === 'index.html' && linkPage === 'index.html') ||
            (currentPage.includes('strategy') && dataPage === 'strategy') ||
            (currentPage.includes('success') && dataPage === 'success')) {
            link.classList.add('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', loadHeader);
