import styled from 'styled-components';


export const FooterBase = styled.footer`
  background: var(--black);
  border-top: 2px solid var(--primary);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 30px;
  padding-bottom: 32px;
  color: var(--white);
  text-align: center;
  margin-top: 1%; 
  
  img{
    width: 50px;
    height: 50px;
    margin-left: 1%;
    border-radius: 50%;
    background-color: #fff;
  }

  a{
    text-decoration: none;
    color: var(--primary);
  }
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;
