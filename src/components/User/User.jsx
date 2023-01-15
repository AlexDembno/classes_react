import PropTypes from 'prop-types';

import { NameText } from './User.styled';
import { EmailText } from './User.styled';
import { SpanText } from './User.styled';

function User({ user: { name, email } }) {
  const isEmailBiz = email.endsWith('biz');

  return (
    <>
      <NameText>
        Name = <SpanText>{name}</SpanText>
      </NameText>
      <EmailText>
        Name = <SpanText isRed={isEmailBiz}>{email}</SpanText>
      </EmailText>
    </>
  );
}

export default User;

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
};
