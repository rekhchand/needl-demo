import Image from 'next/image';
import MediaCard from '../MediaCard';
import CtaBox from '../CtaBox';
import Next from '../../images/ico-next.svg';
import News1 from '../../images/news-1.jpg';
import News2 from '../../images/news-2.jpg';

export default function MediaSec() {
  return (
    <section className="media-page-sec">
      <div className="wrapper">
        <div className="media-page-sec-contain main-grid">
          <div className="first-sec">
            <span className="section-tag">Filters:</span>
            <div className="all-filters">
              <span className="filter-tab active">All media</span>
              <span className="filter-tab">Articles</span>
              <span className="filter-tab">Podcasts</span>
            </div>
          </div>

          <div className="media-page-sec-content">
            <div className="all-media">
              <MediaCard
                image={News1}
                title="Hiring for product? Look for listeners"
                podcast
              />
              <MediaCard
                image={News2}
                title="Exilio Podcast with Dhruv Jain, VC at Bessemer Venture Partners – S2 E8"
              />
              <MediaCard
                image={News1}
                title="Hiring for product? Look for listeners"
                podcast
              />
              <MediaCard
                image={News2}
                title="Exilio Podcast with Dhruv Jain, VC at Bessemer Venture Partners – S2 E8"
              />
            </div>

            <div className="media-pagination">
              <div className="prev">
                <Image src={Next} alt="Prev" />
              </div>
              <div className="next">
                <Image src={Next} alt="Next" />
              </div>
            </div>

            <CtaBox />
          </div>
        </div>
      </div>
    </section>
  );
}
