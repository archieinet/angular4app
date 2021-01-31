import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { NouiFormatter } from '../../ng2-nouisliders/ng2api';

@Component({
  selector: "app-v5-integrate",
  templateUrl: "./v5-integrate.component.html",
  styleUrls: [`./v5-integrate.component.css`]
  
})
export class V5IntegrateComponent implements OnInit {
  
  public form1: FormGroup;
  public scrollPos = 5;
  public min= -10;
  public max=100;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form1 = this.formBuilder.group({ 'single': [ this.scrollPos ] });
  }

  onChange(value: any) {
    console.info('Value changed to', value);
  }  


}

