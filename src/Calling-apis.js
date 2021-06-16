import React from "react";
export default class Fetching extends React.Component {

    state = {
        loading: true,
        person: null
    }
    componentDidMount() {
        const url = "http://api.nobelprize.org/v1/prize.json";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ person: data.results[0], loading: false });

    }



    render() {
        if (this.state.loading) {
            return <div>loading...</div>
        }
        if (!this.state.person) {
            return <div> Didn't get a person</div>
        }
        return <div>user..</div>
        {
            this.state.loading || !this.state.person ? (
                <div>loading....</div>
            ) : (<div>
                <div> {this.state.person.prizes}</div>
                <div> {this.state.person.id}</div>
                <div> {this.state.person.firstname}</div>
                <div> {this.state.person.surname}</div>
            </div>)
        }
    }
}