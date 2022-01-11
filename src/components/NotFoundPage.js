import React from "react";
import { BrowserRouter as Router, Link} from 'react-router-dom';

const NotFoundPage =() => (
    <div>
        404! 
        <Link to='/'>Go to homepage</Link>
    </div>
);

export default NotFoundPage;