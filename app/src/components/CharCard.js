import React from 'react';
import {connect} from 'react-redux'
const CharCard = (props) => {
 return(
     <>
     <h2>{props.name}</h2>
     <p>{props.birthday}</p>
     <img src={props.avatarImg}/>
     <p>Free Company:{props.freeCompany}</p>
     <p>Data Center:{props.datacenter}</p>
     <p>Server:{props.server}</p>
     </>
 )
}
const mapStateToProps = state => {
    return{
      id: state.id,
      name: state.name,
      birthday: state.birthday,
      avatarImg: state.avatarImg,
      freeCompany: state.freeCompany,
      server: state.server,
      datacenter: state.datacenter,
      isFetching: state.isFetching,
      error: state.error,
    }
  }
  export default connect(mapStateToProps)(CharCard); 