# Communication-Calendar
Communication-Calendar is a user-friendly web application built to simplify event scheduling and task management. With its interactive calendar interface, you can easily add, view, and organize your communication tasks, such as follow-up emails or social media posts. Stay productive and never miss a deadline with this efficient tool.

*Features
-Interactive calendar view.
-Add events with methods (e.g., email, call) and descriptions.
-View events for specific dates.
-Delete events from the event list.

*Setup and Deployment Instructions

Prerequisites
Ensure you have the following installed:
Node.js (v14 or higher)
npm (comes with Node.js)

1. Clone the Repository
git clone: https://github.com/Ayushiwaskale/Communication-Calendar
cd communication-calendar

2. Install Dependencies
Run the following command in the project root:
npm install

3. Start the Development Server
To run the application locally:
npm start  
Open http://localhost:3000 in your browser to view the app.

4. Deploying on Render
-Create a New Web Service on Render
Go to Render.
Log in or sign up for an account.

-Link Your Repository
Click New + and select Web Service.
Connect your GitHub/GitLab repository.

-Configure Deployment
Set the Build Command to:
npm install && npm run build  

Set the Start Command to:
serve -s build  
Choose the environment as Static Site or Node.js (depending on your Render setup).

4.Deploy
Render will automatically build and deploy your application.
Once deployed, Render will provide a live URL (https://calender-nbbd.onrender.com).

*Live Demo
Check out the live application here: https://calender-nbbd.onrender.com

*Application Functionality
1. Calendar
The calendar highlights the current date and allows users to select any date.
Events are linked to specific dates.

2. Events
Users can view all events for a selected date.
Events are displayed with their method and description.

3. Add Event
Users can add a new event by specifying:
Method (e.g., email, call, LinkedIn post).
Description (details about the event).

4. Delete Event
Events can be deleted individually from the event list.

*Known Limitations
-Persistent Storage:
Currently, events are stored in memory. Once the page is refreshed, events will be lost.
To overcome this, consider integrating a backend or browser-based storage like localStorage.

-Event Overlap:
There’s no warning for overlapping events. Adding validation to handle this would be an enhancement.

-Event Editing:
Events cannot be edited after being added. A feature to modify existing events could be implemented in the future.

Future Improvements
-Integration with a backend for persistent data storage.
-Adding user authentication to allow personalized calendars.
-Support for recurring events and reminders.
-Mobile-friendly design improvements.

*License
This project is licensed under the MIT License.
