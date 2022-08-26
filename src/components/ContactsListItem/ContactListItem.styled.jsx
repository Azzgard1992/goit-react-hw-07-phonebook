import styled from 'styled-components';

// export const Item = styled.li`
//   display: flex;
//   width: auto;
//   height: 40px;
//   padding: 5px;
//   align-items: center;
//   justify-content: space-between;
//   border-radius: 5px;
//   box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
//     rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;

//   & + & {
//     margin-top: 10px;
//   }
// `;

export const TextWrap = styled.div`
  display: inline-flex;
  align-items: center;
  width: 300px;
`;

// export const Text = styled.p`
//   margin-left: 10px;
// `;

export const Item = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Text = styled.p`
  margin-right: ${p => p.theme.space[4]}px;
`;

export const Button = styled.button`
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[4]}px;
  padding-left: ${p => p.theme.space[4]}px;
  cursor: pointer;
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.normal};
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.primary};

  :hover {
    background-color: ${p => p.theme.colors.secondary};
  }
`;
