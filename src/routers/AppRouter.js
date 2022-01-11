import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink} from 'react-router-dom';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';
import HelpPage from '../components/HelpPage';
import EditExpensePage from '../components/EditExpensePage';
import AddExpensePage from '../components/AddExpensePage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';


const AppRouter=()=>(
    <Router>
    <Header />
        <Routes>
                <Route path='/' element={<ExpenseDashboardPage />} />
                <Route path='/create' element={<AddExpensePage />} />
                <Route path='/edit' element={<EditExpensePage/>}>
                    <Route path='/edit/:id?' element={<EditExpensePage/>}/> 
                </Route>
                <Route path='/help' element={<HelpPage/>} />
                <Route path='*' element={<NotFoundPage/>} />
        </Routes>
    </Router>
);

export default AppRouter;