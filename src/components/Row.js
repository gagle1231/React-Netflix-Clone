import React, { useEffect, useState } from 'react'
import axios from "../api/axios";
import "./Row.css";
import MovieModal from './MovieModal';
import {Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Row = ({isLargeRow, title, id, fetchUrl}) => {
    const [movies, setMovies] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [movieSelected, setMovieSelected] = useState({});
    useEffect(() => {
        fetchMovieData();
      }, []);

      const fetchMovieData = async () => {
        const request = await axios.get(fetchUrl);
        console.log("request", request);
        setMovies(request.data.results);
      };
      const handleClick = (movie) => {
        setModalOpen(true);
        setMovieSelected(movie);
      };

    return (
    <section className='row'>
        <h2>{title}</h2>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                breakpoints={{
                    1378: {
                        slidesPerView: 6,
                        slidesPerGroup: 6
                    },
                    998: {
                        slidesPerView: 5,
                        slidesPerGroup: 5
                    },
                    625: {
                        slidesPerView: 4,
                        slidesPerGroup: 4
                    },
                    0: {
                        slidesPerView: 3,
                        slidesPerGroup: 3
                    },
                    
                }}>
                <div id={id} className="row__posters">
                    {movies.map((movie) => (
                        <SwiperSlide>
                            <img 
                                key={movie.id}
                                style={{ padding: "25px 0" }}
                                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                                src={`https://image.tmdb.org/t/p/original/${
                                    isLargeRow ? movie.poster_path : movie.backdrop_path
                                } `}
                                alt={movie.name}
                                onClick={() => {handleClick(movie)}}
                            />
                        </SwiperSlide>
                    ))}
                </div>
            </Swiper>
        {
        modalOpen && (
            <MovieModal {...movieSelected} setModalOpen={setModalOpen}>
            </MovieModal>
        )
    }
    </section>
  );

}
export default Row;