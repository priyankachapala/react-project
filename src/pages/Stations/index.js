import React from "react";

export default class stationdashboard extends React.Component {
    state={
        stations :[]
    }

    componentDidMount() {
        this.findallstations()
    }


    findallstations=()=>
        fetch('http://localhost:4000/admindashboard/stations')
            .then(response => response.json())
            .then(allstations => this.setState({
                stations : allstations
            }))


    render()
    {
        return <div>
            <a href="http://localhost:3001/admindashboard"><button> BACK</button></a>
            <a href="http://localhost:3001/Trips/between/stations"><button> Trips between Stations</button></a>
            <h1> Stations</h1>
             <table>
                 <tr>
                     <td><h3><b><i>Station Id</i></b></h3></td>
                     <td><h3><b><i>Station Name</i></b></h3></td>
                     <td><h3><b><i>Capacity</i></b></h3></td>
                     <td><h3><b><i>Latitude</i></b></h3></td>
                     <td><h3><b><i>Longitude</i></b></h3></td>
                 </tr>

                         {
                             this.state.stations
                                .map(station =>
                                    <tr>
                                        <td key={station._id}>{ station._id}</td>
                                        <td key={station._id}>{ station.name}</td>
                                        <td key={station._id}>{ station.dpcapacity}</td>
                                        <td key={station._id}>{station.latitude}</td>
                                        <td key={station._id}>{station.longitude}</td>

                                    </tr>
                                )
                         }

             </table>
        </div>

    }
}