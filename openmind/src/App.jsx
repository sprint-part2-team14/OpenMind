import { Route, Routes } from 'react-router-dom';
import '../src/Styles/Css/Global.css';
import MainPage from './Pages/MainPage';
import ListPage from './Pages/ListPage';
import PostPage from './Pages/PostPage';
import AnswerPage from './Pages/AnswerPage';

function App() {
  return (
    <Routes>
      <Route path='/'>
        <Route index element={<MainPage />} />
        <Route path='list'>
          <Route index element={<ListPage />} />
          <Route path=':id' element={<AnswerPage />} />
        </Route>
        <Route path='post'>
          <Route path=':id' element={<PostPage />} />
          <Route path=':id/answer' element={<PostPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
