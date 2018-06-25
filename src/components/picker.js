import React,{Component} from 'react';
import '../css/Picker.css'
class Picker extends Component{
  constructor(props){
      super(props);
      this.state = {
        colors : ['red','blue','green','#ccc']
      }
  }
  showColor(color){
    return{
      backgroundColor : color,
      height:'40px',
      width:'40px',
      display:'inline-block',
      marginRight:'30px'
    }
  }

    render(){
      var eleColor = this.state.colors.map((color,index) => {
        return <span key={index} style={ this.showColor(color)}></span>
      })
      return (

        <div className="col-sm-6 p-4 rounded border">
          <h4>Choose your color:</h4>
          {eleColor}
        </div>

      )
    }
}
export default Picker;
