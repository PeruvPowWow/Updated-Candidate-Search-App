import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <Nav />
      <main>
        <Outlet /> {/* This will render the nested routes defined in main.tsx */}
      </main>
    </>
  );
}

export default App;
