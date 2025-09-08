function loadHeader() {
    const headerHTML = `
        <div class="header-main">
            <a href="index.html" class="logo-brand" aria-label="SkillAI Path - Go to Homepage">
                <img src="Assets/Skill-Logo.png" alt="SkillAI Path Logo">
                <span class="brand-text">SkillAI Path</span>
            </a>
            <button class="mobile-menu-toggle" aria-label="Toggle navigation menu" aria-expanded="false" type="button">
                <span class="hamburger-line"></span>
                <span class="hamburger-line"></span>
                <span class="hamburger-line"></span>
            </button>
            <nav class="main-nav" role="navigation" aria-label="Main navigation">
                <a href="index.html">Home</a>
                <a href="courses.html">Courses</a>
                <a href="success-stories.html">Success Stories</a>
                <a href="Strategy Call.html">Free Strategy Call</a>
                <a href="contact.html">Contact</a>
            </nav>
        </div>
    `;
    
    document.getElementById('shared-header').innerHTML = headerHTML;
    
    // ENHANCED Mobile menu functionality with debugging
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    console.log('Mobile toggle found:', mobileToggle); // Debug log
    console.log('Main nav found:', mainNav); // Debug log
    
    if (mobileToggle && mainNav) {
        // Remove any existing event listeners to prevent duplicates
        mobileToggle.replaceWith(mobileToggle.cloneNode(true));
        const newMobileToggle = document.querySelector('.mobile-menu-toggle');
        
        // Enhanced click handler with better error handling
        newMobileToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            console.log('Hamburger clicked!'); // Debug log
            
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            const newState = !isExpanded;
            
            // Update aria-expanded attribute
            this.setAttribute('aria-expanded', newState);
            
            // Toggle navigation
            if (newState) {
                mainNav.classList.add('nav-open');
                document.body.classList.add('nav-open');
                console.log('Menu opened'); // Debug log
            } else {
                mainNav.classList.remove('nav-open');
                document.body.classList.remove('nav-open');
                console.log('Menu closed'); // Debug log
            }
        });
        
        // Enhanced touch event support for mobile
        newMobileToggle.addEventListener('touchstart', function(e) {
            e.preventDefault();
            this.click();
        }, { passive: false });
        
        // Close menu when clicking on nav links
        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('nav-open');
                document.body.classList.remove('nav-open');
                newMobileToggle.setAttribute('aria-expanded', 'false');
                console.log('Menu closed via nav link'); // Debug log
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            const isClickInsideNav = mainNav.contains(e.target);
            const isClickOnToggle = newMobileToggle.contains(e.target);
            const isClickOnLogo = e.target.closest('.logo-brand');
            
            if (!isClickInsideNav && !isClickOnToggle && !isClickOnLogo && mainNav.classList.contains('nav-open')) {
                mainNav.classList.remove('nav-open');
                document.body.classList.remove('nav-open');
                newMobileToggle.setAttribute('aria-expanded', 'false');
                console.log('Menu closed via outside click'); // Debug log
            }
        });
        
        // Close menu on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && mainNav.classList.contains('nav-open')) {
                mainNav.classList.remove('nav-open');
                document.body.classList.remove('nav-open');
                newMobileToggle.setAttribute('aria-expanded', 'false');
                newMobileToggle.focus();
                console.log('Menu closed via escape key'); // Debug log
            }
        });
        
        // Handle window resize
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                mainNav.classList.remove('nav-open');
                document.body.classList.remove('nav-open');
                newMobileToggle.setAttribute('aria-expanded', 'false');
                console.log('Menu closed via resize'); // Debug log
            }
        });
        
        // Force initial state
        setTimeout(() => {
            newMobileToggle.setAttribute('aria-expanded', 'false');
            mainNav.classList.remove('nav-open');
            document.body.classList.remove('nav-open');
        }, 100);
        
    } else {
        console.error('Mobile toggle or main nav not found!');
    }
    
    // Set active navigation link based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.main-nav a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || 
            (currentPage === '' && linkPage === 'index.html') ||
            (currentPage === 'index.html' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// Enhanced initialization with better error handling
function initializeHeader() {
    try {
        loadHeader();
        console.log('Header loaded successfully');
    } catch (error) {
        console.error('Error loading header:', error);
        // Retry after a short delay
        setTimeout(() => {
            try {
                loadHeader();
                console.log('Header loaded on retry');
            } catch (retryError) {
                console.error('Header failed to load on retry:', retryError);
            }
        }, 500);
    }
}

// Multiple initialization methods to ensure it works
document.addEventListener('DOMContentLoaded', initializeHeader);

// Fallback initialization
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeHeader);
} else {
    initializeHeader();
}

// Additional fallback
window.addEventListener('load', function() {
    const headerElement = document.getElementById('shared-header');
    if (headerElement && !headerElement.innerHTML.trim()) {
        console.log('Fallback header initialization');
        initializeHeader();
    }
});
