// components
import Content from './components/container/Content';
import Image from './components/container/Image';
import Logo from './components/container/Logo';
import Dots from './components/container/Dots';

// styles
import './styles/main.css';


function App() {
  return (
    <div className='App'>
        <Logo />
        <Content />
        <Image />
        <Dots />
    </div>
  );
}

export default App;
