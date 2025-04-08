"# Cybersecurity-Dashboard-Project-Assessment"

Frontend: Reactjs


    React: For building the user interface.
    Clerk: For authentication and user management.
    Axios or Fetch API: For making API requests to the backend.
    Chart.js or Recharts: For displaying graphs and charts.
    Material-UI or Ant Design: For UI components and styling.

Backend: Python(Django)

   
    Django: For building the backend API.
    Django ORM: For database management.
    Celery: For handling background tasks like sending notifications.
    Redis: As a message broker for Celery.
    MySQL: As the database.
    
Hosting:

    Vercel (frontend)
    AWS (backend)

Frontend Components and Pages

    Landing Page
    
        Modern, minimalistic design with "Access Dashboard" button.

    Master-Admin Dashboard
    
        Overview Tab: Shows summary with graphs.
        Threat Update Tab: Form to send messages.
        Educational Resources Tab: Form to upload resources (videos, blog posts).
        Organization Manager Tab: List and manage organizations.

    Organization Dashboard
    
        Overview Tab: Shows summary with graphs.
        Threat Update Tab: View threat updates.
        Educational Resource Tab: View educational content.
        Employee Manager Tab: List and manage employees.

Backend Structure

    User Management
        Use Clerk for authentication.
        Create endpoints for managing user roles and permissions.

    Organization Management
        Endpoints to add, edit, and view organizations.
        Endpoints to manage subscriptions.

    Threat Updates
        Endpoint to send and retrieve threat updates.

    Educational Resources
        Endpoint to upload and retrieve educational resources.

    Employee Management
        Endpoints to add, edit, and delete employees.


