import React from "react";
import "./CustomerInfo.css";

import UserInput from "../../Components/UserEntry/UserEntry";
import ButtonSave from "../../Components/ButtonControl/ButtonSave";
import Modal from "../../Components/UI/Modal/Modal";
import Aux from "../../hoc/Aux";

import {BrowserRouter} from "react-router-dom";

let CLIENTLISTLOADED = null;
let POSITIONI = 0;

class CustomerInfo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            clientInfo: {
                clientFirstName: "", clientLastName: "", siteAddressFirst: "", siteAddressSecond: "", siteAddressThird: "",siteAddressPC: "", tel: "", mobile: "", proDes: "", emailadd: "", dateInfo: Date.now()
            }, 
            clientInfoEdit: {
                clientFirstName: "", clientLastName: "", siteAddressFirst: "", siteAddressSecond: "", siteAddressThird: "",siteAddressPC: "", tel: "", mobile: "", proDes: "", emailadd: "",
            },
            clientInfoList:[],
            isLoading: true,
            showModal: false,
            test: "nice"
        }
    }

    proDesChangeHandler = (event) => {
        this.setState({
            clientInfo: {...this.state.clientInfo, proDes: event.target.value }}
            //, () => {console.log("proDes in object: " + this.state.clientInfo.proDes)}
            );
    }

    componentDidMount(){
        localStorage.getItem("clientInfo") && this.setState({
            clientInfoList: JSON.parse(localStorage.getItem("clientInfo")),
            isLoading: false,
        }, () => {console.log("Initial fetch of storage has happened");}
    );    
    }

    saveButtonHandler = () => {
        //console.log("Save button clicked.");
        //we can pass a function into the setState method with the argument state.
        this.setState(state => {
           //we create a const which will contain all of the objects in the clientInfoList array and at the end, we will pass on a new object, clientInfo, at the end.
          const clientInfoList = [...state.clientInfoList, state.clientInfo];
          // we will then return the clientInfoList and react knows that this const we created here has to merge with the state clientInfoList.
          //we then also return clientInfo with all the parameters reset, which will empty the user input.
          // we can use the method localStorage.setItem() to save. the first string argument is the key and hte second argument has to be the state which we want to save. But we need to convert it into a Javasript Object Notatation (JSON) and stringify it using JSON.stringify(). the argument passed in JSON.stringify() will be the state(or actually anything you want saved, not just state) that you want saved.  
          return {
            clientInfoList,
            clientInfo: {
                clientFirstName: "", clientLastName: "", siteAddressFirst: "", siteAddressSecond: "", siteAddressThird: "",siteAddressPC: "", tel: "", mobile: "", proDes: "", dateInfo: Date.now(), 
            }
          };
        }, () => {
            localStorage.setItem("clientInfo", JSON.stringify(this.state.clientInfoList));
            localStorage.setItem("clientInfoDate", Date.now());
    });
    };  

    textChangeHandler = (text, i) => {
        console.log("text:"+text);
        console.log("value of i? " + i);
       console.log(this.state.clientInfoEdit);
        this.setState({
            clientInfoEdit: {...this.state.clientInfoEdit ,clientFirstName: text }
        }, () => {console.log("text is being edited")});

    }

    EditHandler = () => {
        
    }


    /*We reach teh displayClientInfoHandler when we have clicked on the name that appears on the right side.
    it basically   
    the names on the right side are generated just below the render method.
    */
    displayClientInfoHandler = (i) => {
        POSITIONI = i;
        console.log("index: "+ i);
        console.log("Client first name: " + this.state.clientInfoEdit.clientFirstName);

        this.setState({showModal:true})
        
    }

    saveEditedClientHandler = (i) => {
        console.log(i);
        //console.log("edited"+this.state.clientInfoEdit);
        //console.log(this.state.clientInfoList[i])
        console.log("save edited client handler clicked");

        let clientFirstName, clientLastName, siteAddressFirst, siteAddressSecond, siteAddressThird,siteAddressPC, tel, mobile, proDes;

        if (this.state.clientInfoEdit.clientFirstName === ""){
        clientFirstName = this.state.clientInfoList[i].clientFirstName;
            } else {
                clientFirstName = this.state.clientInfoEdit.clientFirstName
            }
        if (this.state.clientLastName === ""){
            clientLastName = this.state.clientInfoList[i].clientLastName;
            } else {
                clientLastName = this.state.clientInfoEdit.clientLastName
            }
        if (this.state.siteAddressFirst === ""){
            siteAddressFirst = this.state.clientInfoList[i].siteAddressFirst;
        } else {
            siteAddressFirst = this.state.clientInfoEdit.siteAddressFirst
        }
        if (this.state.siteAddressSecond === ""){
            siteAddressSecond = this.state.clientInfoList[i].siteAddressSecond;
        } else {
            siteAddressSecond = this.state.clientInfoEdit.siteAddressSecond
        }
        if (this.state.siteAddressThird === ""){
            siteAddressThird = this.state.clientInfoList[i].siteAddressThird;
        } else {
            siteAddressThird = this.state.clientInfoEdit.siteAddressThird
        }
        if (this.state.siteAddressPC === ""){
            siteAddressPC = this.state.clientInfoList[i].siteAddressPC;
        } else {
            siteAddressPC = this.state.clientInfoEdit.siteAddressPC
        }
        if (this.state.tel === ""){
            tel = this.state.clientInfoList[i].tel;
        } else {
            tel = this.state.clientInfoEdit.tel
        }
        if (this.state.mobile === ""){
            mobile = this.state.clientInfoList[i].mobile;
        } else {
            mobile = this.state.clientInfoEdit.mobile
        }
        if (this.state.proDes === ""){
            proDes = this.state.clientInfoList[i].proDes;
        } else {
            proDes = this.state.clientInfoEdit.proDes
        }

        

        this.setState({
            clientInfoEdit:{
                clientFirstName: clientFirstName,
                clientLastName: clientLastName,
                siteAddressFirst: siteAddressFirst,
                siteAddressSecond: siteAddressSecond,
                siteAddressThird: siteAddressThird,
                siteAddressPC: siteAddressPC,
                tel: tel,
                mobile: mobile,
                proDes: proDes
            }
            
        }, () => {
            let clientInfoListCopy = [...this.state.clientInfoList];
            clientInfoListCopy.splice(i,1);
            clientInfoListCopy.push(this.state.clientInfoEdit)
            console.log(clientInfoListCopy);
            this.setState({
                clientInfoList: clientInfoListCopy,
                clientInfoEdit:{
                    clientFirstName: "",
                    clientLastName: "",
                    siteAddressFirst: "",
                    siteAddressSecond: "",
                    siteAddressThird: "",
                    siteAddressPC: "",
                    tel: "",
                    mobile: "",
                    proDes: ""
                },
                showModal: false,
            }, () => {
                localStorage.setItem("clientInfo", JSON.stringify(this.state.clientInfoList));
                localStorage.setItem("clientInfoDate", Date.now());
                
            })
        })

        //const spreaded = [...this.state.clientInfoList];
        
        //spreaded[i].splice(i,1)
        //.clientInfoList.push(this.state.clientInfoEdit)

        //we want to spread states and then after that what we want to do is set stae to clienf info list. 

    }

    clientCancelHandler = () => {
        this.setState({
            showModal:false,
            clientInfoEdit: {clientFirstName: "", clientLastName: "", siteAddressFirst: "", siteAddressSecond: "", siteAddressThird: "",siteAddressPC: "", tel: "", mobile: "", proDes: "", emailadd: ""}
        })
    }

    componentDidUpdate(){
        
    }
      
    render() {
        //the below CLIENTISLOADED will map through the clientInfoList array, the value (which is an object containing client information) and the index (to assign a key to each mapping) are the two arguments passed to the function. we are simply returning the client first name and last name. because the array contains objects, which we define here as value, we can simply type value.clientFirstName to find that client first name parameter in the object. 
        
        let clientListIsLoaded = []
        for (let i = 0; i < this.state.clientInfoList.length; i++){
            clientListIsLoaded.push(
                <button key={i} value={i} className="OrderButton" onClick={() => {this.displayClientInfoHandler(i);}}>
                    {this.state.clientInfoList[i].clientFirstName + " " + this.state.clientInfoList[i].clientLastName}
                </button>
            )
        }
        if(this.state.clientInfoList.length !== 0)  {
        console.log(this.state.clientInfoEdit);
        const boxWidth= "300px";
        let clientInfoMap = 
            <li>
                <span>Client First Name: {this.state.clientInfoList[POSITIONI].clientFirstName} </span> 
                <form >
                    <input style={{width: boxWidth}} placeholder="Type to edit first name of client" type="text"  
                    onChange={(text) => {this.setState({
                        clientInfoEdit: {...this.state.clientInfoEdit, clientFirstName: text.target.value }
                    }, () =>{console.log(this.state.clientInfoEdit.clientFirstName)})}}/>    
                </form>

                <span>Client Last Name:  {this.state.clientInfoList[POSITIONI].clientLastName}</span>
                <form >
                    <input style={{width: boxWidth}} placeholder="Type to edit last name of client" type="text"  
                    onChange={(text) => {this.setState({
                        clientInfoEdit: {...this.state.clientInfoEdit, clientLastName: text.target.value }
                    }, () =>{console.log(this.state.clientInfoEdit.clientLastName)})}}/>
                </form>  

                <span>Building number + street: {this.state.clientInfoList[POSITIONI].siteAddressFirst}</span>
                <form >
                    <input style={{width: boxWidth}} placeholder="Type here to edit street add" type="text"  
                    onChange={(text) => {this.setState({
                        clientInfoEdit: {...this.state.clientInfoEdit, siteAddressFirst: text.target.value }
                    }, () =>{console.log(this.state.clientInfoEdit.siteAddressFirst)})}}/>
                </form> 

                <span>City: {this.state.clientInfoList[POSITIONI].siteAddressSecond}</span> 
                <form >
                    <input style={{width: boxWidth}} placeholder="Type here to edit city" type="text"  
                    onChange={(text) => {this.setState({
                        clientInfoEdit: {...this.state.clientInfoEdit, siteAddressSecond: text.target.value }
                    }, () =>{console.log(this.state.clientInfoEdit.siteAddressSecond)})}}/>
                </form>

                <span>County: {this.state.clientInfoList[POSITIONI].siteAddressThird}</span> 
                <form >
                    <input style={{width: boxWidth}} placeholder="Type here to edit County" type="text"  
                    onChange={(text) => {this.setState({
                        clientInfoEdit: {...this.state.clientInfoEdit, siteAddressThird: text.target.value }
                    }, () =>{console.log(this.state.clientInfoEdit.siteAddressThird)})}}/>
                </form>
                
                <span>Postcode: {this.state.clientInfoList[POSITIONI].siteAddressPC}</span>
                <form >
                    <input style={{width: boxWidth}} placeholder="Type here to edit postcode" type="text"  
                    onChange={(text) => {this.setState({
                        clientInfoEdit: {...this.state.clientInfoEdit, siteAddressPC: text.target.value }
                    }, () =>{console.log(this.state.clientInfoEdit.siteAddressPC)})}}/>
                </form> 
                
                <span>Tel: {this.state.clientInfoList[POSITIONI].tel}</span> 
                <form >
                    <input style={{width: boxWidth}} placeholder="Type here to edit tel" type="text"  
                    onChange={(text) => {this.setState({
                        clientInfoEdit: {...this.state.clientInfoEdit, tel: text.target.value }
                    }, () =>{console.log(this.state.clientInfoEdit.tel)})}}/>
                </form>
                
                <span>Mobile: {this.state.clientInfoList[POSITIONI].mobile}</span>
                <form >
                    <input style={{width: boxWidth}} placeholder="Type here to edit mobile" type="text"  
                    onChange={(text) => {this.setState({
                        clientInfoEdit: {...this.state.clientInfoEdit, mobile: text.target.value }
                    }, () =>{console.log(this.state.clientInfoEdit.mobile)})}}/>
                </form>

                <span>Email: {this.state.clientInfoList[POSITIONI].emailadd}</span>
                <form >
                    <input style={{width: boxWidth}} placeholder="Type here to edit email" type="text"  
                    onChange={(text) => {this.setState({
                        clientInfoEdit: {...this.state.clientInfoEdit, email: text.target.value }
                    }, () =>{console.log(this.state.clientInfoEdit.email)})}}/>
                </form>
                
                <span>Project description:</span>
                <form >
                    <input style={{width: boxWidth}} placeholder="Type here to edit Project description" type="text"  
                    onChange={(text) => {this.setState({
                        clientInfoEdit: {...this.state.clientInfoEdit, proDes: text.target.value }
                    }, () =>{console.log(this.state.clientInfoEdit.proDes)})}}/>
                </form>
                <p>{this.state.proDes}</p>           
            </li>
            ;
    
            CLIENTLISTLOADED = (
                <Aux>
                    <h3>Client Details</h3>
                    <ul style={{overflowY: "scroll"}}>
                        {clientInfoMap}
                    </ul>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <button style={{marginRight: "3px"}} onClick={this.clientCancelHandler}>Cancel</button>
                        <button style={{marginLeft: "3px"}} onClick={() => {this.saveEditedClientHandler(POSITIONI)}}>Save</button>
                    </div>
                </Aux>
                )
            }
                

        return(
            <BrowserRouter>
                <Modal
                    show={this.state.showModal}
                    modalClosed={this.clientCancelHandler}
                    >{CLIENTLISTLOADED}</Modal>
                <div className="App-header4">
                    
                    <div className="CompCont">
                    <p className="Header">Enter Client Details</p>
                        <UserInput 
                        value={this.state.clientInfo.clientFirstName} 
                        leftPC="First Name"
                        onChange={(name) => {this.setState({
                            clientInfo: {...this.state.clientInfo, clientFirstName: name.target.value }}, () => {console.log("First name in object: " + this.state.clientInfo.clientFirstName)})}}/>
                        
                        <UserInput 
                        value={this.state.clientInfo.clientLastName} 
                        leftPC="Last Name"
                        onChange={(name) => {this.setState({
                            clientInfo: {...this.state.clientInfo, clientLastName: name.target.value }}, () => {console.log("Last name in object: " + this.state.clientInfo.clientLastName)})}}/>

                        <UserInput
                        value={this.state.clientInfo.siteAddressFirst} 
                        leftPC="Street"
                        onChange={(name) => {this.setState({
                            clientInfo: {...this.state.clientInfo, siteAddressFirst: name.target.value }}, () => {console.log("SAF in object: " + this.state.clientInfo.siteAddressFirst)})}}/>
                        
                        <UserInput 
                        value={this.state.clientInfo.siteAddressSecond} 
                        leftPC="City"
                        onChange={(name) => {this.setState({
                            clientInfo: {...this.state.clientInfo, siteAddressSecond: name.target.value }}, () => {console.log("SAS in object: " + this.state.clientInfo.siteAddressSecond)})}}/>
                        
                        <UserInput 
                        value={this.state.clientInfo.siteAddressThird} 
                        leftPC="County"
                        onChange={(name) => {this.setState({
                            clientInfo: {...this.state.clientInfo, siteAddressThird: name.target.value }}, () => {console.log("SAT in object: " + this.state.clientInfo.siteAddressThird)})}}/>
                        
                        <UserInput 
                        value={this.state.clientInfo.siteAddressPC} 
                        leftPC="Postcode"
                        onChange={(name) => {this.setState({
                            clientInfo: {...this.state.clientInfo, siteAddressPC: name.target.value }}, () => {console.log("SAPC in object: " + this.state.clientInfo.siteAddressPC)})}}/>

                        <UserInput 
                        value={this.state.clientInfo.tel} 
                        leftPC="Tel"
                        onChange={(name) => {this.setState({
                            clientInfo: {...this.state.clientInfo, tel: name.target.value }}, () => {console.log("Tel in object: " + this.state.clientInfo.tel)})}}/>
                        
                        <UserInput 
                        value={this.state.clientInfo.mobile} 
                        leftPC="Mobile"
                        onChange={(name) => {this.setState({
                            clientInfo: {...this.state.clientInfo, mobile: name.target.value }}, () => {console.log("Mobile in object: " + this.state.clientInfo.mobile)})}}/>

                        <UserInput 
                        value={this.state.clientInfo.emailadd} 
                        leftPC="Email add"
                        onChange={(name) => {this.setState({
                            clientInfo: {...this.state.clientInfo, emailadd: name.target.value }}, () => {console.log("email in object: " + this.state.clientInfo.emailadd)})}}/>

                        <p className="Header">Enter Project Description</p>

                        <div className="ProjectDescriptionCont">                            
                                <textarea className="TextInputCont" type="text" placeholder="Please enter project description" value={this.state.clientInfo.proDes} onChange={this.proDesChangeHandler} />                       
                        </div>
                        <ButtonSave
                        onClick={this.saveButtonHandler} 
                        />
                    </div>
                </div>
                
                    <div className="ClientList">
                        <div className="HeaderContainer">
                            <p className="Header">Client Information</p>
                        </div>
                        {clientListIsLoaded}
                    </div>
                
            </BrowserRouter>
        );
    }
}

export default CustomerInfo;