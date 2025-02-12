// API base /api/v1/events

const { Router } = require('express');
const { jwtValidator } = require('../middlewares/jwtValidator');
const { getAllEvents, setNewEvent, updateEvent, deleteEvent } = require('../services/eventService');

const router = Router();

// middleware para todos los endpoints
router.use(jwtValidator);

// endpoints
router.get('/', getAllEvents);
router.post('/', setNewEvent);
router.put('/:id', updateEvent);
router.delete('/:id', deleteEvent);

module.exports = router;