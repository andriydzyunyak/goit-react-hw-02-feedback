import PropTypes from 'prop-types';
import { SectionContainer, SectionTitle } from 'components/Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionContainer>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionContainer>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
