import Footer from '../../organisms/Footer';
import Header from '../../organisms/Header';

import './DesktopTemplate.css';

const DesktopTemplate = ({ children }) => {
  return (
    <section className="desktop">
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </section>
  );
}

export default DesktopTemplate;