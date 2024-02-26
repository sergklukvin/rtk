import styled from "styled-components";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Container } from "./Container";
import { clearControls } from "../features/controls/controls-slice";
import { ThemeSwitcher } from "../features/theme/ThemeSwitcher";
import { useCleanControls } from "../features/controls/use-clean-controls";

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

const Title = styled(Link).attrs({
  to: "/",
})`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
`;

export const Header = () => {
  const { handleClearControls } = useCleanControls();

  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title onClick={handleClearControls}>Where is the world?</Title>
          <ThemeSwitcher />
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};
