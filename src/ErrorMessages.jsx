function ErrorMessages({ error }) {
  if (error === true) {
    return (
      <p>You cannot post a empty comment. Please refresh and try again. </p>
    );
  }
}
export default ErrorMessages;
