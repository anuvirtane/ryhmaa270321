export interface Activity  {
  "id": "string",
  "name": {
    "fi": "string",
    "en": "string",
    "sv": "string",
    "zh": "string"
  },
  "source_type": {},
  "info_url": "string",
  "modified_at": "2021-03-29T11:14:00.958Z",
  "location": {
    "lat": {},
    "lon": {},
    "address": {
      "street_address": "string",
      "postal_code": "string",
      "locality": "string"
    }
  },
  "description": {
    "intro": "string",
    "body": "string",
    "images": [
      {
        "url": "string",
        "copyright_holder": "string",
        "license_type": {}
      }
    ]
  },
  "tags": [
    {
      "id": "string",
      "name": "string"
    }
  ],
  "where_when_duration": {
    "where_and_when": "string",
    "duration": "string"
  }
}
