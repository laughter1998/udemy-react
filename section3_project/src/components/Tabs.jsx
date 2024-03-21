export default function Tabs({ children, buttons, ButtonsContainer = "menu" }) {
  // console.log(buttonsContainer);
  // const ButtonsContainer = buttonsContainer;
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
