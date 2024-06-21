import './App.css';
import React from 'react';
import PropTypes from 'prop-types';
import { Notifications } from '../Notifications/Notifications';
import { Login } from '../Login/Login';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';


const listCourses = [{id: 1, name: 'ES6', credit: 60},
  {id: 2, name: 'Webpack', credit: 20},
  {id: 3, name: 'React', credit: 40}
]
  
const notificationsList = [
  {id: 1, value: 'New course available', type:'default'},
  {id: 2, value: 'New resume available', type:'urgent'},
  {id: 3, html: getLatestNotification, type:'urgent'},
]  

function App({ isLoggedIn }) {
  return (
    <React.Fragment>
      <Notifications/>
      <div className="App">
        <Header/>
        {isLoggedIn? <CourseList/>:<Login/>}
        <Footer/>
      </div>
    </React.Fragment>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

App.defaultProps = {
  isLoggedIn: true,
};
export default App;
