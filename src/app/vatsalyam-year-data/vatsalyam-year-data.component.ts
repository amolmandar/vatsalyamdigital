import { Component, OnInit,Input} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {AfterViewInit,  ViewChild} from '@angular/core';
import {MatPaginatorModule,MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
//import { MatChipsModule } from '@angular/material/chips';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'vatsalyam-year-data',
  templateUrl: './vatsalyam-year-data.component.html',
  styleUrls: ['./vatsalyam-year-data.component.css']
})


export class VatsalyamYearDataComponent implements OnInit, AfterViewInit {
  @Input() year:string;
  @Input() mob:string;
  @Input() width:string;
  @Input() left:string;
  @Input() class:string;
  //displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  displayedColumns:string[] = ['FullName','Phone','Summary'];
  dataSource:MatTableDataSource<Employee>;
  //dataSource:MatTableDataSource<PeriodicElement>;
    //dataSource=ELEMENT_DATA;
  show=false;
  twidth;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  ngAfterViewInit(){
    //this.dataSource=ELEMENT_DATA;
    
    if(this.year=='2016')
        this.dataSource = new MatTableDataSource<Employee>(EmpData1);
    if(this.year=='2017')
        this.dataSource = new MatTableDataSource<Employee>(EmpData2);
    if(this.year=='2018')
        this.dataSource = new MatTableDataSource<Employee>(EmpData3);
    if(this.year=='2019')
        this.dataSource = new MatTableDataSource<Employee>(EmpData4);
    this.dataSource.paginator=this.paginator;
  }
  
  public doFilter = (event: any) => {
    this.dataSource.filter = event.value.trim().toLocaleLowerCase();
  }
  

  constructor() { 
    this.dataSource = new MatTableDataSource<Employee>(EmpData);
    if(this.mob=='yes'){
      this.twidth=this.width;
    }
  }
getToolTip(){
   return "OK";
}
  ngOnInit(): void {
  }

}

export interface Employee {
  Id : number;	
  FirstName:string;
  LastName:string;	
  Phone:string;
  Adhar:string;	
  Sponsor:string;
  Summary:string;
};

