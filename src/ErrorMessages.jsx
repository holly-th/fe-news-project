function ErrorMessages({ error }) {
  if (error === true) {
    return <p>Something went wrong please refresh and try again </p>;
  }
}
export default ErrorMessages;
