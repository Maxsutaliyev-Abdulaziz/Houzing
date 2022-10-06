import styled, { css } from "styled-components";

export const Div = styled('div')`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 8.2vh;
background: #0D263B;
gap: 55px;
`;

export const H1 = styled.h1`
font-family: 'Montserrat';
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #FFFFFF;
`;

export const Box = styled.div`
width: 1059px;
height: 487px;
background: #FFFFFF;
border: 1px solid #E6E9EC;
box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
border-radius: 3px;
`;

export const Divc =styled.div`
width: 1059px;
height: 110px;
align-items: center;
display: flex;
justify-content: space-between;
`;

export const Bdiv = styled.div`
width: 1059px;
height: 587px;
display: flex;
align-items: center;
justify-content: end;
flex-direction: column;
overflow: auto;
`;

const textt = css`
font-size: 16px;
font-weight: 600;
width: 235px;
line-height: 24px;
color: #0D263B;
`;

const textc = css`
font-weight: 400;
width: 235px;
line-height: 20px;
color: #696969;
`;

const kkkk = css`
outline: none;
border: none;
border-bottom: 1px solid gray;
`;

const h = css`
font-family: 'Montserrat';
height: 45px;
font-weight: 600;
font-size: 18px;
line-height: 28px;
color: #0D263B;
display: flex;
align-content: center;
`;

export const Mpp =styled.h1`
${h}
padding: 5px 0 0 0;
font-size: 30px;
`;

export const Searchi = styled.input`
${textt}
${kkkk}
border-bottom: 2px solid #d5d5d5b8;
color: gray;
font-weight: 100;
`;

export const Heading = styled.div`
display: flex;
align-content: center;
width: 1057px;
`;

export const Title = styled.h1`
width: 461px;
padding: 17px 0 0 30px;
${h}
 `;

export const Published = styled.h1`
width: 250px;
padding: 17px 0 0 0;
justify-content: center;
${h}
 `;

export const HStatus = styled.h1`
width: 110px;
padding: 17px 0 0 0;
justify-content: center;
${h}
 `;

export const HView = styled.h1`
width: 115px;
padding: 17px 0 0 0;
justify-content: center;
${h}
 `;

export const HAction = styled.h1`
width: 120px;
padding: 17px 0 0 30px;
${h}
 `;

export const Divv = styled.div`
width: 100%;
height: 587px;
display: flex;
justify-content: center;
align-items: center;
`;

const F = css`
position: relative;
display: flex;
justify-content: center;
align-items: center;
border-radius: 3px;
height: 23px;
font-family: Arial, Helvetica, sans-serif;
color: #FFFFFF;
line-height: 13px;
font-weight: 100;
`;

export const Featured = styled.h1`
${F}
bottom: 43px;
right: 111px;
background: #0061DF;
width: 73px;
font-size: 10px;
`;

export const For = styled.h1`
${F}
left: 0px;
bottom: 45px;
background: #0D263B;
width: 56px;
font-size: 8px;
`;

export const Img = styled.h1`
width: 113px;
height: 113px;
background: #C4C4C4;
border-radius: 3px;
`;

export const Mini = styled.div`
display: flex;
align-items: center;
width: 1057px;
height: 137px;
padding: 8px 30px;
`;

export const MiniM = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 565px;
height: 137px;
`;

export const Mbox = styled.div`
width: 189px;
`;

const relativet = css`
font-family: 'Montserrat';
position: relative;
right: 60px;
bottom: 8px;
`;

const relativeb = css`
font-family: 'Montserrat';
position: relative;
right: 60px;
top: 10px;
`;

export const Name = styled.h1`
${relativet}
${textt}
`;

export const Namei = styled.input`
${relativet}
${textt}
${kkkk}
`;

export const Info = styled.h1`
font-size: 14px;
${relativet}
${textc}
`;

export const Infoi = styled.input`
font-size: 14px;
${relativet}
${textc}
${kkkk}

`;

export const Money = styled.h1`
font-size: 12px;
text-decoration-line: line-through;
${relativeb}
${textc}
`;

export const Moneyi = styled.input`
font-size: 12px;
${relativeb}
${textc}
${kkkk}
`;

export const Oldmoney = styled.h1`
${relativeb}
${textt}
`;

export const Oldmoneyi = styled.input`
${relativeb}
${textt}
${kkkk}
`;

const kkk = css`
text-align: center;
font-weight: 400;
font-size: 14px;
font-family: 'Montserrat';
line-height: 20px;
color: #696969;
`;

export const Data = styled.h1`
width: 250px;
height: 20px;
${kkk}
`;

export const Datai = styled.input`
width: 250px;
height: 20px;
${kkk}
${kkkk}
`;

export const Status = styled.h1`
width: 110px;
height: 20px;
${kkk}
`;

export const Statusi = styled.input`
width: 110px;
height: 20px;
${kkk}
${kkkk}
`;

export const View = styled.h1`
width: 115px;
height: 20px;
${kkk}
`;

export const Viewi = styled.input`
width: 115px;
height: 20px;
${kkk}
${kkkk}
`;

export const Action = styled.h1`
width: 90px;
text-align: end;
`;
