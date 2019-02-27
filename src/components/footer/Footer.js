import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer App__footer" role="contentinfo">
      <p className="contentInfo">
        <small className="small">
          Icons made by <a className="link footer__link" href="http://www.freepik.com" title="Freepik">Freepik</a> from <a className="link footer__link" href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a className="link footer__link" href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0">CC 3.0 BY</a>.
        </small>
      </p>
      <p className="contentInfo">
        <small className="small">
          Moaaz Bhnas &copy;2019
        </small>
      </p>
    </footer>
  );
}

export default Footer;