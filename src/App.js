import QuestionList from './QuestionList/QuestionList'
import QuestionForm from './QuestionList/QuestionForm'
import './App.css';
import Typography from "@mui/material/Typography";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h1">Questions List</Typography>
        <hr />
        <QuestionList />
      </header>
    </div>
  );
}

export default App;
