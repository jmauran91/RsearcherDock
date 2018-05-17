import React from 'react';
import update from 'react-addons-update';
import PropTypes from 'prop-types';
import Auth from '../modules/Auth';
import Dropzone from 'react-dropzone';
import fetch from "isomorphic-fetch";


class NewProjectPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        title: '',
        owner: '',
        description: '',
        documents: {},
        success: null
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.clearForm = this.clearForm.bind(this);
    this.afterSubmission = this.afterSubmission.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    const data = new FormData();
    data.append('title', this.state.title)
    data.append('owner', this.props.owner_name)
    data.append('description', this.state.description)
    data.append('file', this.state.documents)
    data.append('filename', this.state.documents.name)
    const url = '/api/projects';
    fetch(url, {
      method: 'POST',
      headers: {
        'Authorization' : `bearer ${Auth.getToken()}`
      },
      body: data
    })
    .then(response => response.json())
    .then((response)=> {
      console.log(response)
      if(response.msg == "You have not provided proper inputs"){
        this.afterSubmission(false);
      }
      else {
        this.afterSubmission(true);
      }
    })
    .catch((error) => {
      console.log("Error: " + error)
      this.afterSubmission(false)
    })
  }

  handleChange(event){
    var key = event.target.name;
    var val = event.target.value
    var obj = {}
    obj[key] = val
    this.setState( obj );
  }

  afterSubmission(status){
    this.clearForm();
    this.postMessage(status);
  }

  clearForm(){
    this.setState({
      title: '',
      owner: '',
      description: '',
      documents: {}
    })
  }

  postMessage(status){
    this.setState({ success: status})
  }

  onDrop(files){
    var file = files[0]
    this.setState({ documents: file })
  }

  render(){

    if (this.state.success == true){
      var successStyle = {
        width: '70%',
        padding: '8px',
        color: '#4F8A10',
        backgroundColor: '#DFF2BF',
      }
      var successTextStyle = {
        margin: '5px 11px',
        fontSize: '1.2em',
        verticalAlign: 'middle'
      }
      var successMsg = "Project successfully added"
    }
    else if (this.state.success == false){
      var successStyle = {
        width: '70%',
        padding: '8px',
        color: '#D8000C',
        backgroundColor: '#FFD2D2',
      }
      var successTextStyle = {
        margin: '5px 11px',
        fontSize: '1.2em',
        verticalAlign: 'middle'
      }
      var successMsg = "Error - check your inputs"
    }
    else {
      var successStyle, successTextStyle, successMsg;
    }

    return(
      <div className = "dash-form-container">
        <div className="dash-form-return-msg" style={successStyle}>
          <div style={successTextStyle} >{successMsg}</div>
        </div>
        <form onSubmit={this.handleSubmit} autoComplete="off">
          <ul className="dash-form-list-holder">
            <li>
              <input
                value={this.state.title}
                name="title"
                type="text"
                onChange={this.handleChange}
                placeholder="Title..."
              />
            </li>
            <li>
              <input
                value={this.state.description}
                name="description"
                type="text"
                onChange={this.handleChange}
                placeholder="Description..."
              />
            </li>
            <li className="new-project-drop">
              <Dropzone onDrop={this.onDrop} className="new-project-drop-dropzone">
                Drag file or click to upload
              </Dropzone>
              <label>
                -- You must add a file to start the project --
              </label>
            </li>
          </ul>
          <button type="submit">
            Add Project
          </button>
        </form>
      </div>
    )
  }
}

NewProjectPage.contextTypes = {
  router: PropTypes.object.isRequired
};

export default NewProjectPage;
