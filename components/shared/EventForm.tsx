"use client"
import React from 'react';

interface EventFormProps {
    userId: string
    type: "Create" | "Update"
}

const EventForm: React.FC<EventFormProps> = ({userId, type}) => {
    return (
        <div>Event Form {type}</div>
    );
};

export default EventForm;