import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  transition: 0.3s ease-in-out;
  overflow: hidden;
  &:hover .overflow {
    transition: 0.3s ease-in-out;
    transform: translateY(0);
  }
`;
const CardOverflow = styled.div`
  position: absolute;
  inset: 0;
  overflow: auto;
  display: flex;
  flex-direction: column;
  transform: translateY(100%);
  transition: 0.3s ease-in-out;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 1rem;
`;

const CardTitle = styled.header`
  font-size: 1.6rem;
  margin: 1rem 0;
  font-weight: bold;
  color: aliceblue;
`;
const CardInfo = styled.p`
  overflow: hidden;
  font-size: 0.8rem;
  color: aqua;
`;
const CardDate = styled.p`
  overflow: hidden;
  font-size: 0.8rem;
  color: yellow;
`;
const CardRating = styled.span`
  margin: auto 0 0 0;
  font-size: 2rem;
  color: yellowgreen;
`;

const CardImg = styled.img`
  width: 250px;
  height: auto;
`;

export {
  Wrapper,
  CardOverflow,
  CardTitle,
  CardInfo,
  CardImg,
  CardRating,
  CardDate,
};
