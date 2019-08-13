import styled from 'styled-components';

export const Container = styled.div`
  width: 30%;
  height: 100%;
  background: black;
  float:left;
`;

export const Header = styled.div`
  width: 100%;
  height: 90px;
  background: rgba(255,255,255,0.2);
  color: white;
  
  
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerItens = styled.div`
  width: 100%;
`;

export const Link = styled.div`
  cursor: pointer;
  width: 90%;
  height: 60px;
  color: white;
  font-size: 18px;
  margin:20px auto;
  padding-left: 50px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  background: ${props => props.select ? 'rgba(255,255,255,0.2)' : 'none'};

  :hover{
    background:rgba(255,255,255,0.3);
    transition:0.5s;
  }


`;


