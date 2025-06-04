import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import {FaGithub, FaRegCalendar} from "react-icons/fa";
import {FaLinkedin, FaRegClock} from "react-icons/fa6";
import {Tooltip} from "@mui/material";
import {MdOutlineEmail} from "react-icons/md";
import {useEffect} from "react";

const SideDrawer = () => {
    const [open, setOpen] = React.useState(false);
    const [timeString, setTimeString] = React.useState('');
    const [dateString, setDateString] = React.useState('');

    useEffect(() => {
        const updateTimer = setInterval(() => {
            setTimeString(new Date().toTimeString().slice(0, 9));
            setDateString(new Date().toLocaleDateString('en-GB'));
        }, 1000)

        return () => clearInterval(updateTimer)
    }, [])

    const openDrawer = () => {
        setOpen(true);
    }

    const closeDrawer = () => {
        setOpen(false);
    }

    const DrawerList = (
        <Box sx={{ width: 350, position: 'absolute', left: 0, top: 0, height: '100vh',
            backgroundColor: 'white', color: 'black', display: 'flex', flexDirection: 'column',
            justifyContent: 'center' }} role="presentation">
            <Box sx={{ mt: 25, mb: 5 }}>
                <List sx={{ height: '50vh' }}>
                    {/* a single list item */}
                    <ListItem>
                        <Tooltip title={"Check out my projects!"}>
                            <ListItemButton href={"https://github.com/MarkoMinovski"}
                                            sx={{ textAlign: 'center' }} target="_blank">

                                <ListItemIcon>
                                    <FaGithub />
                                </ListItemIcon>
                                GitHub
                            </ListItemButton>
                        </Tooltip>
                    </ListItem>

                    <ListItem>
                        <Tooltip title={"My profile!"}>
                            <ListItemButton href={"https://github.com/MarkoMinovski"} target="_blank">
                                <ListItemIcon>
                                    <FaLinkedin />
                                </ListItemIcon>
                                LinkedIn
                            </ListItemButton>
                        </Tooltip>
                    </ListItem>

                    <ListItem>
                        <Tooltip title={"Get in touch!"}>
                            <ListItemButton href={"mailto: minovskimarco@gmail.com"} target="_blank">
                                <ListItemIcon>
                                    <MdOutlineEmail />
                                </ListItemIcon>
                                Email
                            </ListItemButton>
                        </Tooltip>
                    </ListItem>

                </List>

            </Box>

            <Box>
                <List>
                    <ListItem>
                        <Tooltip title={"My Time Right Now"}>
                            <ListItemButton href={""}>
                                <ListItemIcon>
                                    <FaRegClock />
                                </ListItemIcon>
                                {timeString}
                            </ListItemButton>
                        </Tooltip>
                    </ListItem>
                    <ListItem>
                        <Tooltip title={""}>
                            <ListItemButton href={""}>
                                <ListItemIcon>
                                    <FaRegCalendar />
                                </ListItemIcon>
                                {dateString}
                            </ListItemButton>
                        </Tooltip>
                    </ListItem>
                </List>
            </Box>

        </Box>
    );

    if (!open) {
        return (
            <Box sx={{ position: 'absolute', left: 0, top: '50vh', display: 'inline' }}>
                <button
                    type="button"
                    onClick={openDrawer}
                    className="text-white
                bg-blue-700 hover:bg-blue-800
                focus:ring-4 focus:outline-none focus:ring-blue-300
                font-medium rounded-lg text-sm p-2.5 text-center inline-flex
                 items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                    </svg>
                </button>
            </Box>

        )
    } else {
        return (
            <>
                {DrawerList}
                <Box sx={{ position: 'absolute', left: '355px', top: '50vh', display: 'inline' }}>
                    <button
                        type="button"
                        onClick={closeDrawer}
                        className="text-white
                bg-blue-700 hover:bg-blue-800
                focus:ring-4 focus:outline-none focus:ring-blue-300
                font-medium rounded-lg text-sm p-2.5 text-center inline-flex
                 items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 5H1m0 0l4-4M1 5l4 4"
                            />
                        </svg>
                    </button>
                </Box>
            </>

        )
    }

}

export default SideDrawer;
