import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import { Helmet } from "react-helmet"
import "./Terms.css"

const PrivacyPolicy =() => {
    return (
        <>
        <Navbar />
        <Helmet>
        <title>Privacy Policy - Tarlose</title>
        <meta name="description" content="Learn about how Tarlose collects, uses, and protects your personal information. Read our comprehensive privacy policy to understand your data rights and our commitment to privacy." />
        <meta name="keywords" content="privacy policy, data protection, personal information, data security, privacy rights, Tarlose privacy, data collection" />
        <link rel="canonical" href="https://www.tarlose.com/privacy" />
        <meta property="og:title" content="Privacy Policy - Tarlose" />
        <meta property="og:description" content="Learn about how Tarlose collects, uses, and protects your personal information. Read our comprehensive privacy policy to understand your data rights and our commitment to privacy." />
        <meta property="og:url" content="https://www.tarlose.com/privacy" />
        <meta property="og:type" content="website" />
       
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Privacy Policy",
              "description": "Comprehensive privacy policy detailing how Tarlose collects, uses, and protects user data and personal information.",
              "publisher": {
                "@type": "Organization",
                "name": "Tarlose"
              },
              "mainEntity": {
                "@type": "WebContent",
                "about": "Privacy and data protection policies at Tarlose"
              }
            }
          `}
        </script>
      </Helmet>

        <div className="container  Terms-container">
        <h1 className="text-center">Privacy Policy</h1>
        <p className=" text-center">Effective Date: 1st July 2024.</p>

        <div className="mt-4">
            <h3>1. Introduction</h3>
            <p>
                Welcome to Tarlose. This Privacy Policy outlines our policies regarding the collection, use, and disclosure of personal data when you use our website (www.tarlose.com) and the choices you have associated with that data.
            </p>
        </div>

        <div className="mt-4">
            <h3>2. Information We Collect</h3>
            <p>We collect different types of information to provide and improve our services for you:</p>
            <ul>
                <li><strong>Personal Data:</strong> While using our website, we may ask you to provide us with certain personally identifiable information, such as your name, email address, and phone number.</li>
                <li><strong>Usage Data:</strong> We may collect information about how the website is accessed and used, including your IP address, browser type, browser version, the pages you visit, and the time and date of your visit.</li>
                <li><strong>Cookies and Tracking Data:</strong> We use cookies and similar tracking technologies to monitor the activity on our site and hold certain information.</li>
            </ul>
        </div>

        <div className="mt-4">
            <h3>3. How We Use Your Information</h3>
            <p>Tarlose uses the collected data for various purposes:</p>
            <ul>
                <li>To provide and maintain our website</li>
                <li>To notify you about changes to our services</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information to improve our website</li>
                <li>To detect, prevent, and address technical issues</li>
            </ul>
        </div>

        <div className="mt-4">
            <h3>4. Data Sharing and Disclosure</h3>
            <p>
                We respect your privacy and do not share personal data with third parties except in the following circumstances:
            </p>
            <ul>
                <li><strong>Service Providers:</strong> We may employ third-party companies and individuals to facilitate our services or assist us in analyzing how our site is used.</li>
                <li><strong>Legal Requirements:</strong> Tarlose may disclose your information in good faith if required by law or in response to valid requests by public authorities.</li>
            </ul>
        </div>

        <div className="mt-4">
            <h3>5. Security of Your Data</h3>
            <p>
                The security of your data is important to us, but no method of transmission over the Internet is 100% secure. While we strive to use commercially acceptable means to protect your data, we cannot guarantee its absolute security.
            </p>
        </div>

        <div className="mt-4">
            <h3>6. Links to Other Websites</h3>
            <p>
                Our website may contain links to third-party websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services. We encourage you to review the Privacy Policy of every site you visit.
            </p>
        </div>

        <div className="mt-4">
            <h3>7. Children’s Privacy</h3>
            <p>
                Our website does not address anyone under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
            </p>
        </div>

        <div className="mt-4">
            <h3>8. Changes to This Privacy Policy</h3>
            <p>
                We may update our Privacy Policy from time to time. Any changes will be posted on this page, and the "Effective Date" will be updated. We encourage you to review this Privacy Policy periodically for any changes.
            </p>
        </div>

        <div className="mt-4">
            <h3>9. Contact Us</h3>
            <p>
                If you have any questions about this Privacy Policy, please contact us at:
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

export default PrivacyPolicy