import React from 'react';
import './App.css';
import { DropdownButton, Dropdown, InputGroup, FormControl } from "react-bootstrap";
import "../src/Components/Report/Report.css";

import LeftMenu from "./Components/LeftMenu/LeftMenu";
import Report from "./Components/Report/Report";
var today, yyyy, mm, dd;

today = new Date();
yyyy = today.getFullYear();
mm = today.getMonth();
dd = today.getDate();



class App extends React.Component {
constructor (props) {
  super(props);
  this.state ={

    //client states
    clientFirstName: "",
    clientLastName: "",
    siteAddressFirst: "",
    siteAddressSecond: "",
    siteAddressThird: "",
    siteAddressPC: "",
    Tel: "",
    Mobile: "",
    instructed: "E.G Soufiani",
    inspectedDate: "",
    projectNumber: 12345,

    //outside building states
    buildingType: "",
    houseType: "",
    houseAttachment: "",
    constructionDateEst: "",
    constructionMethod: "",

    //inside building states
    groundArea: "",
    floorNumber: "",
    loftHabitable: false,
    basement: false,
    sideAccess: false,

    //roof states
    selectRoof: "Roof Selection",
    flatRoofFelt: false,
    flatRoofFibreGlass: false,
    gableEndPR: false,
    crossGableEndPR: false,
    dutchGableRoof:false,
    highEndPitchedRoof: false,
    butterflyRoof: false,

    //tree states
    selectTree: "Tree Selection",

    broadLeaf: false,
    conifer: false,
    treeHeight: "",
    treeDistance: "",

    //crack

    crack: false,
    crackLength: "",
    crackWidth: ""

  }
}

roofSelectionHandler = (event) => {
  this.setState({
    selectRoof: event.target.value
  })
}


