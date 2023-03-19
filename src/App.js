import { Login } from './screens/login/Login';
import { Register } from './screens/register/Register';
import { Route, Routes } from 'react-router-dom';
import { Main } from './screens/main/Main';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/main" element={<Main />} />
    </Routes>
  );
}

export default App;
