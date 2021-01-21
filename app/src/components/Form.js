import React from "react";
import { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { getCharacter } from "../actions/actions";
import styled from "styled-components";
const Form = (props) => {
  const [value, setValue] = useState("");
  const StyledDiv = styled.div`
    width: 50%;
    -webkit-box-shadow: 0 10px 6px -6px #777;
    -moz-box-shadow: 0 10px 6px -6px #777;
    box-shadow: 0 10px 6px -6px #777;
    background-color: #dcdcdc;
  `;
  const handleChange = (evt) => {
    evt.preventDefault();
    setValue(evt.target.value);
    // console.log(value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    props.getCharacter(value);

    //     axios.get(`https://xivapi.com/character/${value}`)
    //     .then((res) => {
    //       console.log(res.data.Character)
    //     })
    //     .catch((err) => {
    // console.log(err)
    //     })
  };
  return (
    <>
      <StyledDiv>
        <form onSubmit={onSubmit}>
          <label htmlFor="CharId">
            <input
              type="text"
              name="CharId"
              placeholder="Character Id"
              onChange={handleChange}
              value={value}
            />
          </label>
          <button>Look up!</button>
        </form>
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

export default connect(mapStateToProps, { getCharacter })(Form);
