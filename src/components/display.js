import React,{Component} from 'react';

class Display extends Component{
  render(){
    return(
      <div className=" p-2 border rounded">
          <label>Color : </label><span> Color </span>
          <label> Fontsize : </label> <span> Size</span>
          <div className="border rounded p-4">
          <h2 >
            Nội dung setting
          </h2>
        </div>
      </div>
    )
  }
}
export default Display
