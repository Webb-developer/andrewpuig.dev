import styled from "styled-components";
import { H2, H3 } from "@/components/Type";
import { useEffect, useState, useRef } from "react";

const FixedContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const GridContainer = styled.div`
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: center;
`;

const MainTitle = styled(H2)`
  color: ${({ $scrolled }) =>
    $scrolled ? "#000" : "rgba(255, 255, 255, 0.9)"};
  transform: ${({ $scrolled, $height }) =>
    $scrolled
      ? "translate3d(0, -" + $height + "px, 0px)"
      : "translate3d(0px, 0px, 0px)"};
  transition: color 0.5s ease, transform 0.5s ease;
  user-select: none;
`;

const SubTitle = styled(H3)`
  color: ${({ $scrolled }) =>
    $scrolled ? "rgba(255, 255, 255, 0.9)" : "rgba(255, 255, 255, 0.75)"};
  transform: ${({ $scrolled, $height }) =>
    $scrolled
      ? "translate3d(0, -" + $height + "px, 0px)"
      : "translate3d(0px, 0px, 0px)"};
  transition: color 0.5s ease, transform 0.5s ease;
  user-select: none;
  display: block;
  margin-top: 24px;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 720px) {
    margin-top: 18px;
    max-width: none;
  }
`;

const HiddenTitle = styled(SubTitle)`
  color: ${({ $scrolled }) =>
    $scrolled ? "rgba(255, 255, 255, 0.6)" : "#000"};
  margin-top: 14px;

  @media (min-width: 720px) {
    margin-top: 10px;
  }
`;

const Intro = ({ scrolled }) => {
  const mainTitleRef = useRef(null);
  const [height, setHeight] = useState(null);

  useEffect(() => setHeight(mainTitleRef.current.offsetHeight));

  return (
    <FixedContainer>
      <GridContainer>
        <MainTitle
          as="h1"
          ref={mainTitleRef}
          $scrolled={scrolled}
          $height={height}
        >
          A Senior Software Engineer
        </MainTitle>
        <p>
          <SubTitle as="span" $scrolled={scrolled} $height={height}>
            with a focus on headless Shopify websites
          </SubTitle>
          <HiddenTitle as="span" $scrolled={scrolled} $height={height}>
            using Next.js, React, Typescript and Contentful
          </HiddenTitle>
        </p>
      </GridContainer>
    </FixedContainer>
  );
};

export default Intro;
