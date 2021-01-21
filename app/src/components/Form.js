import React from "react";
import { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { getCharacter } from "../actions/actions";
import styled from "styled-components";
import CharCard from "./CharCard";
const Form = (props) => {
  const [value, setValue] = useState("");
  const [showResults, setShowResults] = useState(false);
  const onClick = () => setShowResults(true);
  const handleChange = (evt) => {
    evt.preventDefault();
    setValue(evt.target.value);
    // console.log(value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    props.getCharacter(value);
    setValue("")
    

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
        <input type="submit" value="Look up!" onClick={onClick} />
        {showResults ? <CharCard /> : null}
      </form>
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
