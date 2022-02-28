import DesktopTemplate from './templates/desktop/DeskTopTemplate';
import './styles/global/global.css';
import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="App">
      <DesktopTemplate>
        <Dashboard />
      </DesktopTemplate>
    </div>
  );
}

export default App;