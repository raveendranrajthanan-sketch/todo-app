
function ClickButton() {

  function handleClick() {
    alert("Welcome to React!");
  }

  return (
    <div>
      <button onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}

export default ClickButton;
