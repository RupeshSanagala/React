// import logo from './logo.svg';
import './App.css';

// import FuncComp from './components/FuncComp';
// import ClassComp from './components/ClassComp';
// import RupeshComp from './task/RupeshComp';
// import EventComp from './components/EventComp';
// import MyStateComp from './components/MyStateComp';
// import ConditionalRenComp from './components/ConditionalRenComp';
// import CssComp from './components/CssComp';
// import MyCounterComp from './task/MyCounterComp';
// import ParentComp from './components/ParentComp';
// import ClickCounterComp from './components/ClickCounterComp';
// import HoverCounterComp from './components/HoverCounterComp';
// import MyImagesComp from './components/MyImagesComp';
// import ErrorBoundaryComp from './components/ErrorBoundaryComp';
// import UserComp from './components/UserComp';
// import VirtualDOM from './components/VirtualDOM';
import EmpDetails from './task/EmpDetails';
import FormValidationTask from './task/FormValidationTask';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h1>welcome to react</h1>
      {/* <FuncComp fname="rupesh" post="PAT"></FuncComp> 
      <ClassComp fname = "devansh" post ="developer"></ClassComp>
      <RupeshComp fname="rupesh" lname="sanagala" salary="20000" gender="male" address="ongole"></RupeshComp> */}
      {/* <EventComp /> */}
      {/* <MyStateComp></MyStateComp>
      <ConditionalRenComp />
      <CssComp /> */}
      {/* <MyCounterComp /> */}
      {/* <ParentComp gender="Male" contact="9867394876"/> */}
      {/* <ClickCounterComp />
      <HoverCounterComp />
      <MyImagesComp /> */}
      
      {/* <ErrorBoundaryComp/>
      <ErrorBoundaryComp>
      <UserComp uname="rupesh"></UserComp>
      </ErrorBoundaryComp>
      <ErrorBoundaryComp>
      <UserComp uname="kumar"></UserComp>
      </ErrorBoundaryComp>
      <ErrorBoundaryComp>
      <UserComp uname="reddy"></UserComp>
      </ErrorBoundaryComp>
      <ErrorBoundaryComp>
      <UserComp uname="sanagala"></UserComp>
      // </ErrorBoundaryComp> */}
      {/* // <VirtualDOM></VirtualDOM>
      */}
      <EmpDetails />
      <FormValidationTask />

    </div>
  );
}

export default App;
