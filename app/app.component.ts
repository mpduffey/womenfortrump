import {Component} from '@angular/core';

@Component({
    selector:   'my-app',
    template:   `
      <single-page-scrolling></single-page-scrolling>
    `
})

export class AppComponent {
  contactFields = [
    {name: "prefix", type: "STRING", defaultValue: "Ms.", custom: {label: "Prefix", labelAbove: false, controlType: "select", options: ["Mr.", "Mrs.", "Miss", "Ms.", "Dr."], css: {input: {width: "75px"}, group: {display: "inline-block", "margin-right": "1px", "margin-bottom": "5px"}}}},
    {name: "firstName", type: "STRING", defaultValue: "", custom: {label: "First Name", labelAbove: false, css: {input: {width: "120px"}, group: {display: "inline-block", "margin-right": "1px", "margin-bottom": "5px"}}}},
    {name: "middleName", type: "STRING", defaultValue: "", custom: {label: "Middle", labelAbove: false, css: {input: {width: "120px"}, group: {display: "inline-block", "margin-right": "1px", "margin-bottom": "5px"}}}},
    {name: "lastName", type: "STRING", defaultValue: "", custom: {label: "Last Name", labelAbove: false, css: {input: {width: "120px"}, group: {display: "inline-block", "margin-right": "1px", "margin-bottom": "5px"}}}},
    {name: "suffix", type: "STRING", defaultValue: "", custom: {label: "Suffix", labelAbove: false, controlType: "input", options: [], css: {input: {width: "75px"}, group: {display: "inline-block", "margin-right": "1px", "margin-bottom": "5px"}}}},
    {name: "primaryAddress", type: "STRING", defaultValue: "", custom: {label: "Primary Address", labelAbove: false, css: {input: {width: "530px"}, group: {display: "block", "margin-right": "1px", "margin-bottom": "5px"}}}},
    {name: "primaryCity", type: "STRING", defaultValue: "", custom: {label: "City", labelAbove: false, css: {input: {width: "300px"}, group: {display: "inline-block", "margin-right": "1px", "margin-bottom": "5px"}}}},
    {name: "primaryState", type: "STRING", defaultValue: "", custom: {label: "State", labelAbove: false, css: {input: {width: "110px"}, group: {display: "inline-block", "margin-right": "1px", "margin-bottom": "5px"}}}},
    {name: "primaryZip", type: "STRING", defaultValue: "", custom: {label: "Zip", labelAbove: false, css: {input: {width: "110px"}, group: {display: "inline-block", "margin-right": "1px", "margin-bottom": "5px"}}}},
    {name: "email", type: "STRING", defaultValue: "", custom: {label: "E-mail", css: {input: {width: "530px"}, group: {display: "block", "margin-right": "6px", "margin-bottom": "5px"}}}},
    {name: "homePhone", type: "STRING", defaultValue: "", custom: {label: "Home Phone", css: {input: {width: "174px"}, group: {display: "inline-block", "margin-right": "1px", "margin-bottom": "5px"}}}},
    {name: "mobilePhone", type: "STRING", defaultValue: "", custom: {label: "Mobile Phone", css: {input: {width: "173px"}, group: {display: "inline-block", "margin-right": "1px", "margin-bottom": "5px"}}}},
    {name: "officePhone", type: "STRING", defaultValue: "", custom: {label: "Office Phone", css: {input: {width: "173px"}, group: {display: "inline-block", "margin-right": "1px", "margin-bottom": "5px"}}}},
  ];
  contactForm = {
    submit:     	function(x){console.log(x)},
		submitLabel:	"Save",
    controls:   	[
      {
        type: "fieldset",
        name: "Name Group",
        fields: [
          {classField: this.contactFields[0]},
          {classField: this.contactFields[1]},
          {classField: this.contactFields[2]},
          {classField: this.contactFields[3]},
          {classField: this.contactFields[4]}
        ]
      },
      {
        type: "fieldset",
        name: "Address Group",
        fields: [
          {classField: this.contactFields[5]},
          {classField: this.contactFields[6]},
          {classField: this.contactFields[7]},
          {classField: this.contactFields[8]}
        ]
      },
      {
        type: "fieldset",
        name: "Contact Group",
        fields: [
          {classField: this.contactFields[9]},
          {classField: this.contactFields[10]},
          {classField: this.contactFields[11]},
          {classField: this.contactFields[12]}
        ]
      }
    ]
  };
  contactObject = {
    fieldObject:  this.contactFields,
    formObject:   this.contactForm
  };
}