import React from 'react';
import './App.css';
import { DropdownButton, Dropdown,} from "react-bootstrap";
import "../src/Components/Report/Report.css";

import LeftMenu from "./Components/LeftMenu/LeftMenu";
import Report from "./Components/Report/Report";
import ReportP2 from "./Components/Report/ReportP2";
import ReportP3 from "./Components/Report/ReportP3";
import logo from "./Assets/ce_logo.png";
import HeaderReport from "./Components/Report/HeaderReport";
import UserInput from "../src/Components/UserEntry/UserEntry";

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
    
    clientFirstName: "", clientLastName: "", siteAddressFirst: "", siteAddressSecond: "", siteAddressThird: "",siteAddressPC: "", Tel: "", Mobile: "", instructed: "E.G Soufiani", inspectedDate: "", projectNumber: 12345,
    
    //outside building states
    buildingType: "", houseType: "", houseAttachment: "", constructionDateEst: "", constructionMethod: "",
    
    //inside building states
    groundArea: "", floorNumber: "", loftHabitable: false, basement: false, sideAccess: false,
    
    //roof states
    selectRoof: "Roof Selection", flatRoofFelt: false, flatRoofFibreGlass: false,gableEndPR: false,crossGableEndPR: false, dutchGableRoof:false, highEndPitchedRoof: false, butterflyRoof: false,
    
    //tree states
    selectTree: "Tree Selection", broadLeaf: false, conifer: false, treeHeight: "", treeDistance: "",

    //crack

    crack: false, crackLength: "", crackWidth: "",

    //Report

    page1: true, page2:false, page3:false, page4:false, page5:false, page6:false, page7:false, page8:false, page9:false, page10:false, page11:false, page12:false, page13:false, page14:false, page15:false,
    currentPN: 1,

  }
}

roofSelectionHandler = (event) => {
  this.setState({
    selectRoof: event.target.value
  })
}

