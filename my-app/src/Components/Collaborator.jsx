import React, {Component} from "react";
import { CSSTransition } from "react-transition-group";
import { Card } from "react-bootstrap";
class Collaborator extends Component{
    constructor(props){
        super(props);
        this.state={
            email:localStorage.getItem('email')
        }
    }
    render(){
        console.log("Collaborator :"+this.props.noteId);
        return (
            <div style={{opacity:1,position:'absolute',zIndex:5003,backgroundColor:'#fff',boxShadow: '#adb5bda1 0px 0px 5px 0.5px',borderRadius:'10px'}}> 
                <div style={{padding:'15px 15px 0'}}>
                    <div style={{borderBottom:'1px solid rgba(0,0,0,0.15)',fontSize:'18px',fontWeight:500,height:'25px',padding:'0 0 10px 0'}}>
                        Collaborators
                    </div>
                    <div style={{maxHeight:'306.328px',boxSizing:'border-box',left:0,minHeight:'150px',overflowY:'auto'}}>
                        <div style={{OverflowX:'hidden',overflowY:'auto',padding:'10px 0'}}>
                            <div style={{fontSize:'13px'}}>
                                <div style={{display:'flex',padding:'5px'}}>
                                    <div style={{border:'2px solid #fff',boxSizing:'border-box',boxShadow:'0 1px 1px 1px rgba(60,64,67,0.149)',borderRadius: '50%',height:'40px',width:'40px',overflow: 'hidden'}}>
                                        <div style={{backgroundSize:'100%',backgroundPosition:'center',backgroundRepeat:'no-repeat',height:'100%',width:'100%'}}>
                                            <img src="../keep.png" alt="logo" width="40px" height="40px" />
                                        </div>
                                    </div>
                                    <div style={{flex: '1 0 auto',margin: '0 13px'}}>
                                        <div>
                                            <span style={{fontWeight: 700}}>Amit Kumar</span>
                                            <span style={{fontStyle:'italic',marginLeft:'5px'}}>(Owner)</span>
                                        </div>
                                    <div style={{color: '#5f6368'}}>{this.state.email}</div>
                                    </div>
                                </div>
                            </div>
                            <div></div>
                        </div>
                        <div style={{OverflowX:'hidden',overflowY:'auto',padding:'10px 0'}}></div>
                    </div>
                </div>
                <div></div>
            </div>
          );
    }
    
  }
  export default Collaborator;