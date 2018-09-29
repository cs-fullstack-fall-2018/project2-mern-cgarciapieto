import React,{Component} from 'react';
// import Adventure from './Adventure';


class Journal extends Component{
    constructor(props) {
        super(props);
        this.handleusername = this.handleusername.bind(this);
        this.handletitle = this.handletitle.bind(this);
        this.handleJournalEntry = this.handleJournalEntry.bind(this);

        this.state = {
            username: "",
            title: "",
            JournalEntry: "",
        }
    }

handleusername(event) {
    this.setState({ username: event.target.value });
}
handletitle(event) {
    this.setState({ title: event.target.value });

}
handleJournalEntry(event) {
    this.setState({ JournalEntry: event.target.value });
}

addToJournal = event => {
    event.preventDefault();
    this.setState({
        username: event.target.value,
        title: event.target.value,
        JournalEntry: event.target.value,
    });

    // fetch(Endpoint, {
    //     method: 'POST',
    //     headers: {'Content-Type': 'application/json'},
    //     body: JSON.stringify(Endpoint),
    // })
    //     .then(result => result.json())
    //     .then((res) => {
    //         if (!res.success) this.setState({requestFailed: res.error});});



    // this.setState({
    //     username: "",
    //     title: "",
    //     JournalEntry:"",
    // });
};


    render(){
    return(
        <div>
            <input

                onChange={this.handleusername}
                name="username"
                className="NameinputForm"
                value={this.state.username}
                placeholder="Enter your name"
            />
            <input

                onChange={this.handletitle}
                name="title"
                className="NameinputForm"
                value={this.state.title}
                placeholder="Enter Title"
            />

            <textarea
                onChange={this.handleJournalEntry}
                name="JournalEntry"
                className="MessageinputForm"
                value={this.state.JournalEntry}
                placeholder="Type a message"
            />
            <button
                className="submitbutton"
                type="submit"
                onClick={this.addToJournal}
            >
                Submit to Adventure<i className="JournalButton2" aria-hidden="true" />
            </button>

        </div>


    )}
}

export default Journal;