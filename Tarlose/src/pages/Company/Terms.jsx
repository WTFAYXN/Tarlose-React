import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import "./Terms.css"

const Terms =() => {
    return (
        <>
        <Navbar />
        <Helmet>
        <title>Terms and Conditions - Tarlose</title>
        <meta name="description" content="This is the terms and conditions page of Tarlose" />
        <meta name="keywords" content="terms and conditions, Tarlose" />
        <link rel="canonical" href="https://www.tarlose.com/terms" />
        <meta property="og:title" content="Terms and Conditions - Tarlose" />
        <meta property="og:description" content="This is the terms and conditions page of Tarlose." />
        <meta property="og:url" content="https://www.tarlose.com/terms" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Terms and Conditions - Tarlose" />
        <meta name="twitter:description" content="This is the terms and conditions page of Tarlose." />
        <script type="application/ld+json">
            {`
            {
                "@context": "https://schema.org",
                "@type": "WebPage",
                "name": "Terms and Conditions",
                "description": "This is the terms and conditions page of Tarlose"
            }
            `}
        </script>
      </Helmet>
      
         <div class="container mt-5 mb-5 Terms-container">
        <h1 class="text-center">Terms and Conditions</h1>
        <p class=" text-center">Effective Date: 1st July 2024.</p>
        
        <div class="mt-4">
            <h3>1. Acceptance of Terms</h3>
            <p>
                By accessing this website, you agree to the terms and conditions outlined in this Terms of Service Agreement (“Agreement”). If you disagree with any part of these terms, you may not use our website.
            </p>
        </div>

        <div class="mt-4">
            <h3>2. Changes to Terms</h3>
            <p>
                Tarlose reserves the right to modify or replace these terms at any time. Any changes will be posted on this page, and it is your responsibility to review these terms periodically. Your continued use of the website after the changes constitutes your acceptance of the revised terms.
            </p>
        </div>

        <div class="mt-4">
            <h3>3. Services Provided</h3>
            <p>
                Tarlose offers design and development services, including but not limited to:
            </p>
            <ul>
                <li>Website development across any stack</li>
                <li>App development</li>
                <li>Tech consulting</li>
                <li>Graphic design services</li>
                <li>Digital marketing</li>
            </ul>
            <p>
                Any agreements regarding the use of our services are bound by separate contractual agreements and are not governed solely by these terms.
            </p>
        </div>

        <div class="mt-4">
            <h3>4. Intellectual Property Rights</h3>
            <p>
                All content, graphics, design elements, and software on this website are owned by or licensed to Tarlose and are protected by intellectual property laws. You may not reproduce, distribute, modify, or exploit any content on the site without prior written consent from Tarlose.
            </p>
        </div>

        <div class="mt-4">
            <h3>5. User Conduct</h3>
            <p>
                While using our website, you agree to use the site only for lawful purposes. You must not use the website in any way that may cause harm, damage, or disruption to Tarlose, its clients, or its affiliates.
            </p>
        </div>

        <div class="mt-4">
            <h3>6. Limitation of Liability</h3>
            <p>
                Tarlose is not liable for any damages that may result from the use of, or inability to use, our website or services. We make no warranties or representations regarding the accuracy or completeness of the content provided on the site. Tarlose is not responsible for any third-party content that may be linked to or from the website.
            </p>
        </div>

        <div class="mt-4">
            <h3>7. External Links</h3>
            <p>
                Our website may contain links to third-party websites. Tarlose has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that Tarlose shall not be responsible or liable for any damage or loss caused by your use of any third-party website.
            </p>
        </div>

        <div class="mt-4">
            <h3>8. Privacy Policy</h3>
            <p>
                Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and share information about you. Your acceptance of these terms also constitutes your acceptance of our Privacy Policy.
            </p>
        </div>

        <div class="mt-4">
            <h3>9. Termination of Access</h3>
            <p>
                Tarlose reserves the right to terminate or suspend your access to the website at its sole discretion, without prior notice, for conduct that violates these terms or is harmful to other users, us, or third parties, or for any other reason.
            </p>
        </div>

        <div class="mt-4">
            <h3>10. Governing Law</h3>
            <p>
                These Terms and Conditions are governed by and construed in accordance with the laws of Mumbai,India; without regard to its conflict of law provisions.
            </p>
        </div>

        <div class="mt-4">
            <h3>11. Contact Us</h3>
            <p> 
                If you have any questions about these Terms and Conditions, please contact us at:
            </p>
            <ul>
                <li><strong>Email:</strong> admin@tarlose.com</li>
                <li><strong>Address:</strong>Mumbai</li>
            </ul>
        </div>
        
    </div>

    <Footer />
        </>
    )
}

export default Terms