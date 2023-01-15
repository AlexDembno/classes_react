import User from 'components/User/User';

import PropTypes from 'prop-types';

function UsersList({ users }) {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          <User user={user} />
        </li>
      ))}
    </ul>
  );
}

export default UsersList;

UsersList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    })
  ),
};
