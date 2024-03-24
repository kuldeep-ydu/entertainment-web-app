import Heading from './Heading';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import MediaCard from './MediaCard';

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
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 1.4,
          },
          1000: {
            slidesPerView: 2.3,
          },
        }}
      >
        {trendingMedia.map((media, index) => (
          <SwiperSlide key={media.title}>
            <MediaCard media={media} priority={index < 3} variant="trending" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
