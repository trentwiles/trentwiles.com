---
pageTitle: Dine on Campus API Documentation
description: Guide on using the internal dineoncampus.com API, for Northeastern University.
---

<!--
CENTER THIS BECAUSE IT LOOKS SOMEWHAT BAD

Not sure if there is a way to do this, <section> tag failed
-->

Base: [https://api.dineoncampus.com](api.dineoncampus.com)

## Location IDs

| Location | ID |
| --- | --- |
| Northeastern University | 5751fd2b90975b60e048929a |

## Dining Hall IDs

| Location | ID |
| --- | --- |
| United Table at Int’l Village | 5f4f8a425e42ad17329be131 |
| The Eatery at Stetson East | 586d05e4ee596f6e6c04b527 |
| Social House at Stetson West | 65ef4de5c625af0775329cb8 |

# Methods

## Menu

Lists the menu(s) for a given location on campus.

| Parameter | Description |
| --- | --- |
| DINING_HALL_ID | ID of the dining hall; listed above |
| PERIOD_ID | Dining period ID that corresponds to dining hall |
| YEAR | Year (2025, 2024, …) |
| MONTH | Month number, 1-12 |
| DAY | Day of the month, 1-31 |

`PERIOD_ID` is optional. Omitting this value will show all periods (ie. breakfast, lunch, and dinner)

```jsx
GET /v1/location/{DINING_HALL_ID}/periods/{PERIOD_ID}?platform=0&date={YEAR}-{MONTH}-{DAY}

{
  "status": "success",
  "request_time": 0.561411101,
  "records": 0,
  "allergen_filter": true,
  "menu": {
    "id": 1,
    "date": "2024-09-12",
    "name": null,
    "from_date": null,
    "to_date": null,
    "periods": {
      "name": "Breakfast",
      "id": "66b279bae45d4306779faaae",
      "sort_order": 0,
      "categories": [
        {
          "id": "66b279bae45d4306779faaa7",
          "name": "CUCINA",
          "sort_order": 0,
          "items": [
            {
              "id": "66e31fd22b7b7acd38fcba45",
              "name": "English Breakfast Baked Beans",
              "mrn": 152417,
              "rev": null,
              "mrn_full": "152417.0",
              "desc": "Traditional tomato baked beans with maple and spices",
              "webtrition_id": null,
              "sort_order": 1,
              "portion": "1/2 cup",
              "qty": null,
              "ingredients": "Cannellini Beans (White Kidney Beans, Water, Salt, Calcium Chloride, Disodium Edta), Tomato puree (tomato puree, water, tomato paste, citric acid), Onions, Maple Syrup, Tomato paste (tomato paste, salt, citric acid), Canola Oil, Worcestershire Sauce with Anchovies, Garlic, Salt, Paprika (Paprika and Silicon Dioxide), Black Pepper, Thyme",
              "nutrients": [
                {
                  "id": "66e33250e45d4306b7788925",
                  "name": "Calories",
                  "value": "180",
                  "uom": "kcal",
                  "value_numeric": "180"
                },
                {
                  "id": "66e33250e45d4306b7788926",
                  "name": "Protein (g)",
                  "value": "8",
                  "uom": "g",
                  "value_numeric": "8"
                },
                ......
              ],
              "filters": [
                {
                  "id": "64ebdd0ae45d430ab30dbf77",
                  "name": "Soy",
                  "type": "allergen",
                  "icon": false,
                  "remote_file_name": null,
                  "sector_icon_id": null,
                  "custom_icons": []
                },
                {
                  "id": "64ebdd0ae45d430ab30dbf7a",
                  "name": "Onion",
                  "type": "allergen",
                  "icon": false,
                  "remote_file_name": null,
                  "sector_icon_id": null,
                  "custom_icons": []
                },
                .......
              ],
              "custom_allergens": null,
              "calories": "180"
            },
            ........
    "periods": [
    {
      "id": "66b279bae45d4306779faaae",
      "sort_order": 0,
      "name": "Breakfast"
    },
    {
      "id": "66b279bae45d4306779faaca",
      "sort_order": 1,
      "name": "Lunch"
    },
    {
      "id": "66b279bae45d4306779faabc",
      "sort_order": 2,
      "name": "Dinner"
    },
    {
      "id": "66b279bae45d4306779faacb",
      "sort_order": 3,
      "name": "Everyday"
    }
  ],
  "closed": false
}
```

## Hours

Listed the hours for all food establishments on campus.

| Parameter | Description |
| --- | --- |
| LOCATION_ID | ID of the university/school, listed at top of page |
| DATE | Week started at TZN time, ex. `"2025-01-18T05:00:00.000Z”` |

```
GET /v1/locations/weekly_schedule?site_id={LOCATION_ID}&date={DATE}

{
  "status": "success",
  "request_time": 1.799910867,
  "records": 0,
  "the_locations": [
    {
      "id": "62fee2a1c625af082fa90a66",
      "active": true,
      "has_delivery_robots": false,
      "has_food_lockers": false,
      "is_delivery": false,
      "is_delivery_only": false,
      "is_dine_in": false,
      "is_mobile": false,
      "is_mobile_only": false,
      "is_open_late": false,
      "is_takeout": false,
      "is_takeout_only": false,
      "occupancy": "na",
      "pay_with_apple_pay": false,
      "pay_with_cash": false,
      "pay_with_cc": false,
      "pay_with_dining_dollars": false,
      "pay_with_google_pay": false,
      "pay_with_meal_exchange": false,
      "pay_with_meal_trade": false,
      "pay_with_meal_swipe": false,
      "pay_with_retail_swipe": false,
      "pay_with_samsung_pay": false,
      "pay_with_meal_plan": false,
      "custom_payment_types": [],
      "status": {
        "label": "closed",
        "message": "Closed. Opens Monday at 7:30am.",
        "color": "red"
      },
      "name": "Dunkin' Shillman",
      "sort_order": null,
      "is_building": false,
      "building_id": "",
      "week": [
        {
          "day": 0,
          "date": "2025-01-12",
          "status": "closed",
          "hours": [],
          "has_special_hours": false,
          "closed": true
        },
        {
          "day": 1,
          "date": "2025-01-13",
          "status": "open",
          "hours": [
            {
              "start_hour": 7,
              "start_minutes": 30,
              "end_hour": 15,
              "end_minutes": 0
            }
          ],
          "has_special_hours": false,
          "closed": false
        },
        {
          "day": 2,
          "date": "2025-01-14",
          "status": "open",
          "hours": [
            {
              "start_hour": 7,
              "start_minutes": 30,
              "end_hour": 15,
              "end_minutes": 0
            }
          ],
          "has_special_hours": false,
          "closed": false
        },
        {
          "day": 3,
          "date": "2025-01-15",
          "status": "open",
          "hours": [
            {
              "start_hour": 7,
              "start_minutes": 30,
              "end_hour": 15,
              "end_minutes": 0
            }
          ],
          "has_special_hours": false,
          "closed": false
        },
        {
          "day": 4,
          "date": "2025-01-16",
          "status": "open",
          "hours": [
            {
              "start_hour": 7,
              "start_minutes": 30,
              "end_hour": 15,
              "end_minutes": 0
            }
          ],
          "has_special_hours": false,
          "closed": false
        },
        {
          "day": 5,
          "date": "2025-01-17",
          "status": "open",
          "hours": [
            {
              "start_hour": 7,
              "start_minutes": 30,
              "end_hour": 15,
              "end_minutes": 0
            }
          ],
          "has_special_hours": false,
          "closed": false
        },
        {
          "day": 6,
          "date": "2025-01-18",
          "status": "closed",
          "hours": [],
          "has_special_hours": false,
          "closed": true
        }
      ]
    },
    ...
  ]
}
```
