import { Navigation, StyledHeader, StyledLink } from './Header.styled';
import { arrayOf, shape, string, number } from 'prop-types';

const Header = ({ tabs }) => {
  return (
    <StyledHeader>
      <Navigation>
        {tabs
          .sort((a, b) => a.order - b.order)
          .map(({ title, id }) => (
            <StyledLink key={id} to={id}>
              {title}
            </StyledLink>
          ))}
      </Navigation>
    </StyledHeader>
  );
};
Header.propTypes = {
  tabs: arrayOf(
    shape({
      id: string,
      title: string,
      order: number,
      path: string,
    })
  ),
};

Header.defaultProps = {
  tabs: [],
};

export default Header;
