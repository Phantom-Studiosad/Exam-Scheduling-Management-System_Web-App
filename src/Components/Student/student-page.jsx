import React, { Component } from 'react'
import Navout from '../navout';
import fire from '../firebase'
import '../pages.css'

class Student extends Component{
    constructor(props){
        super(props);
        this.state={
            qdata: {},
            curruser: '',
            fname:'',
            lname: ''
        }
      this._renderObject=this._renderObject.bind(this);
      this.uname=this.uname.bind(this);
      this.head=this.head.bind(this);
    }
    componentWillMount() {
        fire.firestore().collection("Exam")
          .get()
          .then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data());
            this.setState({ qdata: data,curruser: fire.auth().currentUser.email.slice(0,16) });
           
          });
      }
      _renderObject(){
        return Object.keys(this.state.qdata).map((obj) => {
            if(this.state.qdata[obj].Es_id!=null){
                if(this.state.curruser.slice(8,11)==(this.state.qdata[obj].Course_id.slice(2,5).toLowerCase())){
                    if((Number(this.state.curruser.substr(-3))>=Number(this.state.qdata[obj].Ss_id.substr(-3)))&&
            (Number(this.state.curruser.substr(-3))<=Number(this.state.qdata[obj].Es_id.substr(-3))))
            {
                return (
                    <div style={{color:"red",marginLeft:"18%"}}>
                    <table>
                        <tr>
                            <td>{this.state.qdata[obj].Room_no} </td>
                            <td>{this.state.qdata[obj].Exam_id}</td>
                            <td>{this.state.qdata[obj].Course_id}</td>
                            <td>{this.state.qdata[obj].Ss_id} - 
                            {this.state.qdata[obj].Es_id}</td>
                            <td>{this.state.qdata[obj].Date}</td>
                            <td>{this.state.qdata[obj].time}</td>
                            <td>{this.state.qdata[obj].duration}</td>
                        </tr>
                    </table>  
                    </div>
                )
            }
                }
               
            }          
        })
    }
    uname(){
        fire.firestore().collection("Student").where("S_ID", "==" , this.state.curruser).get()
        .then(querySnapshot => {
            const fn = querySnapshot.docs.map(doc => doc.data().Fname);
            const ln = querySnapshot.docs.map(doc => doc.data().Lname);
            this.setState({fname: fn[0],lname: ln[0]}); 
            this.head();      
          });
}
    head(){
    return<h1 style={{color:"#fff",fontFamily:"serif"}}><b>Hello {this.state.fname} {this.state.lname}</b></h1>
    }
    render(){
        
        return(
        <div>
            <Navout/>
            {this.uname()}
        <div style={{marginLeft:"1%"}}>{this.head()}</div><br/><br/>
        <h1 style={{color:"#a9c6b4",fontFamily:"serif",marginLeft:"39%"}}><b>Upcoming Exams</b></h1><br/><br/>
            <table style={{color:"yellow",marginLeft:"18%"}}>
                <tr>
                    <th>Room no</th><th>Exam id</th><th>Course_id</th><th>Student roll-nos</th><th>Date</th><th>Time</th><th>Duration</th>
                </tr>
            </table>
            <div>{this._renderObject()}</div>
        </div>
        )
    }
}
export default Student;