const Notification = ({ message, error, success }) => {
  if (message === null) {
    return null;
  }

  return (
    <div className={(error ? "error " : "") + (success ? "success" : "")}>
      {message}
    </div>
  );
};

export default Notification;
