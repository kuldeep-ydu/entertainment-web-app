import Heading from './Heading';
import TrendingMediaCard from './TrendingMediaCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function TrendingMedia() {
  return (
    <div>
      <Heading title="Trending" size="large" />

      <Swiper slidesPerView={2.4}>
        <SwiperSlide>
          <TrendingMediaCard />
        </SwiperSlide>
        <SwiperSlide>
          <TrendingMediaCard />
        </SwiperSlide>
        <SwiperSlide>
          <TrendingMediaCard />
        </SwiperSlide>
        <SwiperSlide>
          <TrendingMediaCard />
        </SwiperSlide>
        <SwiperSlide>
          <TrendingMediaCard />
        </SwiperSlide>
        <SwiperSlide>
          <TrendingMediaCard />
        </SwiperSlide>
        <SwiperSlide>
          <TrendingMediaCard />
        </SwiperSlide>
        <SwiperSlide>
          <TrendingMediaCard />
        </SwiperSlide>
        <SwiperSlide>
          <TrendingMediaCard />
        </SwiperSlide>
        <SwiperSlide>
          <TrendingMediaCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
