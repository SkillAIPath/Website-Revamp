function loadHeader() {
    const headerHTML = `
        <div class="header-top">
            <div class="left">
                <span>🏠 India</span>
                <span>+91 9301310154</span>
                <span>tech@skillaipath.com</span>
            </div>
            <div class="right">
                <span>Follow us:</span>
                <a href="#"><img src="https://img.icons8.com/ios-glyphs/24/32ddb8/facebook-new.png" style="height:18px;"></a>
                <a href="#"><img src="https://img.icons8.com/ios-glyphs/24/32ddb8/twitter--v1.png" style="height:18px;"></a>
                <a href="#"><img src="https://img.icons8.com/ios-glyphs/24/32ddb8/linkedin.png" style="height:18px;"></a>
            </div>
        </div>
        <div class="header-main">
            <div class="logo-brand">
                <img src="Skill-Logo.png" alt="SkillAI Path Logo">
                SkillAI Path
            </div>
            <nav>
                <a href="index.html">Home</a>
                <a href="courses.html">Courses</a>
                <a href="success-stories.html">Success Stories</a>
                <a href="contact.html">Contact</a>
                <a href="strategy-call.html" class="btn-strategy-call">Free Strategy Call</a>
            </nav>
        </div>
    `;
    
    document.getElementById('shared-header').innerHTML = headerHTML;
}

document.addEventListener('DOMContentLoaded', loadHeader);