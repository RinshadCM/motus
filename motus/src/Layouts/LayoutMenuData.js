import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navdata = () => {
    const history = useNavigate();
    //state data
    const [isDashboard, setIsDashboard] = useState(false);
    const [isApps, setIsApps] = useState(false);
    const [isAuth, setIsAuth] = useState(false);
    const [isVeh, setIsVeh] = useState(false);
    const [isDriver, setIsDriver] = useState(false);
    const [isPages, setIsPages] = useState(false);
    const [isBaseUi, setIsBaseUi] = useState(false);
    const [isAdvanceUi, setIsAdvanceUi] = useState(false);
    const [isForms, setIsForms] = useState(false);
    const [isTables, setIsTables] = useState(false);
    const [isCharts, setIsCharts] = useState(false);
    const [isIcons, setIsIcons] = useState(false);
    const [isMaps, setIsMaps] = useState(false);
    const [isMultiLevel, setIsMultiLevel] = useState(false);

    // Apps
    const [isEmail, setEmail] = useState(false);
    const [isSubEmail, setSubEmail] = useState(false);
    const [isEcommerce, setIsEcommerce] = useState(false);
    const [isProjects, setIsProjects] = useState(false);
    const [isTasks, setIsTasks] = useState(false);
    const [isCRM, setIsCRM] = useState(false);
    const [isCrypto, setIsCrypto] = useState(false);
    const [isInvoices, setIsInvoices] = useState(false);
    const [isSupportTickets, setIsSupportTickets] = useState(false);
    const [isNFTMarketplace, setIsNFTMarketplace] = useState(false);
    const [isJobs, setIsJobs] = useState(false);
    const [isJobList, setIsJobList] = useState(false);
    const [isCandidateList, setIsCandidateList] = useState(false);


    // Authentication
    const [isSignIn, setIsSignIn] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);
    const [isCreateEvent, setIsCreateEvent] = useState(false);
    const [isPasswordCreate, setIsPasswordCreate] = useState(false);
    const [isLockScreen, setIsLockScreen] = useState(false);
    const [isLogout, setIsLogout] = useState(false);
    const [isSuccessMessage, setIsSuccessMessage] = useState(false);
    const [isVerification, setIsVerification] = useState(false);
    const [isError, setIsError] = useState(false);

    // Pages
    const [isProfile, setIsProfile] = useState(false);
    const [isLanding, setIsLanding] = useState(false);


    // Charts
    const [isApex, setIsApex] = useState(false);

    // Multi Level
    const [isLevel1, setIsLevel1] = useState(false);
    const [isLevel2, setIsLevel2] = useState(false);

    const [iscurrentState, setIscurrentState] = useState('Dashboard');

    function updateIconSidebar(e) {
        if (e && e.target && e.target.getAttribute("subitems")) {
            const ul = document.getElementById("two-column-menu");
            const iconItems = ul.querySelectorAll(".nav-icon.active");
            let activeIconItems = [...iconItems];
            activeIconItems.forEach((item) => {
                item.classList.remove("active");
                var id = item.getAttribute("subitems");
                if (document.getElementById(id))
                    document.getElementById(id).classList.remove("show");
            });
        }
    }

    useEffect(() => {
        document.body.classList.remove('twocolumn-panel');
        if (iscurrentState !== 'Dashboard') {
            setIsDashboard(false);
        }
        if (iscurrentState !== 'Apps') {
            setIsApps(false);
        }
        if (iscurrentState !== 'Auth') {
            setIsAuth(false);
        }
        if (iscurrentState !== 'Veh') {
            setIsVeh(false);
        }
        if (iscurrentState !== 'Driver') {
            setIsDriver(false);
        }
        if (iscurrentState !== 'Pages') {
            setIsPages(false);
        }
        if (iscurrentState !== 'BaseUi') {
            setIsBaseUi(false);
        }
        if (iscurrentState !== 'AdvanceUi') {
            setIsAdvanceUi(false);
        }
        if (iscurrentState !== 'Forms') {
            setIsForms(false);
        }
        if (iscurrentState !== 'Tables') {
            setIsTables(false);
        }
        if (iscurrentState !== 'Charts') {
            setIsCharts(false);
        }
        if (iscurrentState !== 'Icons') {
            setIsIcons(false);
        }
        if (iscurrentState !== 'Maps') {
            setIsMaps(false);
        }
        if (iscurrentState !== 'MuliLevel') {
            setIsMultiLevel(false);
        }
        if (iscurrentState === 'Widgets') {
            history("/widgets");
            document.body.classList.add('twocolumn-panel');
        }
        if (iscurrentState !== 'Landing') {
            setIsLanding(false);
        }
    }, [
        history,
        iscurrentState,
        isDashboard,
        isApps,
        isAuth,
        isPages,
        isBaseUi,
        isAdvanceUi,
        isForms,
        isTables,
        isCharts,
        isIcons,
        isMaps,
        isMultiLevel
    ]);

    const menuItems = [
        {
            label: "Dashboards",
            isHeader: true,
        },
        {
            id: "dashboard",
            label: "Main Dashboard",
            icon: "ri-dashboard-line",
            link: "/#",
            stateVariables: isDashboard,
            click: function (e) {
                e.preventDefault();
                setIsDashboard(!isDashboard);
                setIscurrentState('Dashboard');
                updateIconSidebar(e);
            },
            // 
        },
        {
            id: "apps",
            label: "Vehicle Tracking",
            icon: "ri-route-line",
            link: "/#",
            click: function (e) {
                e.preventDefault();
                setIsApps(!isApps);
                setIscurrentState('Apps');
                updateIconSidebar(e);
            },
            stateVariables: isApps,
            // 
        },
        {
            label: "events and trips",
            isHeader: true,
        },
        {
            id: "authentication",
            label: "Events",
            icon: "ri-ticket-2-line",
            link: "/#",
            click: function (e) {
                e.preventDefault();
                setIsAuth(!isAuth);
                setIscurrentState('Auth');
                updateIconSidebar(e);
            },
            stateVariables: isAuth,
            subItems: [
                {
                    id: "signIn",
                    label: "List",
                    link: "/#",
                    // isChildItem: true,
                    click: function (e) {
                        e.preventDefault();
                        setIsSignIn(!isSignIn);
                    },
                    parentId: "authentication",
                    stateVariables: isSignIn,
                    childItems: [
                        { id: 1, label: "Basic", link: "/auth-signin-basic" },
                        { id: 2, label: "Cover", link: "/auth-signin-cover" },
                    ]
                },
                {
                    id: "signUp",
                    label: "Event places",
                    link: "/#",
                    // isChildItem: true,
                    click: function (e) {
                        e.preventDefault();
                        setIsSignUp(!isSignUp);
                    },
                    parentId: "authentication",
                    stateVariables: isSignUp,
                    childItems: [
                        { id: 1, label: "Basic", link: "/auth-signup-basic" },
                        { id: 2, label: "Cover", link: "/auth-signup-cover" },
                    ]
                },
                {
                    id: "createEvent",
                    label: "Create an Event",
                    link: "/add-event",
                    // isChildItem: true,
                    click: function (e) {
                        e.preventDefault();
                        setIsCreateEvent(!isCreateEvent);
                    },
                    parentId: "authentication",
                    stateVariables: isCreateEvent,
                },
                {
                    id: "passwordCreate",
                    label: "Event Configuration",
                    link: "/#",
                    // isChildItem: true,
                    click: function (e) {
                        e.preventDefault();
                        setIsPasswordCreate(!isPasswordCreate);
                    },
                    parentId: "authentication",
                    stateVariables: isPasswordCreate,
                    childItems: [
                        { id: 1, label: "Basic", link: "/auth-pass-change-basic" },
                        { id: 2, label: "Cover", link: "/auth-pass-change-cover" },
                    ]
                }
            ],
        },
        {
            id: "pages",
            label: "Bookings",
            icon: "ri-calendar-check-line",
            link: "/#",
            click: function (e) {
                e.preventDefault();
                setIsPages(!isPages);
                setIscurrentState('Pages');
                updateIconSidebar(e);
            },
            stateVariables: isPages,
            subItems: [
                {
                    id: "starter",
                    label: "Booking List",
                    link: "/booking-list",
                    parentId: "pages",
                },
                {
                    id: "profile",
                    label: "Book a Ride",
                    link: "/book-ride",
                    // isChildItem: true,
                    click: function (e) {
                        e.preventDefault();
                        setIsProfile(!isProfile);
                    },
                    parentId: "pages",
                    stateVariables: isProfile,
                    // childItems: [
                    //     { id: 1, label: "Simple Page", link: "/pages-profile", parentId: "pages" },
                    //     { id: 2, label: "Settings", link: "/pages-profile-settings", parentId: "pages" },
                    // ]
                },
       
            ],
        },
        {
            id: "tables",
            label: "Clients",
            icon: "ri-hotel-line",
            link: "/#",
            click: function (e) {
                e.preventDefault();
                setIsTables(!isTables);
                setIscurrentState('Tables');
                updateIconSidebar(e);
            },
            stateVariables: isTables,
        },


        {
            label: "vehicles and drivers",
            isHeader: true,
        },
        {
            id: "authentication",
            label: "Vehicles",
            icon: "ri-taxi-line",
            link: "/#",
            click: function (e) {
                e.preventDefault();
                setIsVeh(!isVeh);
                setIscurrentState('Veh');
                updateIconSidebar(e);
            },
            stateVariables: isVeh,
            subItems: [
                {
                    id: "signIn",
                    label: "List",
                    link: "/#",
                    // isChildItem: true,
                    click: function (e) {
                        e.preventDefault();
                        setIsSignIn(!isSignIn);
                    },
                    parentId: "authentication",
                    stateVariables: isSignIn,
                    childItems: [
                        { id: 1, label: "Basic", link: "/auth-signin-basic" },
                        { id: 2, label: "Cover", link: "/auth-signin-cover" },
                    ]
                },
                {
                    id: "signUp",
                    label: "Add a Vehicle",
                    link: "/#",
                    // isChildItem: true,
                    click: function (e) {
                        e.preventDefault();
                        setIsSignUp(!isSignUp);
                    },
                    parentId: "authentication",
                    stateVariables: isSignUp,
                    childItems: [
                        { id: 1, label: "Basic", link: "/auth-signup-basic" },
                        { id: 2, label: "Cover", link: "/auth-signup-cover" },
                    ]
                },
            ],
        },
        {
            id: "pages",
            label: "Drivers",
            icon: "ri-user-location-line",
            link: "/#",
            click: function (e) {
                e.preventDefault();
                setIsDriver(!isDriver);
                setIscurrentState('Driver');
                updateIconSidebar(e);
            },
            stateVariables: isDriver,
            subItems: [
                {
                    id: "starter",
                    label: "List",
                    link: "/pages-starter",
                    parentId: "pages",
                },
                {
                    id: "profile",
                    label: "Add a Driver",
                    link: "/#",
                    // isChildItem: true,
                    click: function (e) {
                        e.preventDefault();
                        setIsProfile(!isProfile);
                    },
                    parentId: "pages",
                    stateVariables: isProfile,
                    // childItems: [
                    //     { id: 1, label: "Simple Page", link: "/pages-profile", parentId: "pages" },
                    //     { id: 2, label: "Settings", link: "/pages-profile-settings", parentId: "pages" },
                    // ]
                },
       
            ],
        },
        {
            id: "tables",
            label: "Suppliers",
            icon: "ri-building-2-line",
            link: "/#",
            click: function (e) {
                e.preventDefault();
                setIsTables(!isTables);
                setIscurrentState('Tables');
                updateIconSidebar(e);
            },
            stateVariables: isTables,
        },
        {
            label: "Master entries",
            isHeader: true,
        },
        
        {
            id: "charts",
            label: "Users",
            icon: "ri-pie-chart-line",
            link: "/#",
            click: function (e) {
                e.preventDefault();
                setIsCharts(!isCharts);
                setIscurrentState('Charts');
                updateIconSidebar(e);
            },
            stateVariables: isCharts,
            subItems: [
                { id: "chartjs", label: "MotusOne Team", link: "/charts-chartjs", parentId: "charts" },
                { id: "echarts", label: "External Users", link: "/charts-echarts", parentId: "charts" },

            ],
        },
        // {
        //     id: "icons",
        //     label: "Icons",
        //     icon: "ri-compasses-2-line",
        //     link: "/#",
        //     click: function (e) {
        //         e.preventDefault();
        //         setIsIcons(!isIcons);
        //         setIscurrentState('Icons');
        //         updateIconSidebar(e);
        //     },
        //     stateVariables: isIcons,
        //     subItems: [
        //         { id: "remix", label: "Remix", link: "/icons-remix", parentId: "icons" },
        //         { id: "boxicons", label: "Boxicons", link: "/icons-boxicons", parentId: "icons" },
        //         { id: "materialdesign", label: "Material Design", link: "/icons-materialdesign", parentId: "icons" },
        //         { id: "lineawesome", label: "Line Awesome", link: "/icons-lineawesome", parentId: "icons" },
        //         { id: "feather", label: "Feather", link: "/icons-feather", parentId: "icons" },
        //         { id: "crypto", label: "Crypto SVG", link: "/icons-crypto", parentId: "icons" },
        //     ],
        // },
        // {
        //     id: "maps",
        //     label: "Maps",
        //     icon: "ri-map-pin-line",
        //     link: "/#",
        //     click: function (e) {
        //         e.preventDefault();
        //         setIsMaps(!isMaps);
        //         setIscurrentState('Maps');
        //         updateIconSidebar(e);
        //     },
        //     stateVariables: isMaps,
        //     subItems: [
        //         { id: "google", label: "Google", link: "/maps-google", parentId: "maps" },
        //         { id: "vector", label: "Vector", link: "/maps-vector", parentId: "maps" },
        //         { id: "leaflet", label: "Leaflet", link: "/maps-leaflet", parentId: "maps" },
        //     ],
        // },
        // {
        //     id: "multilevel",
        //     label: "Multi Level",
        //     icon: "ri-share-line",
        //     link: "/#",
        //     click: function (e) {
        //         e.preventDefault();
        //         setIsMultiLevel(!isMultiLevel);
        //         setIscurrentState('MuliLevel');
        //         updateIconSidebar(e);
        //     },
        //     stateVariables: isMultiLevel,
        //     subItems: [
        //         { id: "level1.1", label: "Level 1.1", link: "/#", parentId: "multilevel" },
        //         {
        //             id: "level1.2",
        //             label: "Level 1.2",
        //             link: "/#",
        //             isChildItem: true,
        //             click: function (e) {
        //                 e.preventDefault();
        //                 setIsLevel1(!isLevel1);
        //             },
        //             stateVariables: isLevel1,
        //             childItems: [
        //                 { id: 1, label: "Level 2.1", link: "/#" },
        //                 {
        //                     id: "level2.2",
        //                     label: "Level 2.2",
        //                     link: "/#",
        //                     isChildItem: true,
        //                     click: function (e) {
        //                         e.preventDefault();
        //                         setIsLevel2(!isLevel2);
        //                     },
        //                     stateVariables: isLevel2,
        //                     childItems: [
        //                         { id: 1, label: "Level 3.1", link: "/#" },
        //                         { id: 2, label: "Level 3.2", link: "/#" },
        //                     ]
        //                 },
        //             ]
        //         },
        //     ],
        // },
    ];
    return <React.Fragment>{menuItems}</React.Fragment>;
};
export default Navdata;