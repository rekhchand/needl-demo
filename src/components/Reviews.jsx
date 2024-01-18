'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import CtaBox from './CtaBox';
import QuoteIco from '../images/ico-quote.svg';
import SeriesIco from '../images/ico-series.svg';
import ArrowIco from '../images/ico-next.svg';

export default function Reviews({ allReviews, showCta = false }) {
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
            <SwiperSlide className="review-card">
              <Image src={QuoteIco} alt="Quote" />
              <p className="review-text">
                Over the past 2 years, we’ve found working with Rob and the team
                at Martinsen Mayer to be fantastic. We’ve hired in multiple
                regions with them, frequently with highly specific JD’s and have
                had full commitment and dedication to the roles from Rob +
                company.
              </p>
              <div className="review-footer">
                <h3 className="reviewer-name">Ian Cohen</h3>
                <span className="reviewer-desig">CEO - Lokker.com</span>
              </div>
            </SwiperSlide>
            <SwiperSlide className="review-card">
              <Image src={QuoteIco} alt="Quote" />
              <p className="review-text">
                Over the past 2 years, we’ve found working with Rob and the team
                at Martinsen Mayer to be fantastic. We’ve hired in multiple
                regions with them, frequently with highly specific JD’s and have
                had full commitment and dedication to the roles from Rob +
                company.
              </p>
              <div className="review-footer">
                <h3 className="reviewer-name">Ian Cohen</h3>
                <span className="reviewer-desig">CEO - Lokker.com</span>
              </div>
            </SwiperSlide>
          </Swiper>

          {showCta && <CtaBox />}
        </div>
      </div>
    </section>
  );
}
