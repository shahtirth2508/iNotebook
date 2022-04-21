import Notes from "./Notes";

export const Home = (props) => {
  const { showAlert } = props;
  console.log("Hello", showAlert);
  return (
    <div>
      <Notes showAlert={showAlert} />
    </div>
  );
};
