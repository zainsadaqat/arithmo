import CookieConsent from 'react-cookie-consent';

const CookieConsentLib = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Okay!"
      cookieName="Arithmo"
      style={{ background: '#0029FF' }}
      buttonStyle={{ color: '#4e503b', fontSize: '13px' }}
      expires={150}
    >
      This website uses cookies to enhance the user experience.
    </CookieConsent>
  );
};

export default CookieConsentLib;
