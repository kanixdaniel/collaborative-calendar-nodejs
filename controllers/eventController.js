// API base /api/v1/events

const { Router } = require('express');
const { jwtValidator } = require('../middlewares/jwtValidator');
const { check } = require('express-validator');
const { fieldValidators } = require('../middlewares/fieldValidators');
const { getAllEvents, setNewEvent, updateEvent, deleteEvent } = require('../services/eventService');
const { isDate } = require('../helpers/isDate');

const router = Router();

// middleware para todos los endpoints
router.use(jwtValidator);

// endpoints
router.get('/', getAllEvents);

router.post(
    '/',
    [ // middlewares
        check('title', 'El titulo del evento es necesario').notEmpty(),
        check('start', 'La fecha de inicio del evento es necesaria').notEmpty(),
        check('start', 'Debe de proporcionar una fecha de inicio válida para el evento').custom(isDate),
        check('end', 'La fecha de finalización del evento es necesaria').notEmpty(),
        check('end', 'Debe de proporcionar una fecha de finalización válida para el evento').custom(isDate),
        fieldValidators
    ],
    setNewEvent
);

router.put(
    '/:id',
    [ // middlewares
        check('title', 'El titulo del evento es necesario').notEmpty(),
        check('start', 'La fecha de inicio del evento es necesaria').notEmpty(),
        check('start', 'Debe de proporcionar una fecha de inicio válida para el evento').custom(isDate),
        check('end', 'La fecha de finalización del evento es necesaria').notEmpty(),
        check('end', 'Debe de proporcionar una fecha de finalización válida para el evento').custom(isDate),
        fieldValidators
    ],
    updateEvent
);

router.delete('/:id', deleteEvent);

module.exports = router;