  render(){
    const boldStyle = {
      fontWeight: "bold"
    };

    return (
      <div className="App-header">
        <div className="Top-Bar">
          <div className="LogoContainer">
            <p className="Header">Company Logo</p>
          </div>
          <div className="StateSelection">
            <p className="Header">Structural Report</p>
          </div>
        </div>
        <div className="App-header3">
          <div>
            <LeftMenu
            title="Structural Report" 
            />
            <LeftMenu 
            title="Something Report"
            />
            <LeftMenu
            title="What Report" 
            />
          </div>
          <div className="VariableContainer">
          <p className="Header">Project Number</p>

          <InputGroup size="sm" className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-sm">Project</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" onChange={(name) => {this.setState({projectNumber: name.target.value}, () => {console.log("Project Number: " + this.state.projectNumber)})}}/>
          </InputGroup>
            <p className="Header">Client Details</p>

            <InputGroup size="sm" className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-sm">First Name</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" onChange={(name) => {this.setState({clientFirstName: name.target.value}, () => {console.log("First name: " + this.state.clientFirstName)})}}/>
            </InputGroup>

            <InputGroup size="sm" className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-sm">Last Name</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" onChange={(name) => {this.setState({clientLastName: name.target.value}, () => {console.log("Last name: " + this.state.clientLastName)})}}/>
            </InputGroup>

            <InputGroup size="sm" className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-sm">Street</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" onChange={(name) => {this.setState({siteAddressFirst: name.target.value}, () => {console.log("Site add 1: " + this.state.siteAddressFirst)})}}/>
            </InputGroup>

            <InputGroup size="sm" className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-sm">City</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" onChange={(name) => {this.setState({siteAddressSecond: name.target.value}, () => {console.log("Site add 2: " + this.state.siteAddressSecond)})}}/>
            </InputGroup>

            <InputGroup size="sm" className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-sm">County</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" onChange={(name) => {this.setState({siteAddressThird: name.target.value}, () => {console.log("Site add 3: " + this.state.siteAddressThird)})}}/>
            </InputGroup>

            <InputGroup size="sm" className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-sm">Postcode</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" onChange={(name) => {this.setState({siteAddressPC: name.target.value}, () => {console.log("Postcode: " + this.state.siteAddressPC)})}}/>
            </InputGroup>
            
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-sm">Tel</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" onChange={(name) => {this.setState({Tel: name.target.value}, () => {console.log("Tel: " + this.state.Tel)})}}/>
            </InputGroup>

            <InputGroup size="sm" className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-sm">Mobile</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" onChange={(name) => {this.setState({Mobile: name.target.value}, () => {console.log("Tel: " + this.state.Mobile)})}}/>
            </InputGroup>

            <p className="Header">Inspection Details</p>

            <InputGroup size="sm" className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-sm">Instructed by</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" defaultValue={this.state.instructed} onChange={(name) => {this.setState({instructed: name.target.value}, () => {console.log("Tel: " + this.state.instructed)})}}/>
            </InputGroup>

            <InputGroup size="sm" className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-sm">Inspect Date</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" onChange={(name) => {this.setState({inspectedDate: name.target.value}, () => {console.log("Inspected Date: " + this.state.inspectedDate)})}}/>
            </InputGroup>
    
            <p className="Header">Roof Detail</p>

            <DropdownButton id="dropdown-item-button" title={this.state.selectRoof}>
              <Dropdown.Item 
              as="button" 
              onClick={() => {this.setState({selectRoof: "Flat Roof Felt"})}}>
              Flat Roof Felt</Dropdown.Item>
              <Dropdown.Item 
              as="button" 
              onClick={() => {this.setState({selectRoof: "Flat Roof Fibre Glass"})}}>
              Flat Roof Fibre Glass</Dropdown.Item>
              <Dropdown.Item 
              as="button" 
              onClick={() => {this.setState({selectRoof: "Gable End Pitched Roof"})}}>
              Gable End Pitched Roof</Dropdown.Item>
              <Dropdown.Item 
              as="button" 
              onClick={() => {this.setState({selectRoof: "Cross Gable End Pitched Roof"})}}>
              Cross Gable End Pitched Roof</Dropdown.Item>
              <Dropdown.Item 
              as="button" 
              onClick={() => {this.setState({selectRoof: "Dutch Gable Roof"})}}>
              Dutch Gable Roof</Dropdown.Item>
              <Dropdown.Item 
              as="button" 
              onClick={() => {this.setState({selectRoof: "High End Pitched Roof"})}}>
              High End Pitched Roof</Dropdown.Item>
              <Dropdown.Item 
              as="button" 
              onClick={() => {this.setState({selectRoof: "Butterfly Roof"})}}>
              Butterfly Roof</Dropdown.Item>
            </DropdownButton>

            <p className="Header">Tree Details</p>   

            <DropdownButton id="dropdown-item-button" title={this.state.selectTree}>
              <Dropdown.Item 
              as="button" 
              onClick={() => {this.setState({selectRoof: "Broad Leaf"})}}>
              Flat Roof Felt</Dropdown.Item>
              <Dropdown.Item 
              as="button" 
              onClick={() => {this.setState({selectRoof: "Conifer"})}}>
              Flat Roof Fibre Glass</Dropdown.Item>
              </DropdownButton>
           
          </div>
          
          <div className="ReportContainer">
            <div className="ReportStartContainer">
              <div className="ReportClientDetail">
                <p style={boldStyle}>Client</p>
                <n>{this.state.clientFirstName + " " + this.state.clientLastName}</n>
                <n>{this.state.siteAddressFirst}</n>
                <n>{this.state.siteAddressSecond}</n>
                <n>{this.state.siteAddressThird}</n>
                <n>{this.state.siteAddressPC}</n>
              </div>
              <div className="ReportReporterDetail">
                <n>Civil Engineers Ltd</n>
                <n>22 Kingswood Road</n>
                <n>Ilford</n>
                <n>Essex</n>
                <p>IG3 8UE</p>
                <n>Tel: 020 8598 1998</n>
                <n>Email: info@cengineers.co.uk</n>
                <n>Project No: {this.state.projectNumber}</n>
                <n>Date: {dd + "/" + mm + "/" + yyyy}</n>
              </div>
            </div>
            <Report 
            year={yyyy}
            numberAndStreet={this.state.siteAddressFirst}
            addSecond={this.state.siteAddressSecond}
            addThird={this.state.siteAddressThird}
            addPC={this.state.siteAddressPC}
            />
          </div>
        </div>
          
      </div>    
    );
  }
}

export default App;
