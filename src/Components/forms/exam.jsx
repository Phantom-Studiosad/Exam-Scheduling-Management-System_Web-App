import React, { Component } from 'react'
import './forms.css'
import fire from '../firebase'

export default class Sadd extends Component{
   constructor(props){
      super(props);
      this.state = {
         E_ID: '',
         Course_id: '',
         Ss_id: '',
         Es_id: '',
         Fac_inv: '',
         date:'',
         class_data:{},
         stud_data:{},
         idx: 0,
         time:"",
         duration:"",
         cid_chk:0
       }
      this.handleChange=this.handleChange.bind(this);
      this.cls=this.cls.bind(this);
      this.check=this.check.bind(this);
      this.stud=this.stud.bind(this);
      this.exam=this.exam.bind(this);
      this.db=this.db.bind(this);
      this.crs=this.crs.bind(this);
      this.chk=this.chk.bind(this);
   }
   handleChange (event) {
      this.setState({ [event.target.name]: event.target.value});
   }
   stud(){
    fire.firestore().collection("Student")
    .get()
    .then(querySnapshot => {
    const data = querySnapshot.docs.map(doc => doc.data().S_ID);
    this.setState({ stud_data: data });
    console.log(this.state.stud_data);
    this.check();
 });

   }
   db(room_no){
    fire.firestore().collection("Exam").doc(this.state.E_ID.toString()).set({
        Exam_id:this.state.E_ID,
        Room_no: room_no,
        Course_id: this.state.Course_id,
        Ss_id: this.state.Ss_id,
        Es_id: this.state.Es_id,
        Date: this.state.date,
        invigilator: "",
        time: this.state.time,
        duration: this.state.duration
    })
    
    .catch(function(error) {
         console.error("Error writing document: ", error);
     });
   }
   exam(room_no,capacity){
      console.log((this.state.stud_data[(this.state.idx)+capacity-1]));
      if((this.state.stud_data[(this.state.idx)+capacity-1])==null)
      {
         var end = this.state.stud_data.length;
         this.setState({
            E_ID:room_no.concat(this.state.Course_id),
            Ss_id:this.state.stud_data[this.state.idx],
            Es_id:this.state.stud_data[end-1],
            idx:end-1
        })


      }
      else{
         this.setState({
            E_ID:room_no.concat(this.state.Course_id),
            Ss_id:this.state.stud_data[this.state.idx],
            Es_id:this.state.stud_data[(this.state.idx)+capacity-1],
            idx:(this.state.idx+capacity)            
        })
   }
      
   this.db(room_no); 
   }
   check(){
    
        this.state.class_data.map((item) =>
        this.exam(item.Room_no,item.Capacity)
        )
        window.alert("Exam created");
    }

   cls(){
    fire.firestore().collection("class")
         .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
        this.setState({ class_data: data });
        console.log(this.state.class_data);
        this.stud();
        
      });   
   }

   crs(event){
      fire.firestore().collection("Course")
         .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data().Course_id);
        data.map((cid) =>
        this.chk(cid)
        )
        if(this.state.cid_chk==0){
           window.alert("Course doesn't exist");
        }
        else this.setState({cid_chk:0})
      });

      event.preventDefault();
   }
   chk(cid){
      if(cid==this.state.Course_id){
         this.cls();
         this.setState({cid_chk:1})
      }
  }

   render(){
      return(
         <div>
         <h3 style={{fontFamily:"Roboto",marginLeft:"20px"}}>
            <b>EXAM DETAILS</b>
         </h3>
         <form>
         
         <ul style={{listStyle:"none"}}>
         <li><div>
         <input type="text" placeholder="Course_id" name="Course_id" onChange={this.handleChange} required/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
         <input type="text" placeholder="date" name="date" onChange={this.handleChange} required/>
         </div></li> 
         <li><div>
         <input type="text" placeholder="time" name="time" onChange={this.handleChange} required/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
         <input type="text" placeholder="duration" name="duration" onChange={this.handleChange} required/>
         </div></li>       
         <li><div>
         <input type="submit" value="Enroll" onClick={this.crs}/></div></li>
         </ul>
        
        </form>
        </div>
 );
   }
} 
       