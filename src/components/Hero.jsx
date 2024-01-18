import Image from 'next/image';

export default function Hero({ title, sub, image }) {
  return (
    <div className="hero">
      <div className="wrapper">
        <div className={`hero-contain main-grid${image ? '' : ' no-image'}`}>
          <div className="empty" />
          <div className="hero-content">
            <h1>{title}</h1>
            <p className="hero-para">{sub}</p>
          </div>
        </div>
      </div>

      {image && (
        <div className="hero-image">
          <Image src={image} alt="image" priority />
        </div>
      )}
    </div>
  );
}
