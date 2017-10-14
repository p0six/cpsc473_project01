#!/usr/bin/env python
import requests, datetime
from datetime import date

def unix_time_millis(dt):
    return int(dt.strftime("%s")) * 1000

my_events_json = [
   {
      "start": unix_time_millis(datetime.datetime(2017, 10, 14, 19, 0, 0, 0)),
      "end": unix_time_millis(datetime.datetime(2017, 10, 14, 23, 0, 0, 0)),
      "title":"Dead Ringer Live at TAPS",
      "description":"Dead Ringer is a rockin Orange County cover band that nails the best pop & rock dance hits from the 80s all the way to today. Head over to TAPS for an evening of good food, libations and Rock-Pop-Drop-and-Roll!",
      "streetAddress":"13390 Jamboree Rd.",
      "city": "Irvine",
      "zip": "92602",
      "eventImage":"upload/dead_ringer.jpg"
   },
   {
      "start": unix_time_millis(datetime.datetime(2017, 10, 16, 20, 0, 0, 0)),
      "end": unix_time_millis(datetime.datetime(2017, 10, 16, 23, 0, 0, 0)),
      "title":"Carla Morrison",
      "description":"Mexican indie pop singer Carla Morrison is certified gold... in Mexico, that is. Her critically acclaimed Dejenme Llorar won numerous Latin Grammys for its soulful musical vision, that Morrison is seen as a strong force among other singer-songwriting contemporaries like Julieta Venegas and Natalia Lafourcade. But while she's still gaining wider prominence in the States, the Tecate-born singer has kept busy in numerous side projects including the launch of her Pan Dulce Productions, to support other young talents on the rise. This isn't Morrison's first performance in Orange County, but any time is a good time to experience her music live.",
      "streetAddress":"3503 S. Harbor Blvd.",
      "city": "Santa Ana",
      "zip": "92704",
      "eventImage":"upload/carlamorrison.jpg"
   },
   {
      "start": unix_time_millis(datetime.datetime(2017, 10, 27, 20, 0, 0, 0)),
      "end": unix_time_millis(datetime.datetime(2017, 10, 27, 23, 0, 0, 0)),
      "title":"Tiger Army",
      "description":"Tiger Army with Channel 3 & the Delta Bombers. Live at The Observatory, in Santa Ana.",
      "streetAddress":"3503 S. Harbor Blvd.",
      "city": "Santa Ana",
      "zip": "92704",
      "eventImage":"upload/tigerarmy.jpg"
   },
   {
      "start": unix_time_millis(datetime.datetime(2017, 10, 24, 20, 0, 0, 0)),
      "end": unix_time_millis(datetime.datetime(2017, 10, 24, 23, 0, 0, 0)),
      "title":"Crystal Castles",
      "description":"Crystal Castles. Live at The Observatory, in Santa Ana.",
      "streetAddress":"3503 S. Harbor Blvd.",
      "city": "Santa Ana",
      "zip": "92704",
      "eventImage":"upload/crystalcastles.jpg"
   },
   {
      "start": unix_time_millis(datetime.datetime(2017, 12, 13, 20, 0, 0, 0)),
      "end": unix_time_millis(datetime.datetime(2017, 12, 13, 23, 0, 0, 0)),
      "title":"Rezz",
      "description":"Rezz. That crazy EDM chick with the goggles on who have you a crush on. Live at The Observatory, in Santa Ana. Maybe you two will meet and fall in love? It could happen.",
      "streetAddress":"3503 S. Harbor Blvd.",
      "city": "Santa Ana",
      "zip": "92704",
      "eventImage":"upload/rezz.jpg"
   },
   {
      "start": unix_time_millis(datetime.datetime(2017, 12, 8, 20, 0, 0, 0)),
      "end": unix_time_millis(datetime.datetime(2017, 12, 8, 23, 0, 0, 0)),
      "title":"The Adolescenets",
      "description":"The Adolescenets with Big Drill Car, Ch3 & Twilight Creeps. Let's be honest, you only care about The Adolescents. Live at The Observatory, in Santa Ana.",
      "streetAddress":"3503 S. Harbor Blvd.",
      "city": "Santa Ana",
      "zip": "92704",
      "eventImage":"upload/adolescents.jpg"
   },
   {
      "start": unix_time_millis(datetime.datetime(2017, 11, 17, 20, 0, 0, 0)),
      "end": unix_time_millis(datetime.datetime(2017, 11, 17, 23, 0, 0, 0)),
      "title":"Gary Numan with Me Not You",
      "description":"Gary Numan with Me Not You. Live at The Observatory, in Santa Ana.",
      "streetAddress":"3503 S. Harbor Blvd.",
      "city": "Santa Ana",
      "zip": "92704",
      "eventImage":"upload/garynuman.jpg"
   },
   {
      "start": unix_time_millis(datetime.datetime(2017, 11, 30, 20, 0, 0, 0)),
      "end": unix_time_millis(datetime.datetime(2017, 11, 30, 23, 0, 0, 0)),
      "title":"Say Anything",
      "description":"Say Anything. Live at The Observatory, in Santa Ana.",
      "streetAddress":"3503 S. Harbor Blvd.",
      "city": "Santa Ana",
      "zip": "92704",
      "eventImage":"upload/sayanything.jpg"
   },
   {
      "start": unix_time_millis(datetime.datetime(2017, 11, 03, 20, 0, 0, 0)),
      "end": unix_time_millis(datetime.datetime(2017, 11, 03, 23, 0, 0, 0)),
      "title":"Yelawolf",
      "description":"Yelawolf. Live at The Observatory, in Santa Ana.",
      "streetAddress":"3503 S. Harbor Blvd.",
      "city": "Santa Ana",
      "zip": "92704",
      "eventImage":"upload/yelawolf.jpg"
   },
   {
      "start": unix_time_millis(datetime.datetime(2017, 10, 29, 20, 0, 0, 0)),
      "end": unix_time_millis(datetime.datetime(2017, 10, 29, 23, 0, 0, 0)),
      "title":"Radiohead",
      "description":"Just Kidding.  Haha you thought Radiohead was playing.",
      "streetAddress":"3503 S. Harbor Blvd.",
      "city": "Santa Ana",
      "zip": "92704"
   },
   {
      "start": unix_time_millis(datetime.datetime(2017, 10, 29, 20, 0, 0, 0)),
      "end": unix_time_millis(datetime.datetime(2017, 10, 29, 23, 0, 0, 0)),
      "title":"Black Star",
      "description":"Black Star. Mos Def and Talib Kweli. Live at The Observatory, in Santa Ana.",
      "streetAddress":"3503 S. Harbor Blvd.",
      "city": "Santa Ana",
      "zip": "92704",
      "eventImage":"upload/blackstar.jpg"
   },
   {
      "start": unix_time_millis(datetime.datetime(2017, 10, 23, 20, 0, 0, 0)),
      "end": unix_time_millis(datetime.datetime(2017, 10, 23, 23, 0, 0, 0)),
      "title":"Real Estate",
      "description":"Real Estate. Live at The Observatory, in Santa Ana.",
      "streetAddress":"3503 S. Harbor Blvd.",
      "city": "Santa Ana",
      "zip": "92704",
      "eventImage":"upload/realestate.jpg"
   }
]

epoch = datetime.datetime.utcfromtimestamp(0)
for my_event in my_events_json:
  my_event["statePrefix"] = "CA"
  headers = {'Content-Type': "application/json; charset=xxxe", 'Accept': "application/json"}
  # We set common properties here...
  if my_event.get("eventImage") is None: 
    my_event["eventImage"] = "upload/defaultEventImage.png"
  #my_event["ownerId"] = "5c6062143035f86b"
  my_event["ownerId"] = "ddd02f063aea38a9"
  #response = requests.post('http://localhost:2403/events', json=my_event, headers=headers)
  response = requests.post('http://oc2la.azurewebsites.net/events', json=my_event, headers=headers)
  print response.status_code
