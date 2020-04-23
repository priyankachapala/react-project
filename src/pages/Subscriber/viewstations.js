import React from "react";



export default class stationdashboardforsub extends React.Component {
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
        return <div >
            <a href="http://localhost:3001/subdashboard"><button className="button button5"> BACK</button></a>
            <h1> Stations</h1>
            <table className="table">
                <tr className="tr">
                    <td className="th"><b><i>Station Id</i></b></td>
                    <td className="th"><b><i>Station Name</i></b></td>
                    <td className="th"><b><i>Capacity</i></b></td>
                    <td className="th"><b><i>Latitude</i></b></td>
                    <td className="th"><b><i>Longitude</i></b></td>
                </tr>

                {
                    this.state.stations
                        .map(station =>
                            <tr className="tr hover-square">
                                <td className="td" key={station._id}>{ station._id}</td>
                                <td className="td" key={station._id}>{ station.name}</td>
                                <td className="td" key={station._id}>{ station.dpcapacity}</td>
                                <td className="td" key={station._id}>{station.latitude}</td>
                                <td className="td" key={station._id}>{station.longitude}</td>

                            </tr>
                        )
                }

            </table>
        </div>

    }
}