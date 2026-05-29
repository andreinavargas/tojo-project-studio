import logo from '../assets/logo.svg';

export default function Logo() {
  return (
    <a href="/" className="block">
      <img
        src={logo}
        alt="Tojo Project Studio"
        className="h-auto w-[250px] md:w-[330px]"
      />
    </a>
  );
}