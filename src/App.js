
// import the navbar component

import ContactList from "./Components/ContactList";
import Navbar from "./Components/NavBar";


// importing contactList component containing the main container


function App() {
  return (
    <div className="h-screen flex flex-col w-full">
      {/* rendering the Navbar */}
      <Navbar />
      {/* render the ContactList */}
      <ContactList />
    </div>
  );
}

export default App;
