// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Contents from './components/Contents';

function App() {
  const wrap = document.querySelectorAll('.wrap .pro')
  wrap[1].classList.add('left')
  wrap[3].classList.add('left')

  return (
    <>
      <Header />
      <Contents />
    </>
  );
}

export default App;
