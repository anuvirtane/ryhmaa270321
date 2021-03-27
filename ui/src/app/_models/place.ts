export interface Place{ 
    id: string; 
    name?:{
        fi:	string;
        en:	string;
        sv:	string;
        zh:	string;
        }; 
    source_type?: 
    {
    }; 
    info_url: string;
    modified_at: string; 
    location?: 
    {
        lat: 	{
        };
        lon:	{
        }; 
        address: {
            street_address:	string;
            postal_code:	string;
            locality:	string;
        }
    };
    description?: {
        intro:	string;
        body:	string;
        images: [{
            url:	string;
            copyright_holder:	string;
            license_type:
        {} }]; 
    }
    tags?:[ {
        id: string;
        name:	string;
        }];
    opening_hours?: {
        hours:	[{
            weekday_id:	number;
            opens:	{
                hours:	number;
                minutes:	number;
                seconds:	number;
                }
            closes:	{
                hours:	number;
                minutes:	number;
                seconds:	number;
                }
            open24h:	boolean;
            }];
        openinghours_exception:	string;
        }; 

}

