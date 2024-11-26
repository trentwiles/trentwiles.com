---
pageTitle: Dine on Campus API Documentation
description: Guide on using the internal dineoncampus.com API, for Northeastern University.
---


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

## Dining Time IDs

| Time | ID | Location |
| --- | --- | --- |
| Breakfast | 66c3ae9a351d530107802cb1 | Int’l Village |
| Lunch | 66c3ae9a351d530107802cc0 | Int’l Village |
| Dinner | 66c3ae9a351d530107802ccf | Int’l Village |
| Everyday | 66c3ae9a351d530107802cd0 | Int’l Village |
| Breakfast | 66b279bae45d4306779faaae | Steast |
| Lunch | 66b279bae45d4306779faaca | Steast |
| Dinner | 66b279bae45d4306779faabc | Steast |
| Everyday | 66b279bae45d4306779faacb | Steast |

# Methods

## Menu

```jsx
GET /v1/location/{LOCATION_ID}/periods/{PERIOD_ID}?platform=0&date={YEAR}-{MONTH}-{DAY}

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

| Parameter | Description |
| --- | --- |
| LOCATION_ID | ID of the dining hall |
| PERIOD_ID | Dining period ID that corresponds to dining hall |
| YEAR | Year (2024, 2023, …) |
| MONTH | Month number, 1-12 |
| DAY | Day of the month, 1-31 |

## Hours

```jsx
/v1/locations/weekly_schedule?site_id={LOCATION_ID}&date={DATE}
```

| Parameter | Description |
| --- | --- |
| LOCATION_ID | ID of the university/school |
| DATE | Week started at TZN time, ex. %222024-09-19T04:00:00.000Z%22 |