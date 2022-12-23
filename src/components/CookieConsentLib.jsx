import CookieConsent from 'react-cookie-consent';

const CookieConsentLib = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Okay!"
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
      This website uses cookies to enhance the user experience.
    </CookieConsent>
  );
};

export default CookieConsentLib;
