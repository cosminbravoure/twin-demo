import tw, { styled, css, theme } from "twin.macro";

export const Button = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export const Button2 = ({ children, ...props }) => {
  return <StyledButton2 {...props}>{children}</StyledButton2>;
};

// const StyledButton = styled.button`
//   ${tw`font-bold text-xl text-white bg-brand-red rounded-sm py-4 hover:bg-black`}
// `;

const StyledButton2 = styled.button`
  ${tw`font-bold text-xl text-white bg-brand-red rounded-sm py-4 hover:bg-black m-2`}
`;

const StyledButton = styled.button(({ variant }) => [
  tw`font-bold text-lg text-white bg-brand-red rounded-md py-2 px-4`,
  tw`hover:(bg-green-400)`,

  variant === "outlined" &&
    tw`bg-white text-black border-2 border-solid border-brand-red`,

  variant === "ghost" && tw`bg-transparent text-brand-red`,
]);
