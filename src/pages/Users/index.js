import React from "react";

export default class userdashboard extends React.Component {
    state={
        users :[]
    }

    componentDidMount() {
        this.findallusers()
    }


    findallusers=()=>
        fetch('http://localhost:4000/admindashboard/users')
            .then(response => response.json())
            .then(allusers => this.setState({
                users : allusers
            }))


    render()
    {
        return <div>
            <div className="inputdiv">
            <a href="http://localhost:3001/admindashboard"><button className="button button5"> BACK</button></a>
            <a href="http://localhost:3001/Tripstakenbyuser"><button className="button button5"> Trips Taken By User</button></a>
            <a href="http://localhost:3001/Ammountpaidbyuser"><button className="button button5"> Ammount paid by User</button></a>
            <a href="http://localhost:3001/TotalAmmount"><button className="button button5"> Total Ammount</button></a>
            </div>

            <h1> Users</h1>
            <table className="table">
                <tr className="tr">
                    <td className="th"><b><i>User Id</i></b></td>
                    <td className="th"><b><i>Gender</i></b></td>
                    <td className="th"><b><i>UserType</i></b></td>

                </tr>


                {
                    this.state.users
                        .map(user =>
                            <tr className="tr hover-square">
                                <td className="td" key={user._id}>{ user._id}</td>
                                <td className="td" key={user._id}>{user.gender}</td>
                                <td className="td" key={user._id}>{user.userType}</td>

                            </tr>
                        )
                }

            </table>
        </div>

    }


}