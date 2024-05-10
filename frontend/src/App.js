import './App.css';
import Login from './component/Admin/Login/Login';
import Main from './component/Main/Main';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import NotFound from './component/NotFound/NotFound';
import Dashboard from './component/Admin/Dashboard/Dashboard';
import AddProject from './component/Admin/Project/AddProject';
import AddSkill from './component/Admin/Skills/AddSkill';
import Skills from './component/Admin/Skills/Skills';
import Projects from './component/Admin/Project/Projects';
import Messages from './component/Admin/Message/Messages';
import { useDispatch, useSelector } from 'react-redux';
import ProtectedRoute from './component/Admin/ProtectedRoute/ProtectedRoute';
import { useEffect } from 'react';
import store from "./store"
import { loadUser } from './actions/userAction';

function App() {
  const dispatch = useDispatch()
  // const { loading, isAuthenticated, user } = useSelector((state) => state.user)

  const role = localStorage.getItem("role")
  const isAuthenticated = localStorage.getItem("isAuthenticated")
  console.log(role)
  console.log(isAuthenticated)

  useEffect(() => {
    dispatch(loadUser())
  }, [dispatch])



  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/admin/login" element={<Login />} />

          <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} adminRoute={true} isAdmin={role==="admin" ? true : false} />}>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/add-project" element={<AddProject />} />
            <Route path="/admin/projects" element={<Projects />} />
            <Route path="/admin/add-skill" element={<AddSkill />} />
            <Route path="/admin/skills" element={<Skills />} />
            <Route path="/admin/messages" element={<Messages />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
