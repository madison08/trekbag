import Counter from './Counter';
import Logo from './Logo';

export default function Header({ resume }) {
  return (
    <header>
      <Logo />
      <Counter resume={resume} />
    </header>
  );
}
