import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { typography, colors } from '../../config/global-styles';
import { device } from '../../config/device';

const StyledLink = styled.a`
  margin-top: 1.5rem;
  display: inline-block;
  font-family: ${typography.links.large.font.name};
  font-weight: ${typography.links.large.font.fontWeight};
  font-size: ${typography.links.large.fontSize};
  line-height: ${typography.links.large.lineHeight};
  letter-spacing: ${typography.links.large.letterSpacing};
  text-transform: ${typography.links.textTransform};
  color: ${colors.ui.darkSurface};
  text-decoration: none;

  @media ${device.large} {
    margin-top: 3rem;
  }
`;

const UnderLinedComponent = styled.span`
  display: inline-block;
  border-bottom: 2px solid ${colors.ui.darkSurface};
  padding-bottom: 0.5rem;
  padding-right: 5px;
  padding-left: 5px;
  border-radius: 9999;
`;

export default ({ text, url }: { text: string; url: string }) => {
  return (
    <UnderLinedComponent>
      <Link href={url} passHref>
        <StyledLink>{text}</StyledLink>
      </Link>
    </UnderLinedComponent>
  );
};
