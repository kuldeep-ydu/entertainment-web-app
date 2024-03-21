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
          200: {
            slidesPerView: 1,
          },
          300: {
            slidesPerView: 1.2,
          },
          400: {
            slidesPerView: 1.5,
          },
          500: {
            slidesPerView: 1.8,
          },
          640: {
            slidesPerView: 2.3,
          },
        }}
      >
        {trendingMedia.map((media, index) => (
          <SwiperSlide key={media.title}>
            <TrendingMediaCard media={media} priority={index < 3} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
