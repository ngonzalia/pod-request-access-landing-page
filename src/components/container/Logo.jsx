import LogoImg from '../../assets/desktop/logo.svg';

const Logo = () => {
  return (
    <div className='logo-container'>
      <img
        src={LogoImg}
        alt='Logo'
        className='logo'
      />
    </div>
  );
}

export default Logo;
