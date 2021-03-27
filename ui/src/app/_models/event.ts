export interface IEvent

    {

      id: string;
      name: {
        fi: string;
        en: string;
        sv: string;
        zh: string
      };
      source_type: {};
      info_url: string;
    modified_at: string;
      location: {
        lat: {};
        lon: {};
        address: {
          street_address: string;
          postal_code: string;
          locality: string
        }
      };
      description: {
        intro: string;
        body: string;
        images: [
          {
            url: string;
            copyright_holder: string;
            license_type: {}
          }
        ]
      };
      tags: [
        {
          id: string;
          name: string
        }
      ];
      event_dates: {
        starting_day: string;
        ending_day: string;
        additional_description: [
          {
            langCode: string;
            text: string
          }
        ]
      }



    }

