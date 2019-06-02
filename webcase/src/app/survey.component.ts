import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import * as Survey from 'survey-angular';
import * as widgets from 'surveyjs-widgets';
import  { SurveyData }  from './surveydata';
import { CaseService } from './case.service'

import 'inputmask/dist/inputmask/phone-codes/phone.js';

widgets.icheck(Survey);
widgets.select2(Survey);
widgets.inputmask(Survey);
widgets.jquerybarrating(Survey);
widgets.jqueryuidatepicker(Survey);
widgets.nouislider(Survey);
widgets.select2tagbox(Survey);
widgets.signaturepad(Survey);
widgets.sortablejs(Survey);
widgets.ckeditor(Survey);
widgets.autocomplete(Survey);
widgets.bootstrapslider(Survey);
widgets.prettycheckbox(Survey);

Survey.JsonObject.metaData.addProperty('questionbase', 'popupdescription:text');
Survey.JsonObject.metaData.addProperty('page', 'popupdescription:text');

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'survey',
  templateUrl: './template/survey.component.html'
})

export class SurveyComponent implements OnInit {
  surveyResults: object
  surveySubmitted: boolean = false
  
  @Output() submitSurvey = new EventEmitter<any>();

  constructor(private caseService: CaseService) {}

  @Input()
  json: object;

  ngOnInit() {
		//get json from server ..
		const temp = new SurveyData();
		this.json = temp.get(); 

    const surveyModel = new Survey.Model(this.json);
    surveyModel.onAfterRenderQuestion.add((survey, options) => {
      if (!options.question.popupdescription) { return; }

      // Add a button;
      const btn = document.createElement('button');
      btn.className = 'btn btn-info btn-xs';
      btn.innerHTML = 'More Info';
      const question = options.question;
      btn.onclick = function () {
        // showDescription(question);
        alert(options.question.popupdescription);
      };
      const header = options.htmlElement.querySelector('h5');
      const span = document.createElement('span');
      span.innerHTML = '  ';
      header.appendChild(span);
      header.appendChild(btn);
    });
    surveyModel.onComplete
      .add(result => {

        this.sendData(result.data)
        this.submitSurvey.emit(result.data)
      
      }
        
      );
    Survey.SurveyNG.render('surveyElement', { model: surveyModel });

    //for testing
    //this.sendData(temp.testSurveyResults())
  }


  sendData(result: any) {
    //TODO update with your own behavior    
    console.log(result);
    
    this.caseService.request({results:result}, "add")

    .subscribe(
        ok=>{
          console.log(ok)
          this.surveySubmitted = true
          this.surveyResults = result
        }, 
        error=>console.log(error))
  }
}
