import img from "../assets/no-projects.png";
export default function First() {
  return (
    <div className="text-center">
      {/* <img src={img} alt="" /> */}
      <p>No Project Selected</p>
      <p> Select a project or get started with a new one</p>
      <button>Create new project</button>
    </div>
  );
}
