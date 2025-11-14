const User = ({ user, onRemove, onToggle }) => {
  return (
    <div>
      <h3>
        <b
          style={{ color: user.active ? "green" : "black" }}
          onClick={() => {
            onToggle(user.id);
          }}
        >
          {user.id}/{user.username}
        </b>
        <span>({user.email})</span>
        <button
          onClick={() => {
            onRemove(user.id);
          }}
        >
          ❌
        </button>
      </h3>
    </div>
  );
};

export default User;
