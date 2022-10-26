// import logo from './logo.svg';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Routes';

function App() {
  return (
    <div className="App bg-cyan-50">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
