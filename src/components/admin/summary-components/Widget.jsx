import styled from 'styled-components';
import React from 'react'

const Widget = ({data}) => {
  return (
    <StyledWidget>
      <Icon color={data.color} bgcolor={data.bgColor}>
      {data.icon}
      </Icon>
        
        <Text>
        <h3>
          {
            data.isMoney ? "$" + data.digits?.toLocaleString()
            :data.digits?.toLocaleString()
          }
        </h3>
        <p>{data.title}</p>

        </Text>
        {data.percentage < 0 ? <>
          <Percentage isPositive={false}>
            {Math.floor (data.percentage) + "%"}
          </Percentage>
        </>:<>
          <Percentage isPositive = {true}>
          {Math.floor(data.percentage)+"%"}

          </Percentage>
        </> }
      
    </StyledWidget>
  )
}

export default Widget;

const StyledWidget = styled.div`
  display:flex;
  align-items:center;
`;

const Icon=styled.div`
  margin-right:0.5rem;
  padding:0.5rem;
  color:${({ color }) => color};
  background:${({bgcolor})=>bgcolor};
  border-radius:3px;
  font-size:20px;
`;


const Text=styled.div`
h3{
  font-weight:900;
}
p{
  font-size:14px;
  color:whitesmoke;
}
`;

const Percentage=styled.div`
  margin-left:0.5rem;
  font-size:14px;
  color:${({isPositive})=>
  isPositive ? "lightgreen":"orange"}
`;
