import DesktopTemplate from './templates/desktop/DeskTopTemplate';
import './styles/global/global.css';

function App() {
  return (
    <div className="App">
      <DesktopTemplate>
        <div className='item'>
          <h2>Welcome to the Body Designs Toolkit</h2>
          <h3>&</h3>
          <h2>Management System!</h2>
          <p>Let's login to get started</p>
        </div>
      </DesktopTemplate>
    </div>
  );
}

export default App;