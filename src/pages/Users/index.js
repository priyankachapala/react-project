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
            <a href="http://localhost:3001/admindashboard"><button> BACK</button></a>
            <a href="http://localhost:3001/Tripstakenbyuser"><button> Trips Taken By User</button></a>
            <a href="http://localhost:3001/Ammountpaidbyuser"><button> Ammount paid by User</button></a>
            <a href="http://localhost:3001/TotalAmmount"><button> Total Ammount</button></a>


            <h1> Users</h1>
            <table>
                <tr> <td><h3><b><i>User Id</i></b></h3></td>
                    <td><h3><b><i>Gender</i></b></h3></td>
                    <td><h3><b><i>UserType</i></b></h3></td>

                </tr>


                {
                    this.state.users
                        .map(user =>
                            <tr>
                                <td key={user._id}>{ user._id}</td>
                                <td key={user._id}>{user.gender}</td>
                                <td key={user._id}>{user.userType}</td>

                            </tr>
                        )
                }

            </table>
        </div>

    }


}