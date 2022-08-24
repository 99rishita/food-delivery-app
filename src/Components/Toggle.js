import React from "react";

const ToggleCanvas = () => {
  const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => {
    // 👇️ toggle shown state
    setIsShown((current) => !current);

    // 👇️ or simply set it to true
    // setIsShown(true);
  };

  return (
    <div>
      <button onClick={handleClick}>Click</button>

      {/* 👇️ show elements on click */}
      {isShown && (
        <div>
          <h2>Some content here</h2>
        </div>
      )}

      {/* 👇️ show component on click */}
      {isShown && <Box />}
    </div>
  );
};

export default ToggleCanvas;
