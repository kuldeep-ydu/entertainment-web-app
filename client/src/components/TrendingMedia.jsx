import Heading from './Heading';
import TrendingMediaCard from './TrendingMediaCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function TrendingMedia({ trendingMedia }) {
  return (
    <div className="mb-6">
      <Heading title="Trending" size="large" />

      <Swiper slidesPerView={2.4}>
        {trendingMedia.map((media) => (
          <SwiperSlide key={media.title}>
            <TrendingMediaCard media={media} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
