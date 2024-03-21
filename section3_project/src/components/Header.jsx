import img1 from "../assets/react-core-concepts.png";

export default function Header() {
  const reactDescriptions = ["Fundamental", "Crucial", "Core"];
  function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
  }
  const descripttion = reactDescriptions[genRandomInt(3)];
  return (
    <header>
      <img src={img1} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {descripttion} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
