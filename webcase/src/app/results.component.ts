import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'results',
    templateUrl: './template/results.component.html',
    styleUrls: ['./template/app.component.css']
  })

  export class ResultsComponent implements OnInit{  
    @Input() surveyResults: object
    
    outputTextConflict: string
    conflictEmoji: string

    outputTextAnger: string
    angerEmoji: string

    outputTextSelfEsteem: string
    selfEsteemEmoji: string

    error: string
 
    ngOnInit(){
        // const good = "Good News, you seem to have this topic under control. "+ 
        // "Remember, how you respond to conflict will either hold you back or " +
        // "push you towards success"
        const emojiGood = '😀'

        // const ok = "You might want to keep an eye on this topic. " +
        // "Find people who encourage you to try your best but don't insist on perfection."+
        // " Most of us do better when the pressure is off. "
        const emojiOK = '😐'

        const bad = "This seems to be an area of struggle for you. "+
        "Click on the resources tab to get support and help"
        const emojiBad = '🙁'

        console.log(this.surveyResults)
        //get score for each category
        if(this.surveyResults){

            let conflictSum = 0
            let conflict = this.surveyResults["conflict"]
            for(let q in conflict){
                conflictSum = conflictSum +  parseInt(conflict[q])
            }
            
            if(conflictSum > 0 && conflictSum <= 11){
                this.outputTextConflict = "Good News, you seem to have this topic under control. "+ 
                "Remember, how you respond to conflict will either hold you back or " +
                "push you towards success."

                this.conflictEmoji = emojiGood
            }
            else if(conflictSum >= 11 && conflictSum < 21){
                this.outputTextConflict = "You might want to keep an eye on this topic. " +
                "When facing conflict, remember, everyone has an opinion, you don't have to agree "+
                "with it but you can still be open to their point of view."

                this.conflictEmoji = emojiOK
            }
            else if (conflictSum >= 21){
                this.outputTextConflict = bad
                this.conflictEmoji = emojiBad
            }            
            
            let angerSum = 0
            let anger = this.surveyResults["anger"]
            for(let q in anger){
                angerSum += parseInt(anger[q])
            }

            if(angerSum > 0 && angerSum < 11){
                this.outputTextAnger = "Good News, you seem to have this topic under control. "+ 
                "Remember, dealing with anger is never easy and one wrong decision can " +
                "affect you for the rest of your life."
                this.angerEmoji = emojiGood
            }
            else if(angerSum >= 11 && angerSum < 21){
                this.outputTextAnger =  "You might want to keep an eye on this topic. " +
                "Remember, don't let your anger stay bottled up inside. There are healthy "+
                "ways to deal with anger, you can talk a walk or find someone you trust to "+
                "talk to."
                this.angerEmoji = emojiOK
            }
            else if (angerSum >= 21){
                this.outputTextAnger = bad
                this.angerEmoji = emojiBad
            }

            let selfEsteemSum = 0
            let selfEsteem = this.surveyResults["selfesteem"]
            for(let q in selfEsteem){
                selfEsteemSum += parseInt(selfEsteem[q])
                this.selfEsteemEmoji = emojiGood
            }

            if(selfEsteemSum > 0 && selfEsteemSum < 11){
                this.outputTextSelfEsteem = "Good News, you seem to have this topic under control. "+ 
                "Remind yourself of a good quality you have. Put effort into practicing it. Measure "+
                "your progress against yourself, not with what other people do." 
            }
            else if(selfEsteemSum >= 11 && selfEsteemSum < 21){
                this.outputTextSelfEsteem = "You might want to keep an eye on this topic. " +
                "Find people who encourage you to try your best, but don't insist on perfection. "+
                "Most of us do better when the pressure is off."
                this.selfEsteemEmoji = emojiOK
            }
            else if (selfEsteemSum >= 21){
                this.outputTextSelfEsteem = bad
                this.selfEsteemEmoji = emojiBad
            }
            
            console.log({con:this.outputTextConflict, conflictSum, ang:this.outputTextAnger, angerSum, se:this.outputTextSelfEsteem, selfEsteemSum})
        }
        else{
            this.error = "Something went wrong when we tried to submit your survey"
        }


   }}
