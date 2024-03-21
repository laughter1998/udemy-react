export default function Button({ children }) {
  function handleClicklog() {
    console.log("1");
  }
  return (
    <button className="active" type="button" onClick={handleClicklog}>
      {children}
    </button>
  );
}
