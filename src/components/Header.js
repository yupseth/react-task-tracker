import Button from "./Button";

const Header = ({ title }) => {
  const onClick = () => {
    console.log("Click");
  };
  return (
    <div>
      <h1 className="header">{title}</h1>
      <Button color="green" text="Add" onClick={onClick} />
    </div>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

export default Header;
