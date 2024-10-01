import { Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage/AboutPage';
import HomePage from './pages/HomePage/HomePage';
import BooksPage from './pages/BooksPage/BooksPage';
import Footer from './components/Footer/Footer';
import { useEffect } from 'react';
import { useAppDispatch } from './app/hooks';
import Header from './components/Header/Header';

const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {

  }, [dispatch]);

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />}></Route>
        <Route path='/books' element={<BooksPage />}></Route>
        <Route path='/books/:bookCategory' element={<BooksPage />}></Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
