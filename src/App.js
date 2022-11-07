import { Routes, Route } from "react-router-dom";
import './App.css';
import UserPostsPage from './pages/userPosts';
import UsersPage from './pages/users';
import ErrorPage from './pages/errorPage';


function App() {
  return (
    <Routes>
      <Route path="/" element={<UsersPage />} />
      <Route path="/users" element={<UsersPage />} />
      <Route path="posts/:userId" element={<UserPostsPage />} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
