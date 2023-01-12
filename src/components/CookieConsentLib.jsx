import CookieConsent from 'react-cookie-consent';

const CookieConsentLib = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="I understand"
      cookieName="Arithmo"
      style={{ background: '#0029FF' }}
      buttonStyle={{
        backgroundColor: '#fff',
        color: '#0029FF',
        fontSize: '13px',
        fontWeight: 'bold',
      }}
      expires={150}
    >
      We use cookies to provide our services and for analytics and marketing. To
      find out more about our use of cookies, please see our Privacy Policy and
      Cookie Policy. By continuing to browse our website, you agree to our use
      of cookies.
    </CookieConsent>
  );
};

export default CookieConsentLib;
