/** source/controllers/business-hours.ts */
import { Request, Response, NextFunction } from 'express';
import moment from 'moment-timezone';

interface BusinessHours {
    currentHour: number;
    currentDayOfWeek: number;
    timezone: string;
    openHour: number;
    closeHour: number;
    isOpen: boolean;
}

// checking if current date is open for business
const checkBusinessHours = async (req: Request, res: Response, next: NextFunction) => {
    console.log("req.params: " + JSON.stringify(req.params));

    let timezone = req.params.country && req.params.city 
    ? `${req.params.country}/${req.params.city}` 
    : `${process.env.DEFAULT_TIME_ZONE_COUNTRY}/${process.env.DEFAULT_TIME_ZONE_CITY}`;

    // Timezone function reference: https://momentjs.com/timezone/
    console.log("timezone: " + timezone);
    const hour: number = +moment().tz(timezone).format('H');
    const dayOfWeek: number = +moment().tz(timezone).format('d');

    const numOpenHour = req.params.openHour 
    ? parseInt(req.params.openHour) 
    : (process.env.DEFAULT_OPEN_HOUR ? parseInt(process.env.DEFAULT_OPEN_HOUR) : 0);
    const numCloseHour = req.params.closeHour 
    ? parseInt(req.params.closeHour) 
    : (process.env.DEFAULT_CLOSE_HOUR ? parseInt(process.env.DEFAULT_CLOSE_HOUR) : 12);

    let response: BusinessHours = {
        currentHour: hour,
        currentDayOfWeek: dayOfWeek,
        timezone: timezone,
        openHour:  numOpenHour,
        closeHour: numCloseHour,
        isOpen: hour >= numOpenHour && hour < numCloseHour && dayOfWeek != 0 && dayOfWeek != 6
    }
    return res.status(200).json({
        response
    });
};

const checkBusinessHoursPOST = async (req: Request, res: Response, next: NextFunction) => {
    console.log("req.body: " + JSON.stringify(req.body));

    let timezone = req.body.country && req.body.city 
    ? `${req.body.country}/${req.body.city}` 
    : `${process.env.DEFAULT_TIME_ZONE_COUNTRY}/${process.env.DEFAULT_TIME_ZONE_CITY}`;

    // Timezone function reference: https://momentjs.com/timezone/
    console.log("timezone: " + timezone);
    const hour: number = +moment().tz(timezone).format('H');
    const dayOfWeek: number = +moment().tz(timezone).format('d');

    const numOpenHour = req.body.openHour 
    ? parseInt(req.body.openHour) 
    : (process.env.DEFAULT_OPEN_HOUR ? parseInt(process.env.DEFAULT_OPEN_HOUR) : 0);
    const numCloseHour = req.body.closeHour 
    ? parseInt(req.body.closeHour) 
    : (process.env.DEFAULT_CLOSE_HOUR ? parseInt(process.env.DEFAULT_CLOSE_HOUR) : 12);

    let response: BusinessHours = {
        currentHour: hour,
        currentDayOfWeek: dayOfWeek,
        timezone: timezone,
        openHour:  numOpenHour,
        closeHour: numCloseHour,
        isOpen: (hour >= numOpenHour && hour < numCloseHour) && dayOfWeek != 0 && dayOfWeek != 6
    }
    return res.status(200).json({
        response
    });
};

export default { checkBusinessHours, checkBusinessHoursPOST };