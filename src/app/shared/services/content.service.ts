import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  pages:Object ={
    'home': {
      "title": 'Jangoraitad Adivasi Vikas Sanstha (JAVS)', 
      "subtitle": 'Welcome to Jangoraitad Adivasi Vilas Sanstha!', 
      "content": [`Jangoraitad Adivasi Vikas Sansthan was formed in 
      the year 1989 and since then the Sanstha has been actively 
      involved  in the works of social welfare. 
      The Sanstha has evolved over a period of last 10 years with 
      the association of people typically from multiple professions, 
      expertise and location/state. These working hands of Sanstha belong to 
      learned people who come from the highly experienced background of 
      Education Service Sector, from field of Information Technology, highly skilled and 
      well known Doctors, Pharmacist, Advocates, self run young Entrepreneurs, Officers 
      from Government offices, managers from private corporate etc. Overall team at Sanstha 
      is a good mix of experience, youth, enthusiasm and skills which are required to run 
      the Sansthaan and execute projects for the well being of the society.`], 
      "image": 'assets/1.jpg'
    },
    'about': {
      'title': 'About Vatsalyam', 
      'subtitle': 'Helping hand to safe Motherhood', 
      'content': {
        'intro':{
            'para1':`
       Project is a home-grown 
      comprehensive health initiative formulated to tackle the challenges of maternal 
      mortality and morbidity in Nagpur  Maharashtra State, India.
      It was initiated in 2015-16 by the Jangoraitad Adivasi Vikas Sanstha(JAVS) in response 
      to the Global Health Survey  which put Nagpur as having the not-so-good maternal and 
      child health indices in   central India. `
        ,
        'para2':` The Vatsalyam Project caters to pregnant mothers.
 The Vatsalyam programme was also intended to achieve the Global Development Health Goals. 
 It is a free health program for pregnant women, and new born babies. 
 The Vatsalyam  initiative aims at ensuring that maternal health care service delivery to 
 underprivileged couple is accessible and efficient enough to effect a reduction in the rate of 
 maternal and infant mortality. The Vatsalyam model has been recognized by the masses as a 
 viable template for achieving the targets of the Global Development Goals on maternal 
 health within the central India. The Vatsalyam project  achieves the  indicators of 
 reducing maternal death in the region, surpassing the goal with a 95 percent reduction. 
`
      },
    
'pillars':{
      'intro':`There are 3 primary pillars of this program.`,
      'first':`Maternity Health Professionals; Gynaecologist, Radiologist, Pathologist, etc`,
      'second':`Specially trained community health extension workers along with dedicated 
      JAVS members.`,
      'third':`Generous Donors from all over the world.`
  },
'model':{
  'intro':`
 The model is a comprehensive policy formulated to address four critical delays that 
 contribute to maternal mortality and morbidity, namely:`,

 'first':`The delay in deciding to seek care: It is common tendency among urban poor women of 
this part of the world to proactively follow health routine, especially when they are pregnant. 
Pregnancy adds to financial burden on the already burden poor family. 
This results in hiding pregancy and/or ignore much needed proper care for  themselves. 
Most of the complications happen in first few weeks of the pregnancy when proper care is 
avoided or ignored. With specially trained health volunteers and dedicated JAVS members, 
such reclutant would-be-mothers are identified in time and are convinced for the proper 
health care.`,
'second':`
2) The delay in reaching care: Once the pregnant woman is enrolled in the Vatsalyam program, 
we ensure that all required care is provided in timely fashion. To identify prospective 
beneficiary, in Vatsalyam project, we keep conducting health camps at urban poor residential 
areas. `,
'third':`
3) The delay in receiving appropriate care on arrival: After every 15 days she will be 
visiting the our health center and her routine parameters will be examined. 
Proper medicines will be administrated when required. It is important for health volunteers 
to ensure that the woman takes all the medicines and eats full meal. 
The medicines and required monthly ration is provided to pregnant woman under this program.
`,
'fourth':`
4) The delay in referral: This is a crucial aspect of the entire exercise. 
As the date of delivery nears, mistiming of referral to delivery hospital may nullify all 
efforts. The woman must reach at appropriate time and the delivery center. 
This requires arranging special means of transportation.
`
},
'care':{
  'intro':`
Following parameters are routinely examined.`,
'wt':`
1) Weight
Doctors at Vatsalyam ensure that  a woman should gain 9 -11 kg during her pregnancy. 
After the first trimester, a pregnant woman gains around 2 kg every month or 0.5 kg per week. 
If the diet is not enough, with less than the required amount of calories, the woman might gain 
only 5 - 6 kg during her pregnancy. An inadequate dietary intake can be suspected if the woman 
has gained less than 2 kg per month. She needs to be put on food supplementation. 
A low weight gain usually points towards intrauterine growth retardation and results in a 
low birth-weight baby. Excess weight gain (>3 kg in a month) should arouse the suspicion of 
pre-eclampsia / twins.
`,
'ht':`
2)Height of Infant
There is an association between maternal height and delivery outcome, at least in part, 
due to increased risk due to small pelvis in a very short woman. Nulliparous women below 
145 cms of height have an increased risk of disproportion at delivery and therefore considered 
high-risk mothers for whom special hospital delivery is recommended.
`,
'bp':`
3) Blood Pressure
Measuring BP of pregnant woman is important to rule out hypertensive disorders of pregnancy. 
If the BP is high (more than 140/90 mmHg;or diastolic more than 90 mmHg) and albumin (protein) 
is present in the urine, then the woman can be categorized as having pre-eclampsia. 
If the diastolic BP is above 110 mmHg, it is a danger sign pointing towards imminent eclampsia. 
Such woman requires immediate medical attention. A woman with pregnancy induced 
hypertension (PIH) /pre-eclampsia requires hospitalization.
`,
'rr':`
4) Respiratory Rate (RR)
Doctors at Vatsalym are very vigilant at RR specially when woman reports breathlessness.
`,
'ifa':`
5) Iron-folic acid (IFA) supplementation
All pregnant women need to be given one tablet of IFA (100mg of elemental iron and 0.5mg of 
  folic acid) every day for at least 100 days, starting after the first trimester at 14-16 
  weeks of gestation. This is the dose of IFA given to prevent anaemia (prophylactic dose). 
  If a woman is anaemic (Hb<10g/dl) or she has pallor, two IFA tablets are to be given per 
  day for 3 months. This means a woman with anaemia in pregnancy needs to take at least 
  200 tablets of IFA during whole of pregnancy period. This is the dose of IFA required to 
  correct anaemia (therapeutic dose). Women with severe anaemia (Hb<7g/dl) or those who have 
  breathlessness and tachycardia (increased heart rate) due to anaemia, should be started on 
  the therapeutic dose of IFA and also referred to the doctor for further management.
  `,
'nut':`
6) Nutrition in pregnancy
The pregnant woman’s diet should provide for the needs of the growing foetus maintenance of 
the mother’s health, physical strength required during labour and successful lactation.
`,
'sleep':`
7) Workload, Rest and Sleep
Too much physically demanding work during pregnancy can contribute to problems with the 
pregnancy such as miscarriage, premature labour or underweight infants, especially if a woman 
is not eating enough.Women should therefore be encouraged to avoid heavy physical labour 
during pregnancy. If they cannot be given up completely, women should make sure they rest as 
much as possible between tasks.A pregnant woman should also get as much rest as possible. 
She should lie down for an hour or so during the day, and sleep between six and ten hours 
every night.
`,
'sex':`
8) Sex during pregnancy
It is one of the biggest challenge! Urban poor husbands find increase in the their sexual 
urge whereas women usually find drastic reduction in sexual desire when pregnant. 
This leads to serious domestic issue and we at the Vatsalyam require to counsel couple in 
this regards. 
`,
'postnatal':`
9) Post natal care
After delivery a woman has to make both physical and emotional adjustments and she needs 
support and understanding. Some of the medical disorders during this period are, puerperal 
sepsis or infection of the uterus and surrounding tissues, urinary infection, acute prolapse 
of the cervix and puerperal psychiatric illness. It is important to diagnose and treat these 
conditions as early as possible. Some of these may lead to more serious /life threatening 
complications.
`
},
'finance':`
Financing to
the Vatsalyam program is provided by generous donors. No Government aids or  grants directly 
or indirectly are received. We request donors to adopt one or more couple for the smooth pregnancy. 
`
}, 
      'image': 'assets/1.jpg'
    },
    'contact': {
      'id':'123',
      'title': 'Contact', 
      'subtitle': 'javsnagpur@gmail.com', 
      'content': {
          
        'land':{ 'name': 'Jangoraitad Adivasi Vikas Sanstha',
                'street': '2nd Floor, 306 Laxminagar Nagpur-22 Maharashtra India', 
                'pin':'440022',
                'email':'javsnagpur@gmail.com',
                'mobile':'9225220895'
              },
    
        
        
        },
      'image': 'assets/1.jpg'
    },
    'details': {
      'title': 'Details', 
      'subtitle': ' ', 
      'content': [' '], 
      'image': 'assets/1.jpg'
    },
    'video': {
      'title': 'Vatsalyam Video', 
      'subtitle': ' ', 
      'content': [' '], 
      'image': 'assets/1.jpg'
    },
    'login': {
      'id':'123',
      'title': 'Login', 
      'subtitle': 'Wel-Come Dear Donor', 
      'content': ['Pl Login with the password and username provided'], 
      'image': 'assets/1.jpg'
    },
    'donate': {
      'id':'123',
      'title': 'JAVS Online Bank Payments Options', 
      'subtitle': `JAVS requires donations to continue its programs. 
      We request you to deposit your donation amount directly at these banks.`, 
      'content':
      {
          
          'sbi':{ 'Account': 'Jangoraitad Adivasi Vikas Sanstha',
                  'Bank': 'State Bank of India', 
                  'Acct':'35225435926',
                  'IFSC':'SBIN0070602'
                },
          
        
          'axis':{
                  'Account': 'Jangoraitad Adivasi Vikas Sanstha',
                  'Bank':'Axis Bank Ltd',
                  'Acct':'916010016242644',
                  'IFSC':'UTIB0001828'
                  },
          
          
          'rbl':{
                'Account': 'Jangoraitad Adivasi Vikas Sanstha',
                'Bank':'RBL Bank Ltd',
                'Acct':'309002377197',
                'IFSC':'RATN0000163'
          }
      
          
      },
       
      'image': 'assets/1.jpg'
    },
    'mentors': {
      'id':'123',
      'title':'Vatsalyam Mentors', 
      'subtitle':`Vatsalyam is fortunate to have array of great mentors from all cornors of the world`, 
      'content':
      {
          
          'vinay':{ 'name1': 'Vinay Tuteja',
                  'place': 'Dubai UAE', 
                  'comment':`
                  Shri Vinay Tuteja, an Indian born business executive turned 
                  entrepreneur currently based in Dubai, UAE. 
                  He is  qualified Chartered Accountant and a certified Cost Accountant. 
                   `,
                  'img':'assets/vinaytuteja.jpg'
                },
          
        
          'dhiraj':{
                  'name1':'Dhiraj Trivedi',
                  'place':'Ahmdabad India',
                  'comment':`Shri Dhiraj Trivedi heading export operations for a business house based in Dubai. `,
                  'img':'assets/dhiraj1.jpg'
                  },
          
          
          'vinod':{
                'name1': 'Vinod Sadhwani',
                'place':'West Africa',
                'comment':`Shri Vinod Sadhwani, working in West Africa for a business conglomerate in shipping division. 
                `,
                'img':'assets/vinod.jpg'
          },
          'ramesh':{
            'name1': 'Ramesh Sapur',
            'place':'Mumbai India',
            'comment':` Shri Ramesh Sapur, working with banking sector in Mumbai.`,
            'img':'assets/ramesh.jpg'
      },
      'mahesh':{
        'name1': 'Mahesh Pradhan',
        'place':'Dubai UAE',
        'comment':` Mahesh Pradhan , based  in Dubai and associated with Vatsalyam since its inception.
         `,
        'img':'assets/mp.jpg'
  },
  'prasad':{
    'name1': 'Prasad Karnik',
    'place':'Sri Lanka',
    'comment':` Prasad Shashikant Karnik, currently working in Colombo, Sri Lanka. He is associated with Vatsalyam, since 2018. 

     `,
    'img':'assets/prasad.jpg'
},
'niraj':{
  'name1':'Neeraj Trivedi',
  'place':'West Africa',
  'comment':` Niraj Trivedi, heading West African operations of a  Dubai based commodities trading conglomerate. He is associated with Vatsalyam, since 2016. 

   `,
  'img':'assets/niraj.jpg'
},
'atul':{
  'name1': 'Atul Narula',
  'place':'New York USA',
  'comment':`Atul Narula, US based software professional . He is associated with Vatsalyam, since its inception. 

   `,
  'img':'assets/atul.jpg'
},
'salinaa':{
  'name1': 'Salinaa Naik',
  'place':'Dubai UAE',
  'comment':`Salinaa  is our youngest (15 years) mentor and we are fortunate to have her 
  in Vatsalyam. She is spents her pocket money to help Vatsalyam. She is a student in DC college, Dubai. 

   `,
  'img':'assets/salina.jpeg'
},
'suraj':{
  'name1': 'Surajj  Naik ',
  'place':'Dubai UAE',
  'comment':`Suraj Naik is Dubai based NRI.

   `,
  'img':'assets/surajnaik.jpg'
},
'sayali':{
  'name1': 'Priyanka Kide',
  'place':'Pune India',
  'comment':`Priyanka is young & dynamic practicing architect. She is associated  with JAVS since long. 
   `,
  'img':'assets/sayalikide.jpeg'
},
'naren':{
  'name1': 'Naren Bhagdikar',
  'place':'Dubai UAE',
  'comment':`Narendra Bhagdikar is Dubai based NRI . He is associated  with JAVS since long. 
   `,
  'img':'assets/naren1.jpg'
},
'khodaskar':{
  'name1': 'Raja Khodaskar',
  'place':'Nagpur M S',
  'comment':`Raja Khodaskar is first generation quality management consultant. He is associated  with JAVS since long. 
   `,
  'img':'assets/khodaskar.jpg'
},
'sarang':{
  'name1': 'Sarang Joshi',
  'place':'Nagpur M S',
  'comment':`Sarang Joshi is senior manager at Mahindra & Mahindra. He is associated  with JAVS since long. 
   `,
  'img':'assets/sarang.jpg'
},'kiranmundhara':{
  'name1': 'Sou Kiran Mundhara',
  'place':'Nagpur M S',
  'comment':`Sou Kiran Mundhara  is well known social worker in Nagpur. 
  She is associated with many social organization and heads Tejasvini Mahila Mancha.
  She is associated  with JAVS since last few years. 
   `,
  'img':'assets/souKiranMundhara.jpg'
},'manapure':{
  'name1': 'Nishant Manapure',
  'place':'Nagpur M S',
  'comment':`Prof. Nishant H. MANAPURE is the Principal at 
  Priyadarshini Institute of Architecture and Design Studies, Nagpur. 
  A graduate of  Sir J.J. College of Architecture, Mumbai and M.Arch. (Urban Design) 
  from School of Planning and Architecture, New Delhi, he is primarily been in the field of 
  Architectural Education for the past 28 years.
He is associated  with JAVS since its intial years. 
   `,
  'img':'assets/manapure.jpg'
}

      
          
      },
       
      'image': 'assets/1.jpg'
    }
  };
}
