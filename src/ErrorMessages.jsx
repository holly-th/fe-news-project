function ErrorMessages({ err }) {
  return (
    <section>
      <h2>{err.status}</h2>

      <h3>Route {err.data.message}</h3>
    </section>
  );
}
export default ErrorMessages;
