export function AddComment({ article_id }) {
  return (
    <form>
      <label>
        Username:
        <input className="username"></input>
      </label>

      <label>
        Comment
        <textarea></textarea>
      </label>
    </form>
  );
}
export default AddComment;
