import React, { Component } from 'react';
import { Badge, Card, Col, Form, Row } from "react-bootstrap";
import DropdownFilter from "@/components/DropdownFilter";
import Packages from "@/components/Packages";

const categories = ["FIT - 9 nights | 3 Cities","FIT - 3 nights | 1 City","FIT- 12 nights | 4 cities","FIT - 6 nights | 2 Cities","Group | Upto Max 12 Pax","Group | Upto Max 20 Pax","Group | Upto Max 26 Pax","Group | Upto Max 36 Pax","Group | Upto Max 50 Pax"];
const items = [
    {
        crmid: "191636",
        subject: "Romantic Hamilton Island | 3 Nights | Silver",
        short_description:
            "Your Island escape awaits, Hamilton Island is one of Australia?s most spectacular and sought-after holiday destinations.  | Hamilton Island Great Barrier Reef Package",
        cf_1571:
            "Your Island escape awaits, Hamilton Island is one of Australia&rsquo;s most spectacular and sought-after holiday destinations.  | Hamilton Island Great Barrier Reef Package",
        quotestage: "Reviewed",
        brief_description:
            "Highlights : Experience the Romance at Hamilton Island | Return Airport Transfers | Great Barrier Reef Tour | 3 Nights Accommodation in Reef View Hotel | Breakfast with the koalas |Complimentary activities at the resort",
        cf_1573:
            "Highlights : Experience the Romance at Hamilton Island | Return Airport Transfers | Great Barrier Reef Tour | 3 Nights Accommodation in Reef View Hotel | Breakfast with the koalas |Complimentary activities at the resort",
        cf_1319: "925",
        quote_category: "FIT - 3 nights | 1 City",
        imageurl:
            "http://crm.turtledownunder.com.au/customerportal/portalimages/Romantic_Hamilton.jpg",
        cf_1575:
            "http://crm.turtledownunder.com.au/customerportal/portalimages/Romantic_Hamilton.jpg",
        name_of_travelers: "",
        prinical_name: "",
        cf_1202: "",
        flight_details: null,
        cf_1204: null,
        tour_type: null,
        quote_type: null,
        quote_no: "TDU1609",
        cf_1162: "15-03-2020",
        total: "$4597",
        createdtime: "01-07-2019 2:05 PM",
        record: "191636"
    },
    {
        crmid: "364967",
        subject: "Tangalooma Escape | 1 Night | Bronze",
        short_description:
            "Experience the Paradise of Dolphins with your 1 Night Escape to the amazing Moreton Island",
        cf_1571:
            "Experience the Paradise of Dolphins with your 1 Night Escape to the amazing Moreton Island",
        quotestage: "Reviewed",
        brief_description:
            "Inclusions : \nReturn Airport Transfer to the Wharf |\nReturn Ferry Transfers |1 Nights Stay at Tangalooma Island Resort | Experience - Dolphin feeding |\nUse of many free activities.",
        cf_1573:
            "Inclusions : \nReturn Airport Transfer to the Wharf |\nReturn Ferry Transfers |1 Nights Stay at Tangalooma Island Resort | Experience - Dolphin feeding |\nUse of many free activities.",
        cf_1319: "",
        quote_category: "FIT - 3 nights | 1 City",
        imageurl:
            "https://www.tangalooma.com/TangaloomaV2/media/WebsiteFiles/Web%20Images/IconicExperiences_WildDolphinFeeding.jpg",
        cf_1575:
            "https://www.tangalooma.com/TangaloomaV2/media/WebsiteFiles/Web%20Images/IconicExperiences_WildDolphinFeeding.jpg",
        name_of_travelers: "",
        prinical_name: "",
        cf_1202: "",
        flight_details: null,
        cf_1204: null,
        tour_type: null,
        quote_type: null,
        quote_no: "TDU2693",
        cf_1162: "15-03-2020",
        total: "$1672",
        createdtime: "05-10-2019 5:16 PM",
        record: "364967"
    },
    {
        crmid: "455957",
        subject: "Best of Australia | 12 Nights | Diamond",
        short_description:
            "Experience the Best of Australia with its Most Popular 4 City Combination. The untamed natural splendour, sophisticated cities and landscapes of Australia. | Melbourne | Cairns | Gold Coast | Sydney |",
        cf_1571:
            "Experience the Best of Australia with its Most Popular 4 City Combination. The untamed natural splendour, sophisticated cities and landscapes of Australia. | Melbourne | Cairns | Gold Coast | Sydney |",
        quotestage: "Reviewed",
        brief_description:
            "Highlights : Return Airport Transfers on Seat In coach in all Cities | 3 Nights Accomodation in Each City | MCG Tour | City Tour | Great Ocean Road | Penguin Parade | Eureka Skydeck | Kuranda Skyrail | Hot Air Balloon |Tjapukai by Night | Green Island Great Barrier Reef Tour | Glow Worm Tour | Movie World | Sea World | Jet Boat Ride| Sydney Hop On Hop off Pass |Opera House| Sydney 2 Attraction Pass | Helicopter Ride | Sydney Tower Buffet Dinner | Taronga Zoo",
        cf_1573:
            "Highlights : Return Airport Transfers on Seat In coach in all Cities | 3 Nights Accomodation in Each City | MCG Tour | City Tour | Great Ocean Road | Penguin Parade | Eureka Skydeck | Kuranda Skyrail | Hot Air Balloon |Tjapukai by Night | Green Island Great Barrier Reef Tour | Glow Worm Tour | Movie World | Sea World | Jet Boat Ride| Sydney Hop On Hop off Pass |Opera House| Sydney 2 Attraction Pass | Helicopter Ride | Sydney Tower Buffet Dinner | Taronga Zoo",
        cf_1319: "5076",
        quote_category: "FIT- 12 nights | 4 cities",
        imageurl:
            "https://www.australia.com/content/australia/en/places/sydney-and-surrounds/guide-to-sydney/_jcr_content/hero/ImageTile/image.adapt.768.high.jpg",
        cf_1575:
            "https://www.australia.com/content/australia/en/places/sydney-and-surrounds/guide-to-sydney/_jcr_content/hero/ImageTile/image.adapt.768.high.jpg",
        name_of_travelers: "",
        prinical_name: "",
        cf_1202: "",
        flight_details: "",
        cf_1204: "",
        tour_type: "",
        quote_type: "",
        quote_no: "TDU3742",
        cf_1162: "15-03-2020",
        total: "$5344",
        createdtime: "05-01-2020 2:57 PM",
        record: "455957"
    },
    {
        crmid: "455971",
        subject: "Romance in the East | 12 Nights | Diamond",
        short_description:
            "Perfect for Honeymooners | Explore the epic Eastern Australian coastline on a journey that takes you from the reef-lined shores  to spectacular City Sights. | Sydney | Gold Coast | Cairns | Melbourne",
        cf_1571:
            "Perfect for Honeymooners | Explore the epic Eastern Australian coastline on a journey that takes you from the reef-lined shores  to spectacular City Sights. | Sydney | Gold Coast | Cairns | Melbourne",
        quotestage: "Reviewed",
        brief_description:
            "Highlights : Return Airport Transfers on Seat In coach in all Cities | 3 Nights Accomodation in Each City | Big Bus Sydney | Opera House| Sydney 2 Attraction Pass | Sydney Tower Buffet Dinner | Sydney Harbour Heli Flight | Taronga Zoo| Glow Worm Tour | Movie World | Sea World | Sky Point | Hot Air Balloon | Jet Boat Ride | Kuranda Skyrail | Tjapukai by Night | Green Island Great Barrier Reef Tour | MCG Tour | Hop on Hop off | Melbourne City Sightseeing Cruise | Great Ocean Road",
        cf_1573:
            "Highlights : Return Airport Transfers on Seat In coach in all Cities | 3 Nights Accomodation in Each City | Big Bus Sydney | Opera House| Sydney 2 Attraction Pass | Sydney Tower Buffet Dinner | Sydney Harbour Heli Flight | Taronga Zoo| Glow Worm Tour | Movie World | Sea World | Sky Point | Hot Air Balloon | Jet Boat Ride | Kuranda Skyrail | Tjapukai by Night | Green Island Great Barrier Reef Tour | MCG Tour | Hop on Hop off | Melbourne City Sightseeing Cruise | Great Ocean Road",
        cf_1319: "5076",
        quote_category: "FIT- 12 nights | 4 cities",
        imageurl:
            "http://crm.turtledownunder.com.au/customerportal/portalimages/Romantic-Holiday-Destination.jpg",
        cf_1575:
            "http://crm.turtledownunder.com.au/customerportal/portalimages/Romantic-Holiday-Destination.jpg",
        name_of_travelers: "",
        prinical_name: "",
        cf_1202: "",
        flight_details: "",
        cf_1204: "",
        tour_type: "",
        quote_type: "",
        quote_no: "TDU3749",
        cf_1162: "15-03-2020",
        total: "$5700",
        createdtime: "05-01-2020 3:56 PM",
        record: "455971"
    },
    {
        crmid: "455991",
        subject: "Melbourne City Break | 3 Nights | Bronze",
        short_description:
            "Many would argue that Melbourne is Australias culture capital and maybe they re right. The city is literally covered in restaurants, museums, fashion spots and sightseeing activities.",
        cf_1571:
            "Many would argue that Melbourne is Australias culture capital and maybe they re right. The city is literally covered in restaurants, museums, fashion spots and sightseeing activities.",
        quotestage: "Create Project",
        brief_description:
            "Highlights : Return Airport Transfers on Seat In coach in Melbourne | 3 Nights Accomodation in Melbourne City | MCG Tour | City Tour | Great Ocean Road | Penguin Parade | Eureka Skydeck",
        cf_1573:
            "Highlights : Return Airport Transfers on Seat In coach in Melbourne | 3 Nights Accomodation in Melbourne City | MCG Tour | City Tour | Great Ocean Road | Penguin Parade | Eureka Skydeck",
        cf_1319: "",
        quote_category: "FIT - 3 nights | 1 City",
        imageurl:
            "http://crm.turtledownunder.com.au/customerportal/portalimages/Australian_Highlights_1.jpg",
        cf_1575:
            "http://crm.turtledownunder.com.au/customerportal/portalimages/Australian_Highlights_1.jpg",
        name_of_travelers: "",
        prinical_name: "",
        cf_1202: "",
        flight_details: "",
        cf_1204: "",
        tour_type: "",
        quote_type: "",
        quote_no: "TDU3753",
        cf_1162: null,
        total: "$807",
        createdtime: "05-01-2020 4:58 PM",
        record: "455991"
    },
    {
        crmid: "455993",
        subject: "Sydney City Break | 3 Nights | Bronze",
        short_description:
            "Being Australia's most iconic City, time in Sydney, even if it's just a day tour, is an absolute must for anyone visiting the land down under.",
        cf_1571:
            "Being Australia&#039;s most iconic City, time in Sydney, even if it&#039;s just a day tour, is an absolute must for anyone visiting the land down under.",
        quotestage: "Auto Rejected",
        brief_description:
            "Highlights : Return Airport Transfers on Seat In coach in Sydney | 3 Nights Accomodation in Sydney City | Sydney City Tour | Sydney 2 + 1 Attraction Pass | Blue Mountain",
        cf_1573:
            "Highlights : Return Airport Transfers on Seat In coach in Sydney | 3 Nights Accomodation in Sydney City | Sydney City Tour | Sydney 2 + 1 Attraction Pass | Blue Mountain",
        cf_1319: "",
        quote_category: "FIT - 3 nights | 1 City",
        imageurl:
            "http://crm.turtledownunder.com.au/customerportal/portalimages/sydney.jpg",
        cf_1575:
            "http://crm.turtledownunder.com.au/customerportal/portalimages/sydney.jpg",
        name_of_travelers: "",
        prinical_name: "",
        cf_1202: "",
        flight_details: "",
        cf_1204: "",
        tour_type: "",
        quote_type: "",
        quote_no: "TDU3754",
        cf_1162: "04-01-2020",
        total: "$933",
        createdtime: "05-01-2020 4:59 PM",
        record: "455993"
    },
    {
        crmid: "455994",
        subject: "Cairns City Break | 3 Nights | Bronze",
        short_description:
            "Experience the incredible Queensland day tours in tropical North Queensland. With Cairns located 1,700 kilometres north of Brisbane and a plethora of things to do along the stunning coastal strip .",
        cf_1571:
            "Experience the incredible Queensland day tours in tropical North Queensland. With Cairns located 1,700 kilometres north of Brisbane and a plethora of things to do along the stunning coastal strip .",
        quotestage: "Auto Rejected",
        brief_description:
            "Highlights : Return Airport Transfers on Seat In coach in Cairns | 3 Nights Accomodation in Cairns City | Kuranda Skyrail |Scenic Train| Green Island Great Barrier Reef Tour",
        cf_1573:
            "Highlights : Return Airport Transfers on Seat In coach in Cairns | 3 Nights Accomodation in Cairns City | Kuranda Skyrail |Scenic Train| Green Island Great Barrier Reef Tour",
        cf_1319: "",
        quote_category: "FIT - 3 nights | 1 City",
        imageurl:
            "http://crm.turtledownunder.com.au/customerportal/portalimages/Cairns_Standard.jpg",
        cf_1575:
            "http://crm.turtledownunder.com.au/customerportal/portalimages/Cairns_Standard.jpg",
        name_of_travelers: "",
        prinical_name: "",
        cf_1202: "",
        flight_details: "",
        cf_1204: "",
        tour_type: "",
        quote_type: "",
        quote_no: "TDU3755",
        cf_1162: "04-01-2020",
        total: "$932",
        createdtime: "05-01-2020 5:00 PM",
        record: "455994"
    },
    {
        crmid: "456007",
        subject: "Gold Coast City Break | 3 Nights | Bronze",
        short_description:
            "The Gold Coast is a vibrant coastal region, located less than an hour's drive south of Brisbane. It's renowned for its year round sunshine, golden beaches and theme parks.",
        cf_1571:
            "The Gold Coast is a vibrant coastal region, located less than an hour&#039;s drive south of Brisbane. It&#039;s renowned for its year round sunshine, golden beaches and theme parks.",
        quotestage: "Auto Rejected",
        brief_description:
            "Highlights : Return Airport Transfers on Seat In coach in Gold Coast | 3 Nights Accomodation in Gold Coast City | Movie World | Sea World",
        cf_1573:
            "Highlights : Return Airport Transfers on Seat In coach in Gold Coast | 3 Nights Accomodation in Gold Coast City | Movie World | Sea World",
        cf_1319: "",
        quote_category: "FIT - 3 nights | 1 City",
        imageurl:
            "http://crm.turtledownunder.com.au/customerportal/portalimages/Shell%20Gold%20Coast%20Standard.jpg",
        cf_1575:
            "http://crm.turtledownunder.com.au/customerportal/portalimages/Shell%20Gold%20Coast%20Standard.jpg",
        name_of_travelers: "",
        prinical_name: "",
        cf_1202: "",
        flight_details: "",
        cf_1204: "",
        tour_type: "",
        quote_type: "",
        quote_no: "TDU3756",
        cf_1162: "04-01-2020",
        total: "$816",
        createdtime: "05-01-2020 5:00 PM",
        record: "456007"
    },
    {
        crmid: "456008",
        subject: "Incredible Australia | 9 nights | Gold",
        short_description:
            "This epic journey takes you from cosmopolitan Melbourne along the  Australian coastline .You?ll marvel at the endless blue waters and the incredible City Life . | Melbourne | Gold Coast | Sydney",
        cf_1571:
            "This epic journey takes you from cosmopolitan Melbourne along the  Australian coastline .You&rsquo;ll marvel at the endless blue waters and the incredible City Life . | Melbourne | Gold Coast | Sydney",
        quotestage: "Auto Rejected",
        brief_description:
            "Highlights : Return Airport Transfers on Seat In coach in all Cities | 3 Nights Accomodation in Each City | MCG Tour | City Tour | Great Ocean Road | Eureka Skydeck | Movie World | Sea World | Sydney 2 + 1 Attraction Pass | Blue Mountain",
        cf_1573:
            "Highlights : Return Airport Transfers on Seat In coach in all Cities | 3 Nights Accomodation in Each City | MCG Tour | City Tour | Great Ocean Road | Eureka Skydeck | Movie World | Sea World | Sydney 2 + 1 Attraction Pass | Blue Mountain",
        cf_1319: "",
        quote_category: "FIT - 9 nights | 3 Cities",
        imageurl:
            "http://crm.turtledownunder.com.au/customerportal/portalimages/Incredible.jpg",
        cf_1575:
            "http://crm.turtledownunder.com.au/customerportal/portalimages/Incredible.jpg",
        name_of_travelers: "",
        prinical_name: "",
        cf_1202: "",
        flight_details: "",
        cf_1204: "",
        tour_type: "",
        quote_type: "",
        quote_no: "TDU3757",
        cf_1162: "04-01-2020",
        total: "$2632",
        createdtime: "05-01-2020 5:11 PM",
        record: "456008"
    },
    {
        crmid: "456009",
        subject: "East Coast and Rainforest | 9 Nights | Gold",
        short_description:
            "Explore the epic Eastern Australian coastline on a journey that takes you from its spectacular Cities , Reef & Rainforest. | Melbourne | Cairns |  Sydney |",
        cf_1571:
            "Explore the epic Eastern Australian coastline on a journey that takes you from its spectacular Cities , Reef &amp; Rainforest. | Melbourne | Cairns |  Sydney |",
        quotestage: "Auto Rejected",
        brief_description:
            "Highlights : Return Airport Transfers on Seat In coach in all Cities | 3 Nights Accomodation in Each City | MCG Tour | Kuranda Skyrail | Green Island Great Barrier Reef Tour | City Tour | Great Ocean Road |\nEureka Skydeck | Sydney 2+1 Attraction Pass | Blue Mountain",
        cf_1573:
            "Highlights : Return Airport Transfers on Seat In coach in all Cities | 3 Nights Accomodation in Each City | MCG Tour | Kuranda Skyrail | Green Island Great Barrier Reef Tour | City Tour | Great Ocean Road |\nEureka Skydeck | Sydney 2+1 Attraction Pass | Blue Mountain",
        cf_1319: "",
        quote_category: "FIT - 9 nights | 3 Cities",
        imageurl:
            "http://crm.turtledownunder.com.au/customerportal/portalimages/MEL%20CNS%20SYD.jpg",
        cf_1575:
            "http://crm.turtledownunder.com.au/customerportal/portalimages/MEL%20CNS%20SYD.jpg",
        name_of_travelers: "",
        prinical_name: "",
        cf_1202: "",
        flight_details: "",
        cf_1204: "",
        tour_type: "",
        quote_type: "",
        quote_no: "TDU3758",
        cf_1162: "04-01-2020",
        total: "$2748",
        createdtime: "05-01-2020 5:14 PM",
        record: "456009"
    },
    {
        crmid: "456016",
        subject: "Discover Australia | 6 Nights | Silver",
        short_description:
            "See the wonders of the Great Barrier Reef. and the experience the glitter and glamour of City life, Get blown away by the mesmerizing beauty of these stunning places | Sydney | Cairns |",
        cf_1571:
            "See the wonders of the Great Barrier Reef. and the experience the glitter and glamour of City life, Get blown away by the mesmerizing beauty of these stunning places | Sydney | Cairns |",
        quotestage: "Auto Rejected",
        brief_description:
            "Highlights : Return Airport Transfers on Seat In coach in all Cities | 3 Nights Accomodation in Each City | City Tour | Sydney 2 +1 Attraction Pass | Blue Mountain | Kuranda Skyrail |Scenic Train| Green Island Great Barrier Reef Tour",
        cf_1573:
            "Highlights : Return Airport Transfers on Seat In coach in all Cities | 3 Nights Accomodation in Each City | City Tour | Sydney 2 +1 Attraction Pass | Blue Mountain | Kuranda Skyrail |Scenic Train| Green Island Great Barrier Reef Tour",
        cf_1319: "",
        quote_category: "FIT - 6 nights | 2 Cities",
        imageurl:
            "http://crm.turtledownunder.com.au/customerportal/portalimages/Discover.jpg",
        cf_1575:
            "http://crm.turtledownunder.com.au/customerportal/portalimages/Discover.jpg",
        name_of_travelers: "",
        prinical_name: "",
        cf_1202: "",
        flight_details: "",
        cf_1204: "",
        tour_type: "",
        quote_type: "",
        quote_no: "TDU3759",
        cf_1162: "04-01-2020",
        total: "$1940",
        createdtime: "05-01-2020 5:17 PM",
        record: "456016"
    },
    {
        crmid: "456018",
        subject: "City Highlights | 6 Nights | Silver",
        short_description:
            "Experience the best of the most vibrant two cities of Australia. The cities and Day tours in the regions have a lot to offer guests a memorable journey .| Melbourne | Sydney |",
        cf_1571:
            "Experience the best of the most vibrant two cities of Australia. The cities and Day tours in the regions have a lot to offer guests a memorable journey .| Melbourne | Sydney |",
        quotestage: "Auto Rejected",
        brief_description:
            "Highlights : Return Airport Transfers on Seat In coach in all Cities | 3 Nights Accomodation in Each City | MCG Tour | City Tour | Great Ocean Road | Sydney 2+1 Attraction Pass | Blue Mountain",
        cf_1573:
            "Highlights : Return Airport Transfers on Seat In coach in all Cities | 3 Nights Accomodation in Each City | MCG Tour | City Tour | Great Ocean Road | Sydney 2+1 Attraction Pass | Blue Mountain",
        cf_1319: "",
        quote_category: "FIT - 6 nights | 2 Cities",
        imageurl:
            "https://crm.turtledownunder.com.au/customerportal/portalimages/Hightlight.jpg",
        cf_1575:
            "https://crm.turtledownunder.com.au/customerportal/portalimages/Hightlight.jpg",
        name_of_travelers: "",
        prinical_name: "",
        cf_1202: "",
        flight_details: "",
        cf_1204: "",
        tour_type: "",
        quote_type: "",
        quote_no: "TDU3761",
        cf_1162: "04-01-2020",
        total: "$1780",
        createdtime: "05-01-2020 5:25 PM",
        record: "456018"
    },
    {
        crmid: "456019",
        subject: "Australian Escape | 6 Nights | Silver",
        short_description:
            "Experience the city life on this Fabulous Journey and escape to the amazing beaches and Adventures of the Australian Theme Parks | Melbourne | Gold Coast |",
        cf_1571:
            "Experience the city life on this Fabulous Journey and escape to the amazing beaches and Adventures of the Australian Theme Parks | Melbourne | Gold Coast |",
        quotestage: "Auto Rejected",
        brief_description:
            "Highlights : Return Airport Transfers on Seat In coach in all Cities | 3 Nights Accomodation in Each City | MCG Tour | City Tour | Great Ocean Road | Movie World | Sea World",
        cf_1573:
            "Highlights : Return Airport Transfers on Seat In coach in all Cities | 3 Nights Accomodation in Each City | MCG Tour | City Tour | Great Ocean Road | Movie World | Sea World",
        cf_1319: "",
        quote_category: "FIT - 6 nights | 2 Cities",
        imageurl:
            "https://crm.turtledownunder.com.au/customerportal/portalimages/MEL_OOL1.jpg",
        cf_1575:
            "https://crm.turtledownunder.com.au/customerportal/portalimages/MEL_OOL1.jpg",
        name_of_travelers: "",
        prinical_name: "",
        cf_1202: "",
        flight_details: "",
        cf_1204: "",
        tour_type: "",
        quote_type: "",
        quote_no: "TDU3762",
        cf_1162: "04-01-2020",
        total: "$1587",
        createdtime: "05-01-2020 5:26 PM",
        record: "456019"
    },
    {
        crmid: "456020",
        subject: "City to Surf | 6 nights | Silver",
        short_description:
            "It?s all about the journey, as we take you from the bustling city to the breaking surf along the coast. Finish in the city that?s famous for fun!| Sydney | Gold Coast |",
        cf_1571:
            "It&rsquo;s all about the journey, as we take you from the bustling city to the breaking surf along the coast. Finish in the city that&rsquo;s famous for fun!| Sydney | Gold Coast |",
        quotestage: "Auto Rejected",
        brief_description:
            "Highlights : Return Airport Transfers on Seat In coach in all Cities | 3 Nights Accomodation in Each City | City Tour | Sydney 2+1 Attraction Pass | Blue Mountain | Movie World | Sea World",
        cf_1573:
            "Highlights : Return Airport Transfers on Seat In coach in all Cities | 3 Nights Accomodation in Each City | City Tour | Sydney 2+1 Attraction Pass | Blue Mountain | Movie World | Sea World",
        cf_1319: "",
        quote_category: "FIT - 6 nights | 2 Cities",
        imageurl:
            "http://crm.turtledownunder.com.au/customerportal/portalimages/city_to_surf.jpg",
        cf_1575:
            "http://crm.turtledownunder.com.au/customerportal/portalimages/city_to_surf.jpg",
        name_of_travelers: "",
        prinical_name: "",
        cf_1202: "",
        flight_details: "",
        cf_1204: "",
        tour_type: "",
        quote_type: "",
        quote_no: "TDU3763",
        cf_1162: "04-01-2020",
        total: "$1825",
        createdtime: "05-01-2020 5:27 PM",
        record: "456020"
    },
    {
        crmid: "456021",
        subject: "Australian Gateway | 6 nights | Silver",
        short_description:
            "A unique combination of two cities one famous for the vibe of the Natural Experiences and the other gives a touch of the Rainforest and Reef| Melbourne | Cairns |",
        cf_1571:
            "A unique combination of two cities one famous for the vibe of the Natural Experiences and the other gives a touch of the Rainforest and Reef| Melbourne | Cairns |",
        quotestage: "Auto Rejected",
        brief_description:
            "Highlights : Return Airport Transfers on Seat In coach in all Cities | 3 Nights Accomodation in Each City | MCG Tour | City Tour | Great Ocean Road | Kuranda Skyrail | Scenic Train | Green Island Great Barrier Reef Tour",
        cf_1573:
            "Highlights : Return Airport Transfers on Seat In coach in all Cities | 3 Nights Accomodation in Each City | MCG Tour | City Tour | Great Ocean Road | Kuranda Skyrail | Scenic Train | Green Island Great Barrier Reef Tour",
        cf_1319: "",
        quote_category: "FIT - 6 nights | 2 Cities",
        imageurl:
            "https://crm.turtledownunder.com.au/customerportal/portalimages/australian_gateway.jpg",
        cf_1575:
            "https://crm.turtledownunder.com.au/customerportal/portalimages/australian_gateway.jpg",
        name_of_travelers: "",
        prinical_name: "",
        cf_1202: "",
        flight_details: "",
        cf_1204: "",
        tour_type: "",
        quote_type: "",
        quote_no: "TDU3764",
        cf_1162: "04-01-2020",
        total: "$1739",
        createdtime: "05-01-2020 5:27 PM",
        record: "456021"
    },
    {
        crmid: "456040",
        subject: "Australian Glimpses | 9 nights | Gold",
        short_description:
            "Take in the highlights of these cities as you weave your way through some major landmarks, Lookout for a stunning view of the city skyline.| Melbourne | Gold Coast | Cairns |",
        cf_1571:
            "Take in the highlights of these cities as you weave your way through some major landmarks, Lookout for a stunning view of the city skyline.| Melbourne | Gold Coast | Cairns |",
        quotestage: "Auto Rejected",
        brief_description:
            "Highlights : Return Airport Transfers on Seat In coach in all Cities | 3 Nights Accomodation in Each City | MCG Tour | City Tour | Great Ocean Road | Eureka Skydeck |Movie World | Sea World | Kuranda Skyrail |Green Island Great Barrier Reef Tour",
        cf_1573:
            "Highlights : Return Airport Transfers on Seat In coach in all Cities | 3 Nights Accomodation in Each City | MCG Tour | City Tour | Great Ocean Road | Eureka Skydeck |Movie World | Sea World | Kuranda Skyrail |Green Island Great Barrier Reef Tour",
        cf_1319: "",
        quote_category: "FIT - 9 nights | 3 Cities",
        imageurl:
            "http://crm.turtledownunder.com.au/customerportal/portalimages/Australian_Glimpses.jpg",
        cf_1575:
            "http://crm.turtledownunder.com.au/customerportal/portalimages/Australian_Glimpses.jpg",
        name_of_travelers: "",
        prinical_name: "",
        cf_1202: "",
        flight_details: "",
        cf_1204: "",
        tour_type: "",
        quote_type: "",
        quote_no: "TDU3765",
        cf_1162: "04-01-2020",
        total: "$2555",
        createdtime: "05-01-2020 5:32 PM",
        record: "456040"
    },
    {
        crmid: "456041",
        subject: "Queensland Beaches and Reef | 6 nights | Silver",
        short_description:
            "Explore the most popular city that is famous for its night life , Beaches, Theme parks and embrace the wonder of the best coral Reef  across the universe| Gold Coast | Cairns |",
        cf_1571:
            "Explore the most popular city that is famous for its night life , Beaches, Theme parks and embrace the wonder of the best coral Reef  across the universe| Gold Coast | Cairns |",
        quotestage: "Auto Rejected",
        brief_description:
            "Highlights : Return Airport Transfers on Seat In coach in all Cities | 3 Nights Accomodation in Each City | Movie World | Sea World | Kuranda Skyrail | Scenic Train |Green Island Great Barrier Reef Tour |",
        cf_1573:
            "Highlights : Return Airport Transfers on Seat In coach in all Cities | 3 Nights Accomodation in Each City | Movie World | Sea World | Kuranda Skyrail | Scenic Train |Green Island Great Barrier Reef Tour |",
        cf_1319: "",
        quote_category: "FIT - 6 nights | 2 Cities",
        imageurl:
            "http://crm.turtledownunder.com.au/customerportal/portalimages/Queensland_Beaches_and_Reef.jpg",
        cf_1575:
            "http://crm.turtledownunder.com.au/customerportal/portalimages/Queensland_Beaches_and_Reef.jpg",
        name_of_travelers: "",
        prinical_name: "",
        cf_1202: "",
        flight_details: "",
        cf_1204: "",
        tour_type: "",
        quote_type: "",
        quote_no: "TDU3766",
        cf_1162: "04-01-2020",
        total: "$1748",
        createdtime: "05-01-2020 5:33 PM",
        record: "456041"
    },
    {
        crmid: "457365",
        subject: "Australian Bestseller | 12 Nights | Standard",
        short_description:
            "Experience best of the best on your Journey to the Continent  with the Most popular Combination of major Four Cities  | Melbourne| Sydney | Gold Coast | Cairns",
        cf_1571:
            "Experience best of the best on your Journey to the Continent  with the Most popular Combination of major Four Cities  | Melbourne| Sydney | Gold Coast | Cairns",
        quotestage: "Reviewed",
        brief_description:
            "Highlights : Return Airport Transfers on Seat In coach in all Cities | 3 Nights Accomodation in Each City | City Tour | Penguin Parade | Great Ocean Road | Kuranda Skyrail and Scenic Train | Green Island Great Barrier Reef Tour | Movie World | Sea World | Sydney 2+1 Attraction Pass | Blue Mountain",
        cf_1573:
            "Highlights : Return Airport Transfers on Seat In coach in all Cities | 3 Nights Accomodation in Each City | City Tour | Penguin Parade | Great Ocean Road | Kuranda Skyrail and Scenic Train | Green Island Great Barrier Reef Tour | Movie World | Sea World | Sydney 2+1 Attraction Pass | Blue Mountain",
        cf_1319: "5076",
        quote_category: "FIT- 12 nights | 4 cities",
        imageurl:
            "http://crm.turtledownunder.com.au/customerportal/portalimages/Australian_Memories.jpg",
        cf_1575:
            "http://crm.turtledownunder.com.au/customerportal/portalimages/Australian_Memories.jpg",
        name_of_travelers: "",
        prinical_name: "",
        cf_1202: "",
        flight_details: "",
        cf_1204: "",
        tour_type: "",
        quote_type: "",
        quote_no: "TDU3783",
        cf_1162: "15-03-2020",
        total: "$3671",
        createdtime: "07-01-2020 3:12 PM",
        record: "457365"
    },
    {
        crmid: "457366",
        subject: "Escape to Hamilton | 3 Nights | Silver",
        short_description:
            "Part of the Whitsundays, and in the heart of the Great Barrier Reef, Hamilton Island is one of Australia?s most spectacular and sought-after holiday destinations.| Hamilton Island | GBR |",
        cf_1571:
            "Part of the Whitsundays, and in the heart of the Great Barrier Reef, Hamilton Island is one of Australia&rsquo;s most spectacular and sought-after holiday destinations.| Hamilton Island | GBR |",
        quotestage: "Auto Rejected",
        brief_description:
            "Highlights : Return Airport Transfers on Seat In coach in Hamilton | 3 Nights Accomodation in Hamilton City | Great Barrier Reef",
        cf_1573:
            "Highlights : Return Airport Transfers on Seat In coach in Hamilton | 3 Nights Accomodation in Hamilton City | Great Barrier Reef",
        cf_1319: "",
        quote_category: "FIT - 3 nights | 1 City",
        imageurl:
            "http://crm.turtledownunder.com.au/customerportal/portalimages/Escape_to_Hamilton.jpg",
        cf_1575:
            "http://crm.turtledownunder.com.au/customerportal/portalimages/Escape_to_Hamilton.jpg",
        name_of_travelers: "",
        prinical_name: "",
        cf_1202: "",
        flight_details: "",
        cf_1204: "",
        tour_type: "",
        quote_type: "",
        quote_no: "TDU3784",
        cf_1162: "04-01-2020",
        total: "$1597",
        createdtime: "07-01-2020 3:26 PM",
        record: "457366"
    },
    {
        crmid: "457367",
        subject: "White Heaven Highlights | 3 Nights | Silver",
        short_description:
            "On this holiday to Hamilton Island, you'll be surrounded by pristine white Sand exploring the   world-famous Whitehaven Beach.| Hamilton Island |",
        cf_1571:
            "On this holiday to Hamilton Island, you&#039;ll be surrounded by pristine white Sand exploring the   world-famous Whitehaven Beach.| Hamilton Island |",
        quotestage: "Auto Rejected",
        brief_description:
            "Highlights : Return Airport Transfers on Seat In coach in Hemilton | 3 Nights Accomodation in Hemilton | Great Barrier Reef",
        cf_1573:
            "Highlights : Return Airport Transfers on Seat In coach in Hemilton | 3 Nights Accomodation in Hemilton | Great Barrier Reef",
        cf_1319: "",
        quote_category: "FIT - 3 nights | 1 City",
        imageurl:
            "http://crm.turtledownunder.com.au/customerportal/portalimages/White_Heaven_Highlights.jpg",
        cf_1575:
            "http://crm.turtledownunder.com.au/customerportal/portalimages/White_Heaven_Highlights.jpg",
        name_of_travelers: "",
        prinical_name: "",
        cf_1202: "",
        flight_details: "",
        cf_1204: "",
        tour_type: "",
        quote_type: "",
        quote_no: "TDU3785",
        cf_1162: "04-01-2020",
        total: "$1115",
        createdtime: "07-01-2020 3:30 PM",
        record: "457367"
    },
    {
        crmid: "457368",
        subject: "Hamilton Double Deal | 3 nights | Silver",
        short_description:
            "Experience a kaleidoscope of coral and marine life along with the world famous Great Barrier Reef on this Double Cruise Package on Hamilton Island  | Hamilton Island |",
        cf_1571:
            "Experience a kaleidoscope of coral and marine life along with the world famous Great Barrier Reef on this Double Cruise Package on Hamilton Island  | Hamilton Island |",
        quotestage: "Auto Rejected",
        brief_description:
            "Highlights : Return Airport Transfers on Seat In coach in Hemilton | 3 Nights Accomodation in Hemilton | Great Barrier Reef",
        cf_1573:
            "Highlights : Return Airport Transfers on Seat In coach in Hemilton | 3 Nights Accomodation in Hemilton | Great Barrier Reef",
        cf_1319: "",
        quote_category: "FIT - 3 nights | 1 City",
        imageurl:
            "http://crm.turtledownunder.com.au/customerportal/portalimages/Hamilton_Double_Deal.jpg",
        cf_1575:
            "http://crm.turtledownunder.com.au/customerportal/portalimages/Hamilton_Double_Deal.jpg",
        name_of_travelers: "",
        prinical_name: "",
        cf_1202: "",
        flight_details: "",
        cf_1204: "",
        tour_type: "",
        quote_type: "",
        quote_no: "TDU3786",
        cf_1162: "04-01-2020",
        total: "$1604",
        createdtime: "07-01-2020 3:31 PM",
        record: "457368"
    },
    {
        crmid: "457822",
        subject: "Australian Honeymoon | 12 Nights | Diamond",
        short_description:
            "Experiencing some of the most amazing City sights and natural beauty that Australia has to offer on this Romantic gateway. | Melbourne | Gold Coast | Hamilton Island | Sydney |",
        cf_1571:
            "Experiencing some of the most amazing City sights and natural beauty that Australia has to offer on this Romantic gateway. | Melbourne | Gold Coast | Hamilton Island | Sydney |",
        quotestage: "Auto Rejected",
        brief_description:
            "Highlights : Return Airport Transfers on Seat In coach in all Cities | 3 Nights Accomodation in Each City | MCG Tour | City Tour | Great Ocean Road | Eureka Skydeck | Movie World | Sea World | Great Barrier Reef | Sydney City Tour | Sydney 2 +1 Attraction Pass | Blue Mountain",
        cf_1573:
            "Highlights : Return Airport Transfers on Seat In coach in all Cities | 3 Nights Accomodation in Each City | MCG Tour | City Tour | Great Ocean Road | Eureka Skydeck | Movie World | Sea World | Great Barrier Reef | Sydney City Tour | Sydney 2 +1 Attraction Pass | Blue Mountain",
        cf_1319: "",
        quote_category: "FIT- 12 nights | 4 cities",
        imageurl:
            "https://crm.turtledownunder.com.au/customerportal/portalimages/Australian_Honeymoon.jpg",
        cf_1575:
            "https://crm.turtledownunder.com.au/customerportal/portalimages/Australian_Honeymoon.jpg",
        name_of_travelers: "",
        prinical_name: "",
        cf_1202: "",
        flight_details: "",
        cf_1204: "",
        tour_type: "",
        quote_type: "",
        quote_no: "TDU3790",
        cf_1162: "04-01-2020",
        total: "$4154",
        createdtime: "07-01-2020 8:46 PM",
        record: "457822"
    },
    {
        crmid: "457833",
        subject: "Australian Splendour | 9 Nights | Gold",
        short_description:
            "Experience the Romantic Hamilton Island with the combination of the comic cities. One of the Best Night life, Shopping & Food on this Tour | Melbourne | Hamilton Island | Sydney |",
        cf_1571:
            "Experience the Romantic Hamilton Island with the combination of the comic cities. One of the Best Night life, Shopping &amp; Food on this Tour | Melbourne | Hamilton Island | Sydney |",
        quotestage: "Auto Rejected",
        brief_description:
            "Highlights : Highlights : Return Airport Transfers on Seat In coach in all Cities | 3 Nights Accomodation in Each City | MCG Tour | City Tour | Great Ocean Road | Eureka Skydeck | Great Barrier Reef | Sydney City Tour | Sydney 2 +1 Attraction Pass | Blue Mountain",
        cf_1573:
            "Highlights : Highlights : Return Airport Transfers on Seat In coach in all Cities | 3 Nights Accomodation in Each City | MCG Tour | City Tour | Great Ocean Road | Eureka Skydeck | Great Barrier Reef | Sydney City Tour | Sydney 2 +1 Attraction Pass | Blue Mountain",
        cf_1319: "",
        quote_category: "FIT - 9 nights | 3 Cities",
        imageurl:
            "http://crm.turtledownunder.com.au/customerportal/portalimages/australian_splendour.jpg",
        cf_1575:
            "http://crm.turtledownunder.com.au/customerportal/portalimages/australian_splendour.jpg",
        name_of_travelers: "",
        prinical_name: "",
        cf_1202: "",
        flight_details: "",
        cf_1204: "",
        tour_type: "",
        quote_type: "",
        quote_no: "TDU3791",
        cf_1162: "04-01-2020",
        total: "$3337",
        createdtime: "07-01-2020 9:12 PM",
        record: "457833"
    },
    {
        crmid: "457900",
        subject: "Amazing Australia | 9 Nights | Gold",
        short_description:
            "Best for a short Romantic escape, explore the Vibrant City Night Life and get charmed by one of the best Romantic islands of Australia| Sydney| Hamilton  Island | Gold Coast |",
        cf_1571:
            "Best for a short Romantic escape, explore the Vibrant City Night Life and get charmed by one of the best Romantic islands of Australia| Sydney| Hamilton  Island | Gold Coast |",
        quotestage: "Auto Rejected",
        brief_description:
            "Highlights : Highlights : Return Airport Transfers on Seat In coach in all Cities | 3 Nights Accomodation in Each City | Sydney City Tour | Sydney 2 +1 Attraction Pass | Blue Mountain | Great Barrier Reef | Movie World | Sea World",
        cf_1573:
            "Highlights : Highlights : Return Airport Transfers on Seat In coach in all Cities | 3 Nights Accomodation in Each City | Sydney City Tour | Sydney 2 +1 Attraction Pass | Blue Mountain | Great Barrier Reef | Movie World | Sea World",
        cf_1319: "",
        quote_category: "FIT - 9 nights | 3 Cities",
        imageurl:
            "http://crm.turtledownunder.com.au/customerportal/portalimages/Amazing_Australia.jpg",
        cf_1575:
            "http://crm.turtledownunder.com.au/customerportal/portalimages/Amazing_Australia.jpg",
        name_of_travelers: "",
        prinical_name: "",
        cf_1202: "",
        flight_details: "",
        cf_1204: "",
        tour_type: "",
        quote_type: "",
        quote_no: "TDU3792",
        cf_1162: "04-01-2020",
        total: "$3422",
        createdtime: "07-01-2020 9:52 PM",
        record: "457900"
    },
    {
        crmid: "465035",
        subject: "Classic Australia with Tangalooma | 10 Nights | Gold",
        short_description:
            "A momentous journey to the classic cities along the east coast and a short escape to the Dolphin Island | Melbourne  | Sydney  | Tangalooma | Gold  Coast |",
        cf_1571:
            "A momentous journey to the classic cities along the east coast and a short escape to the Dolphin Island | Melbourne  | Sydney  | Tangalooma | Gold  Coast |",
        quotestage: "Auto Rejected",
        brief_description:
            "Highlights : Return Airport Transfers on Seat In coach in all Cities | 3 Nights Accomodation in Each City | MCG Tour | City Tour | Great Ocean Road | Eureka Skydeck | Sydney 2 +1 Attraction Pass | Blue Mountain | Movie World | Sea World",
        cf_1573:
            "Highlights : Return Airport Transfers on Seat In coach in all Cities | 3 Nights Accomodation in Each City | MCG Tour | City Tour | Great Ocean Road | Eureka Skydeck | Sydney 2 +1 Attraction Pass | Blue Mountain | Movie World | Sea World",
        cf_1319: "",
        quote_category: "FIT - 9 nights | 3 Cities",
        imageurl:
            "http://crm.turtledownunder.com.au/customerportal/portalimages/Classic_Australia_with_Tangalooma.jpg",
        cf_1575:
            "http://crm.turtledownunder.com.au/customerportal/portalimages/Classic_Australia_with_Tangalooma.jpg",
        name_of_travelers: "",
        prinical_name: "",
        cf_1202: "",
        flight_details: "",
        cf_1204: "",
        tour_type: "",
        quote_type: "",
        quote_no: "TDU3872",
        cf_1162: "17-01-2020",
        total: "$3060",
        createdtime: "17-01-2020 3:58 PM",
        record: "465035"
    },
    {
        crmid: "492872",
        subject: "Melbourne Private Group | 3 Nights | Upto 24 Seater |",
        short_description:
            "Many would argue that Melbourne is Australias culture capital and maybe they re right. The city is literally covered in restaurants, museums, fashion spots and sightseeing activities.",
        cf_1571:
            "Many would argue that Melbourne is Australias culture capital and maybe they re right. The city is literally covered in restaurants, museums, fashion spots and sightseeing activities.",
        quotestage: "Create Project",
        brief_description:
            "Highlights : Return Airport Transfers in a Private 13 Seater Charter in Melbourne | 3 Nights Accomodation in Melbourne City | MCG Tour | City Tour | Great Ocean Road | Penguin Parade | Eureka Skydeck",
        cf_1573:
            "Highlights : Return Airport Transfers in a Private 13 Seater Charter in Melbourne | 3 Nights Accomodation in Melbourne City | MCG Tour | City Tour | Great Ocean Road | Penguin Parade | Eureka Skydeck",
        cf_1319: "",
        quote_category: "Group | Upto Max 20 Pax",
        imageurl:
            "https://crm.turtledownunder.com.au/customerportal/portalimages/eureka_skydeck88.jpg",
        cf_1575:
            "https://crm.turtledownunder.com.au/customerportal/portalimages/eureka_skydeck88.jpg",
        name_of_travelers: "",
        prinical_name: "",
        cf_1202: "",
        flight_details: "",
        cf_1204: "",
        tour_type: "",
        quote_type: "",
        quote_no: "TDU4170",
        cf_1162: "22-02-2021",
        total: "$4778",
        createdtime: "22-02-2020 5:46 PM",
        record: "492872"
    },
    {
        crmid: "492897",
        subject: "Sydney Private Group | 3 Nights | Upto 13 Seater |",
        short_description:
            "Being Australia's most iconic City, time in Sydney, even if it's just a day tour, is an absolute must for anyone visiting the land down under.",
        cf_1571:
            "Being Australia&#039;s most iconic City, time in Sydney, even if it&#039;s just a day tour, is an absolute must for anyone visiting the land down under.",
        quotestage: "Create Project",
        brief_description:
            "Highlights : Return Airport Transfers in a Private 13 Seater Charter in Sydney | 3 Nights Accomodation in Sydney City | Sydney City Tour | Sydney 2 + 1 Attraction Pass | Blue Mountain",
        cf_1573:
            "Highlights : Return Airport Transfers in a Private 13 Seater Charter in Sydney | 3 Nights Accomodation in Sydney City | Sydney City Tour | Sydney 2 + 1 Attraction Pass | Blue Mountain",
        cf_1319: "",
        quote_category: "Group | Upto Max 12 Pax",
        imageurl:
            "https://crm.turtledownunder.com.au/customerportal/portalimages/Opera_House.jpg",
        cf_1575:
            "https://crm.turtledownunder.com.au/customerportal/portalimages/Opera_House.jpg",
        name_of_travelers: "",
        prinical_name: "",
        cf_1202: "",
        flight_details: "",
        cf_1204: "",
        tour_type: "",
        quote_type: "",
        quote_no: "TDU4172",
        cf_1162: "22-02-2021",
        total: "$5357",
        createdtime: "22-02-2020 6:47 PM",
        record: "492897"
    },
    {
        crmid: "492901",
        subject: "Gold coast Private Group | 3 Nights | Upto 13 Seater |",
        short_description:
            "The Gold Coast is a vibrant coastal region, located less than an hour's drive south of Brisbane. It's renowned for its year round sunshine, golden beaches and theme parks.",
        cf_1571:
            "The Gold Coast is a vibrant coastal region, located less than an hour&#039;s drive south of Brisbane. It&#039;s renowned for its year round sunshine, golden beaches and theme parks.",
        quotestage: "Create Project",
        brief_description:
            "Highlights : Return Airport Transfers in a Private 13 Seater Charter in Gold Coast | 3 Nights Accomodation in Gold Coast City | Movie World | Sea World",
        cf_1573:
            "Highlights : Return Airport Transfers in a Private 13 Seater Charter in Gold Coast | 3 Nights Accomodation in Gold Coast City | Movie World | Sea World",
        cf_1319: "",
        quote_category: "Group | Upto Max 12 Pax",
        imageurl:
            "https://crm.turtledownunder.com.au/customerportal/portalimages/Hot%20Air%20Balloon.jpg",
        cf_1575:
            "https://crm.turtledownunder.com.au/customerportal/portalimages/Hot%20Air%20Balloon.jpg",
        name_of_travelers: "",
        prinical_name: "",
        cf_1202: "",
        flight_details: "",
        cf_1204: "",
        tour_type: "",
        quote_type: "",
        quote_no: "TDU4173",
        cf_1162: "22-02-2021",
        total: "$3619",
        createdtime: "22-02-2020 6:57 PM",
        record: "492901"
    },
    {
        crmid: "492905",
        subject: "Cairns Private Group | 3 Nights | Upto 13 Seater |",
        short_description:
            "Experience the incredible Queensland day tours in tropical North Queensland. With Cairns located 1,700 kilometres north of Brisbane and a plethora of things to do along the stunning coastal strip .",
        cf_1571:
            "Experience the incredible Queensland day tours in tropical North Queensland. With Cairns located 1,700 kilometres north of Brisbane and a plethora of things to do along the stunning coastal strip .",
        quotestage: "Create Project",
        brief_description:
            "Highlights : Return Airport Transfers in a Private 13 Seater Charter in Cairns | 3 Nights Accomodation in Cairns City | Kuranda Skyrail |Scenic Train| Green Island Great Barrier Reef Tour",
        cf_1573:
            "Highlights : Return Airport Transfers in a Private 13 Seater Charter in Cairns | 3 Nights Accomodation in Cairns City | Kuranda Skyrail |Scenic Train| Green Island Great Barrier Reef Tour",
        cf_1319: "",
        quote_category: "Group | Upto Max 12 Pax",
        imageurl:
            "https://crm.turtledownunder.com.au/customerportal/portalimages/Skyrail__Kuranda_Railway.jpg",
        cf_1575:
            "https://crm.turtledownunder.com.au/customerportal/portalimages/Skyrail__Kuranda_Railway.jpg",
        name_of_travelers: "",
        prinical_name: "",
        cf_1202: "",
        flight_details: "",
        cf_1204: "",
        tour_type: "",
        quote_type: "",
        quote_no: "TDU4174",
        cf_1162: "22-02-2021",
        total: "$4588",
        createdtime: "22-02-2020 7:02 PM",
        record: "492905"
    },
    {
        crmid: "494120",
        subject: "Melbourne Private Group | 3 Nights | Upto 13 Seater |",
        short_description:
            "Many would argue that Melbourne is Australias culture capital and maybe they re right. The city is literally covered in restaurants, museums, fashion spots and sightseeing activities.",
        cf_1571:
            "Many would argue that Melbourne is Australias culture capital and maybe they re right. The city is literally covered in restaurants, museums, fashion spots and sightseeing activities.",
        quotestage: "Create Project",
        brief_description:
            "Highlights : Return Airport Transfers in a Private 13 Seater Charter in Melbourne | 3 Nights Accomodation in Melbourne City | MCG Tour | City Tour | Great Ocean Road | Penguin Parade | Eureka Skydeck",
        cf_1573:
            "Highlights : Return Airport Transfers in a Private 13 Seater Charter in Melbourne | 3 Nights Accomodation in Melbourne City | MCG Tour | City Tour | Great Ocean Road | Penguin Parade | Eureka Skydeck",
        cf_1319: "",
        quote_category: "Group | Upto Max 12 Pax",
        imageurl:
            "https://crm.turtledownunder.com.au/customerportal/portalimages/melbournecitywithrivercruise.jpg",
        cf_1575:
            "https://crm.turtledownunder.com.au/customerportal/portalimages/melbournecitywithrivercruise.jpg",
        name_of_travelers: "",
        prinical_name: "",
        cf_1202: "",
        flight_details: "",
        cf_1204: "",
        tour_type: "",
        quote_type: "",
        quote_no: "TDU4192",
        cf_1162: "22-02-2021",
        total: "$4531",
        createdtime: "24-02-2020 11:52 PM",
        record: "494120"
    },
    {
        crmid: "494131",
        subject: "Melbourne Private Group | 3 Nights | Upto 28 Seater |",
        short_description:
            "Many would argue that Melbourne is Australias culture capital and maybe they re right. The city is literally covered in restaurants, museums, fashion spots and sightseeing activities.",
        cf_1571:
            "Many would argue that Melbourne is Australias culture capital and maybe they re right. The city is literally covered in restaurants, museums, fashion spots and sightseeing activities.",
        quotestage: "Create Project",
        brief_description:
            "Highlights : Return Airport Transfers in a Private 13 Seater Charter in Melbourne | 3 Nights Accomodation in Melbourne City | MCG Tour | City Tour | Great Ocean Road | Penguin Parade | Eureka Skydeck",
        cf_1573:
            "Highlights : Return Airport Transfers in a Private 13 Seater Charter in Melbourne | 3 Nights Accomodation in Melbourne City | MCG Tour | City Tour | Great Ocean Road | Penguin Parade | Eureka Skydeck",
        cf_1319: "",
        quote_category: "Group | Upto Max 26 Pax",
        imageurl:
            "https://crm.turtledownunder.com.au/customerportal/portalimages/melbournestar.jpg",
        cf_1575:
            "https://crm.turtledownunder.com.au/customerportal/portalimages/melbournestar.jpg",
        name_of_travelers: "",
        prinical_name: "",
        cf_1202: "",
        flight_details: "",
        cf_1204: "",
        tour_type: "",
        quote_type: "",
        quote_no: "TDU4193",
        cf_1162: "22-02-2021",
        total: "$5944",
        createdtime: "25-02-2020 12:02 AM",
        record: "494131"
    },
    {
        crmid: "494133",
        subject: "Melbourne Private Group | 3 Nights | Upto 53 Seater |",
        short_description:
            "Many would argue that Melbourne is Australias culture capital and maybe they re right. The city is literally covered in restaurants, museums, fashion spots and sightseeing activities.",
        cf_1571:
            "Many would argue that Melbourne is Australias culture capital and maybe they re right. The city is literally covered in restaurants, museums, fashion spots and sightseeing activities.",
        quotestage: "Create Project",
        brief_description:
            "Highlights : Return Airport Transfers in a Private 13 Seater Charter in Melbourne | 3 Nights Accomodation in Melbourne City | MCG Tour | City Tour | Great Ocean Road | Penguin Parade | Eureka Skydeck",
        cf_1573:
            "Highlights : Return Airport Transfers in a Private 13 Seater Charter in Melbourne | 3 Nights Accomodation in Melbourne City | MCG Tour | City Tour | Great Ocean Road | Penguin Parade | Eureka Skydeck",
        cf_1319: "",
        quote_category: "Group | Upto Max 50 Pax",
        imageurl:
            "https://crm.turtledownunder.com.au/customerportal/portalimages/Sovereign_Hill_Tours.jpg",
        cf_1575:
            "https://crm.turtledownunder.com.au/customerportal/portalimages/Sovereign_Hill_Tours.jpg",
        name_of_travelers: "",
        prinical_name: "",
        cf_1202: "",
        flight_details: "",
        cf_1204: "",
        tour_type: "",
        quote_type: "",
        quote_no: "TDU4194",
        cf_1162: "22-02-2021",
        total: "$6428",
        createdtime: "25-02-2020 12:06 AM",
        record: "494133"
    },
    {
        crmid: "496284",
        subject: "Sydney Private Group | 3 Nights | Upto 24 Seater",
        short_description:
            "Being Australia's most iconic City, time in Sydney, even if it's just a day tour, is an absolute must for anyone visiting the land down under.",
        cf_1571:
            "Being Australia&#039;s most iconic City, time in Sydney, even if it&#039;s just a day tour, is an absolute must for anyone visiting the land down under.",
        quotestage: "Create Project",
        brief_description:
            "Highlights : Return Airport Transfers in a Private 13 Seater Charter in Sydney | 3 Nights Accomodation in Sydney City | Sydney City Tour | Sydney 2 + 1 Attraction Pass | Blue Mountain",
        cf_1573:
            "Highlights : Return Airport Transfers in a Private 13 Seater Charter in Sydney | 3 Nights Accomodation in Sydney City | Sydney City Tour | Sydney 2 + 1 Attraction Pass | Blue Mountain",
        cf_1319: "",
        quote_category: "Group | Upto Max 20 Pax",
        imageurl:
            "https://crm.turtledownunder.com.au/customerportal/portalimages/Sea_life.jpg",
        cf_1575:
            "https://crm.turtledownunder.com.au/customerportal/portalimages/Sea_life.jpg",
        name_of_travelers: "",
        prinical_name: "",
        cf_1202: "",
        flight_details: "",
        cf_1204: "",
        tour_type: "",
        quote_type: "",
        quote_no: "TDU4220",
        cf_1162: "22-02-2021",
        total: "$5621",
        createdtime: "27-02-2020 5:01 PM",
        record: "496284"
    },
    {
        crmid: "496287",
        subject: "Sydney Private Group | 3 Nights | Upto 33 Seater |",
        short_description:
            "Being Australia's most iconic City, time in Sydney, even if it's just a day tour, is an absolute must for anyone visiting the land down under.",
        cf_1571:
            "Being Australia&#039;s most iconic City, time in Sydney, even if it&#039;s just a day tour, is an absolute must for anyone visiting the land down under.",
        quotestage: "Create Project",
        brief_description:
            "Highlights : Return Airport Transfers in a Private 13 Seater Charter in Sydney | 3 Nights Accomodation in Sydney City | Sydney City Tour | Sydney 2 + 1 Attraction Pass | Blue Mountain",
        cf_1573:
            "Highlights : Return Airport Transfers in a Private 13 Seater Charter in Sydney | 3 Nights Accomodation in Sydney City | Sydney City Tour | Sydney 2 + 1 Attraction Pass | Blue Mountain",
        cf_1319: "",
        quote_category: "Group | Upto Max 26 Pax",
        imageurl:
            "https://crm.turtledownunder.com.au/customerportal/portalimages/Captain_Cook_Hop_on_Hop_Off.jpg",
        cf_1575:
            "https://crm.turtledownunder.com.au/customerportal/portalimages/Captain_Cook_Hop_on_Hop_Off.jpg",
        name_of_travelers: "",
        prinical_name: "",
        cf_1202: "",
        flight_details: "",
        cf_1204: "",
        tour_type: "",
        quote_type: "",
        quote_no: "TDU4221",
        cf_1162: "22-02-2021",
        total: "$6166",
        createdtime: "27-02-2020 5:10 PM",
        record: "496287"
    },
    {
        crmid: "496315",
        subject: "Sydney Private Group | 3 Nights  | Upto 41  Seater |",
        short_description:
            "Being Australia's most iconic City, time in Sydney, even if it's just a day tour, is an absolute must for anyone visiting the land down under.",
        cf_1571:
            "Being Australia&#039;s most iconic City, time in Sydney, even if it&#039;s just a day tour, is an absolute must for anyone visiting the land down under.",
        quotestage: "Create Project",
        brief_description:
            "Highlights : Return Airport Transfers in a Private 13 Seater Charter in Sydney | 3 Nights Accomodation in Sydney City | Sydney City Tour | Sydney 2 + 1 Attraction Pass | Blue Mountain",
        cf_1573:
            "Highlights : Return Airport Transfers in a Private 13 Seater Charter in Sydney | 3 Nights Accomodation in Sydney City | Sydney City Tour | Sydney 2 + 1 Attraction Pass | Blue Mountain",
        cf_1319: "",
        quote_category: "Group | Upto Max 36 Pax",
        imageurl:
            "https://crm.turtledownunder.com.au/customerportal/portalimages/284R.jpg",
        cf_1575:
            "https://crm.turtledownunder.com.au/customerportal/portalimages/284R.jpg",
        name_of_travelers: "",
        prinical_name: "",
        cf_1202: "",
        flight_details: "",
        cf_1204: "",
        tour_type: "",
        quote_type: "",
        quote_no: "TDU4223",
        cf_1162: "22-02-2021",
        total: "$6463",
        createdtime: "27-02-2020 5:22 PM",
        record: "496315"
    },
    {
        crmid: "496321",
        subject: "Sydney Private Group | 3 Nights  | Upto 53 Seater |",
        short_description:
            "Being Australia's most iconic City, time in Sydney, even if it's just a day tour, is an absolute must for anyone visiting the land down under.",
        cf_1571:
            "Being Australia&#039;s most iconic City, time in Sydney, even if it&#039;s just a day tour, is an absolute must for anyone visiting the land down under.",
        quotestage: "Create Project",
        brief_description:
            "Highlights : Return Airport Transfers in a Private 13 Seater Charter in Sydney | 3 Nights Accomodation in Sydney City | Sydney City Tour | Sydney 2 + 1 Attraction Pass | Blue Mountain",
        cf_1573:
            "Highlights : Return Airport Transfers in a Private 13 Seater Charter in Sydney | 3 Nights Accomodation in Sydney City | Sydney City Tour | Sydney 2 + 1 Attraction Pass | Blue Mountain",
        cf_1319: "",
        quote_category: "Group | Upto Max 50 Pax",
        imageurl:
            "https://crm.turtledownunder.com.au/customerportal/portalimages/Captain_Cook_Whale.jpg",
        cf_1575:
            "https://crm.turtledownunder.com.au/customerportal/portalimages/Captain_Cook_Whale.jpg",
        name_of_travelers: "",
        prinical_name: "",
        cf_1202: "",
        flight_details: "",
        cf_1204: "",
        tour_type: "",
        quote_type: "",
        quote_no: "TDU4225",
        cf_1162: "22-02-2021",
        total: "$6969",
        createdtime: "27-02-2020 5:37 PM",
        record: "496321"
    },
    {
        crmid: "496372",
        subject: "Gold coast Private Group | 3 Nights | Upto 24 Seater |",
        short_description:
            "The Gold Coast is a vibrant coastal region, located less than an hour's drive south of Brisbane. It's renowned for its year round sunshine, golden beaches and theme parks.",
        cf_1571:
            "The Gold Coast is a vibrant coastal region, located less than an hour&#039;s drive south of Brisbane. It&#039;s renowned for its year round sunshine, golden beaches and theme parks.",
        quotestage: "Create Project",
        brief_description:
            "Highlights : Return Airport Transfers in a Private 13 Seater Charter in Gold Coast | 3 Nights Accomodation in Gold Coast City | Movie World | Sea World",
        cf_1573:
            "Highlights : Return Airport Transfers in a Private 13 Seater Charter in Gold Coast | 3 Nights Accomodation in Gold Coast City | Movie World | Sea World",
        cf_1319: "",
        quote_category: "Group | Upto Max 20 Pax",
        imageurl:
            "https://crm.turtledownunder.com.au/customerportal/portalimages/GC-Movie-World.jpg",
        cf_1575:
            "https://crm.turtledownunder.com.au/customerportal/portalimages/GC-Movie-World.jpg",
        name_of_travelers: "",
        prinical_name: "",
        cf_1202: "",
        flight_details: "",
        cf_1204: "",
        tour_type: "",
        quote_type: "",
        quote_no: "TDU4227",
        cf_1162: "22-02-2021",
        total: "$4004",
        createdtime: "27-02-2020 6:11 PM",
        record: "496372"
    },
    {
        crmid: "496376",
        subject: "Gold coast Private Group | 3 Nights | Upto 28 Seater |",
        short_description:
            "The Gold Coast is a vibrant coastal region, located less than an hour's drive south of Brisbane. It's renowned for its year round sunshine, golden beaches and theme parks.",
        cf_1571:
            "The Gold Coast is a vibrant coastal region, located less than an hour&#039;s drive south of Brisbane. It&#039;s renowned for its year round sunshine, golden beaches and theme parks.",
        quotestage: "Create Project",
        brief_description:
            "Highlights : Return Airport Transfers in a Private 13 Seater Charter in Gold Coast | 3 Nights Accomodation in Gold Coast City | Movie World | Sea World",
        cf_1573:
            "Highlights : Return Airport Transfers in a Private 13 Seater Charter in Gold Coast | 3 Nights Accomodation in Gold Coast City | Movie World | Sea World",
        cf_1319: "",
        quote_category: "Group | Upto Max 26 Pax",
        imageurl:
            "https://crm.turtledownunder.com.au/customerportal/portalimages/parasailing solo.jpg",
        cf_1575:
            "https://crm.turtledownunder.com.au/customerportal/portalimages/parasailing solo.jpg",
        name_of_travelers: "",
        prinical_name: "",
        cf_1202: "",
        flight_details: "",
        cf_1204: "",
        tour_type: "",
        quote_type: "",
        quote_no: "TDU4228",
        cf_1162: "22-02-2021",
        total: "$4191",
        createdtime: "27-02-2020 6:15 PM",
        record: "496376"
    },
    {
        crmid: "496378",
        subject: "Gold coast Private Group | 3 Nights | Upto 39 Seater |",
        short_description:
            "The Gold Coast is a vibrant coastal region, located less than an hour's drive south of Brisbane. It's renowned for its year round sunshine, golden beaches and theme parks.",
        cf_1571:
            "The Gold Coast is a vibrant coastal region, located less than an hour&#039;s drive south of Brisbane. It&#039;s renowned for its year round sunshine, golden beaches and theme parks.",
        quotestage: "Create Project",
        brief_description:
            "Highlights : Return Airport Transfers in a Private 13 Seater Charter in Gold Coast | 3 Nights Accomodation in Gold Coast City | Movie World | Sea World",
        cf_1573:
            "Highlights : Return Airport Transfers in a Private 13 Seater Charter in Gold Coast | 3 Nights Accomodation in Gold Coast City | Movie World | Sea World",
        cf_1319: "",
        quote_category: "Group | Upto Max 36 Pax",
        imageurl:
            "https://crm.turtledownunder.com.au/customerportal/portalimages/ifly_group.jpg",
        cf_1575:
            "https://crm.turtledownunder.com.au/customerportal/portalimages/ifly_group.jpg",
        name_of_travelers: "",
        prinical_name: "",
        cf_1202: "",
        flight_details: "",
        cf_1204: "",
        tour_type: "",
        quote_type: "",
        quote_no: "TDU4229",
        cf_1162: "22-02-2021",
        total: "$4505",
        createdtime: "27-02-2020 6:18 PM",
        record: "496378"
    },
    {
        crmid: "496385",
        subject: "Gold coast Private Group | 3 Nights | Upto 51 Seater |",
        short_description:
            "The Gold Coast is a vibrant coastal region, located less than an hour's drive south of Brisbane. It's renowned for its year round sunshine, golden beaches and theme parks.",
        cf_1571:
            "The Gold Coast is a vibrant coastal region, located less than an hour&#039;s drive south of Brisbane. It&#039;s renowned for its year round sunshine, golden beaches and theme parks.",
        quotestage: "Create Project",
        brief_description:
            "Highlights : Return Airport Transfers in a Private 13 Seater Charter in Gold Coast | 3 Nights Accomodation in Gold Coast City | Movie World | Sea World",
        cf_1573:
            "Highlights : Return Airport Transfers in a Private 13 Seater Charter in Gold Coast | 3 Nights Accomodation in Gold Coast City | Movie World | Sea World",
        cf_1319: "",
        quote_category: "Group | Upto Max 50 Pax",
        imageurl:
            "https://crm.turtledownunder.com.au/customerportal/portalimages/Hilton_Surfers_Paradise.jpg",
        cf_1575:
            "https://crm.turtledownunder.com.au/customerportal/portalimages/Hilton_Surfers_Paradise.jpg",
        name_of_travelers: "",
        prinical_name: "",
        cf_1202: "",
        flight_details: "",
        cf_1204: "",
        tour_type: "",
        quote_type: "",
        quote_no: "TDU4230",
        cf_1162: "22-02-2021",
        total: "$4758",
        createdtime: "27-02-2020 6:27 PM",
        record: "496385"
    },
    {
        crmid: "496530",
        subject: "Cairns Private Group | 3 Nights | Upto 21 Seater |",
        short_description:
            "Experience the incredible Queensland day tours in tropical North Queensland. With Cairns located 1,700 kilometres north of Brisbane and a plethora of things to do along the stunning coastal strip .",
        cf_1571:
            "Experience the incredible Queensland day tours in tropical North Queensland. With Cairns located 1,700 kilometres north of Brisbane and a plethora of things to do along the stunning coastal strip .",
        quotestage: "Create Project",
        brief_description:
            "Highlights : Return Airport Transfers in a Private 13 Seater Charter in Cairns | 3 Nights Accomodation in Cairns City | Kuranda Skyrail |Scenic Train| Green Island Great Barrier Reef Tour",
        cf_1573:
            "Highlights : Return Airport Transfers in a Private 13 Seater Charter in Cairns | 3 Nights Accomodation in Cairns City | Kuranda Skyrail |Scenic Train| Green Island Great Barrier Reef Tour",
        cf_1319: "",
        quote_category: "Group | Upto Max 20 Pax",
        imageurl:
            "https://crm.turtledownunder.com.au/customerportal/portalimages/Ocean_Walker_Helmet_Diving.jpg",
        cf_1575:
            "https://crm.turtledownunder.com.au/customerportal/portalimages/Ocean_Walker_Helmet_Diving.jpg",
        name_of_travelers: "",
        prinical_name: "",
        cf_1202: "",
        flight_details: "",
        cf_1204: "",
        tour_type: "",
        quote_type: "",
        quote_no: "TDU4233",
        cf_1162: "22-02-2021",
        total: "$4730",
        createdtime: "27-02-2020 6:41 PM",
        record: "496530"
    },
    {
        crmid: "496674",
        subject: "Cairns Private Group | 3 Nights | Upto 48/53/57 Seater |",
        short_description:
            "Experience the incredible Queensland day tours in tropical North Queensland. With Cairns located 1,700 kilometres north of Brisbane and a plethora of things to do along the stunning coastal strip .",
        cf_1571:
            "Experience the incredible Queensland day tours in tropical North Queensland. With Cairns located 1,700 kilometres north of Brisbane and a plethora of things to do along the stunning coastal strip .",
        quotestage: "Create Project",
        brief_description:
            "Highlights : Return Airport Transfers in a Private 13 Seater Charter in Cairns | 3 Nights Accomodation in Cairns City | Kuranda Skyrail |Scenic Train| Green Island Great Barrier Reef Tour",
        cf_1573:
            "Highlights : Return Airport Transfers in a Private 13 Seater Charter in Cairns | 3 Nights Accomodation in Cairns City | Kuranda Skyrail |Scenic Train| Green Island Great Barrier Reef Tour",
        cf_1319: "",
        quote_category: "Group | Upto Max 50 Pax",
        imageurl:
            "https://crm.turtledownunder.com.au/customerportal/portalimages/Diamond_View.jpg",
        cf_1575:
            "https://crm.turtledownunder.com.au/customerportal/portalimages/Diamond_View.jpg",
        name_of_travelers: "",
        prinical_name: "",
        cf_1202: "",
        flight_details: "",
        cf_1204: "",
        tour_type: "",
        quote_type: "",
        quote_no: "TDU4236",
        cf_1162: "22-02-2021",
        total: "$5394",
        createdtime: "27-02-2020 9:04 PM",
        record: "496674"
    },
    {
        crmid: "496737",
        subject: "Cairns Private Group | 3 Nights | Upto 38 Seater |",
        short_description:
            "Experience the incredible Queensland day tours in tropical North Queensland. With Cairns located 1,700 kilometres north of Brisbane and a plethora of things to do along the stunning coastal strip .",
        cf_1571:
            "Experience the incredible Queensland day tours in tropical North Queensland. With Cairns located 1,700 kilometres north of Brisbane and a plethora of things to do along the stunning coastal strip .",
        quotestage: "Create Project",
        brief_description:
            "Highlights : Return Airport Transfers in a Private 38 Seater Charter in Cairns | 3 Nights Accomodation in Cairns City | Kuranda Skyrail |Scenic Train| Green Island Great Barrier Reef Tour",
        cf_1573:
            "Highlights : Return Airport Transfers in a Private 38 Seater Charter in Cairns | 3 Nights Accomodation in Cairns City | Kuranda Skyrail |Scenic Train| Green Island Great Barrier Reef Tour",
        cf_1319: "",
        quote_category: "Group | Upto Max 36 Pax",
        imageurl:
            "https://crm.turtledownunder.com.au/customerportal/portalimages/Skydive.jpg",
        cf_1575:
            "https://crm.turtledownunder.com.au/customerportal/portalimages/Skydive.jpg",
        name_of_travelers: "",
        prinical_name: "",
        cf_1202: "",
        flight_details: "",
        cf_1204: "",
        tour_type: "",
        quote_type: "",
        quote_no: "TDU4240",
        cf_1162: "22-02-2021",
        total: "$5112",
        createdtime: "27-02-2020 11:24 PM",
        record: "496737"
    },
    {
        crmid: "499255",
        subject: "Cairns Private Group | 3 Nights | Upto 38 Seater |",
        short_description:
            "Experience the incredible Queensland day tours in tropical North Queensland. With Cairns located 1,700 kilometres north of Brisbane and a plethora of things to do along the stunning coastal strip .",
        cf_1571:
            "Experience the incredible Queensland day tours in tropical North Queensland. With Cairns located 1,700 kilometres north of Brisbane and a plethora of things to do along the stunning coastal strip .",
        quotestage: "Create Project",
        brief_description:
            "Highlights : Return Airport Transfers in a Private 38 Seater Charter in Cairns | 3 Nights Accomodation in Cairns City | Kuranda Skyrail |Scenic Train| Green Island Great Barrier Reef Tour",
        cf_1573:
            "Highlights : Return Airport Transfers in a Private 38 Seater Charter in Cairns | 3 Nights Accomodation in Cairns City | Kuranda Skyrail |Scenic Train| Green Island Great Barrier Reef Tour",
        cf_1319: "",
        quote_category: "Group | Upto Max 26 Pax",
        imageurl:
            "https://crm.turtledownunder.com.au/customerportal/portalimages/Skydive.jpg",
        cf_1575:
            "https://crm.turtledownunder.com.au/customerportal/portalimages/Skydive.jpg",
        name_of_travelers: "",
        prinical_name: "",
        cf_1202: "",
        flight_details: "",
        cf_1204: "",
        tour_type: "",
        quote_type: "",
        quote_no: "TDU4277",
        cf_1162: "22-02-2021",
        total: "$5112",
        createdtime: "03-03-2020 10:19 PM",
        record: "499255"
    },
    {
        crmid: "499258",
        subject: "Melbourne Private Group | 3 Nights | Upto 53 Seater |",
        short_description:
            "Many would argue that Melbourne is Australias culture capital and maybe they re right. The city is literally covered in restaurants, museums, fashion spots and sightseeing activities.",
        cf_1571:
            "Many would argue that Melbourne is Australias culture capital and maybe they re right. The city is literally covered in restaurants, museums, fashion spots and sightseeing activities.",
        quotestage: "Create Project",
        brief_description:
            "Highlights : Return Airport Transfers in a Private 13 Seater Charter in Melbourne | 3 Nights Accomodation in Melbourne City | MCG Tour | City Tour | Great Ocean Road | Penguin Parade | Eureka Skydeck",
        cf_1573:
            "Highlights : Return Airport Transfers in a Private 13 Seater Charter in Melbourne | 3 Nights Accomodation in Melbourne City | MCG Tour | City Tour | Great Ocean Road | Penguin Parade | Eureka Skydeck",
        cf_1319: "",
        quote_category: "Group | Upto Max 36 Pax",
        imageurl:
            "https://crm.turtledownunder.com.au/customerportal/portalimages/Sovereign_Hill_Tours.jpg",
        cf_1575:
            "https://crm.turtledownunder.com.au/customerportal/portalimages/Sovereign_Hill_Tours.jpg",
        name_of_travelers: "",
        prinical_name: "",
        cf_1202: "",
        flight_details: "",
        cf_1204: "",
        tour_type: "",
        quote_type: "",
        quote_no: "TDU4278",
        cf_1162: "22-02-2021",
        total: "$6428",
        createdtime: "03-03-2020 10:25 PM",
        record: "499258"
    }
];
class AccordionSelectItinerary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: []
        }
    }
    
    onFilterChange = (selected) => {
        this.setState({filter:selected});
    }
    render() {
        let { show } = this.props;
        let { filter } = this.state;
        return (
            <Card>
                <Card.Header>Whats your Travel Plan Like ?</Card.Header>
                <div className={"collapse" + (show?" show":null)}>
                    <Card.Body>
                        <DropdownFilter items={categories} placeholder={"Select Category"} onFilterChange={this.onFilterChange}/>
                        <Packages filter={filter} packages={items} />
                    </Card.Body>
                </div>
            </Card>
        );
    }
}
export default AccordionSelectItinerary;