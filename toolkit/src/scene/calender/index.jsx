import { useState, useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import { formatDate } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { Delete } from "@mui/icons-material";
import { Box, List, ListItem, ListItemText, Typography, useTheme, IconButton } from "@mui/material";
import Header from "../../component/Header";
import { tokens } from "../../theme";

function Calender() {
    const theme = useTheme()
    const token = tokens(theme.palette.mode)
    const [currentEvent, setcurrentEvent] = useState([])
    const calendarRef = useRef(null);

    const handelDataclick = (selected) => {
        const title = prompt("please enter ur new event")
        const calendarApi = selected.view.calendar;
        calendarApi.unselect();

        if (title) {
            calendarApi.addEvent({
                id: `${selected.dataStr}-${title}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay,
            })
        }
    }
    const handelEventClick = () => {
        if (
            window.confirm(
                `Are you sure you want to delete the event '${selected.event.title}'`
            )
        ) {
            selected.event.remove();
        }
    }
    const handleDelete = (eventId) => {
        const calendarApi = calendarRef.current.getApi();
        const event = calendarApi.getEventById(eventId);
        if (event) {
            if (window.confirm(`Are you sure you want to delete the event '${event.title}'`)) {
                event.remove();
            }
        }
    };

    return (
        <Box m={"20px"}>
            <Header title="Calendar" subtitle="Full Calendar Interactive Page" />
            <Box className="flex justify-between">
                <Box
                    flex="1 1 20%"
                    backgroundColor={token.primary[400]}
                    p="15px"
                    borderRadius="4px"
                >
                    {/* CALENDAR SIDEBAR */}
                    <Box
                        flex="1 1 20%"
                        backgroundColor={token.primary[400]}
                        p="15px"
                        borderRadius="4px"
                    >
                        <Typography variant="h5">Events</Typography>
                        <List>
                            {currentEvent.map((event) => (
                                <ListItem
                                    key={event.id}
                                    sx={{
                                        backgroundColor: token.greenAccent[500],
                                        margin: "10px 0",
                                        borderRadius: "2px",
                                        display: "flex",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <ListItemText
                                        primary={event.title}
                                        secondary={
                                            <Typography>
                                                {formatDate(event.start, {
                                                    year: "numeric",
                                                    month: "short",
                                                    day: "numeric",
                                                })}
                                            </Typography>
                                        }
                                    />
                                    <IconButton 
                                        edge="end" 
                                        aria-label="delete"
                                        onClick={() => handleDelete(event.id)}
                                        sx={{ color: token.grey[100] }}
                                    >
                                        <Delete />
                                    </IconButton>
                                </ListItem>
                            ))}
                        </List>
                    </Box>

                    {/* CALENDAR */}
                    <Box flex="1 1 100%" ml="15px">
                        <FullCalendar
                            ref={calendarRef}
                            height="75vh"
                            plugins={[
                                dayGridPlugin,
                                timeGridPlugin,
                                interactionPlugin,
                                listPlugin,
                            ]}
                            headerToolbar={{
                                left: "prev,next today",
                                center: "title",
                                right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
                            }}
                            initialView="dayGridMonth"
                            editable={true}
                            selectable={true}
                            selectMirror={true}
                            dayMaxEvents={true}
                            select={handelDataclick}
                            eventClick={handelEventClick}
                            eventsSet={(events) => setcurrentEvent(events)}
                            initialEvents={[
                                {
                                    id: "12315",
                                    title: "All-day event",
                                    date: "2022-09-14",
                                },
                                {
                                    id: "5123",
                                    title: "Timed event",
                                    date: "2022-09-28",
                                },
                            ]}
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Calender