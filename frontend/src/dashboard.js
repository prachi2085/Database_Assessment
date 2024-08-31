import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <h1>My Assessments</h1>
            <button className="create-button">Create New Assessment</button>
            <input type="text" placeholder="Search Assessments..." className="search-bar" />
            <div className="filters">
                <button>Filter by Type</button>
                <button>Sort by Date</button>
            </div>
            <div className="activities">
                <h2>Recent Activities</h2>
                <ul>
                    <li>Assessment 1 - Submitted</li>
                    <li>Assessment 2 - Feedback Given</li>
                </ul>
            </div>
            <div className="analytics">
                <h2>Assessment Analytics Summary</h2>
                <p>Average Score: 85%</p>
                <p>Completion Rate: 90%</p>
            </div>
        </div>
    );
};

export default Dashboard;
