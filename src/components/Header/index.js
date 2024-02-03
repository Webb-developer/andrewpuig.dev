import styled from "styled-components";

const HeaderStyle = styled.header`
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 1;

  @media (min-width: 720px) {
    top: 32px;
    left: 32px;
  }
`;

const Link = styled.a`
  display: inline-block;
  padding: 8px 16px;
  border-radius: 100px;
  font-size: 14px;
  background-color: rgba(255, 255, 255, 0.1);
  color: #fff;
  text-decoration: none;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #fff;
    color: #000;
  }

  @media (min-width: 720px) {
    font-size: 15px;
  }
`;

const Header = () => (
  <HeaderStyle>
    <Link href="https://www.linkedin.com/in/puigandrew/">
      linkedin/puigandrew
    </Link>
  </HeaderStyle>
);

export default Header;
