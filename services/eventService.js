const { response, request } = require('express');

const getAllEvents = async (req = request, res = response) => {


    res.status(200).json({
        ok: true,
        msg: 'all events'
    });
};

const setNewEvent = async (req = request, res = response) => {


    res.status(200).json({
        ok: true,
        msg: 'new event'
    });
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