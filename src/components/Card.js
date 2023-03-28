import tw, { styled, css, theme } from "twin.macro";

export const Card = ({ children, ...props }) => {
  return <StyledCard {...props}>{children}</StyledCard>;
};

export const CardHeader = ({ children, ...props }) => {
  return <StyledCardHeader {...props}>{children}</StyledCardHeader>;
};

export const CardBody = ({ children, ...props }) => {
  return <StyledCardBody {...props}>{children}</StyledCardBody>;
};

const StyledCard = styled.div`
  ${tw`p-8 border border-solid border-gray-200 rounded-lg shadow-sm`}
  ${tw`flex flex-col gap-4`}
`;

const StyledCardHeader = styled.div`
  ${tw``}
`;

const StyledCardBody = styled.div`
  ${tw`flex flex-col gap-4 items-start`}
`;
