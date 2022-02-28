import './DesktopTemplate.css';

const DesktopTemplate = ({ children }) => {
  return (
    <section className="desktop">
      <header>
        <div className='item one'>
          <h1>Body Designs</h1>
        </div>
        <div className='item two'></div>
        <div className='item three'>
          <button>Sign In</button>
        </div>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <div className='item one'></div>
        <div className='item two'>
          <p>Body Designs &copy; {new Date().getFullYear()}</p>
        </div>
        <div className='item three'></div>
      </footer>
    </section>
  );
}

export default DesktopTemplate;