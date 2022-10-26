import React from "react";

const useViewport = () => {
  const [width, setWidth] = React.useState<number>();
  const [oldWidth, setOldWidth] = React.useState<number>();
  // Add a second state variable "height" and default it to the current window height
  const [height, setHeight] = React.useState<number>();

  React.useEffect(() => {
    const handleWindowResize = () => {
      setOldWidth(width)
      setWidth(window.innerWidth);
      // Set the height in state as well as the width
      setHeight(window.innerHeight);
    }

    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, [width]);

  // Return both the height and width
  return { oldWidth, width, height };
}

export {useViewport};