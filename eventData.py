#!/usr/bin/env python 
import requests

my_events_json = [  
   {  
      "ownerId":"c80838368429d86d",
      "start":1507683600000,
      "end":1507698000000,
      "title":"ECS Hack-a-Thon",
      "description":"Get together with a bunch of Comp-Sci nerds and pretend like you are a hacker!",
      "streetAddress":"800 N State College Blvd",
      "city":"Fullerton",
      "statePrefix":"CA",
      "zip":92831,
      "url":"/events/2d52c40823048819",
      "eventImage":"upload/defaultEventImage.png"
   },
   {  
      "ownerId":"c80838368429d86d",
      "start":1507683700000,
      "end":1507699100000,
      "title":"Downtown Fullerton Pub-Crawl",
      "description":"10 bars, 10 pints. The Fullerton \"Golden Mile\".  Kick-off at Bourbon Street.",
      "streetAddress":"110 E Commonwealth Ave",
      "city":"Fullerton",
      "statePrefix":"CA",
      "zip":92832,
      "url":"/events/83080067addd5b1b",
      "eventImage":"img/otter1.jpg"
   },
   {  
      "ownerId":"c80838368429d86d",
      "start":1507204800000,
      "end":1507210200000,
      "title":"Testing the event creation screen.",
      "description":"here we go!",
      "streetAddress":"ping me for details",
      "city":"Fullerton",
      "statePrefix":"CA",
      "zip":92831,
      "url":"/events/a5d4524a96fc38d8",
      "eventImage":"img/otter2.jpg"
   },
   {  
      "ownerId":"c80838368429d86d",
      "start":1508103900000,
      "end":1508107500000,
      "title":"here we come",
      "description":"to save the day",
      "streetAddress":"my place",
      "city":"Fullerton",
      "statePrefix":"CA",
      "zip":92831,
      "url":"/events/01656abec90d6972",
      "eventImage":"upload/defaultEventImage.png"
   },
   {  
      "ownerId":"5c6062143035f86b",
      "start":1508103900000,
      "end":1508107500000,
      "title":"test event from michael",
      "description":"here we go",
      "streetAddress":"laksjdfalksdjf",
      "city":"fullerton",
      "statePrefix":"ca",
      "zip":90703,
      "url":"/events/57ba14ead0cf58da",
      "eventImage":"img/otter3.jpg"
   },
   {  
      "ownerId":"5c6062143035f86b",
      "start":1508103900000,
      "end":1508107500000,
      "title":"another test",
      "description":"alksdjf",
      "streetAddress":"alskdjf",
      "city":"norwalk",
      "statePrefix":"lkajsdf",
      "zip":9230,
      "url":"/events/d68cd9f164a178e7",
      "eventImage":"upload/defaultEventImage.png"
   }
]


for my_event in my_events_json:
  headers = {'Content-Type': "application/json; charset=xxxe", 'Accept': "application/json"}
  response = requests.post('http://localhost:2403/events', json=my_event, headers=headers)
  print response.status_code
