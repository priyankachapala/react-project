import React from "react";

export default function subscribertripdashboard() {
    return <div className="inputdiv">
        <form action="http://localhost:4000/trips/takenby/user" method="post">
            <label className="monospace"> Enter ID</label>
            <input type="text" id="name" name="name" className="inputtext"/><br/>
            <input type="submit" value="Submit" className="inputsubmit"/><br/>
        </form><br/>
        <a href="http://localhost:3001/subdashboard"><button className="button button5"> BACK</button></a>
    </div>;
}


// export default class  usertripdashboard extends React.Component{
//     state={
//         trips :[]
//     }
//
//
//     handleSubmi(event){
//         fetch('http://localhost:4000/trips/takenby/user/?='+this.state.value)
//             .then(response => response.json())
//             .then(alltrips => this.setState({
//                 trips : alltrips
//             }))
//     }
//
//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     Enter ID:
//                     <input type="text" value={this.state.value} />
//                 </label>
//                 <input type="submit" value="Submit" />
//             </form>
//         );
//     }
// }


// import { Link } from 'react-router-dom';
//
// export default class usertripdashboard extends React.Component {
//     /** Left some things in here commented out,
//      incase you start doing form submissions. Instead of a dynamic link.
//      **/
//     constructor(props) {
//         super(props);
//         this.state = {value: ''};
//
//         this.handleChange = this.handleChange.bind(this);
//
//         /**  If you start submitting forms
//          this.handleSubmit = this.handleSubmit.bind(this);
//          **/
//     }
//
//     handleChange(event) {
//         this.setState({value: event.target.value});
//     }
//
//     /** If you start submitting forms, add onSubmit={this.onSubmit} to form action
//      handleSubmit(event) {
//     alert('A name was submitted: ' + this.state.value);
//     event.preventDefault();
//   }
//      **/
//
//     render() {
//         return (
//             <div>
//                 <form className="form-inline">
//                     <div className="form-group">
//                         <input type="text" value={this.state.value} onChange={this.handleChange} className="form-control" name="keyword" placeholder="Enter ID" />
//
//                         <Link to={`http://localhost:4000/resultofform/${this.state.value}`}>
//                             <button className="btn btn-primary">Search</button>
//                         </Link>
//                     </div>
//                 </form>
//             </div>
//         );
//     }
// }
//
