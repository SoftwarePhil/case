export class SurveyData{
	
	get(): Object{
		
return {
			"pages": [
			 {
			  "name": "Info",
			  "elements": [
			   {
				"type": "text",
				"name": "town",
				"title": "What town do you live in?",
				"isRequired": true,
			   },
			   {
				"type": "dropdown",
				"name": "grade",
				"title": "What grade are you in?",
				"isRequired": true,
				"choices": [
				 {
				  "value": "1",
				  "text": "1st"
				 },
				 {
				  "value": "2",
				  "text": "2nd"
				 },
				 {
				  "value": "3",
				  "text": "3rd"
				 },
				 {
				  "value": "4",
				  "text": "4th"
				 },
				 {
				  "value": "5",
				  "text": "5th"
				 },
				 {
				  "value": "6",
				  "text": "6th"
				 },
				 {
				  "value": "7",
				  "text": "7th"
				 },
				 {
				  "value": "8",
				  "text": "8th"
				 },
				 {
				  "value": "9",
				  "text": "Freshmen"
				 },
				 {
				  "value": "10",
				  "text": "Sophmore"
				 },
				 {
				  "value": "11",
				  "text": "Junior"
				 },
				 {
				  "value": "12",
				  "text": "Senior"
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
				  "text": "Do you have the urge to scream to release your emotions?"
				 },
				 {
				  "value": "3",
				  "text": "When things are not going your way, do you have the urge to screen and hit something?"
				 },
				 {
				  "value": "4",
				  "text": "When things are not going as planned, do you want to hit others?"
				 },
				 {
				  "value": "5",
				  "text": "Do you have thoughts about hurting yourself or others?"
				 },
				 {
				  "value": "6",
				  "text": "When you get angry do you feel like punching the wall?"
				 },
				 {
				  "value": "7",
				  "text": "Do you keep your anger bottled up inside?"
				 },
				 {
				  "value": "8",
				  "text": "Do you have to scream or hit something to get your anger out?"
				 },
				 {
				  "value": "9",
				  "text": "Do you take your anger out on others?"
				 },
				 {
				  "value": "10",
				  "text": "How often do you get angry?"
				 },
				 {
				  "value": "11",
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
				  "text": "Do you think you are inferior to to others?"
				 },
				 {
				  "value": "2",
				  "text": "Have you ever been threatened by anyone before?"
				 },
				 {
				  "value": "3",
				  "text": "Have you threatened anyone before?"
				 },
				 {
				  "value": "4",
				  "text": "Do you feel like you are in danger for expressing your opinion?"
				 },
				 {
				  "value": "5",
				  "text": "Do you like what you see when you look in the mirror?"
				 },
				 {
				  "value": "6",
				  "text": "Do you remain friends with people that call you names or treat you badly?"
				 },
				 {
				  "value": "7",
				  "text": "Do you always focus on your weaknesses?"
				 },
				 {
				  "value": "8",
				  "text": "Do you compare yourself to friends and people around you?"
				 },
				 {
				  "value": "9",
				  "text": "Do you like you are inferior to others?"
				 },
				 {
				  "value": "10",
				  "text": "Do people you love the most talk negative to you or put you down?"
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
		  "6": "1",
		  "7": "1",
		  "8": "1",
		  "9": "1",
		  "10": "1",
		  "11": "1"
		},
		"selfesteem": {
		  "1": "3",
		  "2": "3",
		  "3": "3",
		  "4": "3",
		  "5": "3",
		  "6": "3",
		  "7": "3",
		  "8": "3",
		  "9": "3",
		  "10": "3"
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