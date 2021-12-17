import React, { Component } from 'react';
import Navout from '../navout';
import fire from '../firebase';
import { Label } from 'react-bootstrap';
import '../pages.css'

class Faculty extends Component{
    constructor(){
        super();
        this.state={
            iduty:"",
            exam_data:{},
            fname:"",
            lname:"",
            cont:0,
            text:"Exam is going on!",
            no:0
        }
        this.handleChange=this.handleChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.check=this.check.bind(this);
        this.exam=this.exam.bind(this);
        this.proceed=this.proceed.bind(this);
        this.find=this.find.bind(this);
        this.rmv=this.rmv.bind(this);
    }
    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    onSubmit(event){
        if(this.state.iduty=="yes"){
            fire.firestore().collection("Exam")
            .get()
         .then(querySnapshot => {
           const data = querySnapshot.docs.map(doc => doc.data());
           this.setState({ exam_data: data });
           console.log(this.state.exam_data);
           this.check(0);
        });
         event.preventDefault();
        }
        else{
            this.setState({text:"Carry on with your work"});
            event.preventDefault();
            this.find();
        }
    }
    proceed(item){
        if(this.state.cont==0){
            this.exam(item);
        }
    }
    check(num){
        
        if(num==0){
            this.state.exam_data.map((item) =>
        this.proceed(item)
        )
        this.setState({cont:0});}
        else{
            this.state.exam_data.map((item) =>
        this.rmv(item))
        }
    }
    exam(item){
        console.log(item);
        if(item.invigilator==""){
            fire.firestore().collection("Exam").doc(item.Exam_id).set({
                Exam_id: item.Exam_id,
                Room_no: item.Room_no,
                Course_id: item.Course_id,
                Ss_id: item.Ss_id,
                Es_id: item.Es_id,
                Date: item.Date,
                invigilator: fire.auth().currentUser.email.slice(0,16),
                time: item.time,
                duration: item.duration,
            })
            this.setState({cont:1,text:"Allocated invigilation duty:- "+"Room no : "+item.Room_no+" Course : "+item.Course_id})
        }
        else if(item.invigilator==fire.auth().currentUser.email.slice(0,16)){
            this.setState({cont:1,text:"Allocated invigilation duty:- "+"Room no : "+item.Room_no+" Course : "+item.Course_id})
        }
        
    }
    find(){
        fire.firestore().collection("Exam")
            .get()
         .then(querySnapshot => {
           const data = querySnapshot.docs.map(doc => doc.data());
           this.setState({ exam_data: data });
           this.check(1);
         });
        
    }
    rmv(item){
        if(item.invigilator==fire.auth().currentUser.email.slice(0,16)){
            fire.firestore().collection("Exam").doc(item.Exam_id).set({
                Exam_id: item.Exam_id,
                Room_no: item.Room_no,
                Course_id: item.Course_id,
                Ss_id: item.Ss_id,
                Es_id: item.Es_id,
                Date: item.Date,
                invigilator: "",
                time: item.time,
                duration: item.duration,
            })
        }
    }
    componentWillMount(){
        fire.firestore().collection("Faculty").where("F_ID", "==" , fire.auth().currentUser.email.slice(0,16)).get()
        .then(querySnapshot => {
            const fn = querySnapshot.docs.map(doc => doc.data().Fname);
            const ln = querySnapshot.docs.map(doc => doc.data().Lname);
            this.setState({fname: fn[0],lname: ln[0]}); 
                 
          });
}
       
    render(){
        return(
            <div>
           <Navout />
           <h1 style={{color:"#fff",fontFamily:"serif",marginLeft:"1%"}}><b>Hello {this.state.fname} {this.state.lname}</b></h1>
           <h1 style={{color:"#a9c6b4",fontFamily:"serif",marginLeft:"30%"}}>Are you available for invigilation duty?</h1><br/>
           <form>
           <div style={{position:"absolute",marginLeft:"40%"}}>
           <input type="radio" name="iduty" value="yes" onChange={this.handleChange}/>&nbsp;&nbsp;&nbsp;<Label style={{fontSize:"20px"}}>Yes</Label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <input type="radio" name="iduty" value="no" onChange={this.handleChange}/>&nbsp;&nbsp;&nbsp;<Label style={{fontSize:"20px"}}>No</Label>
           </div>
           <div style={{marginLeft:"37%",position:"absolute",top:"35%"}}><button class="btn btn-3 btn-3d " onClick={this.onSubmit}>Submit</button></div>
           </form>
           <div style={{position:"absolute",bottom:"5%",width:"100%",backgroundColor:"#e0aa0f",color:"#242424",fontFamily:"serif",textAlign:"center"}}>
        <h2><b>{this.state.text.slice(0,29)}</b></h2><h3>{this.state.text.slice(30,43)}</h3><h3>{this.state.text.substr(43)}</h3></div>
            </div>
        )
    }
} 
export default Faculty;