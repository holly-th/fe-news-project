function ErrorMessages({ error, err }) {
  if (err) {
    return <p>Server down</p>;
  }
  if (error === true) {
    return <p>You can't post an empty comment please refresh and try again </p>;
  }
}
export default ErrorMessages;
