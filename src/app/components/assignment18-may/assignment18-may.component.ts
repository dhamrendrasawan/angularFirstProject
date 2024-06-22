import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AfterViewInit, Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-assignment18-may',
  standalone: true,
  imports: [CommonModule, FormsModule, NgFor],
  templateUrl: './assignment18-may.component.html',
  styleUrl: './assignment18-may.component.css'
})
export class Assignment18MayComponent implements OnInit {
  public show: boolean = false;
  public showH: boolean = true;
  public buttonName: any = "SHOW";
  public buttonNameHidd = "SHowUsingHiddenProp"
  //public state:string="";
  public desc: string = "";
  public stateName: string = "";
  public flag: boolean = true;
  public msg: string = "";
  public darkOrLight: string = "Light";
  public bodyBackClr = "background-color: #c9a61c;";
  public color: string = "";
  paragraph: string =
    "Shares of the company are set to be listed on both BSE and NSE, with a tentative " +
    " listing date of Thursday, May 23  The S&P BSE Sensex added 253.31 points to reach 73,917.03" +
    " while the NSE Nifty50 NSE also saw gains";

  paragraphH: string =
    "using hidden propertyuShares of the company are set to be listed on both BSE and NSE, with a tentative " +
    " listing date of Thursday, May 23  The S&P BSE Sensex added 253.31 points to reach 73,917.03" +
    " while the NSE Nifty50 NSE also saw gains";

  //Text area related assignment
  public myTextarea: string = "";
  public isLight: boolean = false;

  // Have a drop-down to show state names of a country, when a value is changed in the drop-down show the selected state information in a paragraph
  states: any[] = [
    { state: "Arunachal Pradesh ", desc: "One of the most underrated destinations in India, Arunachal is a Himalayan state known for its splendid mountainous valleys, gorgeous landscapes dotted with glacial lakes, rivers, streams, abundant wildlife, wealthy indigenous tribes, and plenty of unique places to be explored." },
    { state: "Andhra Pradesh", desc: "Visakhapatnam. Visakhapatnam is the second-largest city in Andhra Pradesh and a significant seaport in India. Additionally, this place is endowed with numerous beaches, hilltops, and a nature sanctuary, making it one of the most famous tourist places in Andhra Pradesh." },
    { state: "Assam", desc: "Here we bring you ten things which Assam is most famous for and we are sure you didn't know about some of the things listed here" },
    { state: "Bihar", desc: "Bihar occupied an important position in the early history of India. For centuries it was the principal seat of imperial powers and the main focus of Indian culture" },
    { state: "Chhattisgarh", desc: "Chhattisgarh, state of east-central India. It is bounded by the Indian states of Uttar Pradesh and Jharkhand to the north and northeast, " },
    { state: "Goa", desc: " Goa, state of India, comprising a mainland district on the country’s southwestern coast and an offshore island." },
    { state: "Gujarat", desc: "Gujarat, state of India, located on the country’s western coast, on the Arabian Sea." },
    { state: "Haryana", desc: "Haryana, state in north-central India. The city of Chandigarh, within the Chandigarh union territory" },
    { state: "Himachal Pradesh", desc: "Himachal Pradesh is the northernmost state of India and shares borders with the union territories of Jammu and Kashmir" },
    { state: "Jharkhand", desc: "Jharkhand, state of India, located in the northeastern part of the country." },
    { state: "Karnataka", desc: "That’s just one of many facts about Karnataka that make you curious about this awesome state. " },
    { state: "Kerala", desc: "Unique geography. Kerala falls in the Southern part of India and has a unique geography" },
    { state: "Madhya Pradesh", desc: "Madhya Pradesh is a state in central India. Its capital is Bhopal, and the largest city is Indore, with Gwalior, Jabalpur, Ujjain, Dewas, Sagar," },
    { state: "Maharashtra", desc: "Maharashtra is a state in the western and central peninsular region of India occupying a substantial portion of the Deccan Plateau" },
    { state: "Manipur", desc: "The history of Manipur is reflected by archaeological research, mythology and written history. Historically, " },
    { state: "Meghalaya ", desc: "Meghalaya is a state in northeast India. Meghalaya was formed on 21 January 1972 by carving out two districts from the state of Assam" },
    { state: "Mizoram", desc: "The history of Mizoram encompasses the history of Mizoram which lies in the southernmost part of northeast India." },
    { state: "Nagaland", desc: "Nagaland is a landlocked state in the north-eastern region of India" },
    { state: "Odisha", desc: "The history of Odisha begins in the Lower Paleolithic era" },
    { state: "Punjab", desc: "Punjab, also known as the Land of the Five Rivers" },
    { state: "Rajasthan", desc: "Rajasthan is a state in northwestern India." },
    { state: "Sikkim", desc: "The history of Sikkim begins with the indigenous Lepcha's contact with early Tibetan settlers. Historically" },
    { state: "Tamil Nadu", desc: "amil Nadu is a state in southern India" },
    { state: "Telangana", desc: "Telangana is a state in India situated in the southern part of the Indian peninsula on the high Deccan" },
    { state: "Tripura", desc: "The State of Tripura, in northeastern India, has a long history" },
    { state: "Uttar Pradesh ", desc: "Uttar Pradesh is a state in northern India" },
    { state: "Uttarakhand", desc: "Uttarakhand, formerly known as Uttaranchal," },
    { state: "West bengal", desc: "West Bengal is a state in the eastern portion of India." }
  ];




  toggle() {
    this.show = !this.show;

    // change the name of the button.
    if (this.show)
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }

  toggleHidden() {
    this.showH = !this.showH;
    // change the name of the button.
    if (this.showH)
      this.buttonNameHidd = "HideUsingHiddenProp";
    else
      this.buttonNameHidd = "ShowUsingHiddenProp";
  }

  ngOnInit() {
    //console.log('ChildComponent:OnInit');
    //console.log(this.states);
  }

  getStateDesc(event: any) {
    this.desc = event.target.value;
  }

  bclrLightDark() {
    // this.box= document.getElementById("box");
    if (this.darkOrLight == "Light") {
      this.darkOrLight = "Dark"
      this.color = "white";
    } else {
      this.darkOrLight = "Light"
      this.color = "black";
    }
  }


  toggleTheme() {
    this.isLight = !this.isLight;
    if (this.isLight) {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');

    } else {
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
    }
  }
}



