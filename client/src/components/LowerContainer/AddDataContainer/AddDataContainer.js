import React from 'react';
import AddDataButton from './AddDataButton/AddDataButton.js';
import AddDataInput from './AddBarDataInput/AddBarDataInput.js';
import AddLineDataInput from './AddLineDataInput/AddLineDataInput.js';
import LineTempDataContainer from './LineTempDataContainer/LineTempDataContainer.js';
import {connect} from 'react-redux';
import './AddDataContainer.css';


export class AddDataContainer extends React.Component{

  render(){
    if(!this.props.isToggled){
      return(<div><AddDataButton/></div>)
    }
    switch(this.props.graphType){
      case 'BAR':
        return(
          <div className="container">
            <AddDataButton />
            <AddDataInput />
          </div>
        );
      case 'LINE':
        return(
        <div className="container">
            <AddDataButton />
            <LineTempDataContainer />
            <AddLineDataInput />
          </div>
        );
    }
  }
}


const mapStateToProps = (state, props) => ({
  isToggled: state.newDataToggle,
  graphType: state.graphType
})

export default connect(mapStateToProps)(AddDataContainer);