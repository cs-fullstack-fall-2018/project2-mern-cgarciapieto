
import React,{Component} from 'react';


class Adventure extends Component{
    constructor(props){
        super(props);

        this.state = {
            blog:[{username:,
                title: ,
                JournalEntry: }]

        }

    }}

fetch('/entries', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(),
})
    .then(result => result.json())
    .then((res) => {
        if (!res.success) this.setState({requestFailed: res.error});});

fetch('/entries')
    .then()


export default Adventure;