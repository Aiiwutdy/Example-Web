import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import RouteManager from './page/RouteManager'

export default function App() {
  return (
    <Router>
      <RouteManager />
    </Router>
  );
}


