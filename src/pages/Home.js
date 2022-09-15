import React from "react";
import useFetchMovie from "../hooks/useFetchMovie";
import { IMAGE_URL, POSTER_SIZE } from "../config/config";
import { SliderSwiper } from "../components/swiper/SliderSwiper";
import { SwiperSlide } from "swiper/react";
import {} from "../config/config";
import Grid from "../components/Grid/Grid";
import NoImage from "../assets/icons/404.svg";
import Card from "../components/Card/Card";
import ButtonComponent from "../components/Button/ButtonComponent";
import { Col, Container, Row } from "react-bootstrap";

const Home = () => {
  const { state, pages, isLoading, error, setLoadingMore } = useFetchMovie();
  console.log(state);

  if (error) return <h1>Error 404 NOT FOUN ...</h1>;
  return (
    <main>
      <SliderSwiper>
        {state.results.map((obj, idx) => (
          <SwiperSlide key={idx}>
            <img src={`${IMAGE_URL}${POSTER_SIZE}/${obj.poster_path}`} alt="" />
          </SwiperSlide>
        ))}
      </SliderSwiper>
      <Grid header={pages ? "Page Results " : "Popular Movie"}>
        {state.results.map((obj, idx) => (
          <div key={idx}>
            <Card
              clickable
              title={obj.title}
              info={obj.overview}
              date={obj.release_date}
              rating={obj.vote_average}
              image={
                obj.poster_path
                  ? `${IMAGE_URL}${POSTER_SIZE}/${obj.poster_path}`
                  : NoImage
              }
              movieId={obj.id}
            />
          </div>
        ))}
      </Grid>
      {isLoading && <h1>Loading ....</h1>}
      <Container className="mt-5 mb-5">
        <Row>
          <Col>
            {state.page < state.total_pages && !isLoading && (
              <ButtonComponent callback={() => setLoadingMore(true)}>
                Load More
              </ButtonComponent>
            )}
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Home;