const EmpData : Employee[] =[{
  "Id": 1,
  "FirstName":"Sou Samiksha",
  "LastName":"Dhurve",
  "Phone":"9325357972 ",
  "Adhar":"221246578712",
  "Sponsor":"JAVS",
  "Summary":"On 13/Nov/2016 delivered premature 7 month female child weighing 2.50kg"
}, {
  "Id": 2,
  "FirstName": "Sou Rita",
  "LastName": "Patel",
  "Phone": "7249451875 ",
  "Adhar": "555555 6767677",
  "Sponsor":"JAVS",
  "Summary": "On 31/May/2017 delivered male child @ Mayo Hospital Normal Baby wt 3.4kg "
}, {
  "Id": 3,
  "FirstName": "Sou Pooja",
  "LastName": "Tiwari",
  "Phone": "9730295672 ",
  "Adhar": "835726155461",
  "Sponsor":"JAVS",
  "Summary": "On 17/May/2017 delivered female child at Daga Hospital Nagpur Normaal 3.2kg"
}, {
  "Id": 4,
  "FirstName": "Sou Priya",
  "LastName": "Thool",
  "Phone": "8657136229 ",
  "Adhar": "718435549828",
  "Sponsor":"JAVS",
  "Summary": "On 17/Jun/2017 delivered male child at Mayo Hospital Nagpur Normaal 2.70kg"
}, {
  "Id": 5,
  "FirstName": "Sou Poonam",
  "LastName": "Sharma",
  "Phone": "9890462445 (H)",
  "Adhar": "909543787162",
  "Sponsor":"JAVS",
  "Summary": "On 29/Jun/2017 delivered male child at Daga Hospital Nagpur Normaal 3.5kg"
}, {
  "Id": 6,
  "FirstName": "Gyaneshwari",
  "LastName": "Maskare",
  "Phone": "91681073937 ",
  "Adhar": "333047862955 ",
  "Sponsor":"JAVS",
  "Summary": "On 09/Dec/2017 delivered female child at Daga Hospital Nagpur Normaal 2.75kg"
}, {
  "Id": 7,
  "FirstName": "Sou Bharti",
  "LastName": "Bulkunde",
  "Phone": "9552484738(H) ",
  "Adhar": "647973617492 ",
  "Sponsor":"JAVS",
  "Summary": "AOBORTED in  3rd MONTH (Normal) "
}, {
  "Id": 8,
  "FirstName": "Sou Sonali",
  "LastName": "Wate",
  "Phone": "9665246478 ",
  "Adhar": "948091525309 ",
  "Sponsor":"JAVS",
  "Summary": "Discontunied After 3 months due to transfer of Husband "
}, {
  "Id": 9,
  "FirstName": "Sou Manisha ",
  "LastName": "Lilhare ",
  "Phone": "9637895137",
  "Adhar": "5555555555555",
  "Sponsor":"JAVS",
  "Summary": "On 20/Apr/2017 delivered male child at GMC Hospital Nagpur 2.7 Kg Normal"
}, {
  "Id": 10,
  "FirstName": "Sou Neha ",
  "LastName": "Khandeker ",
  "Phone": "9890363479(N) ",
  "Adhar": "469216391184",
  "Sponsor":"JAVS",
  "Summary": "On 14/May/2017 discharged from GMC Hospital Nagpur with a male child 2.7 Kg Normal"
},{
  "Id": 11,
  "FirstName": "Sou Manisha",
  "LastName": "Gupta ",
  "Phone": "9175336785 ",
  "Adhar": "490374408731 ",
  "Sponsor":"JAVS",
  "Summary": "On 15/Apr/2017 discharged from GMC Hospital Nagpur with a male child 2.8 Kg Normal"
},{
  "Id": 12,
  "FirstName": "Sou Sushama ",
  "LastName": "Gedam ",
  "Phone": "8007158473(H) ",
  "Adhar": "509006989730",
  "Sponsor":"JAVS",
  "Summary": "On 22/Apr/2017 discharged from GMC Hospital Nagpur with a male child 2.7 Kg Normal"
},
{
  "Id": 13,
  "FirstName": "Sou Khushbu ",
  "LastName": "Patel ",
  "Phone": "8149913866 ",
  "Adhar": "44444444444444444",
  "Sponsor":"JAVS",
  "Summary": "On 14/May/2017 discharged from GMC Hospital Gondia with a female child 2.75 Kg Normal"
}

];
const EmpData2 : Employee[] =[{
  "Id": 14,
  "FirstName": "Sou Neha",
  "LastName": "Atram",
  "Phone": "8698388434 ",
  "Adhar": "824129601013",
  "Sponsor":"Shri Amit Narula",
  "Summary": "Had Tripplets 1 Boy 2kg 2 Girls of 2.2 Kg @ GMC Hospital Nagpur on 05/04/2018"
}, {
  "Id": 15,
  "FirstName": "Sou Archana",
  "LastName": "Thakur",
  "Phone": "8600883091 ",
  "Adhar": "805272364769",
  "Sponsor":"Shri Sahil Sagar",
  "Summary": "Delivered male child of 2.9kg on 04-03-2018 @ GMC Hospital Nagpur "
}, {
  "Id": 16,
  "FirstName": "Sou Sapna",
  "LastName": "Netam",
  "Phone": "1234123452 ",
  "Adhar": "476873523339",
  "Sponsor":"Shri David",
  "Summary": "Delivered male child of 2.9kg on 09-04-2018 @ Daga Hospital Nagpur"
}, {
  "Id": 17,
  "FirstName": "Sou Lalita ",
  "LastName": "Sahu",
  "Phone": "9766691287 ",
  "Adhar": "846913260346",
  "Sponsor":"Vidushi Urmila Kulkarni",
  "Summary": "Delivered male child of 4 kg on 20/10/2017 @ private hospital Nagpur "
}, {
  "Id": 18,
  "FirstName": "Sou Babita ",
  "LastName": "Meshram",
  "Phone": "8007456265 ",
  "Adhar": "413079768171",
  "Sponsor":"JAVS",
  "Summary": "Delivered female child on 06/May/2018 of 2.7 kg @ GMC Hospital Nagpur "
}, {
  "Id": 19,
  "FirstName": "Sou Manisha ",
  "LastName": "Rout ",
  "Phone": "7507156876 ",
  "Adhar": "260851969810 ",
  "Sponsor":"JAVS",
  "Summary": "On 12/Feb/2018 delivered female child of 2.7 kg @ Lata Mangeshkar Hospital Nagpur "
}, {
  "Id": 20,
  "FirstName": "Sou Pooja ",
  "LastName": "Naitam ",
  "Phone": "9175161155 ",
  "Adhar": "55233446675(H) ",
  "Sponsor":"Shri Mandlekar and Shri Tokekar",
  "Summary": "On 02/Apr/2018 delivered female child of 2.9 kg @ Daga Hospital Nagpur LSCS"
}, {
  "Id": 21,
  "FirstName": "Sou Roopali ",
  "LastName": "Date ",
  "Phone": "9922091331 ",
  "Adhar": "732256741952(H) ",
  "Sponsor":"Shri Shivraj",
  "Summary": "On 01/Apr/2018 delivered female child of 2.8 kg @ Dande Hospital Nagpur "
}, {
  "Id": 22,
  "FirstName": "Sou Lata ",
  "LastName": "Gedam ",
  "Phone": "9579377610",
  "Adhar": "781963307264 ",
  "Sponsor":"Shri Nitin Zalte",
  "Summary": "On 10/Feb/2018 delivered male child of 2.30kg @ Mayo Hospital Nagpur "
}, {
  "Id": 23,
  "FirstName": "Sou Vidya ",
  "LastName": "Sahu ",
  "Phone": "7678627197 ",
  "Adhar": "991825566900",
  "Sponsor":"Shri Yogesh Belgaonkar ",
  "Summary": "On 02/Feb/2018 delivered male child of 2.50kg @ Mayo Hospital Nagpur"
}, {
  "Id": 24,
  "FirstName": "Sou Kanchan ",
  "LastName": "Bangre ",
  "Phone": "7447600657 ",
  "Adhar": "359175518485 ",
  "Sponsor":"Shri Shashi Mandapati ",
  "Summary": "On 12/Mar/2018 delivered male child of 2.90kg @ Daga Hospital Nagpur"
}, {
  "Id":25,
  "FirstName": "Sou Rupali ",
  "LastName": "Shukla ",
  "Phone": "8999454792 ",
  "Adhar": "677329860314 ",
  "Sponsor":"Shri Amol Paithankar ",
  "Summary": "On 20/Nov/2017 delivered female child of 3.00 kg @ Mayo Hospital Nagpur"
}, {
  "Id": 26,
  "FirstName": "Sou Heena Hussain ",
  "LastName": "Siddique ",
  "Phone": "7229809332 ",
  "Adhar": "279639978197 ",
  "Sponsor":"Shri Rajesh Kolte ",
  "Summary": "On 26/Mar/2018 delivered male child of 2.50kg @ Usmania Nursing Home Hospital Nagpur"
}, {
  "Id": 27,
  "FirstName": "Sou Sarita  ",
  "LastName": "Gupta ",
  "Phone": "7758960542 ",
  "Adhar": "664484743127",
  "Sponsor":"JAVS ",
  "Summary": "On 02/Dec/2017 delivered female child of 2.50kg @ GMC Hospital Nagpur"
}, {
  "Id": 28,
  "FirstName": "Sou Mamata ",
  "LastName": "Tiwari ",
  "Phone": "7249426766 ",
  "Adhar": "785908432139 ",
  "Sponsor":"Shri Manik Rao Ronge",
  "Summary": "On 02/Aug/2017 delivered male child of 2.54kg @ Mayo Hospital Nagpur"
}, {
  "Id": 29,
  "FirstName": "Sou Kavita ",
  "LastName": "Salame ",
  "Phone": "7743925487 ",
  "Adhar": "630280177029 ",
  "Sponsor":"JAVS ",
  "Summary": "On 12/Jan/2018 delivered male child of 2.50kg @ Mayo Hospital Nagpur"
}, {
  "Id": 30,
  "FirstName": "Sou Arti ",
  "LastName": "Thakur ",
  "Phone": "8055576137 ",
  "Adhar": "417104709861 ",
  "Sponsor":"JAVS ",
  "Summary": "On 20/Nov/2017 delivered male child of 3.14kg @ Lata Mangeshkar Hospital Nagpur"
}, {
  "Id": 31,
  "FirstName": "Sou Monami ",
  "LastName": "Shende-Tumdam ",
  "Phone": "9766973894 ",
  "Adhar": "913306193358",
  "Sponsor":"SHri Yogesh Belgaonkar ",
  "Summary": "On 05/Sep/2017 delivered female child of 3.150kg @ Pahunkar Hospital Nagpur"
}


];
const EmpData1 : Employee[] =[{
  "Id": 32,
  "FirstName": "Sou Kiran",
  "LastName": "Jagane",
  "Phone": "8407926068",
  "Adhar": " 9273758199998",
  "Sponsor":"Shri Kavdikar",
  "Summary": "On 03-Sep-2018 delivered a male child @ Mayo Hospital NGP wt 3.25 Kg"
}, {
  "Id": 33,
  "FirstName": "Sou Manisha ",
  "LastName": "Gupta",
  "Phone": "9175336785 ",
  "Adhar": "490374408731",
  "Sponsor":"JAVS",
  "Summary": "On 02-Sep-2018 delivered a premetured male child @ GMC Nag Hospital wt 2.25 Kg"
}, {
  "Id": 34,
  "FirstName": "Sou Usha",
  "LastName": "Upase ",
  "Phone": "8983199923 ",
  "Adhar": "237277094623",
  "Sponsor":"Shri Mahesh Pradhan",
  "Summary": " On 03-Sep-2018 delivered a male child @ GMC Ngp Hospital wt 3.5 Kg"
}, {
  "Id": 35,
  "FirstName": "Sou Pallavi",
  "LastName": "Falnikar ",
  "Phone": "7028847021 ",
  "Adhar": "447896960475 ",
  "Sponsor":"Shri Shahshi Mandapati",
  "Summary": "On 03-Oct-2018 delivered a Female child @Daga Hospital Ngp  wt 3.15 Kg"
}, {
  "Id": 36,
  "FirstName": "Sou Shobha",
  "LastName": "Gupta ",
  "Phone": "8459933521 ",
  "Adhar": "964341183873",
  "Sponsor":"Shri Shyamlal Vikas",
  "Summary": "On 23-Aug-2018 delivered a Female child @GMC Ngp Hospital wt 2.6 Kg"
}, {
  "Id": 37,
  "FirstName": "Sou Bhumika",
  "LastName": "Yadav ",
  "Phone": "8975028325 ",
  "Adhar": "834229411594",
  "Sponsor":"Shri Yogesh Belgaonkar",
  "Summary": "On 30-Oct-2018 delivered a male child @Daga Hospital Ngp wt 2.9 Kg"
}, {
  "Id": 38,
  "FirstName": "Sou Sneha",
  "LastName": "Chandrabanshi",
  "Phone": "8459514898 ",
  "Adhar": "757555279591",
  "Sponsor":"JAVS",
  "Summary": "On 25-Oct-2018 delivered a Female child @IG Rugnalaya Ngp Hospital wt 2.6 Kg"
}, {
  "Id": 39,
  "FirstName": " Sou Rupali",
  "LastName": "Bhrugastala",
  "Phone": "9823735623 ",
  "Adhar": "385820014995",
  "Sponsor":"Shri Sarang Joshi",
  "Summary": "On 06-Sep-2018 delivered a Female child @GMC Ngp Hospital wt 2.6 Kg"
}, {
  "Id": 40,
  "FirstName": "ANJALI",
  "LastName": "Thakre",
  "Phone": "9096430284 ",
  "Adhar": "480496410634",
  "Sponsor":"Sou Gouri Dhopavkar",
  "Summary": "On 17-Oct-2018 delivered a male child @Mayo Ngp Hospital wt 2.8 Kg"
}, {
  "Id": 41,
  "FirstName": "Sou Neha",
  "LastName": "Sharma ",
  "Phone": "9607435758 ",
  "Adhar": "767781965955",
  "Sponsor":"Shri Mandlekar",
  "Summary": "On 24-Sep-2018 delivered a male child @Mayo Ngp Hospital wt 2.4 Kg"
}];
const EmpData3 : Employee[] =[{
  "Id": 42,
  "FirstName": "Sou Kalpana",
  "LastName": "Sonekar ",
  "Phone": "9689997229",
  "Adhar": "759315109098",
  "Sponsor":"Shri Shrish Shukla",
  "Summary": "On 06-Dec-2018 delivered a Female child @Mayo Ngp Hospital wt 2.3 Kg"
}, {
  "Id": 43,
  "FirstName": "Sou Sushma",
  "LastName": "Siddam ",
  "Phone": "8007785677 ",
  "Adhar": "403473521276",
  "Sponsor":"Sou Shobha Chhajed",
  "Summary": "On 13-Dec-2018 delivered a Female child @Mayo Ngp Hospital wt 2.18 Kg"
}, {
  "Id": 44,
  "FirstName": "Sou Khushboo",
  "LastName": "Badel",
  "Phone": "7028883169 ",
  "Adhar": "330242625942",
  "Sponsor":"Sou Sinita Jejani",
  "Summary": "On 19-Dec-2018 delivered a Female child @Disha Clinic Ngp Hospital wt 2.4 Kg"
}, {
  "Id": 45,
  "FirstName": "Sou Pranita",
  "LastName": "Yerpude",
  "Phone": "9579964872 ",
  "Adhar": "288566174654",
  "Sponsor":"Sou Laxman Vikas",
  "Summary": "On 16-Jul-2018 Abortion advised as baby's heart beats stopped after 7 weeks"
}, {
  "Id": 46,
  "FirstName": "Sou Sarita",
  "LastName": "Srivas",
  "Phone": "9372559985 ",
  "Adhar": "492109096823",
  "Sponsor":"Sou Bhagyashree Deshpande",
  "Summary": "On 02-Jan-2019 delivered a Female child @Mayo Ngp Hospital wt 2.9 Kg"
}, {
  "Id": 47,
  "FirstName": "Sou Pooja",
  "LastName": "Shende",
  "Phone": "9765017575 ",
  "Adhar": "439227640811",
  "Sponsor":"JAVS",
  "Summary": "Patient suddenly stoped reporting after 5 months. We tried but she did not respond"
}, {
  "Id": 48,
  "FirstName": "Sou Girija",
  "LastName": "Kumare ",
  "Phone": "7028442253 ",
  "Adhar": "280411909777",
  "Sponsor":"Sou Reshma Jaiswal",
  "Summary": "On 07-Jan-2019 delivered a Female child @Daga Ngp Hospital wt 2.8 Kg"
}, {
  "Id": 49,
  "FirstName": "Sou Yogita",
  "LastName": "Shrivas",
  "Phone": "7248973257 ",
  "Adhar": "625331082788",
  "Sponsor":"Sou Savita Jain",
  "Summary": "On 18-Jan-2019 delivered a Female child @Daga Ngp Hospital wt 3.4 Kg"
}, {
  "Id": 50,
  "FirstName": "Sou Manisha",
  "LastName": "Kannojiya",
  "Phone": "9561228944",
  "Adhar": "995521719741 (H)",
  "Sponsor":"Sou Bhayashree Deshpande",
  "Summary": "Send to Dr Meghana Aggrawal. Baby lost on 11-Jul-2018"
}, {
  "Id": 51,
  "FirstName": "Sou Priya",
  "LastName": "Sondey",
  "Phone": "7841034422",
  "Adhar": "877194380588",
  "Sponsor":"JAVS",
  "Summary": "On 01-Jan-2019 delivered a Female child @Daga Ngp Hospital wt 2.75 Kg"
}
, {
  "Id": 52,
  "FirstName": "Sou Priyanka",
  "LastName": "Sarate",
  "Phone": "9370241214 ",
  "Adhar": "755523698479",
  "Sponsor":"Shri Laxman Vikas",
  "Summary": "On 09-Mar-2019 delivered a male child @Daga Ngp Hospital wt 2.83 Kg"
} , {
  "Id": 53,
  "FirstName": "Sou Rupali",
  "LastName": "Patil ",
  "Phone": "7767928381 ",
  "Adhar": "338160149705",
  "Sponsor":"Shri Ravi Kinkar",
  "Summary": "On 28-Apr-2019 delivered a male child @Daga Ngp Hospital wt 2.9 Kg"
} , {
  "Id": 54,
  "FirstName": "Sou Jamuna",
  "LastName": "Rout",
  "Phone": "7370491879 ",
  "Adhar": "934588889590",
  "Sponsor":"JAVS",
  "Summary": "On 09-Apr-2019 delivered a Female child @Disha Clinic Ngp Hospital wt 2.3 Kg"
} , {
  "Id": 55,
  "FirstName": "Sou jyoti",
  "LastName": "Sirsat",
  "Phone": "881797182",
  "Adhar": "962664077369",
  "Sponsor":"Shri Neerav Shaha",
  "Summary": "On 09-May-2019 delivered a Female child @GMC Ngp Hospital wt 2.75 Kg"
} , {
  "Id": 56,
  "FirstName": "Sou Khushbu",
  "LastName": "Gupta",
  "Phone": "8459586012 ",
  "Adhar": "810157665478",
  "Sponsor":"Shri Mahesh Pradhan",
  "Summary": "On 26-Jun-2019 delivered a Female child @GMC Ngp Hospital wt 2.75 Kg"
} , {
  "Id": 57,
  "FirstName": "Sou Rameshwari",
  "LastName": "Sahu",
  "Phone": "9893412869",
  "Adhar": "679416442326",
  "Sponsor":"Shri Jain",
  "Summary": "On 26-Jun-2019 delivered a male child @Daga Ngp Hospital wt 2.375 Kg"
}, {
  "Id": 58,
  "FirstName": "Sou Vijumala",
  "LastName": "Purke",
  "Phone": "9075834383 ",
  "Adhar": "972275317031",
  "Sponsor":"JAVS",
  "Summary": "On 14-Feb-2019 pregnency naturally aborted"
} , {
  "Id": 59,
  "FirstName": "Sou Surekha",
  "LastName": "Chandrakar",
  "Phone": "951740904 ",
  "Adhar": "832795994417",
  "Sponsor":"Sou Archana Jain",
  "Summary": "On 07-May-2019 naturally aborted "
}, {
  "Id": 60,
  "FirstName": "Sou Priyanka",
  "LastName": "Naidu",
  "Phone": "7769936223 ",
  "Adhar": "280835318733",
  "Sponsor":"Shri David",
  "Summary": "On 23-Sep-2019 male child @ mayo Hospital Nagpur wt 3.12 Kg "
}, {
  "Id": 61,
  "FirstName": "Sou Rajshri ",
  "LastName": "Khekde",
  "Phone": "9753360814 ",
  "Adhar": "370354478566",
  "Sponsor":"Shri Rajendra Khodaskar",
  "Summary": "On 01-Oct-2019 Female child @GMC Hospital Nagpur wt 3.5 Kg "
}, {
  "Id": 62,
  "FirstName": "Sou Neha",
  "LastName": "Nitnaware",
  "Phone": "99750447006 ",
  "Adhar": "278591836217",
  "Sponsor":"Shri Sarang Joshi",
  "Summary": "On 12-Nov-2019 Premature Male child @ mayo Hospital Nagpur wt 1.06 Kg "
}








];
const EmpData4 : Employee[] =[{
  "Id": 64,
  "FirstName": "Sou Priya",
  "LastName": "Thool ",
  "Phone": "8380907942 ",
  "Adhar": "718435549828",
  "Sponsor":"Shri Sandeep Deshmukh",
  "Summary": "On 03-Jan-2020 delivered a male child @Daga Ngp Hospital wt 3.35 Kg"
}, {
  "Id": 65,
  "FirstName": "Sou Sangita",
  "LastName": "Deogade ",
  "Phone": "9665703256 ",
  "Adhar": "795746169586(H)",
  "Sponsor":"Shri Dhiraj Trivedi",
  "Summary": "On 10-Aug-2019 untimely abortion @Mayo Ngp Hospital "
}, {
  "Id": 66,
  "FirstName": "Sou Namita",
  "LastName": "Sahare",
  "Phone": "9637990635 ",
  "Adhar": "260114549859",
  "Sponsor":"Shri Dhiraj Trivedi",
  "Summary": "On 09-Nov-2019 delivered a male child @Mayo  Ngp Hospital wt 2.5 Kg"
}, {
  "Id": 67,
  "FirstName": "Sou Manisha",
  "LastName": "Bhalerao",
  "Phone": "8806207788 ",
  "Adhar": "767929191527",
  "Sponsor":"Mr Raghuveer Vikas",
  "Summary": "On 10-Feb-2020 Female child @Daga Hospital Ngp wt 2.3 Kg"
}, {
  "Id": 68,
  "FirstName": "Sou Sakshi",
  "LastName": "Khandare",
  "Phone": "9067004696 ",
  "Adhar": "598925251801",
  "Sponsor":"Sou Neva Rohan Joshi",
  "Summary": "On 02-Jan-2019 discontinued as she had severe domestic issues and hence left the city"
}, {
  "Id": 69,
  "FirstName": "Sou Sulbha",
  "LastName": "Muley",
  "Phone": "8698585733 ",
  "Adhar": "628789732560",
  "Sponsor":"Shri Bhawanishankar Patankar",
  "Summary": "On 07-Apr-2020 Female Child @Lata Mangeshkar Hospital wt 2.64 Kg"
}, {
  "Id": 70,
  "FirstName": "Sou Yogita",
  "LastName": "Bhange ",
  "Phone": "9021582352 ",
  "Adhar": "439630582236",
  "Sponsor":"Sou Shuklaji",
  "Summary": "On 15-Apr-2020 delivered a Female child @P B Wadi Ngp Hospital wt 3.12 Kg"
}, {
  "Id": 71,
  "FirstName": "Sou Nitu",
  "LastName": "Tumdam",
  "Phone": "7499694219 ",
  "Adhar": "532506684922",
  "Sponsor":"Sou Kiran Mundhara",
  "Summary": "On 13-Apr-2020 delivered a male child @Disha clinic Ngp Hospital wt 2.3 Kg"
}, {
  "Id": 72,
  "FirstName": "Sou Ashwini",
  "LastName": "Kamdi",
  "Phone": "9049552293 ",
  "Adhar": "367722180891",
  "Sponsor":"Shri Hetal Kothari",
  "Summary": "On 08-May-2020 male Child @Daga Hospital Ngp wt 2.6 Kg "
}, {
  "Id": 73,
  "FirstName": "Sou Shobha",
  "LastName": "Gupta",
  "Phone": "7840934113 ",
  "Adhar": "964341183873",
  "Sponsor":"Sou Gargi Sourabh Chepe",
  "Summary": "On 11-Apr-2020 delivered a male child @GMC Ngp Hospital wt 2.95 Kg"
}
, {
  "Id": 74,
  "FirstName": "Sou Ashwini",
  "LastName": "Wadwe",
  "Phone": "7387334143 ",
  "Adhar": "969380439217",
  "Sponsor":"Sou Tina Gandhi",
  "Summary": "On 21-Aug-2020 delivered a Female child @GMC Ngp Hospital wt 3.1 Kg"
} , {
  "Id": 75,
  "FirstName": "Sou Archana",
  "LastName": "Rout ",
  "Phone": "9370181867 ",
  "Adhar": "473212488495",
  "Sponsor":"JAVS",
  "Summary": "On 18-Jun-2020 delivered a male child @Mayo Ngp Hospital wt 2.5 Kg"
} , {
  "Id": 76,
  "FirstName": "Sou Jyoti",
  "LastName": "Bagade",
  "Phone": "8788566356 ",
  "Adhar": "744681567013",
  "Sponsor":"Shri Vinay Sharma",
  "Summary": "*On 09-Apr-2019 delivered a Female child @Disha Clinic Ngp Hospital wt 2.3 Kg"
} , {
  "Id": 77,
  "FirstName": "Sou Sangita",
  "LastName": "Deogade",
  "Phone": "9665703256 ",
  "Adhar": "795746169586",
  "Sponsor":"Shri Neeraj Trivedi",
  "Summary": "On 21-Jul-2020 delivered a male child @Mayo Ngp Hospital wt 1.95 Kg"
} , {
  "Id": 78,
  "FirstName": "Sou Monali",
  "LastName": "Tumdam ",
  "Phone": "7796080051 ",
  "Adhar": "913306193358",
  "Sponsor":"JAVS",
  "Summary": "On 22-May-2020 delivered a Female child @Mayo Ngp Hospital wt 2.95 Kg"
} , {
  "Id": 79,
  "FirstName": "Sou Shila",
  "LastName": "Neware",
  "Phone": "9922783352 ",
  "Adhar": "888791778237",
  "Sponsor":"Shri Brijesh Manek",
  "Summary": "On 28-Aug-2020 delivered a Female child @ Private Ngp Hospital wt 2.8 Kg"
}, {
  "Id": 80,
  "FirstName": "Sou Nitu",
  "LastName": "Nagrare",
  "Phone": "9404841707 ",
  "Adhar": "889524368870",
  "Sponsor":"Shri Vivek Kumar",
  "Summary": "On 10-Sep-2020 male child @ private hospital wt 2.90 kg"
} , {
  "Id": 81,
  "FirstName": "Sou Leela",
  "LastName": "Lilhare",
  "Phone": "7067602714 ",
  "Adhar": "398710616934",
  "Sponsor":"Sou Agrawal",
  "Summary": "On 06-Nov-2020 male child @Daga Hospital Ngp wt 2.50 Kg "
}, {
  "Id": 82,
  "FirstName": "Sou Rupali",
  "LastName": "Pache",
  "Phone": "9518387016 ",
  "Adhar": "284008574415",
  "Sponsor":"Shri Prasad Vikas",
  "Summary": "On 02-Jan-2021 Female child @ mayo Hospital Nagpur wt 3.12 Kg "
}, {
  "Id": 83,
  "FirstName": "Sou Karishma ",
  "LastName": "Gajbhiye",
  "Phone": "9403373985 ",
  "Adhar": "770404923035",
  "Sponsor":"Sou Varsha Kharad",
  "Summary": "On 12-Mar-2021 Female child @GMC Hospital Nagpur wt 3.5 Kg "
}, {
  "Id": 84,
  "FirstName": "Sou Pooja",
  "LastName": "Kanoje",
  "Phone": "8888802918 ",
  "Adhar": "Applied",
  "Sponsor":"Shri Rajendra Khodaskar",
  "Summary": "On 04-Apr-2021 male child @ mayo Hospital Nagpur wt 2.90 Kg "
}, {
  "Id": 85,
  "FirstName": "Sou Kajal",
  "LastName": "Dhurve",
  "Phone": "9588653557 ",
  "Adhar": "Applied",
  "Sponsor":"JAVS",
  "Summary": "On 16-Dec-2020 Female child @ mayo Hospital Nagpur wt 2.90 Kg "
}, {
  "Id": 86,
  "FirstName": "Sou Lata",
  "LastName": "Surse",
  "Phone": "9850067787 ",
  "Adhar": "526886329889",
  "Sponsor":"Shri Ajay Ksheersagar",
  "Summary": "On 04-Apr-2021 Female child @ mayo Hospital Nagpur wt 2.90 Kg "
}, {
  "Id": 87,
  "FirstName": "Sou Sonal",
  "LastName": "Thakre",
  "Phone": "7499609035 ",
  "Adhar": "270323912829",
  "Sponsor":"Shri Devendra Yawalkar",
  "Summary": "On 06-Apr-2021 male child @ mayo Hospital Nagpur wt 2.90 Kg "
}, {
  "Id": 88,
  "FirstName": "Sou Sonu",
  "LastName": "Yadav",
  "Phone": "9011392028 ",
  "Adhar": "797115345839",
  "Sponsor":"Shri Parag Muley",
  "Summary": "On 01-Apr-2021 male child @ mayo Hospital Nagpur wt 2.40 Kg "
}, {
  "Id": 89,
  "FirstName": "Sou Bhagyashree",
  "LastName": "Naidu",
  "Phone": "9307781693 ",
  "Adhar": "624853017863",
  "Sponsor":"Sou Tina Gandhi",
  "Summary": "On 17-Apr-2021 male child @ mayo Hospital Nagpur wt 2.84 Kg "
}, {
  "Id": 90,
  "FirstName": "Sou Shalini",
  "LastName": "Shrirame",
  "Phone": "7666210081 ",
  "Adhar": "965272558983",
  "Sponsor":"Shri Sarang Joshi",
  "Summary": "On 22-May-2021 male child @ mayo Hospital Nagpur wt 2.40 Kg "
}, {
  "Id": 91,
  "FirstName": "Sou Divyabharti",
  "LastName": "Surjuse",
  "Phone": "9561943890 ",
  "Adhar": "439944171768 ",
  "Sponsor":"Shri Ashok",
  "Summary": "On 01-Jul-2021 Female child @ mayo Hospital Nagpur wt 2.30 Kg "
}, {
  "Id": 92,
  "FirstName": "Sou Priyanka",
  "LastName": "Masram",
  "Phone": "8308825812 ",
  "Adhar": "438793838949",
  "Sponsor":"Shri Vinod Sadhwani",
  "Summary": "On 25-Jul-2021 male child @ mayo Hospital Nagpur wt 2.50 Kg "
}, {
  "Id": 93,
  "FirstName": "Sou Arpana",
  "LastName": "Moon",
  "Phone": "7387472029 ",
  "Adhar": "566326034014",
  "Sponsor":"Shri Sagar Sahil",
  "Summary": "On 14-Jul-2021 male child @ mayo Hospital Nagpur wt 2.50 Kg "
}, {
  "Id": 94,
  "FirstName": "Sou Trupti",
  "LastName": "Jangale",
  "Phone": "7058628582 ",
  "Adhar": "726699621605",
  "Sponsor":"Ku Saleena Naik",
  "Summary": "Recently(4-Aug-2021) she had false labour pain and hence was admitted.Had RTPCR as well. Soon will deliver "
}, {
  "Id": 95,
  "FirstName": "Sou Neha",
  "LastName": "Nitanaware",
  "Phone": "9156905707 ",
  "Adhar": "278591836217",
  "Sponsor":"Shri Vipin Modak",
  "Summary": "Had last routine check up on 13-Aug-2021. Is advised to take rest as much as possible. "
}, {
  "Id": 96,
  "FirstName": "Sou Payal",
  "LastName": "Netam",
  "Phone": "8805523047 ",
  "Adhar": "221097412375",
  "Sponsor":"JAVS",
  "Summary": "Had last routine check up on 13-Aug-2021. doing well. "
}, {
  "Id": 97,
  "FirstName": "Sou Neha",
  "LastName": "Sharma",
  "Phone": "7798514818 ",
  "Adhar": "Applied",
  "Sponsor":"Sou Archana Binzani",
  "Summary": "Had last routine check up on 30-Jul-2021. She is advised to do some work!!! "
}, {
  "Id": 98,
  "FirstName": "Sou Kalpana",
  "LastName": "Tumdam",
  "Phone": "9022558697 ",
  "Adhar": "588657018703",
  "Sponsor":"JAVS",
  "Summary": "Had routine check up on 14-Aug-2021. Gained weight and had counselling to her husband as well. "
}, {
  "Id": 99,
  "FirstName": "Sou Dhanwanta",
  "LastName": "Naik",
  "Phone": "9850248180 ",
  "Adhar": "601358952755",
  "Sponsor":"Swargiya Shyamrao Ingole",
  "Summary": "Had last routine check up on  09-Aug-2021. She has gained weight and doing well.  "
}, {
  "Id": 100,
  "FirstName": "Sou Indu",
  "LastName": "Gupta",
  "Phone": "9175299228 ",
  "Adhar": "457888531092 ",
  "Sponsor": "Javs ",
  "Summary": "Has her routine check up 09-Aug-2021. Given medicines for 20 days. DOing as expected "
}, {
  "Id": 101,
  "FirstName": "Sou Pallavi",
  "LastName": "Falnikar",
  "Phone": "7028447021 ",
  "Adhar": "447896960475",
  "Sponsor":"JAVS",
  "Summary": "Admitted few days back (17-Aug-2021) "
}, {
  "Id": 102,
  "FirstName": "Sou Vidya",
  "LastName": "Sahu",
  "Phone": "7447653857 ",
  "Adhar": "417104709861",
  "Sponsor":"JAVS",
  "Summary": "Admitted few days back (17-Aug-2021)"
}








];