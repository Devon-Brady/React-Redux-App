import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
const CharCard = (props) => {
  return (
    <>
      <StyledDiv>
        <div>
          <h2>{props.name}</h2>
         
        </div>
        <StyledDivInfo>
          <StyledImg src={props.avatarImg} />
          <InfoDiv>
            <p>{props.birthday}</p>
            <p>Free Company:{props.freeCompany}</p>
            <p>Data Center:{props.datacenter}</p>
            <p>Server:{props.server}</p>
          </InfoDiv>
        </StyledDivInfo>
      </StyledDiv>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    id: state.id,
    name: state.name,
    birthday: state.birthday,
    avatarImg: state.avatarImg,
    freeCompany: state.freeCompany,
    server: state.server,
    datacenter: state.datacenter,
    isFetching: state.isFetching,
    error: state.error,
  };
};
const StyledDiv = styled.div`
  margin: 3% auto;
  width: 90%;
  -position: relative;
  -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3),
    0 0 40px rgba(0, 0, 0, 0.1) inset;
  -moz-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3),
    0 0 40px rgba(0, 0, 0, 0.1) inset;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  background-color: #dcdcdc;
  padding: 2%;
`;
const StyledImg = styled.img`
  width: 50%;
  height: auto;
  -position: relative;
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
`;
const StyledDivInfo = styled.div`
display:flex;
text-align:center;
width:100%;
`;
const InfoDiv = styled.div`
width:50%;
text-align:center;
margin-left:5%;
`
export default connect(mapStateToProps)(CharCard);
