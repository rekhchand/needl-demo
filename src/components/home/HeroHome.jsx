import Button from '../Button';

export default function HeroHome({ heroContent }) {
  return (
    <div className="hero hero-home">
      <div className="wrapper">
        <div className="hero-content">
          <h1>{heroContent.title}</h1>
          <p className="hero-para">{heroContent.para}</p>
          <Button btnText="Get in touch" href="/contact" />
        </div>
      </div>

      <div className="hero-graphic">
        <div className="hero-graphic-content" />
      </div>
    </div>
  );
}
