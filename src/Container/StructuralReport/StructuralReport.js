import React from "react";
import {auth} from "firebase";
import Spinner from "../../Components/Spinner/Spinner";
import Report from "../../Components/Report/Report";
import ReportP2 from "../../Components/Report/ReportP2";
import ReportP3 from "../../Components/Report/ReportP3";
import ReportP4 from "../../Components/Report/ReportP4";
import ReportP5 from "../../Components/Report/ReportP5";
import ReportP6 from "../../Components/Report/ReportP6";
import ReportP7 from "../../Components/Report/ReportP7";
import ReportP8 from "../../Components/Report/ReportP8";
import logo from "../../Assets/ce_logo.png";
import HeaderReport from "../../Components/Report/HeaderReport";
import UserInput from "../../Components/UserEntry/UserEntry";

import { DropdownButton, Dropdown,} from "react-bootstrap";

import Aux from "../../hoc/Aux";

import {BrowserRouter} from "react-router-dom";

import "../../Components/Report/Report.css";
import "../../App.css";
import "./StructuralReport.css";

var today, yyyy, mm, dd;

today = new Date();
yyyy = today.getFullYear();
mm = today.getMonth();
dd = today.getDate();

class StructuralReport extends React.Component {
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
          authUser: false
      
        }
      }

      componentDidMount() {
        this.listener = auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({authUser: true}, () =>{console.log("user signed in STRUCTURALREPORT")})
            } else {
              console.log("user not signed in STRUCTURALREPORT")
            }
          });
    }

      componentWillUnmount() {
          this.listener();
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
      
      pageChangeHandlerSub = (num) => {
        let currentPage = num;
        let newPage = currentPage - 1;
        if(newPage === 1){
          this.setState({
            page1: true,
            page2: false,
            currentPN: 1,
          })
        } else if (newPage === 2){
          this.setState({
            page2: true,
            page3: false,
            currentPN: 2,
          })
        } else if (newPage === 3){
          this.setState({
            page3: true,
            page4: false,
            currentPN: 3,
          })
        } else if (newPage === 4){
          this.setState({
            page4: true,
            page5: false,
            currentPN: 4,
          })
        } else if (newPage === 5){
          this.setState({
            page5: true,
            page6: false,
            currentPN: 5,
          })
        } else if (newPage === 6){
          this.setState({
            page6: true,
            page7: false,
            currentPN: 6,
          })
        } else if (newPage === 7){
          this.setState({
            page7: true,
            page8: false,
            currentPN: 7,
          })
        } else if (newPage === 8){
          this.setState({
            page8: true,
            page9: false,
            currentPN: 8,
          })
        } else if (newPage === 9){
          this.setState({
            page9: true,
            page10: false,
            currentPN: 9,
          })
        }else if (newPage === 10){
          this.setState({
            page10: true,
            page11: false,
            currentPN: 10,
          })
        }else if (newPage === 11){
          this.setState({
            page11: true,
            page12: false,
            currentPN: 11,
          })
        }else if (newPage === 12){
          this.setState({
            page12: true,
            page13: false,
            currentPN: 12,
          })
        }else if (newPage === 13){
          this.setState({
            page13: true,
            page14: false,
            currentPN: 13,
          })
        }else if (newPage === 14){
          this.setState({
            page14: true,
            page15: false,
            currentPN: 14,
          })
        }
      }
      render(){
    
        let dropRoofArr= [
          {id:"111", name: "Flat Roof Felt"},
          {id:"112", name: "Flat Roof Fibre Glass"},
          {id:"113", name: "Gable End Pitched Roof"},
          {id:"114", name: "Cross Gable End Pitched Roof"},
          {id:"115", name: "Dutch Gable Roof"},
          {id:"116", name: "High End Pitched Roof"},
          {id:"117", name: "Butterfly Roof"}
        ]
    
        let dropTreeArr= [
          {id:"111", name: "Broad Leaf"},
          {id:"112", name: "Conifer"}
        ]
    
        const boldStyle = {
          fontWeight: "bold"
        };
    
        const borderStyle = {
          width: "595px",
          marginTop: "85px"
        };
    
        let dropRoof = (
          <DropdownButton id="dropdown-item-button" title={this.state.selectRoof}>
            {dropRoofArr.map((dropRoof) => {
            let i =0
            return <Dropdown.Item
            key={dropRoofArr[i++].id} 
            as="button" 
            onClick={() => {this.setState({selectRoof: dropRoof.name})}}>
            {dropRoof.name}
            </Dropdown.Item>
            })}
          </DropdownButton>
        )
    
        let dropTree = (
          <DropdownButton id="dropdown-item-button" title={this.state.selectTree}>
            {dropTreeArr.map((dropTree) => {
              let i = 0
            return <Dropdown.Item 
            key={dropTreeArr[i++].id}
            as="button" 
            onClick={() => {this.setState({selectTree: dropTree.name})}}>
            {dropTree.name}
            </Dropdown.Item>
            })}
          </DropdownButton>
    )

    return (
        <BrowserRouter>
        {this.state.authUser && <Aux>
          
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

              {dropRoof}

              <p className="Header">Tree Details</p>   

              {dropTree}
           
          </div>

          <div>
            <div className={"ReportPropertyContainer"}>
              <n className={"ReportPropertyItem"} onClick={() => {this.pageChangeHandlerSub(this.state.currentPN)}}>Page Down</n>
              <n>{this.state.currentPN}</n>
              <n className={"ReportPropertyItem"} onClick={() => {this.pageChangeHandlerAdd(this.state.currentPN)}}>Page Up</n>
            </div>
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
                <n className ="PageNumberText">3/15</n>
              </div>   
            </div>
          }
          {/* to here */}
          {/* from here there needs to be a conditional render */}
          {this.state.page4 &&
            <div className="ReportContainer">
              <HeaderReport
              streetAndNum={this.state.siteAddressFirst}
              addSecond={this.state.siteAddressSecond}
              addThird={this.state.siteAddressThird}
              addPc={this.state.siteAddressPC}
              pNum={this.state.projectNumber} 
              />
              <ReportP4 
              
              />
              <div className ="PageNumber">
                <n className ="PageNumberText">4/15</n>
              </div>   
            </div>
          }
          {/* to here */}
          {/* from here there needs to be a conditional render */}
          {this.state.page5 &&
            <div className="ReportContainer">
              <HeaderReport
              streetAndNum={this.state.siteAddressFirst}
              addSecond={this.state.siteAddressSecond}
              addThird={this.state.siteAddressThird}
              addPc={this.state.siteAddressPC}
              pNum={this.state.projectNumber} 
              />
              <ReportP5 
              
              />
              <div className ="PageNumber">
                <n className ="PageNumberText">5/15</n>
              </div>   
            </div>
          }
          {/* to here */}
          {/* from here there needs to be a conditional render */}
          {this.state.page6 &&
            <div className="ReportContainer">
              <HeaderReport
              streetAndNum={this.state.siteAddressFirst}
              addSecond={this.state.siteAddressSecond}
              addThird={this.state.siteAddressThird}
              addPc={this.state.siteAddressPC}
              pNum={this.state.projectNumber} 
              />
              <ReportP6 
              
              />
              <div className ="PageNumber">
                <n className ="PageNumberText">6/15</n>
              </div>   
            </div>
          }
          {/* to here */}
          {/* from here there needs to be a conditional render */}
          {this.state.page7 &&
            <div className="ReportContainer">
              <HeaderReport
              streetAndNum={this.state.siteAddressFirst}
              addSecond={this.state.siteAddressSecond}
              addThird={this.state.siteAddressThird}
              addPc={this.state.siteAddressPC}
              pNum={this.state.projectNumber} 
              />
              <ReportP7 
              
              />
              <div className ="PageNumber">
                <n className ="PageNumberText">7/15</n>
              </div>   
            </div>
          }
          {/* to here */}
          {/* from here there needs to be a conditional render */}
          {this.state.page8 &&
            <div className="ReportContainer">
              <HeaderReport
              streetAndNum={this.state.siteAddressFirst}
              addSecond={this.state.siteAddressSecond}
              addThird={this.state.siteAddressThird}
              addPc={this.state.siteAddressPC}
              pNum={this.state.projectNumber} 
              />
              <ReportP8 
              
              />
              <div className ="PageNumber">
                <n className ="PageNumberText">8/15</n>
              </div>   
            </div>
          }
          {/* to here */}
          </div>
        </Aux>}
        {!this.state.authUser && <div style={{display: "flex", width: "100%", flexDirection: "column", alignItems: "center"}}><Spinner /><p>Loading... Please sign in if you have not signed in yet</p></div>}  
        </BrowserRouter>
    )
}
}

export default StructuralReport;