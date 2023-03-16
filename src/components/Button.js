import tw, { styled, css, theme } from "twin.macro";

export const Button = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

const StyledButton = styled.button`
  ${tw`font-bold text-xl text-white bg-brand-red rounded-sm py-4 hover:bg-black`}
`;
