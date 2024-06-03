import Dashboard from "./pages/dashboard.jsx";
import Projects from "./pages/projects.jsx";
import Inbox from "./pages/inbox.jsx";
import Calendar from "./pages/calendar.jsx";
import Messages from "./pages/messages.jsx";
import Tasks from "./pages/tasks.jsx";
import Settings from "./pages/settings.jsx";
import ProfileSettings from "./pages/profileSettings.jsx";


export const customRouter = [
    {
        path: "/dashboard",
        element: <Dashboard />,
    },
    {
        path: "/projects",
        element: <Projects />,
    },
    {
        path: "/inbox",
        element: <Inbox />,
    },
    {
        path: "/calendar",
        element: <Calendar />,
    },
    {
        path: "/messages",
        element: <Messages />,
    },
    {
        path: "/tasks",
        element: <Tasks />,
    },
    {
        path: "/settings",
        element: <Settings/>
    },
    {
        path: "/profileSettings",
        element: <ProfileSettings/>
    },
]
    
