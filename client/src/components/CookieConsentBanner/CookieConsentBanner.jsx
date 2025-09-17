import CookieConsent from 'react-cookie-consent';
import './CookieConsentBanner.css';

const CookieConsentBanner = () => (
  <CookieConsent
    location="bottom"
    buttonText="Accept"
    style={{ background: 'rgba(30, 30, 30, 0.98)', color: '#fff', boxShadow: '0 2px 16px rgba(0,0,0,0.15)', fontSize: '16px', padding: '18px 24px', borderRadius: '12px 12px 0 0', maxWidth: '540px', margin: '0 auto 24px', left: 0, right: 0 }}
    buttonStyle={{ color: '#fff', background: '#007bff', fontWeight: 'bold', fontSize: '15px', borderRadius: '6px', padding: '8px 28px', boxShadow: '0 1px 6px rgba(0,0,0,0.10)', border: 'none', marginLeft: '18px' }}
    contentStyle={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    overlay
    overlayStyle={{ background: 'rgba(0,0,0,0.25)' }}
    expires={150}
    enableDeclineButton
    declineButtonText="Decline"
    declineButtonStyle={{ color: '#fff', background: '#e74c3c', fontWeight: 'bold', fontSize: '15px', borderRadius: '6px', padding: '8px 28px', boxShadow: '0 1px 6px rgba(0,0,0,0.10)', border: 'none', marginLeft: '12px' }}
  >
    <span className="cookie-banner-text">
      We use cookies to enhance your experience. By clicking "Accept", you consent to our use of cookies. <a href="/privacy-policy" style={{ color: '#ffd700', textDecoration: 'underline' }}>Learn more</a>.
    </span>
  </CookieConsent>
);

export default CookieConsentBanner;
