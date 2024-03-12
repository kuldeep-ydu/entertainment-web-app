import Heading from './Heading';
import TrendingMediaCard from './TrendingMediaCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function TrendingMedia({ trendingMedia }) {
  return (
    <div className="mb-6 ml-6">
      <Heading title="Trending" size="large" />

      <Swiper
        slidesPerView={1.5}
        breakpoints={{
          640: {
            slidesPerView: 1.3,
          },
          768: {
            slidesPerView: 2.3,
          },
        }}
      >
        {trendingMedia.map((media) => (
          <SwiperSlide key={media.title}>
            <TrendingMediaCard media={media} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
