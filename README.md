# Business Hours API

This API checks if current time is within business hours or not.

## Environment variables

This Function expects the following environment variables set:

| Variable            | Meaning                           | Required |
| :------------------ | :-------------------------------- | :------- |
| `PORT` | A country to use for time zone checking | No      |
| `DEFAULT_TIME_ZONE_COUNTRY` | A port number to use for DEV | No      |
| `DEFAULT_TIME_ZONE_CITY` | A city to use for time zone checking | No      |
| `DEFAULT_OPEN_HOUR` | An openning hour to use for buisness hours checking | No      |
| `DEFAULT_CLOSE_HOUR` | A closing hour to use for buisness hours checking | No      |

## Parameters

| Parameter            | Meaning                           | Required | Default |
| :------------------ | :-------------------------------- | :------- | :------- |
| `country` | A country to use for time zone checking | No      | Australia      |
| `city` | A city to use for time zone checking | No      | Sydney      |
| `openHour` | A number to use for openning hour checking | No      | 0      |
| `closeHour` | A number to use for clossing hour checking | No      | 12      |

## Start the application locally

1. Install the packagaes

```shell
npm ci
```

2. Run npm development

```
npm run dev
```

5. Copy the api url https://localhost:3000/api/business-hours to use in your app

---

## Testing

You can call the API with get or post methods as follows:
- GET: https://localhost:3000/api/business-hours : this will use all values from env file
- GET: https://localhost:3000/api/business-hours/`country`/`city`/`openHour`/`closeHour`: this will use values from parameters sent
- POST: https://localhost:3000/api/business-hours: this will use all values from env file.
- POST: https://localhost:3000/api/business-hours with JSON body {"country":"Australia","city":"Melbourne", "openHour": 9,"closeHour": 15}: this will use values from body sent.

---


