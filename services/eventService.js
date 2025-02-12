const { response, request } = require('express');
const Event = require('../models/EventModel');

const getAllEvents = async (req = request, res = response) => {
    const allEvents = await Event.find().populate('user', 'fullName');

    res.status(200).json({
        ok: true,
        events: allEvents
    });
};

const setNewEvent = async (req = request, res = response) => {
    const newEvent = new Event(req.body);

    try {
        newEvent.user = req.uid;
        const eventSaved = await newEvent.save();

        res.status(201).json({
            ok: true,
            event: eventSaved
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            message: 'No se pudo generar el nuevo evento. Contacte al administrador'
        });
    }
};

const updateEvent = async (req = request, res = response) => {


    res.status(200).json({
        ok: true,
        msg: 'update event'
    });
};

const deleteEvent = async (req = request, res = response) => {


    res.status(200).json({
        ok: true,
        msg: 'delete event'
    });
};

module.exports = {
    getAllEvents,
    setNewEvent,
    updateEvent,
    deleteEvent,
}