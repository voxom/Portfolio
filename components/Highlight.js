import { RoughNotation } from "react-rough-notation";

export const Highlight = ({ color, children }) => {
    return (
      <RoughNotation
        type="highlight"
        animationDuration={2000}
        color={color}
        iterations={3}
        multiline={true}
      >
        {children}
      </RoughNotation>
    );
}