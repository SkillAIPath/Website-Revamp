function loadFooter() {
    const footerHTML = `
        <footer>
            <div class="footer-content">
                <div class="footer-section">
                    <h4>Explore</h4>
                    <a href="courses.html">Courses</a>
                    <a href="success-stories.html">Success Stories</a>
                    <a href="Strategy Call.html">Free Strategy Call</a>
                    <a href="enroll.html">Enroll</a>
                </div>
                <div class="footer-section">
                    <h4>Company</h4>
                    <a href="index.html#about">About</a>
                    <a href="faq.html">FAQ</a>
                    <a href="contact.html">Contact</a>
                </div>
                <div class="footer-section">
                    <h4>Legal3</h4>
                    <a href="Privacy Policy.html">Privacy Policy</a>
                    <a href="Refund Policy.html">Refund Policy</a>
                    <a href="Terms & Conditions.html">Terms & Conditions</a>
                </div>
            </div>
            <div class="footer-bottom">
                © 2025 SkillAI Path. All Rights Reserved.
            </div>
        </footer>
    `;
    
    document.getElementById('shared-footer').innerHTML = footerHTML;
}


document.addEventListener('DOMContentLoaded', loadFooter);
