'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import QuoteIco from '../images/ico-quote.svg';
import SeriesIco from '../images/ico-series.svg';
import ArrowIco from '../images/ico-next.svg';

export default function Reviews({ allReviews }) {
  return (
    <section className="reviews-sec">
      <div className="wrapper">
        <div className="reviews-heading">
          <h2>Learn why tech teams love us</h2>
          <div className="reviews-navigation">
            <div className="arrow-btn arrow-prev reviews-prev">
              <Image src={ArrowIco} alt="prev" />
            </div>
            <div className="arrow-btn reviews-next">
              <Image src={ArrowIco} alt="next" />
            </div>
          </div>
        </div>

        <div className="reviews-sec-content">
          <Swiper
            className="all-reviews"
            spaceBetween={8}
            slidesPerView="auto"
            grabCursor
            modules={[Navigation]}
            navigation={{ prevEl: '.reviews-prev', nextEl: '.reviews-next' }}
          >
            {allReviews.map((review, i) => (
              <SwiperSlide className="review-card" key={i}>
                <Image src={QuoteIco} alt="Quote" className="quote-ico" />
                <p className="review-text">{review.reviewText}</p>
                <div className="review-footer">
                  <h3 className="reviewer-name">{review.name}</h3>
                  <span className="reviewer-desig">{review.occupation}</span>
                  <span className="reviewer-round">
                    <Image src={SeriesIco} alt="Series round" />
                    {review.round}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
