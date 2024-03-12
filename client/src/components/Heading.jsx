export default function Heading({ title, className = '', size }) {
  const styles = {
    large: 'text-xl md:text-[32px] font-light pb-6',
  };
  return <h1 className={`${styles[size]} ${className}`}>{title}</h1>;
}
