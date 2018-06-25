import React,{Component} from 'react';

class Size extends Component{
  render(){
    return(
      <div className="col-sm-6 border p-4 rounded">
        <h4 className="text-start"> Size : </h4>
        <button className="btn btn-sm btn-info">Down</button>
        <button className="ml-4 btn btn-sm btn-info">Up</button>
      </div>

    )
  }
}
export default Size