pageChangeHandlerAdd = (num) => {
  let currentPage = num;
  let newPage = currentPage + 1;
  if(newPage === 2){
    this.setState({
      page1:false,
      page2: true,
      currentPN: 2,
    })
  } else if (newPage === 3){
    this.setState({
      page2:false,
      page3: true,
      currentPN: 3,
    })
  } else if (newPage === 4){
    this.setState({
      page3:false,
      page4: true,
      currentPN: 4,
    })
  } else if (newPage === 5){
    this.setState({
      page4:false,
      page5: true,
      currentPN: 5,
    })
  } else if (newPage === 6){
    this.setState({
      page5:false,
      page6: true,
      currentPN: 6,
    })
  } else if (newPage === 7){
    this.setState({
      page6:false,
      page7: true,
      currentPN: 7,
    })
  } else if (newPage === 8){
    this.setState({
      page7:false,
      page8: true,
      currentPN: 8,
    })
  } else if (newPage === 9){
    this.setState({
      page8:false,
      page9: true,
      currentPN: 9,
    })
  } else if (newPage === 10){
    this.setState({
      page9:false,
      page10: true,
      currentPN: 10,
    })
  }else if (newPage === 11){
    this.setState({
      page10:false,
      page11: true,
      currentPN: 11,
    })
  }else if (newPage === 12){
    this.setState({
      page11:false,
      page12: true,
      currentPN: 12,
    })
  }else if (newPage === 13){
    this.setState({
      page12:false,
      page13: true,
      currentPN: 13,
    })
  }else if (newPage === 14){
    this.setState({
      page13:false,
      page14: true,
      currentPN: 14,
    })
  }else if (newPage === 15){
    this.setState({
      page14:false,
      page15: true,
      currentPN: 15,
    })
  }
}
  

  render(){
    let page1 = false; let page2 = false; let page3 = true; let page4 = false; let page5 = false;let page6 = false; let page7 = false; let page8 = false; let page9 = false; let page10 = false; let page11 = false; let page12 = false; let page13 = false; let page14 = false; let page15 = false;

    const boldStyle = {
      fontWeight: "bold"
    };

    const borderStyle = {
      width: "595px",
      marginTop: "85px"
    };

    const border ={
      border: "1px solid wheat",
      width: "595px",
      height:"30px",
      marginTop:"10px"
    }



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
          <div className="SimpleBorder">
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

            <UserInput 
            leftPC="Project"
            onChange={(name) => {this.setState({projectNumber: name.target.value}, () => {console.log("Project Number: " + this.state.projectNumber)})}}/>
            

            <p className="Header">Client Details</p>

            <UserInput 
            leftPC="First Name"
            onChange={(name) => {this.setState({clientFirstName: name.target.value}, () => {console.log("First name: " + this.state.clientFirstName)})}}/>
            

            <UserInput 
            leftPC="Last Name"
            onChange={(name) => {this.setState({clientLastName: name.target.value}, () => {console.log("Last name: " + this.state.clientLastName)})}}/>

            <UserInput 
            leftPC="Street"
            onChange={(name) => {this.setState({siteAddressFirst: name.target.value}, () => {console.log("Site add 1: " + this.state.siteAddressFirst)})}}/>

            <UserInput 
            leftPC="City"
            onChange={(name) => {this.setState({siteAddressSecond: name.target.value}, () => {console.log("Site add 2: " + this.state.siteAddressSecond)})}}/>
            
            <UserInput 
            leftPC="County"
            onChange={(name) => {this.setState({siteAddressThird: name.target.value}, () => {console.log("Site add 3: " + this.state.siteAddressThird)})}}/>
              
            <UserInput 
            leftPC="Postcode"
            onChange={(name) => {this.setState({siteAddressPC: name.target.value}, () => {console.log("Postcode: " + this.state.siteAddressPC)})}}/>

            <UserInput 
            leftPC="Tel"
            onChange={(name) => {this.setState({Tel: name.target.value}, () => {console.log("Tel: " + this.state.Tel)})}}/>
              
            <UserInput 
            leftPC="Mobile"
            onChange={(name) => {this.setState({Mobile: name.target.value}, () => {console.log("Tel: " + this.state.Mobile)})}}/>

              <p className="Header">Inspection Details</p>

            <UserInput 
            leftPC="Instructed by"
            onChange={(name) => {this.setState({instructed: name.target.value}, () => {console.log("Tel: " + this.state.instructed)})}}/>

            <UserInput 
            leftPC="Inspected Date"
            onChange={(name) => {this.setState({inspectedDate: name.target.value}, () => {console.log("Inspected Date: " + this.state.inspectedDate)})}}/>
      
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

          <div>
            <div style={border}></div>
            {/* from here there needs to be a conditional render */}
            {this.state.page1 &&
            <div className="ReportContainer">
              
              <div>
                  <img style={borderStyle} src={logo} alt="Logo"/>
                </div>
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
                <div className ="PageNumber">
                  <n className ="PageNumberText">1/15</n>
                </div>  
            </div>
          }
          {/* to here */}
          {/* from here there needs to be a conditional render */}
          {this.state.page2 &&
            <div className="ReportContainer">
              <HeaderReport
              streetAndNum={this.state.siteAddressFirst}
              addSecond={this.state.siteAddressSecond}
              addThird={this.state.siteAddressThird}
              addPc={this.state.siteAddressPC}
              pNum={this.state.projectNumber} 
              />
              <ReportP2 
              
              />
              <div className ="PageNumber">
                <n className ="PageNumberText">2/15</n>
              </div>   
            </div>
          }
          {/* to here */}
          {/* from here there needs to be a conditional render */}
          {this.state.page3 &&
            <div className="ReportContainer">
              <HeaderReport
              streetAndNum={this.state.siteAddressFirst}
              addSecond={this.state.siteAddressSecond}
              addThird={this.state.siteAddressThird}
              addPc={this.state.siteAddressPC}
              pNum={this.state.projectNumber} 
              />
              <ReportP3 
              
              />
              <div className ="PageNumber">
                <n className ="PageNumberText">2/15</n>
              </div>   
            </div>
          }
          {/* to here */}
          </div>
        </div>
          
      </div>    
    );
  }
}

export default App;
