import React from "react";
import "./AddTask.css";

class AddTask extends React.Component {
 minDate = new Date().toISOString().slice(0,10);

  state = {
    text:'',
    checked: false,
    date: this.minDate,
  }

  handleText = (e) => {
    this.setState({ text: e.target.value });
  }  
  handleDate = (e) => {
this.setState({ date: e.target.value });
  }
  handleCheckbox = (e) => {
    this.setState({ checked: e.target.value });
  }  
      handleClick = () => {
        const {text, checked, date} = this.state;
        
        if(text.length>2) {

          const add = this.props.add(text, date, checked)

          if(add) {
            this.setState({ 
              text:'',
              checked: false,
              date: this.minDate,
              })
        }
    } else {
        console.log("za krótki tekst");
  }
}
  render() {
    // wyciecie metoda slice sprawia ze to co wycina jest stringiem, a jak chce sie stringa zamienic na numver nalezy pomnozyc go przez 1
    let maxDate = this.minDate.slice(0,4)*1+1;
    maxDate = maxDate + "-12-31";

    return (
    <div className="form"> 
      <input type="text" placeholder ="dodaj zadanie" value={this.state.text} onChange={this.handleText}/>
      <input type="checkbox" checked={this.state.checked} id="important" onChange={this.handleCheckbox}/>
      <label htmlFor="important">Priorytet</label> <br></br>
      <label htmlFor="date">Do kiedy zrobić</label>
      <input type="date"value={this.state.date} min={this.minDate} max={maxDate} onChange={this.handleDate}/>
      <br></br>
      <button onClick={this.handleClick}>Dodaj</button>
       </div>
    )
}
}
export default AddTask;
