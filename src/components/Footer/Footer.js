import { StyledFooter, Title, LinkList, Link } from './Footer.styled';
import Icons from 'images/symbol-defs.svg';

export const Footer = () => {
  return (
    <StyledFooter>
      <Title>Created by Yurii Atamanenko</Title>
      <LinkList>
        <li>
          <Link
            href="https://t.me/YuriiAtamanenko"
            rel="noreferrer"
            target="_blank"
          >
            <svg width={28} height={28} fill="orange">
              <use href={Icons + '#icon-telegram'} />
            </svg>
          </Link>
        </li>
        <li>
          <Link
            href="https://github.com/YuriyAtamanenko"
            rel="noreferrer"
            target="_blank"
          >
            <svg width={28} height={28} fill="orange">
              <use href={Icons + '#icon-github'} />
            </svg>
          </Link>
        </li>
        <li>
          <Link
            href="https://www.linkedin.com/in/yurii-atamanenko/"
            rel="noreferrer"
            target="_blank"
          >
            <svg width={28} height={28} fill="orange">
              <use href={Icons + '#icon-linkedin'} />
            </svg>
          </Link>
        </li>
      </LinkList>
    </StyledFooter>
  );
};

export default Footer;
