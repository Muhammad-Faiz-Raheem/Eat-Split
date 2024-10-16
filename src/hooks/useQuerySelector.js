import { useEffect, useState } from "react";

function useQuerySelector(value) {
  const [responsiveValue, setResponsiveValue] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setResponsiveValue(window.outerWidth < value);
    };

    // Call handleResize once on mount to set the initial state
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [value]);

  return responsiveValue;
}

export default useQuerySelector;
