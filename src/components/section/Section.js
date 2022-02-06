import PropTypes from 'prop-types';
import { Box, Title } from './Section.styled';
// import Typography from '@mui/material/Typography';
// import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

const Section = ({ title, children }) => {
  return (
    <Box>
      {/* <Typography variant="h4"> */}
      {title}
      {/* <ContactPhoneIcon /> */}
      {/* </Typography> */}
      {/* <Title>{title}</Title> */}
      {children}
    </Box>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
