import PropTypes from 'prop-types';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from 'components/Slide/Tiles.module.scss'

import Link from 'next/link'

SwiperCore.use([Navigation]);

const Tiles = ({ Data }) => (
  <Swiper
    spaceBetween={20}
    slidesPerView={4}
    slidesPerGroup={4}
    navigation
    breakpoints={{
      768: {
        slidesPerView:10,
        slidesPerGroup:20,

      },
    }}
   
  >
   {Data.results.map((mydata) => (
      <SwiperSlide key = {mydata.id} >

        <Link href = "/movie/[movieid]" as = {`/movie/${mydata.id}`}>
          <a>
            <img className = {styles.Name2}src = {`http://image.tmdb.org/t/p/w154${mydata.backdrop_path}`} alt = {mydata.title} />
            <p className = {styles.Name1}>{mydata.title || mydata.name }</p>
            
          </a>
        </Link>

      </SwiperSlide>
   )
   )}
   
  </Swiper>
);

// Tiles.propTypes = {
//   slidesPerView: PropTypes.number,
// };

export default Tiles;

