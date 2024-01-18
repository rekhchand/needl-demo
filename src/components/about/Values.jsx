import NumberedCards from '../NumberedCards';

const cards = [
  {
    title: 'Commitment',
    para: `Need a job filled and we’ll fill it! Needl is the go-to recruitment firm for SaaS startups and scale-ups. We don’t do Bullshit, we do delivery!`,
  },
  {
    title: 'Enjoyment',
    para: `Need a job filled and we’ll fill it! Needl is the go-to recruitment firm for SaaS startups and scale-ups. We don’t do Bullshit, we do delivery!`,
  },
  {
    title: 'Honesty',
    para: `Need a job filled and we’ll fill it! Needl is the go-to recruitment firm for SaaS startups and scale-ups. We don’t do Bullshit, we do delivery! We don’t do Bullshit, we do delivery!`,
  },
  {
    title: 'Collaboration',
    para: `Need a job filled and we’ll fill it! Needl is the go-to recruitment firm for SaaS startups and scale-ups. We don’t do Bullshit, we do delivery!`,
  },
  {
    title: 'Accountability',
    para: `Need a job filled and we’ll fill it! Needl is the go-to recruitment firm for SaaS startups and scale-ups. We don’t do Bullshit, we do delivery!`,
  },
];

export default function Values({ tag, title }) {
  return (
    <section className="values-sec">
      <div className="wrapper">
        <div className="values-sec-contain main-grid">
          <div className="first-sec">
            <span className="section-tag">{tag}</span>
          </div>

          <div className="values-sec-content">
            <h2>{title}</h2>

            <NumberedCards allCardData={cards} />
          </div>
        </div>
      </div>
    </section>
  );
}
