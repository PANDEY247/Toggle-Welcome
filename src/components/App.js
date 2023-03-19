import React,{ useState } from "react";
import "../styles/App.css";
const App = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const toggleDiv = () => {
    setShowWelcome(!showWelcome);
  };
  return (
    <div id="main">
      {showWelcome ? (
        <div id="welcome-div">
          <h1>Welcome to Newton School!!</h1>
        </div>
      ) : (
        <div id="about-div">
          <h1>
            Newton School is a neo-university providing highly immersive tech
            learning to millions of students, to tap into new-age tech
            opportunities.
          </h1>
        </div>
      )}
      <button id="toggle" onClick={toggleDiv}>
        Toggle
      </button>
    </div>
  );
};
export default App;


// First, you'll need to create two <div> elements in your HTML code, one with the id "welcome-div" and one with the id "about-div". The content you want to display inside each <div> can be whatever you like.

// Next, you'll need to use JavaScript to control which <div> is displayed. To do this, you can create a boolean variable that keeps track of which <div> should be displayed. For example, you can call this variable "showWelcome" and set its initial value to true, since the "welcome-div" should be displayed by default.

// Then, you'll need to create a function that toggles the value of "showWelcome" when the button is clicked. You can do this by using the setDisplayWelcome function to update the value of "showWelcome" to its opposite value. For example, if "showWelcome" is currently true, the function will update it to false, and vice versa.

// Finally, you can use conditional rendering to control which <div> is displayed based on the value of "showWelcome". You can do this by wrapping each <div> inside an if statement that checks the value of "showWelcome". For example, if "showWelcome" is true, you can display the "welcome-div" and hide the "about-div", and vice versa.

//So, to summarize, you'll need to create two <div> elements, a boolean variable to keep track of which one to display, a function to toggle the value of the boolean variable when the button is clicked, and conditional rendering to control which <div> is displayed based on the value of the boolean variable.

//Regenerate response
