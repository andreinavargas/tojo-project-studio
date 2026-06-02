import logo from '../assets/logo.svg';

export default function Logo() {
  return (
    <a href="/" className="block">
      <img
        src={logo}
        alt="Tojo Project Studio"
        className="h-auto w-[320px] md:w-[470px]"
      />
    </a>
  );
}