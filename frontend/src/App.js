import React, { useState, useRef, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import axios from 'axios';

//all resources outside components have been decalred at the top of the page
var getStarted = () => {document.getElementById('converter').click();}

//Main navigation bar
function NavBar() {
  return (
    <>
    <nav>
    <div style={{textAlign:'center', border:'2px rgb(255, 125, 90) solid', borderRadius:'4px', borderWidth:'1px', backgroundColor: 'rgb(255, 125, 90)', height:'30px'}}>
      <Link style={{paddingLeft:'1px', paddingRight:'25px', textDecoration:'none', fontFamily:'Verdana', fontSize:'21px', color:'white'}} to='/'>Home</Link>
      <Link id="converter" style={{paddingLeft:'1px', paddingRight:'25px',textDecoration:'none', fontFamily:'Verdana', fontSize:'21px', color:'white'}} to='transcript_form'>Converter</Link>
    </div>
    </nav>

    <Outlet />
    </>
  );

}

//Page component
function Home() {
  return (
    <>
    <div style={{fontFamily:'Verdana', marginLeft:'25px'}}>
      <h2 style={{borderRadius:'4px', borderLeft:'2px solid red', paddingLeft:'16px', backgroundColor:'rgb(253, 215, 193)'}}>Achieve more in less time</h2>
      <p>A React application that converts video transcripts into a plain text format with removed line breaks.</p>
      <p>A task that can take days, weeks and months to do, this app can do it in seconds!</p>

      <button style={{cursor:'pointer', fontSize:'16px', color:'white', fontFamily:'Verdana', border:'2px rgb(255, 125, 90) solid', borderRadius:'4px', borderWidth:'1px', backgroundColor: 'rgb(255, 125, 90)', height:'30px'}}
        onClick={getStarted}>Get Started >></button>
    </div>

    <div style={{fontFamily:'Lucida Console', fontSize:'40px', textAlign:'center', marginTop:'160px'}}>
      <p>Transcript Converter</p>
      <p>----- Developed by: Raphael Qureshi -----</p>
    </div>
    </>
    );
}

// Page component
function Form() {
  const [transcript, updateTranscript] = useState('Enter Video Transcript');
  const [getTranscript, updateGetTranscript] = useState('');
  const [postTranscript, updatePostTranscript] = useState('');
  const [transcriptID, updateTranscriptID] = useState('');

  const changes = useRef('');
  const changeGetTranscript = useRef('');

  useEffect(() => {
    changes.current = transcript;
    changeGetTranscript.current = getTranscript;
  });

  return (
    <>
    <p style={{fontFamily:'Verdana', textAlign:'center', fontSize:'15px'}}>Paste/Enter the transcript in the form and then press the convert button to get the results. You may save the data, as well as retrieve it later.</p>
    <div style={{margin:'20px 20px 20px 20px', textAlign:'center'}}>
      <form>
        <textarea style={{fontSize:'15px', fontFamily:'Verdana'}}id='transcript_id' cols='135' rows='20' placeHolder={transcript} onChange={(e) => updateTranscript(e.target.value)}></textarea>
      </form>

      <button style={{cursor:'pointer', fontSize:'16px', color:'white', fontFamily:'Verdana', border:'2px rgb(255, 125, 90) solid', borderRadius:'4px', borderWidth:'1px', backgroundColor: 'rgb(255, 125, 90)', height:'30px'}} onClick={showTranscript}>Convert</button>
    </div>
    <div style={{margin:'auto', width:'1100px'}}>
    <p id='result' style={{fontFamily:'Verdana', fontSize:'20px'}}></p>
    <p id='show'></p>

    <button onClick={saveData} style={{cursor:'pointer', fontSize:'16px', color:'white', fontFamily:'Verdana', border:'2px rgb(255, 125, 90) solid', borderRadius:'4px', borderWidth:'1px', backgroundColor: 'rgb(255, 125, 90)', height:'30px'}}>Save</button>
    
    <form style={{marginTop:'30px'}}>
      <label for='text'>Enter ID number: </label>
      <input id='text' type='text' onChange={(e) => updateTranscriptID(e.target.value)}></input>
    </form>
    <button onClick={retrieveData} style={{marginTop:'11px', marginBottom:'25px', cursor:'pointer', fontSize:'16px', color:'white', fontFamily:'Verdana', border:'2px rgb(255, 125, 90) solid', borderRadius:'4px', borderWidth:'1px', backgroundColor: 'rgb(255, 125, 90)', height:'30px'}}>Retreive Transcript</button>

    </div>

     </>
    );

  //Component to render transcript
  function showTranscript() { 
    //Rendering changes.current or useRef value on click
    document.getElementById('result').innerHTML = 'Result:';
    document.getElementById('show').innerHTML = changes.current;
  }

  //Component to save data
  function saveData() {
    axios.post('http://localhost:8000/rest/transcript_data/', 
      JSON.stringify({"transcript": transcript}), { 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).then(
      (response) => {updatePostTranscript(response.statusText);},
      (error) => {console.log(error);}
    );
  }


  //Component to retreive data through entered ID
  function retrieveData() {
    axios.get(`http://localhost:8000/rest/transcript_data/${transcriptID}`).then(
      (response) => {updateGetTranscript(response.data.transcript);},
      (error) => {console.log(error);}
    );
    document.getElementById('show').innerHTML getTranscript.current;
  }
}

export { Form, NavBar, Home };