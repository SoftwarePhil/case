export class SurveyData{
	
	get(): Object{
		
return {
	"pages": [
	 {
	  "name": "Info",
	  "elements": [
	   {
		"type": "html",
		"name": "about",
		"html": "About this survey:\n<br>\nIn response to all of the school shootings and stabbings, also spending many years supporting youth and youth organization, we have come to the realization that it is not just the guns and the knives that are the problem.  The real challenge is the state of our youth! Homicide and suicide plague our youth!  Just as we are encouraging young people to use innovation to solve social problems, we have launched the CASE survey. CASE stands for Conﬂict Anger and, Self-Esteem.  This is a way for young people to self-identify if any of these are a challenge for them.  We are hoping through this app, to provide data to empower youth to make a change if this is an area of concern."
	   },
	   {
		"type": "dropdown",
		"name": "state",
		"title": "What state do you live in?",
		"isRequired": true,
		"choices": [
		 "AK",
		 "AL",
		 "AR",
		 "AZ",
		 "CA",
		 "CO",
		 "CT",
		 "DC",
		 "DE",
		 "FL",
		 "GA",
		 "GU",
		 "HI",
		 "IA",
		 "ID",
		 "IL",
		 "IN",
		 "KS",
		 "KY",
		 "LA",
		 "MA",
		 "MD",
		 "ME",
		 "MH",
		 "MI",
		 "MN",
		 "MO",
		 "MS",
		 "MT",
		 "NC",
		 "ND",
		 "NE",
		 "NH",
		 "NJ",
		 "NM",
		 "NV",
		 "NY",
		 "OH",
		 "OK",
		 "OR",
		 "PA",
		 "PR",
		 "PW",
		 "RI",
		 "SC",
		 "SD",
		 "TN",
		 "TX",
		 "UT",
		 "VA",
		 "VI",
		 "VT",
		 "WA",
		 "WI",
		 "WV",
		 "WY"
		]
	   },
	   {
		"type": "text",
		"name": "City",
		"title": "What city do you live in?",
		"isRequired": true
	   },
	   {
		"type": "text",
		"name": "City",
		"title": "What is the name of your school?",
		"isRequired": true
	   },
	   {
		"type": "dropdown",
		"name": "grade",
		"title": "What grade are you in?",
		"isRequired": true,
		"choices": [
		 {
		  "value": "8",
		  "text": "8th"
		 },
		 {
		  "value": "9",
		  "text": "9th"
		 },
		 {
		  "value": "10",
		  "text": "10th"
		 },
		 {
		  "value": "11",
		  "text": "11th"
		 },
		 {
		  "value": "12",
		  "text": "12th"
		 }
		]
	   }
	  ],
	  "title": "Hello, tell us a bit about yourself"
	 },
	 {
	  "name": "conflict1",
	  "elements": [
	   {
		"type": "matrix",
		"name": "conflict",
		"title": "These questions look at how well you deal with conflict",
		"isRequired": true,
		"columns": [
		 {
		  "value": "1",
		  "text": "Never"
		 },
		 {
		  "value": "2",
		  "text": "Almost never"
		 },
		 {
		  "value": "3",
		  "text": "Sometimes"
		 },
		 {
		  "value": "4",
		  "text": "Almost every time"
		 },
		 {
		  "value": "5",
		  "text": "Every time"
		 }
		],
		"rows": [
		 {
		  "value": "1",
		  "text": "Do you always have to have the last word in a disagreement?"
		 },
		 {
		  "value": "2",
		  "text": "It is hard to see another's point of view?"
		 },
		 {
		  "value": "3",
		  "text": "Do you always keep your opinion to yourself?"
		 },
		 {
		  "value": "4",
		  "text": "Have you been threatened for sharing your opinion?"
		 },
		 {
		  "value": "5",
		  "text": "Are you uncomfortable around conflict?"
		 }
		],
		"isAllRowRequired": true
	   }
	  ],
	  "title": "Conflict"
	 },
	 {
	  "name": "anger1",
	  "elements": [
	   {
		"type": "matrix",
		"name": "anger",
		"title": "These questions deal with anger",
		"isRequired": true,
		"columns": [
		 {
		  "value": "1",
		  "text": "Never"
		 },
		 {
		  "value": "2",
		  "text": "Almost never"
		 },
		 {
		  "value": "3",
		  "text": "Sometimes"
		 },
		 {
		  "value": "4",
		  "text": "Almost every time"
		 },
		 {
		  "value": "5",
		  "text": "Every time "
		 }
		],
		"rows": [
		 {
		  "value": "1",
		  "text": "When you get angry do you think of hurting yourself?"
		 },
		 {
		  "value": "2",
		  "text": "Do you keep your anger bottled up inside?"
		 },
		 {
		  "value": "3",
		  "text": "Do you have to scream or hit something to get your anger out?"
		 },
		 {
		  "value": "4",
		  "text": "How often do you get angry?"
		 },
		 {
		  "value": "5",
		  "text": "Does anyone around you take their anger out on you or the people you love?"
		 }
		],
		"isAllRowRequired": true
	   }
	  ],
	  "title": "Anger"
	 },
	 {
	  "name": "selfesteem3",
	  "elements": [
	   {
		"type": "matrix",
		"name": "selfesteem",
		"title": "These questions deal with your self-esteem",
		"isRequired": true,
		"columns": [
		 {
		  "value": "1",
		  "text": "Never"
		 },
		 {
		  "value": "2",
		  "text": "Almost never"
		 },
		 {
		  "value": "3",
		  "text": "Sometimes"
		 },
		 {
		  "value": "4",
		  "text": "Almost every time"
		 },
		 {
		  "value": "5",
		  "text": "Every time "
		 }
		],
		"rows": [
		 {
		  "value": "1",
		  "text": "Do you like what you see when you look in the mirror?"
		 },
		 {
		  "value": "2",
		  "text": "Do you remain friends with people that call you names or treat you badly?"
		 },
		 {
		  "value": "3",
		  "text": "Do you compare yourself to friends and people around you?"
		 },
		 {
		  "value": "4",
		  "text": "Do people you love the most talk negative to you or put you down?"
		 },
		 {
		  "value": "5",
		  "text": "Do you always focus on your weaknesses?"
		 }
		],
		"isAllRowRequired": true
	   }
	  ],
	  "title": "Self-Esteem"
	 }
	]
   }
}

testSurveyResults():object {
	return {
		"town": "Dallas",
		"grade": "5",
		"conflict": {
		  "1": "1",
		  "2": "1",
		  "3": "1",
		  "4": "1",
		  "5": "1"
		},
		"anger": {
		  "1": "1",
		  "2": "1",
		  "3": "1",
		  "4": "1",
		  "5": "1",

		},
		"selfesteem": {
		  "1": "3",
		  "2": "3",
		  "3": "3",
		  "4": "3",
		  "5": "3",
		}
	  }
}
}

/*
{
  "town": "Dallas",
  "grade": "4",
  "conflict": {
    "1": "1",
    "2": "1",
    "3": "1",
    "4": "1",
    "5": "1"
  },
  "anger": {
    "1": "1",
    "2": "2",
    "3": "4",
    "4": "5",
    "5": "5",
    "6": "5",
    "7": "5",
    "8": "5",
    "9": "5",
    "10": "5",
    "11": "5"
  },
  "selfesteem": {
    "1": "2",
    "2": "2",
    "3": "2",
    "4": "2",
    "5": "2",
    "6": "2",
    "7": "2",
    "8": "2",
    "9": "2",
    "10": "2"
  }
}
*/
