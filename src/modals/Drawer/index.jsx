import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import DashboardIcon from "@mui/icons-material/Dashboard";
import RuleIcon from "@mui/icons-material/Rule";
import ReviewsIcon from "@mui/icons-material/Reviews";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

export const userSideBar = [
    { text: "DASHBOARD", link: "/profile-dashboard" },
    { text: "ISSUES", link: "/profile-issues" },
    { text: "VITALS", link: "/profile-vitals" },
    { text: "REVIEWS", link: "/profile-reviews" },
];

export const providerSideBar = [
    { text: "PROFILE", link: "/profile-dashboard" },
    { text: "ISSUES", link: "/profile-issues" },
    { text: "REVIEWS", link: "/profile-reviews" },
];

export const iconArray = [
    <DashboardIcon />,
    <RuleIcon />,
    <MonitorHeartIcon />,
    <ReviewsIcon />,
];

// export const iconArray = [
//     <DashboardIcon />,
//     <RuleIcon />,
//     <MonitorHeartIcon />,
//     <ReviewsIcon />,
// ];


export const IconArray = [
    <SettingsIcon />,
    <LogoutIcon />,
];
