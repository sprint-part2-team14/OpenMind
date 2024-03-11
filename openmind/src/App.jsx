import { Route, Routes } from "react-router-dom";
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "../src/Styles/Css/Global.css";
// import MainPage from './Pages/MainPage';
// import ListPage from './Pages/ListPage';
// import PostPage from './Pages/PostPage';
import AnswerPage from "./Pages/AnswerPage";

function App() {
  return (
    <Routes>
      <Route path='/' element={<AnswerPage />}></Route>
    </Routes>
    // <Routes>
    //   <Route path='/'>
    //     <Route index element={<MainPage />} />
    //     <Route path='list'>
    //       <Route index element={<ListPage />} />
    //     </Route>
    //     <Route path='post'>
    //       <Route path=':id' element={<PostPage />} />
    //       <Route path=':id/answer' element={<AnswerPage />} />
    //     </Route>
    //   </Route>
    // </Routes>
    // <AnswerPage/>
  );
}

export default App;
