import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Form } from './components/create';
import { Read } from './components/read';
import { Update } from './components/update';

function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <h2 className="main-header">Crud</h2>
        <div>
          <Routes>
            <Route exact path='/create' element={<Form />} />
            <Route exact path='/read' element={<Read />} />
            <Route exact path='/update' element={<Update />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
