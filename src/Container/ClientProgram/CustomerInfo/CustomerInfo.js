import React from "react";
import "./CustomerInfo.css";
//import axios from "../../axios-clientdata";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

import ButtonSave from "../../../Components/ButtonControl/ButtonSave";
import Modal from "../../../Components/UI/Modal/Modal";
import Aux from "../../../hoc/Aux";
import Spinner from "../../../Components/Spinner/Spinner";
import {database} from "firebase";

import {BrowserRouter} from "react-router-dom";

let CLIENTLISTEDITLOADED = null;
let CLIENTLISTVIEWLOADED = null;
let DELETESURE = null;
let POSITIONI = 0;
let DEVELOPMENTMODE = true;

class CustomerInfo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            clientInfo: {
                clientFirstName: "", clientLastName: "", siteAddressFirst: "", siteAddressSecond: "", siteAddressThird: "",siteAddressPC: "", tel: "", mobile: "", proDes: "", emailAdd: "", dateInfo: Date.now()
            }, 
            clientInfoEdit: {
                clientFirstName: "", clientLastName: "", siteAddressFirst: "", siteAddressSecond: "", siteAddressThird: "",siteAddressPC: "", tel: "", mobile: "", proDes: "", emailAdd: "",
            },
            clientInfoList:[],
            
            showModalEdit: false,
            showModalView: false,
            resetEditState: false,
            spinnerText: "enter client details and press save to upload client info to the cloud",
            failUploadText: null,
            showSpinner: false,
            showSpinnerClientList: true,
            localSUsed: null,
            deleteSure: false,
            authUser: null,

            jobAccept: false,
            clientJobAcceptedList: []
        }



    }

    proDesChangeHandler = (event) => {
        this.setState({
            clientInfo: {...this.state.clientInfo, proDes: event.target.value }}
            //, () => {console.log("proDes in object: " + this.state.clientInfo.proDes)}
            );
    }

    componentDidMount(){
        //localStorage.getItem("clientInfo") && this.setState({
        //    clientInfoList: JSON.parse(localStorage.getItem("clientInfo")),
        //    isLoading: false,
        //}, () => {console.log("Initial fetch of storage has happened");}
    //); 
    if(!DEVELOPMENTMODE){
        var clientDataList = database().ref("clientData/clientData");
        clientDataList.on('value', snapshot => {
            this.setState({
                clientInfoList: snapshot.val(),
                showSpinnerClientList: false,
                authUser: true
            }, (error) => {if (error) {
                console.log("error has occured in componentDidMount" + error)
            } else {
                console.log("clientListData gathered from firebase successfully")
            }})
        })} else if(DEVELOPMENTMODE){
        var clientDataListTest = database().ref("clientData/clientDataTEST");
        clientDataListTest.on('value', snapshot => {
            this.setState({
                clientInfoList: snapshot.val(),
                showSpinnerClientList: false,
                authUser: true
            }, (error) => {if (error) {
                console.log("error has occured in componentDidMount" + error)
            } else {
                console.log("clientListData gathered from firebase successfully")
            }})
        })
    }
    {/*.catch(error => {
        console.log("error at componentDidMount on retrieving clientDataList from cloud. " + error);
        this.setState({
            showSpinnerClientList: false
        })
})*/}

    {/*var userId = firebase.auth().currentUser.uid;
    return database().ref('/clientData/clientData')
    .then(function(snapshot) {
    var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
  // ...
    });

    this.listener = firebase.auth().onAuthStateChanged(authUser => {
        authUser
          ? 
          axios.get("https://clientinfo-bfb1b.firebaseio.com/clientData/clientData.json")
          .then(response => {console.log("authUser is true");
              this.setState({
                  clientInfoList: response.data,
                  showSpinnerClientList: false,
                  failUploadText: null
              }, () => {
                  localStorage.setItem("clientInfo", JSON.stringify(this.state.clientInfoList));
              });})
              .catch(error => {
                  let errorCode = error.code;
                  let errorMessage = error.message;
                  console.log(authUser);
                  console.log(errorMessage);
                  console.log("failed to fetch initial data " + error);
                  localStorage.getItem("clientInfo") && 
                  this.setState({
                  clientInfoList: JSON.parse(localStorage.getItem("clientInfo")),
                  showSpinnerClientList: false,
                  localSUsed: "LOCAL STORAGE BEING USED - check network. Changes to client data MAY not appear if application is restarted due to it not syncing to cloud",
                  failUploadText: "Error syncing to cloud. please check network"
                  }, () => {console.log("error loading from cloud. LOCAL STORAGE USED");}
              ); 
              })
          : this.setState({ authUser: null }, ()=>{console.log("CLIENTINFO FAILED AUTH")});
      });*/}
    }

    componentWillUnmount() {
        //this.listener();
      }

    saveButtonHandler = () => {
        
        console.log(this.state.clientInfo);
        //we can pass a function into the setState method with the argument state.
        if(this.state.clientInfo.clientFirstName !== "" && this.state.clientInfo.clientLastName !== ""){
        this.setState(state => {
           //we create a const which will contain all of the objects in the clientInfoList array and at the end, we will pass on a new object, clientInfo, at the end.
           let clientInfoList;
            if(this.state.clientInfoList !== null){
                clientInfoList = [...state.clientInfoList, state.clientInfo];}
            else if (this.state.clientInfoList === null){
                clientInfoList = [state.clientInfo];
          }
          //the below sorts the names of the clients by last name
          clientInfoList.sort(compare)
          function compare(a, b) {
            const clientLastNameA = a.clientLastName.toUpperCase();
            const clientLastNameB = b.clientLastName.toUpperCase();
            
            let comparison = 0;
            if (clientLastNameA > clientLastNameB) {
              comparison = 1;
            } else if (clientLastNameA < clientLastNameB) {
              comparison = -1;
            }
            return comparison;
          }

          // we will then return the clientInfoList and react knows that this const we created here has to merge with the state clientInfoList.
          //we then also return clientInfo with all the parameters reset, which will empty the user input.
          // we can use the method localStorage.setItem() to save. the first string argument is the key and hte second argument has to be the state which we want to save. But we need to convert it into a Javasript Object Notatation (JSON) and stringify it using JSON.stringify(). the argument passed in JSON.stringify() will be the state(or actually anything you want saved, not just state) that you want saved.  
          return {
            clientInfoList,
            clientInfo: {
                clientFirstName: "", clientLastName: "", siteAddressFirst: "", siteAddressSecond: "", siteAddressThird: "",siteAddressPC: "", tel: "", mobile: "", proDes: "", emailAdd: "", dateInfo: Date.now(), 
            },
            clientListSpinner: true,
            showSpinner: true
          };
        }, () => {
            localStorage.setItem("clientInfo", JSON.stringify(this.state.clientInfoList));
            localStorage.setItem("clientInfoDate", Date.now());
            //const clientData = {
            //    clientData: this.state.clientInfoList
            //}

            // write firebase code to save data to cloud
            if (!DEVELOPMENTMODE){
            database().ref("clientData/clientData").set({
                ...this.state.clientInfoList
              }, error => {
                if (error) {
                  // The write failed...
                  console.log(error); this.setState({showSpinner: false, spinnerText:"Failed to save to cloud", failUploadText: "Error syncing to cloud. please check network", clientListSpinner: false},() => {setTimeout(this.defaultCloudStatus, 3000);})
                } else {
                  console.log("Data saved successfully to cloud");
                  this.setState({showSpinner:false, spinnerText:"SAVED TO CLOUD", failUploadText: null, clientListSpinner: false}, () => {setTimeout(this.defaultCloudStatus, 3000);})
                }
                });
            }else if (DEVELOPMENTMODE){
                database().ref("clientData/clientDataTEST").set({
                    ...this.state.clientInfoList
                  }, error => {
                    if (error) {
                      // The write failed...
                      console.log(error); this.setState({showSpinner: false, spinnerText:"Failed to save to cloud", failUploadText: "Error syncing to cloud. please check network", clientListSpinner: false},() => {setTimeout(this.defaultCloudStatus, 3000);})
                    } else {
                      console.log("Data saved successfully to cloud");
                      this.setState({showSpinner:false, spinnerText:"SAVED TO CLOUD", failUploadText: null, clientListSpinner: false}, () => {setTimeout(this.defaultCloudStatus, 3000);})
                    }
                    });
                }


            {/*axios.patch("/clientData.json", clientData)
            .then(response => {console.log(response); this.setState({showSpinner:false, spinnerText:"SAVED TO CLOUD", failUploadText: null},() => {setTimeout(this.defaultCloudStatus, 3000);})})
            .catch(error => {console.log(error); this.setState({showSpinner: false, spinnerText:"FAILED to save to cloud but saved to local storage", failUploadText: "Error syncing to cloud. please check network"},() => {setTimeout(this.defaultCloudStatus, 3000);})});*/}
    });
        } else if (this.state.clientInfo.clientFirstName === "" && this.state.clientInfo.clientLastName === ""){
            alert("Please enter a first and last name at least")
        }
    }; 
    
    defaultCloudStatus = () => {
        this.setState ({
            spinnerText:"enter client details and press save to upload client info to the cloud"
        })
    }

    textChangeHandler = (text, i) => {
        //console.log("text:"+text);
        //console.log("value of i? " + i);
        //console.log(this.state.clientInfoEdit);
        this.setState({
            clientInfoEdit: {...this.state.clientInfoEdit ,clientFirstName: text }
        }, () => {console.log("text is being edited")});
    
    }

    /*We reach teh displayClientInfoHandler when we have clicked on the name that appears on the right side.
    it basically   
    the names on the right side are generated just below the render method.
    */
    displayClientInfoHandler = (i) => {
        POSITIONI = i;
        console.log("index: "+ i);

        this.setState({showModalEdit:true})
        
    }

    displayClientInfoHandlerView = (i) => {
        POSITIONI = i;
        console.log("index: "+ i);

        this.setState({showModalView:true})
        
    }

    saveEditedClientHandler = (i) => {
        console.log(i);
        //console.log("edited"+this.state.clientInfoEdit);
        //console.log(this.state.clientInfoList[i])
        console.log("save edited client handler clicked");

        /*console.log(
            "clientFirstName1" + this.state.clientInfoList[i].clientFirstName + "\n" +
            "clientLastName1" + this.state.clientInfoList[i].clientLastName + "\n" +
            "siteAddressFirst1" + this.state.clientInfoList[i].siteAddressFirst + "\n" +
            "siteAddressSecond1" + this.state.clientInfoList[i].siteAddressSecond + "\n" +
            "siteAddressThird1" + this.state.clientInfoList[i].siteAddressThird + "\n" +
            "siteAddressPC1" + this.state.clientInfoList[i].siteAddressPC + "\n" +
            "tel1" + this.state.clientInfoList[i].tel + "\n" +
            "mobile1" + this.state.clientInfoList[i].mobile + "\n" +
            "email1" + this.state.clientInfoList[i].emailAdd + "\n"
            )*/

        let clientFirstName, clientLastName, siteAddressFirst, siteAddressSecond, siteAddressThird,siteAddressPC, tel, mobile, emailAdd, proDes;

        if (this.state.clientInfoEdit.clientFirstName === ""){
        clientFirstName = this.state.clientInfoList[i].clientFirstName;
        } else {
                clientFirstName = this.state.clientInfoEdit.clientFirstName
        }
        if (this.state.clientInfoEdit.clientLastName === ""){
            clientLastName = this.state.clientInfoList[i].clientLastName;
        } else {
                clientLastName = this.state.clientInfoEdit.clientLastName
        }
        if (this.state.clientInfoEdit.siteAddressFirst === ""){
            siteAddressFirst = this.state.clientInfoList[i].siteAddressFirst;
        } else {
            siteAddressFirst = this.state.clientInfoEdit.siteAddressFirst
        }
        if (this.state.clientInfoEdit.siteAddressSecond === ""){
            siteAddressSecond = this.state.clientInfoList[i].siteAddressSecond;
        } else {
            siteAddressSecond = this.state.clientInfoEdit.siteAddressSecond
        }
        if (this.state.clientInfoEdit.siteAddressThird === ""){
            siteAddressThird = this.state.clientInfoList[i].siteAddressThird;
        } else {
            siteAddressThird = this.state.clientInfoEdit.siteAddressThird
        }
        if (this.state.clientInfoEdit.siteAddressPC === ""){
            siteAddressPC = this.state.clientInfoList[i].siteAddressPC;
        } else {
            siteAddressPC = this.state.clientInfoEdit.siteAddressPC
        }
        if (this.state.clientInfoEdit.tel === ""){
            tel = this.state.clientInfoList[i].tel;
        } else {
            tel = this.state.clientInfoEdit.tel
        }
        if (this.state.clientInfoEdit.mobile === ""){
            mobile = this.state.clientInfoList[i].mobile;
        } else {
            mobile = this.state.clientInfoEdit.mobile
        }
        if (this.state.clientInfoEdit.proDes === ""){
            proDes = this.state.clientInfoList[i].proDes;
        } else {
            proDes = this.state.clientInfoEdit.proDes
        }
        if (this.state.clientInfoEdit.emailAdd === ""){
            emailAdd = this.state.clientInfoList[i].emailAdd;
        } else {
            emailAdd = this.state.clientInfoEdit.emailAdd
        }
        /*console.log(
            "VARclientFirstName" + clientFirstName + "\n" +
            "VARclientLastName" + clientLastName + "\n" +
            "VARsiteAddressFirst" + siteAddressFirst + "\n" +
            "VARsiteAddressSecond" + siteAddressSecond + "\n" +
            "VARsiteAddressThird" + siteAddressThird + "\n" +
            "VARsiteAddressPC" + siteAddressPC + "\n" +
            "VARtel" + tel + "\n" +
            "VARmobile" + mobile + "\n" +
            "VARemail" + emailAdd + "\n"
            )*/
        

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
                emailAdd: emailAdd,
                proDes: proDes
            }
        }, () => {
            let clientInfoListCopy = [...this.state.clientInfoList];
            clientInfoListCopy.splice(i,1);
            clientInfoListCopy.push(this.state.clientInfoEdit)
            clientInfoListCopy.sort(compare)
            function compare(a, b) {
            const clientLastNameA = a.clientLastName.toUpperCase();
            const clientLastNameB = b.clientLastName.toUpperCase();
            
            let comparison = 0;
            if (clientLastNameA > clientLastNameB) {
              comparison = 1;
            } else if (clientLastNameA < clientLastNameB) {
              comparison = -1;
            }
            return comparison;
          }
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
                showSpinner: true,
                showModalEdit: false,

            }, () => {
                localStorage.setItem("clientInfo", JSON.stringify(this.state.clientInfoList));
                localStorage.setItem("clientInfoDate", Date.now());
                {/*const clientData = {
                    clientData: this.state.clientInfoList
                }*/}

                //below is axios way of updating firebase. but this wont work when we need authorisationt to sign in
                {/* axios.patch("/clientData.json", clientData)    
                .then(response => {console.log(response); this.setState({showSpinner:false, spinnerText:"Saved to cloud", failUploadText: null},() => {setTimeout(this.defaultCloudStatus, 3000);})})
            .catch(error => {console.log(error); this.setState({showSpinner: false, spinnerText:"Failed to save to cloud", failUploadText: "Error syncing to cloud. please check network"},() => {setTimeout(this.defaultCloudStatus, 3000);})})*/}
                
            //below is the code to save edited client details to firebase. The logic behind sorting the client data and editing it to the correct index is all done before the lines below. We basically overwrite the whole clientdata with the new clientdata. Maybe consider only updating the specific field effected?
            if(DEVELOPMENTMODE){
                database().ref("clientData/clientDataTEST").set({
                    ...this.state.clientInfoList
                  }, error => {
                    if (error) {
                      // The write failed...
                      console.log(error); this.setState({showSpinner: false, spinnerText:"Failed to save to cloud", failUploadText: "Error syncing to cloud. please check network"},() => {setTimeout(this.defaultCloudStatus, 3000);})
                    } else {
                      console.log("Data edit saved successfully to cloud")
                    }
                    });} else if(!DEVELOPMENTMODE){
                        database().ref("clientData/clientData").set({
                            ...this.state.clientInfoList
                          }, error => {
                            if (error) {
                              // The write failed...
                              console.log(error); this.setState({showSpinner: false, spinnerText:"Failed to save to cloud", failUploadText: "Error syncing to cloud. please check network"},() => {setTimeout(this.defaultCloudStatus, 3000);})
                            } else {
                              console.log("Data edit saved successfully to cloud")
                            }
                            });}
                })})
            }
            

                

    clientCancelHandler = () => {
        this.setState({
            ...this.state.clientInfoEdit,
            clientInfoEdit: 
            {clientFirstName: "", clientLastName: "", siteAddressFirst: "", siteAddressSecond: "", siteAddressThird: "",siteAddressPC: "", tel: "", mobile: "", proDes: "", emailAdd: ""},showModalEdit:false,
        })
    };
    
    clientCancelHandlerView = () => {
        this.setState({
            showModalView:false,
        })
    };

    deleteClientCancelHandlerView = () => {
        this.setState({
            deleteSure: false,
            showModalView: true,
        })
    }

    deleteSureViewHandler = () => {
        this.setState({
            showModalView: false,
            deleteSure: true,
        })
    }

    clientDeleteHandler = (i) => {
        //we create a const which will contain all of the objects in the clientInfoList array, in other words we create a copy, and then we edit that copy and return it to the state so we dont mutate the state.
        //console.log("i in delete" + i);
        let clientInfoList = [...this.state.clientInfoList];
        //console.log(clientInfoList);
        clientInfoList.splice(i, 1);
        //console.log(clientInfoList);
        POSITIONI= 0;
        this.setState({
            clientInfoList: clientInfoList,
            showSpinner: true
        }, () => {
            localStorage.setItem("clientInfo", JSON.stringify(this.state.clientInfoList));
            //const clientData = {
            //    clientData: this.state.clientInfoList
            //}

            // write logic here to delete specific data and upload to firebase.

            database().ref("clientData/clientData").set({
                ...this.state.clientInfoList
              }, error => {
                if (error) {
                  // The write failed...
                  console.log(error); this.setState({showSpinner: false, spinnerText:"Failed to save to cloud", failUploadText: "Error syncing to cloud. please check network"},() => {setTimeout(this.defaultCloudStatus, 3000);})
                } else {
                  console.log("Data edit saved successfully to cloud");
                  this.setState({showSpinner: false, spinnerText:"Saved to cloud"}, () => {setTimeout(this.defaultCloudStatus, 3000);})
                }
                });
            this.setState({
                showModalView: false,
                deleteSure: false,
            })


            {/*axios.patch("/clientData.json", clientData)    
            .then(response => {console.log(response); this.setState({showSpinner:false, spinnerText:"Saved to cloud", failUploadText: null},() => {setTimeout(this.defaultCloudStatus, 3000);})})
            .catch(error => {console.log(error); this.setState({showSpinner: false, spinnerText:"Failed to save to cloud but saved to local storage", failUploadText: "Error syncing to cloud. please check network"},() => {setTimeout(this.defaultCloudStatus, 3000);})});
            this.setState({
                showModalView: false,
                deleteSure: false,
            })*/}
        })
    }

    handleChange = () => {
        this.state.jobAccept ? 
        this.setState({jobAccept: false}, () => console.log("log status: "+this.state.jobAccept)) : this.setState({jobAccept: true}, () => console.log("log status: "+this.state.jobAccept))
    }

    

      
    render() {
        //the below CLIENTISLOADED will map through the clientInfoList array, the value (which is an object containing client information) and the index (to assign a key to each mapping) are the two arguments passed to the function. we are simply returning the client first name and last name. because the array contains objects, which we define here as value, we can simply type value.clientFirstName to find that client first name parameter in the object. 
        let clientListSpinner = this.state.showSpinnerClientList ? <Spinner /> : null
        
        if (this.state.showSpinnerClientList){  
        {/*axios.get("https://clientinfo-bfb1b.firebaseio.com/clientData/clientData.json")
        .then(response => {console.log(response);
            this.setState({
                clientInfoList: response.data,
                showSpinnerClientList: false,
                failUploadText: null
            }, () => {
                localStorage.setItem("clientInfo", JSON.stringify(this.state.clientInfoList));
            });})
            .catch(error => {
                let errorCode = error.code;
                let errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
                console.log("failed to fetch initial data " + error);
                localStorage.getItem("clientInfo") && 
                this.setState({
                clientInfoList: JSON.parse(localStorage.getItem("clientInfo")),
                showSpinnerClientList: false,
                localSUsed: "LOCAL STORAGE BEING USED - check network. Changes to client data MAY not appear if application is restarted due to it not syncing to cloud",
                failUploadText: "Error syncing to cloud. please check network"
                }, () => {console.log("error loading from cloud. LOCAL STORAGE USED");}
            ); 
            })*/}
        }
        
        let underSaveButton = this.state.spinnerText;
        if (this.state.showSpinner){
            underSaveButton = <Spinner />
        }
        let clientListIsLoaded = []
        if(this.state.clientInfoList !== null){
        if(this.state.clientInfoList.length !== 0){
        for (let i = 0; i < this.state.clientInfoList.length; i++){
            clientListIsLoaded.push(
                <div key={i} style={{display: "flex", flexDirection: "row"}}>
                    <button style={{flex: 5, marginLeft:"5px"}}  value={i} className="OrderButton" onClick={() => {this.displayClientInfoHandler(i);}}>
                        {this.state.clientInfoList[i].clientFirstName + " " + this.state.clientInfoList[i].clientLastName}
                    </button>
                    <button style={{marginTop: "2px", flex: 1}} onClick={() => {this.displayClientInfoHandlerView(i)}}>View</button>
                    <button onClick={() => {this.displayClientInfoHandler(i)}} style={{marginTop: "2px", flex: 1, marginRight:"5px"}}>Edit</button>
                </div>
            )
        }}}
        if(this.state.clientInfoList !== null){
        if(this.state.clientInfoList.length !== 0)  {
        const boxWidth= "300px";
        let clientInfoEditMap = 
            <li>
                <span>Client First Name: {this.state.clientInfoList[POSITIONI].clientFirstName} </span> 
                <form>
                    <input style={{width: boxWidth}} value={this.state.clientInfoEdit.clientFirstName} placeholder="Type to edit first name of client" type="text"  
                    onChange={(text) => {this.setState({
                        clientInfoEdit: {...this.state.clientInfoEdit, clientFirstName: text.target.value }
                    }, () =>{console.log(this.state.clientInfoEdit.clientFirstName)})}}/>    
                </form>
                
                <span>Client Last Name:  {this.state.clientInfoList[POSITIONI].clientLastName}</span>
                <form>
                    <input style={{width: boxWidth}} value={this.state.clientInfoEdit.clientLastName} placeholder="Type to edit last name of client" type="text"  
                    onChange={(text) => {this.setState({
                        clientInfoEdit: {...this.state.clientInfoEdit, clientLastName: text.target.value }
                    }, () =>{console.log(this.state.clientInfoEdit.clientLastName)})}}/>
                </form>  

                <span>Building number + street: {this.state.clientInfoList[POSITIONI].siteAddressFirst}</span>
                <form>
                    <input style={{width: boxWidth}} value={this.state.clientInfoEdit.siteAddressFirst} placeholder="Type here to edit street add" type="text"  
                    onChange={(text) => {this.setState({
                        clientInfoEdit: {...this.state.clientInfoEdit, siteAddressFirst: text.target.value }
                    }, () =>{console.log(this.state.clientInfoEdit.siteAddressFirst)})}}/>
                </form> 

                <span>City: {this.state.clientInfoList[POSITIONI].siteAddressSecond}</span> 
                <form>
                    <input style={{width: boxWidth}} value={this.state.clientInfoEdit.siteAddressSecond} placeholder="Type here to edit city" type="text"  
                    onChange={(text) => {this.setState({
                        clientInfoEdit: {...this.state.clientInfoEdit, siteAddressSecond: text.target.value }
                    }, () =>{console.log(this.state.clientInfoEdit.siteAddressSecond)})}}/>
                </form>

                <span>County: {this.state.clientInfoList[POSITIONI].siteAddressThird}</span> 
                <form>
                    <input style={{width: boxWidth}} value={this.state.clientInfoEdit.siteAddressThird} placeholder="Type here to edit County" type="text"  
                    onChange={(text) => {this.setState({
                        clientInfoEdit: {...this.state.clientInfoEdit, siteAddressThird: text.target.value }
                    }, () =>{console.log(this.state.clientInfoEdit.siteAddressThird)})}}/>
                </form>
                
                <span>Postcode: {this.state.clientInfoList[POSITIONI].siteAddressPC}</span>
                <form >
                    <input style={{width: boxWidth}} value={this.state.clientInfoEdit.siteAddressPC} placeholder="Type here to edit postcode" type="text"  
                    onChange={(text) => {this.setState({
                        clientInfoEdit: {...this.state.clientInfoEdit, siteAddressPC: text.target.value }
                    }, () =>{console.log(this.state.clientInfoEdit.siteAddressPC)})}}/>
                </form> 
                
                <span>Tel: {this.state.clientInfoList[POSITIONI].tel}</span> 
                <form >
                    <input style={{width: boxWidth}} value={this.state.clientInfoEdit.tel} placeholder="Type here to edit tel" type="number"  
                    onChange={(text) => {this.setState({
                        clientInfoEdit: {...this.state.clientInfoEdit, tel: text.target.value }
                    }, () =>{console.log(this.state.clientInfoEdit.tel)})}}/>
                </form>
                
                <span>Mobile: {this.state.clientInfoList[POSITIONI].mobile}</span>
                <form >
                    <input style={{width: boxWidth}} value={this.state.clientInfoEdit.mobile} placeholder="Type here to edit mobile" type="number"  
                    onChange={(text) => {this.setState({
                        clientInfoEdit: {...this.state.clientInfoEdit, mobile: text.target.value }
                    }, () =>{console.log(this.state.clientInfoEdit.mobile)})}}/>
                </form>

                <span>Email: {this.state.clientInfoList[POSITIONI].emailAdd}</span>
                <form >
                    <input style={{width: boxWidth}} value={this.state.clientInfoEdit.email} placeholder="Type here to edit email" type="text"  
                    onChange={(text) => {this.setState({
                        clientInfoEdit: {...this.state.clientInfoEdit, email: text.target.value }
                    }, () =>{console.log(this.state.clientInfoEdit.email)})}}/>
                </form>
                
                <span>Project description:</span>
                <form >
                    <input style={{width: boxWidth}} value={this.state.clientInfoEdit.proDes} placeholder="Type here to edit Project description" type="text"  
                    onChange={(text) => {this.setState({
                        clientInfoEdit: {...this.state.clientInfoEdit, proDes: text.target.value }
                    }, () =>{console.log(this.state.clientInfoEdit.proDes)})}}/>
                </form>
                <p>{this.state.proDes}</p>           
            </li>
            ;
    {/*CLIENTLISTLOADED simply displays the above clientInfoMap, which EDITS client information.*/}

        let clientInfoViewMap = 
            <li style={{display: "flex", flexDirection: "row"}}>
                <div style={{display: "flex",flexDirection: "column", flex: "1"}}>
                    <span>First Name:</span>
                    <span>Last Name:</span>
                    <span>Address:</span>
                    <span>- </span>
                    <span>- </span>
                    <span>- </span>
                    <span>Mobile:</span>
                    <span>Tel:</span>
                    <span>Email:</span>
                    <span>Project Description:</span>
                    
                </div>
                <div style={{display: "flex",flexDirection: "column", marginLeft: "10px", flex: "2.5"}}>
                    <span>{this.state.clientInfoList[POSITIONI].clientFirstName} </span>
                    <span>{this.state.clientInfoList[POSITIONI].clientLastName} </span>
                    <span>{this.state.clientInfoList[POSITIONI].siteAddressFirst}, </span>
                    <span>{this.state.clientInfoList[POSITIONI].siteAddressSecond}, </span>
                    <span>{this.state.clientInfoList[POSITIONI].siteAddressThird}, </span>
                    <span>{this.state.clientInfoList[POSITIONI].siteAddressPC}, </span>
                    <span>{this.state.clientInfoList[POSITIONI].mobile}</span>
                    <span>{this.state.clientInfoList[POSITIONI].tel}</span>
                    <span>{this.state.clientInfoList[POSITIONI].emailAdd}</span>
                    <span>{this.state.clientInfoList[POSITIONI].proDes}</span>
                </div>
            </li>
            ;

                
            CLIENTLISTEDITLOADED = (
                <Aux>
                    <h3>Client Details</h3>
                    <ul style={{overflowY: "scroll"}}>
                        {clientInfoEditMap}
                    </ul>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <button style={{marginRight: "3px"}} onClick={this.clientCancelHandler}>Cancel</button>
                        <button style={{marginLeft: "3px"}} onClick={() => {this.saveEditedClientHandler(POSITIONI)}}>Save</button>
                    </div>
                </Aux>
                )
            CLIENTLISTVIEWLOADED =(
                <Aux>
                    <h3>Client Details</h3>
                    <ul style={{overflowY: "scroll"}}>
                        {clientInfoViewMap}
                    </ul>
                    <div style={{marginLeft: "22px"}}>
                    <FormControlLabel
                    control={<Switch checked={this.state.jobAccept} 
                    onChange={this.handleChange} 
                    value="jobAcc" />}
                    label="Job accepted?" 
                    labelPlacement="start"
                    /></div>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <button style={{marginRight: "3px"}} onClick={this.deleteSureViewHandler}>DELETE</button>
                        <button style={{marginLeft: "3px"}} onClick={this.clientCancelHandlerView}>Cancel</button>
                    </div>
                    
                </Aux>
            )
            DELETESURE =(
                <Aux>
                    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <h4>Are you sure you want to delete </h4>
                    <p>{this.state.clientInfoList[POSITIONI].clientFirstName}  {this.state.clientInfoList[POSITIONI].clientLastName} ?</p>
                        <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                            <button style={{marginRight: "3px"}} onClick={() => this.clientDeleteHandler(POSITIONI)}>DELETE</button>
                            <button style={{marginLeft: "3px"}} onClick={this.deleteClientCancelHandlerView}>Cancel</button>
                        </div>
                    </div>
                </Aux>
            )
        } }
        
        const isInvalid = this.state.clientInfo.clientFirstName === "" || this.state.clientInfo.clientLastName === "" || this.state.clientInfo.emailAdd === "";

        return(
            <BrowserRouter>
                <Modal
                    show={this.state.showModalEdit}
                    modalClosed={this.clientCancelHandler}
                    >{CLIENTLISTEDITLOADED}</Modal>
                <Modal
                show={this.state.showModalView}
                modalClosed={this.clientCancelHandlerView}
                >{CLIENTLISTVIEWLOADED}</Modal>
                <Modal
                show={this.state.deleteSure}
                modalClosed={this.clientCancelHandlerView}
                >{DELETESURE}</Modal>
            {this.state.authUser && <div style={{height: "100vh", }}>
                <div className="App-header4">
                    <div className="CompCont">
                        <div className="StartInputCont">
                            <p className="Header">Enter Client Details</p>
                            <form style={{display: "flex", flexDirection: "column", width:"100%"}} >
                                <input
                                className={"InputGap"}
                                name="First Name"
                                value={this.state.clientInfo.clientFirstName}
                                onChange={(name) => {this.setState({
                                    clientInfo: {...this.state.clientInfo, clientFirstName: name.target.value }}, () => {console.log("email in object: " + this.state.clientInfo.clientFirstName)})}}
                                type="text"
                                placeholder="First Name"
                                />
                                <input
                                className={"InputGap"}
                                name="Last Name"
                                value={this.state.clientInfo.clientLastName}
                                onChange={(name) => {this.setState({
                                    clientInfo: {...this.state.clientInfo, clientLastName: name.target.value }}, () => {console.log("email in object: " + this.state.clientInfo.clientLastName)})}}
                                type="text"
                                placeholder="Last Name"
                                />
                                <input
                                className={"InputGap"}
                                name="Street"
                                value={this.state.clientInfo.siteAddressFirst}
                                onChange={(name) => {this.setState({
                                    clientInfo: {...this.state.clientInfo, siteAddressFirst: name.target.value }}, () => {console.log("email in object: " + this.state.clientInfo.siteAddressFirst)})}}
                                type="text"
                                placeholder="Street"
                                />
                                <input
                                className={"InputGap"}
                                name="City"
                                value={this.state.clientInfo.siteAddressSecond}
                                onChange={(name) => {this.setState({
                                    clientInfo: {...this.state.clientInfo, siteAddressSecond: name.target.value }}, () => {console.log("email in object: " + this.state.clientInfo.siteAddressSecond)})}}
                                type="text"
                                placeholder="City"
                                />
                                <input
                                className={"InputGap"}
                                name="County"
                                value={this.state.clientInfo.siteAddressThird}
                                onChange={(name) => {this.setState({
                                    clientInfo: {...this.state.clientInfo, siteAddressThird: name.target.value }}, () => {console.log("email in object: " + this.state.clientInfo.siteAddressThird)})}}
                                type="text"
                                placeholder="County"
                                />
                                <input
                                className={"InputGap"}
                                name="Postcode"
                                value={this.state.clientInfo.siteAddressPC}
                                onChange={(name) => {this.setState({
                                    clientInfo: {...this.state.clientInfo, siteAddressPC: name.target.value }}, () => {console.log("email in object: " + this.state.clientInfo.siteAddressPC)})}}
                                type="text"
                                placeholder="Postcode"
                                />
                                <input
                                className={"InputGap"}
                                name="tel number"
                                value={this.state.clientInfo.tel}
                                onChange={(name) => {this.setState({
                                    clientInfo: {...this.state.clientInfo, tel: name.target.value }}, () => {console.log("email in object: " + this.state.clientInfo.tel)})}}
                                type="number"
                                placeholder="Tel number"
                                />
                                <input
                                className={"InputGap"}
                                name="mobile"
                                value={this.state.clientInfo.mobile}
                                onChange={(name) => {this.setState({
                                    clientInfo: {...this.state.clientInfo, mobile: name.target.value }}, () => {console.log("email in object: " + this.state.clientInfo.mobile)})}}
                                type="number"
                                placeholder="Mobile number"
                                />
                                <input
                                style={{marginTop: "4px",
                                    border: "1px solid black", marginBottom: "8px"}}
                                name="email"
                                value={this.state.clientInfo.emailAdd}
                                onChange={(name) => {this.setState({
                                    clientInfo: {...this.state.clientInfo, emailAdd: name.target.value }}, () => {console.log("email in object: " + this.state.clientInfo.emailAdd)})}}
                                type="email"
                                placeholder="Email Add"
                                />
                            </form>
                        </div>
                        <div className="inputContainer2">
                            <p className="Header">Enter Project Description</p>
                            <div className="ProjectDescriptionCont">                            
                                <textarea className="TextInputCont" type="text" placeholder="Please enter project description" value={this.state.clientInfo.proDes} onChange={this.proDesChangeHandler} />                       
                            </div>
                        </div> 
                        <div className="ClientList">
                                <div className="ClientListHeader">
                                    <p className="Header">Client Information</p>
                                    <p className="SmallerText">{this.state.localSUsed}</p>
                                </div>        
                            <div style={{ overflowY: "scroll"}}>
                                {clientListSpinner}
                                {clientListIsLoaded}
                            </div>
                        </div>      
                    </div>
                    <ButtonSave isInavlid={isInvalid}  onClick={this.saveButtonHandler}/> 
                    <div style={{display: "flex", flexDirection:"column", alignItems: "center"}}>
                        <div style={{color:"black"}}>{underSaveButton}</div>
                        <div style={{color: "red"}}>{this.state.failUploadText}</div>
                    </div>   
                </div>
                    
            </div>}
            {!this.state.authUser && <div style={{display: "flex", width: "100%", flexDirection: "column", alignItems: "center"}}><Spinner /><p style={{color:"black"}}>Loading... Please sign in if you have not signed in yet</p></div>}    
            </BrowserRouter>
        );
    }
}

export default CustomerInfo;