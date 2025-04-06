Site Plan for To-Do List App with JSON Storage
1. Site Name
Site Name: TaskMaster

Reason for Selection: "TaskMaster" reflects the app's purpose of helping users manage and "master" their tasks. It is simple, memorable, and relevant to the target audience who are looking to stay organized and in control of their to-do list.

Optional Domain Availability: taskmaster-app.com (example, check availability through a domain provider)

2. Site Purpose
Purpose: The "TaskMaster" app is a simple to-do list manager that allows users to create, edit, delete, and organize their tasks. The app utilizes the browser's local storage to save tasks in JSON format, ensuring that data persists across sessions. Additionally, users can set due dates, prioritize tasks, and mark tasks as completed.

Key Features:

Task creation, editing, and deletion.

Task prioritization and due date management.

Data stored in JSON format using local storage for persistence.

Simple and intuitive interface for easy task management.

Optional reminder system for due tasks (can be added as an advanced feature).

3. Scenarios
These are common questions that a visitor to the site (target user) might ask when using the app:

How do I add a new task?

A user can input the task's name, set a due date (optional), and assign a priority level (optional). After clicking the "Add Task" button, the task will appear in the list and be stored in local storage.

Can I set reminders for tasks?

Users can set a reminder (optional feature) to be notified before a task's due date using the Notification API or browser alerts.

How do I mark a task as completed?

Tasks can be marked as completed by checking a box or clicking a "Mark as Completed" button next to each task.

Can I delete a task?

Users can easily delete a task by clicking a delete button next to the task in the task list.

4. Color Scheme
The color scheme should be simple and effective for both aesthetics and usability. It should be designed for readability and a clean look.

Primary Color: #3498db (Blue)

Usage: This color will be used for headers, buttons, and accents to create a vibrant and modern look.

Secondary Color: #2ecc71 (Green)

Usage: This color will be used for task completion buttons and accents like task priorities, or used for the task status to highlight completed tasks.

Background Color: #f4f4f9 (Light Gray)

Usage: Used as the general background color for the entire site to ensure a clean and easy-to-read interface.

Text Color: #2c3e50 (Dark Text)

Usage: This color will be used for body text, task names, and other text elements to ensure good contrast and readability.

5. Typography
The typography should be simple and readable across all devices.

Primary Font: Roboto (from Google Fonts)

Usage: This font will be used for the entire body text for easy readability.

Secondary Font (optional): Arial (fallback font)

Usage: This font will be used for fallback in case Roboto is unavailable.

Headings: Use Roboto Bold for headings to create distinction between titles and body text.

Body Text: Use Roboto Regular for general content and task descriptions.

6. Wireframe
Here’s a breakdown of how the homepage layout could be structured for TaskMaster:

Mobile View (Single Column Layout)
Header

TaskMaster logo or app name centered at the top.

A small description of the app, e.g., "Manage your tasks easily."

Task Input Section

An input field for entering the task name.

A date picker for setting a due date.

A button labeled "Add Task" to add a new task.

Task List

Each task displayed in a card with:

Task name.

A "Delete" button.

Checkbox to mark the task as completed.

Footer (Optional)

Links to the repository or app credits.

Contact info or developer details.

Desktop View (Two-Column Layout)
Header

Similar to the mobile version, but spread horizontally.

Include larger spacing and perhaps additional information, like links to settings (optional).

Task Input Section

Aligned horizontally next to the task list.

Input field for task, date picker, and "Add Task" button.

Task List

A two-column layout where each task is presented in a neat, grid-like format.

Task cards are arranged in columns with "Delete" buttons and "Complete" checkboxes.

Footer (Optional)

Similar to mobile but formatted for the desktop view (centered or aligned to the right).

7. Technical Requirements
HTML: The app will be built with clean, semantic HTML5 elements.

CSS: Basic CSS for layout, responsiveness, and design. The layout will adapt to mobile and desktop views.

JavaScript: Used to handle task management (adding, editing, deleting, and marking tasks as completed). JSON storage via localStorage will be used for storing tasks.

Browser Compatibility: The app should be compatible with modern browsers (Google Chrome, Mozilla Firefox, Microsoft Edge).

Responsive Design: The design will be responsive using CSS media queries, so it adjusts according to screen size.

8. Performance and Accessibility
Performance: The app will be lightweight and load quickly by only utilizing the necessary HTML, CSS, and JavaScript.

Accessibility: The app will include ARIA roles, keyboard navigability, and proper color contrast to ensure accessibility for users with disabilities.

9. Future Enhancements (Optional Features)
Reminders: A feature that sends browser notifications or alerts when a task's due date is near.

Task Categories: The ability to categorize tasks (e.g., work, personal).

Dark Mode: A dark theme for better visibility in low-light environments.

Synchronization: Integration with cloud storage for syncing tasks across multiple devices.

10. Submission Instructions
Commit and Push: Once the app is developed, commit the HTML, CSS, and JavaScript files to your WDD231 repository.

Testing: Validate your HTML and CSS using common tools (HTML Validator, CSS Validator).

Performance and SEO: Test performance and SEO using tools like Google Lighthouse.




