(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{130:function(e,t,a){},245:function(e,t,a){},246:function(e,t,a){},408:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(20),r=a.n(s),c=(a(245),a(246),a(35)),l=a(27),o=a(39),u=a(40),h=a(444),d=a(445),j=a(461),b=a(442),m=a(443),x=a(26),O=a(2),v=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(O.jsx)(x.b,{render:function(t){var a=t.history;return Object(O.jsx)(j.a,{title:e.props.title,children:Object(O.jsx)(b.a,{onClick:function(){a.push(e.props.url)},children:Object(O.jsx)(m.a,{style:{fontSize:35},children:Object(O.jsx)("img",{alt:"edit",src:window.location.origin+"/"+e.props.iconName+".ico"})})})})}})}}]),a}(i.a.Component),p=["#a31545","#357a38"],f="linear-gradient(to top left, #ff0000 0%, #000000  112%)",g="https://diseaseanalysis.herokuapp.com//predictDisease",y=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(O.jsx)("div",{style:{flexGrow:1},children:Object(O.jsx)(h.a,{position:"static",children:Object(O.jsxs)(d.a,{style:{background:f},children:[Object(O.jsx)(v,{title:"Heart Disease Prediction",iconName:"heart",url:"/heart-disease-prediction"}),Object(O.jsx)(v,{title:"Stroke Disease Prediction",iconName:"head",url:"/stroke-disease-prediction"}),Object(O.jsx)(v,{title:"Liver Disease Prediction",iconName:"liver",url:"/liver-disease-prediction"})]})})})}}]),a}(i.a.Component),C=a(148),k=a(45),D=a.n(k),S=a(82),P=a(21),w=a(452),W=a(453),B=a(454),A=a(462),F=a(457),R=a(458),G=a(83),N=a.n(G),H=(a(130),a(465)),L=a(464),T=a(446),M=a(447),I=a(451),E=a(223),Y=a(224),J=a(104),K=a(226),V=a(222),z=[{name:"Disease",probability:0},{name:"No Disease",probability:0}],q=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(O.jsxs)("div",{className:"graphBox",children:[0===this.props.accuracy?Object(O.jsx)("br",{}):"Prediction Accuracy: "+this.props.accuracy+"%",Object(O.jsx)(T.a,{width:"90%",height:"90%",children:Object(O.jsxs)(M.a,{width:500,height:300,data:0===this.props.data.length?z:this.props.data,margin:{top:5,right:30,left:20,bottom:5},children:[Object(O.jsx)(I.a,{strokeDasharray:"3 3"}),Object(O.jsx)(E.a,{dataKey:"name"}),Object(O.jsx)(Y.a,{}),Object(O.jsx)(J.a,{}),Object(O.jsx)(K.a,{dataKey:"probability",fill:"#000000",children:this.props.data.map((function(e,t){return Object(O.jsx)(V.a,{fill:p[t],strokeWidth:2===t?4:1},"cell-".concat(t))}))})]})}),"Probability at risk of ",this.props.title]})}}]),a}(n.PureComponent),Q=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={age:63,sex:1,bloodPressure:145,chestPainType:3,serumCholesterol:233,maxHeartRate:150,exerciseAngina:0,bloodSugar:1,vesselsColored:0,accuracy:0,results:[]},n.handleClick=n.handleClick.bind(Object(P.a)(n)),n.firstColumn=n.firstColumn.bind(Object(P.a)(n)),n.secondColumn=n.secondColumn.bind(Object(P.a)(n)),n.thirdColumn=n.thirdColumn.bind(Object(P.a)(n)),n.fourthColumn=n.fourthColumn.bind(Object(P.a)(n)),n.heartDiseaseForm=n.heartDiseaseForm.bind(Object(P.a)(n)),n.extractResponse=n.extractResponse.bind(Object(P.a)(n)),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){}},{key:"handleClick",value:function(){var e=Object(S.a)(D.a.mark((function e(){var t,a=this;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t={disease:"heart",age:this.state.age,sex:this.state.sex,chestPainType:this.state.chestPainType,bloodPressure:this.state.bloodPressure,serumCholesterol:this.state.serumCholesterol,bloodSugar:this.state.bloodSugar,vesselsColored:this.state.vesselsColored,maxHeartRate:this.state.maxHeartRate,exerciseAngina:this.state.exerciseAngina},N.a.post(g,t).then((function(e){return a.extractResponse(e.data)})).catch((function(e){return console.log(e)}));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"extractResponse",value:function(e){if("No Disease Option Specified"!==e){var t=[{name:"Heart Disease",probability:e.diseaseProb},{name:"No Heart Disease",probability:e.nonDiseaseProb}];this.setState({results:t}),this.setState({accuracy:e.accuracy})}}},{key:"heartDiseaseForm",value:function(){return Object(O.jsx)("div",{className:"box",children:Object(O.jsxs)(w.a,{container:!0,direction:"column",justify:"space-between",alignItems:"stretch",spacing:5,children:[Object(O.jsx)(w.a,{item:!0,children:Object(O.jsx)(W.a,{variant:"h6",style:{paddingBottom:"15px",color:"#F51F1F",textDecoration:"underline"},children:"Enter Cardiovascular Parameters"})}),Object(O.jsx)(w.a,{item:!0,children:this.firstColumn()}),Object(O.jsx)(w.a,{item:!0,children:this.secondColumn()}),Object(O.jsx)(w.a,{item:!0,children:this.thirdColumn()}),Object(O.jsx)(w.a,{item:!0,children:this.fourthColumn()}),Object(O.jsx)(w.a,{item:!0,children:Object(O.jsx)(B.a,{variant:"contained",fullWidth:!0,style:{background:f,color:"white"},onClick:this.handleClick,children:"Predict"})})]})})}},{key:"firstColumn",value:function(){var e=this;return Object(O.jsxs)(w.a,{container:!0,spacing:2,children:[Object(O.jsx)(w.a,{item:!0,xs:4,children:Object(O.jsx)(A.a,{label:"Age",placeholder:"20",variant:"outlined",fullWidth:!0,type:"number",value:this.state.age,onChange:function(t){return e.setState({age:t.target.value})},style:{paddingBottom:"4%"}})}),Object(O.jsx)(w.a,{item:!0,xs:4,children:Object(O.jsxs)(F.a,{variant:"outlined",fullWidth:!0,children:[Object(O.jsx)(L.a,{children:"Sex"}),Object(O.jsxs)(R.a,{label:"Sex",value:this.state.sex,onChange:function(t){return e.setState({sex:t.target.value})},children:[Object(O.jsx)(H.a,{value:0,children:"Female"}),Object(O.jsx)(H.a,{value:1,children:"Male"})]})]})}),Object(O.jsx)(w.a,{item:!0,xs:4,children:Object(O.jsxs)(F.a,{variant:"outlined",fullWidth:!0,children:[Object(O.jsx)(L.a,{children:"Chest Pain Type"}),Object(O.jsxs)(R.a,{label:"Chest Pain Type",value:this.state.chestPainType,onChange:function(t){return e.setState({chestPainType:t.target.value})},children:[Object(O.jsx)(H.a,{value:1,children:"1"}),Object(O.jsx)(H.a,{value:2,children:"2"}),Object(O.jsx)(H.a,{value:3,children:"3"})]})]})})]})}},{key:"secondColumn",value:function(){var e=this;return Object(O.jsxs)(w.a,{container:!0,spacing:2,children:[Object(O.jsx)(w.a,{item:!0,xs:7,children:Object(O.jsx)(A.a,{label:"Resting Blood Pressure (mm Hg)",placeholder:"145",variant:"outlined",fullWidth:!0,type:"number",value:this.state.bloodPressure,onChange:function(t){return e.setState({bloodPressure:t.target.value})},style:{paddingBottom:"4%"}})}),Object(O.jsx)(w.a,{item:!0,xs:5,children:Object(O.jsxs)(F.a,{variant:"outlined",fullWidth:!0,children:[Object(O.jsx)(L.a,{children:"Exercise Induced Angina"}),Object(O.jsxs)(R.a,{label:">Exercise Induced Angina",value:this.state.exerciseAngina,onChange:function(t){return e.setState({exerciseAngina:t.target.value})},children:[Object(O.jsx)(H.a,{value:0,children:"No"}),Object(O.jsx)(H.a,{value:1,children:"Yes"})]})]})})]})}},{key:"thirdColumn",value:function(){var e=this;return Object(O.jsxs)(w.a,{container:!0,spacing:2,children:[Object(O.jsx)(w.a,{item:!0,xs:7,children:Object(O.jsxs)(F.a,{variant:"outlined",fullWidth:!0,children:[Object(O.jsxs)(L.a,{children:["Fasting Blood Sugar ","&"," Glucose (120 mg/dl)"]}),Object(O.jsxs)(R.a,{label:"Fasting Blood Sugar & Glucose (120 mg/dl)",value:this.state.bloodSugar,onChange:function(t){return e.setState({bloodSugar:t.target.value})},children:[Object(O.jsx)(H.a,{value:0,children:"No"}),Object(O.jsx)(H.a,{value:1,children:"Yes"})]})]})}),Object(O.jsx)(w.a,{item:!0,xs:5,children:Object(O.jsx)(A.a,{label:"Serum Cholesterol (mg/dl)",placeholder:"233",variant:"outlined",fullWidth:!0,type:"number",value:this.state.serumCholesterol,onChange:function(t){return e.setState({serumCholesterol:t.target.value})},style:{paddingBottom:"4%"}})})]})}},{key:"fourthColumn",value:function(){var e=this;return Object(O.jsxs)(w.a,{container:!0,spacing:2,children:[Object(O.jsx)(w.a,{item:!0,xs:6,children:Object(O.jsxs)(F.a,{variant:"outlined",fullWidth:!0,children:[Object(O.jsx)(L.a,{children:"Major Vessels Colored"}),Object(O.jsxs)(R.a,{label:"Major Vessels Colored",value:this.state.vesselsColored,onChange:function(t){return e.setState({vesselsColored:t.target.value})},children:[Object(O.jsx)(H.a,{value:0,children:"0"}),Object(O.jsx)(H.a,{value:1,children:"1"}),Object(O.jsx)(H.a,{value:2,children:"2"}),Object(O.jsx)(H.a,{value:3,children:"3"})]})]})}),Object(O.jsx)(w.a,{item:!0,xs:6,children:Object(O.jsx)(A.a,{label:"Maximum Heart Rate (BPM)",placeholder:"150",variant:"outlined",fullWidth:!0,type:"number",value:this.state.maxHeartRate,onChange:function(t){return e.setState({maxHeartRate:t.target.value})},style:{paddingBottom:"4%"}})})]})}},{key:"render",value:function(){return Object(O.jsx)("div",{style:{width:"95vw"},children:Object(O.jsxs)(w.a,{container:!0,direction:"row",alignItems:"center",justify:"center",style:{flexGrow:1,marginTop:"10vh"},spacing:5,children:[Object(O.jsx)(w.a,{item:!0,style:{minWidth:"30vw"},children:this.heartDiseaseForm()}),Object(O.jsx)(w.a,{item:!0,style:{minWidth:"30vw"},children:Object(O.jsx)(q,{data:this.state.results,title:"Heart Disease",accuracy:this.state.accuracy})})]})})}}]),a}(i.a.Component),U=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={age:67,gender:1,bmi:36.6,hypertension:0,avgGlucoseLevel:228.69,heartDisease:1,accuracy:0,results:[]},n.handleClick=n.handleClick.bind(Object(P.a)(n)),n.firstColumn=n.firstColumn.bind(Object(P.a)(n)),n.secondColumn=n.secondColumn.bind(Object(P.a)(n)),n.thirdColumn=n.thirdColumn.bind(Object(P.a)(n)),n.strokeDiseaseForm=n.strokeDiseaseForm.bind(Object(P.a)(n)),n.extractResponse=n.extractResponse.bind(Object(P.a)(n)),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){}},{key:"handleClick",value:function(){var e=Object(S.a)(D.a.mark((function e(){var t,a=this;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t={disease:"stroke",age:this.state.age,gender:this.state.gender,bmi:this.state.bmi,hypertension:this.state.hypertension,avgGlucoseLevel:this.state.avgGlucoseLevel,heartDisease:this.state.heartDisease},N.a.post(g,t).then((function(e){return a.extractResponse(e.data)})).catch((function(e){return console.log(e)}));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"extractResponse",value:function(e){if("No Disease Option Specified"!==e){var t=[{name:"Stroke Disease",probability:e.diseaseProb},{name:"No Stroke Disease",probability:e.nonDiseaseProb}];this.setState({results:t}),this.setState({accuracy:e.accuracy})}}},{key:"strokeDiseaseForm",value:function(){return Object(O.jsx)("div",{className:"box",children:Object(O.jsxs)(w.a,{container:!0,direction:"column",justify:"space-between",alignItems:"stretch",spacing:5,children:[Object(O.jsx)(w.a,{item:!0,children:Object(O.jsx)(W.a,{variant:"h6",style:{paddingBottom:"15px",color:"#F51F1F",textDecoration:"underline"},children:"Enter Stroke Disease Parameters"})}),Object(O.jsx)(w.a,{item:!0,children:this.firstColumn()}),Object(O.jsx)(w.a,{item:!0,children:this.secondColumn()}),Object(O.jsx)(w.a,{item:!0,children:this.thirdColumn()}),Object(O.jsx)(w.a,{item:!0,children:Object(O.jsx)(B.a,{variant:"contained",fullWidth:!0,style:{background:f,color:"white"},onClick:this.handleClick,children:"Predict"})})]})})}},{key:"firstColumn",value:function(){var e=this;return Object(O.jsxs)(w.a,{container:!0,spacing:2,children:[Object(O.jsx)(w.a,{item:!0,xs:6,children:Object(O.jsx)(A.a,{label:"Age",placeholder:"20",variant:"outlined",fullWidth:!0,type:"number",value:this.state.age,onChange:function(t){return e.setState({age:t.target.value})},style:{paddingBottom:"4%"}})}),Object(O.jsx)(w.a,{item:!0,xs:6,children:Object(O.jsxs)(F.a,{variant:"outlined",fullWidth:!0,children:[Object(O.jsx)(L.a,{children:"Gender"}),Object(O.jsxs)(R.a,{label:"Gender",value:this.state.gender,onChange:function(t){return e.setState({gender:t.target.value})},children:[Object(O.jsx)(H.a,{value:0,children:"Female"}),Object(O.jsx)(H.a,{value:1,children:"Male"})]})]})})]})}},{key:"secondColumn",value:function(){var e=this;return Object(O.jsxs)(w.a,{container:!0,spacing:2,children:[Object(O.jsx)(w.a,{item:!0,xs:6,children:Object(O.jsxs)(F.a,{variant:"outlined",fullWidth:!0,children:[Object(O.jsx)(L.a,{children:"Hypertension"}),Object(O.jsxs)(R.a,{label:"Hypertension",value:this.state.hypertension,onChange:function(t){return e.setState({hypertension:t.target.value})},children:[Object(O.jsx)(H.a,{value:0,children:"No"}),Object(O.jsx)(H.a,{value:1,children:"Yes"})]})]})}),Object(O.jsx)(w.a,{item:!0,xs:6,children:Object(O.jsxs)(F.a,{variant:"outlined",fullWidth:!0,children:[Object(O.jsx)(L.a,{children:"Heart Disease"}),Object(O.jsxs)(R.a,{label:"Heart Disease",value:this.state.heartDisease,onChange:function(t){return e.setState({heartDisease:t.target.value})},children:[Object(O.jsx)(H.a,{value:0,children:"No"}),Object(O.jsx)(H.a,{value:1,children:"Yes"})]})]})})]})}},{key:"thirdColumn",value:function(){var e=this;return Object(O.jsxs)(w.a,{container:!0,spacing:2,children:[Object(O.jsx)(w.a,{item:!0,xs:8,children:Object(O.jsx)(A.a,{label:"Average Glucose Level (mmol/L)",placeholder:"228.69",variant:"outlined",fullWidth:!0,type:"number",value:this.state.avgGlucoseLevel,onChange:function(t){return e.setState({avgGlucoseLevel:t.target.value})},style:{paddingBottom:"4%"}})}),Object(O.jsx)(w.a,{item:!0,xs:4,children:Object(O.jsx)(A.a,{label:"BMI",placeholder:"36.6",variant:"outlined",fullWidth:!0,type:"number",value:this.state.bmi,onChange:function(t){return e.setState({bmi:t.target.value})},style:{paddingBottom:"4%"}})})]})}},{key:"render",value:function(){return Object(O.jsx)("div",{style:{width:"95vw"},children:Object(O.jsxs)(w.a,{container:!0,direction:"row",alignItems:"center",justify:"center",style:{flexGrow:1,marginTop:"10vh"},spacing:5,children:[Object(O.jsx)(w.a,{item:!0,style:{minWidth:"30vw"},children:this.strokeDiseaseForm()}),Object(O.jsx)(w.a,{item:!0,style:{minWidth:"30vw"},children:Object(O.jsx)(q,{data:this.state.results,title:"Stroke Disease",accuracy:this.state.accuracy})})]})})}}]),a}(i.a.Component),X=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={age:65,gender:0,totalProteins:6.8,totalBilirubin:.7,alkalinePhosphatase:187,alamineAminotransferase:16,aspartateAminotransferase:18,albumin:3.3,albuminGlobulinRatio:.9,accuracy:0,results:[]},n.handleClick=n.handleClick.bind(Object(P.a)(n)),n.firstColumn=n.firstColumn.bind(Object(P.a)(n)),n.secondColumn=n.secondColumn.bind(Object(P.a)(n)),n.thirdColumn=n.thirdColumn.bind(Object(P.a)(n)),n.fourthColumn=n.fourthColumn.bind(Object(P.a)(n)),n.liverDiseaseForm=n.liverDiseaseForm.bind(Object(P.a)(n)),n.extractResponse=n.extractResponse.bind(Object(P.a)(n)),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){}},{key:"handleClick",value:function(){var e=Object(S.a)(D.a.mark((function e(){var t,a=this;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t={disease:"liver",age:this.state.age,gender:this.state.gender,totalProteins:this.state.totalProteins,totalBilirubin:this.state.totalBilirubin,alkalinePhosphatase:this.state.alkalinePhosphatase,alamineAminotransferase:this.state.alamineAminotransferase,aspartateAminotransferase:this.state.aspartateAminotransferase,albumin:this.state.albumin,albuminGlobulinRatio:this.state.albuminGlobulinRatio},N.a.post(g,t).then((function(e){return a.extractResponse(e.data)})).catch((function(e){return console.log(e)}));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"extractResponse",value:function(e){if("No Disease Option Specified"!==e){var t=[{name:"Liver Disease",probability:e.diseaseProb},{name:"No Liver Disease",probability:e.nonDiseaseProb}];this.setState({results:t}),this.setState({accuracy:e.accuracy})}}},{key:"liverDiseaseForm",value:function(){return Object(O.jsx)("div",{className:"box",children:Object(O.jsxs)(w.a,{container:!0,direction:"column",justify:"space-between",alignItems:"stretch",spacing:5,children:[Object(O.jsx)(w.a,{item:!0,children:Object(O.jsx)(W.a,{variant:"h6",style:{paddingBottom:"15px",color:"#F51F1F",textDecoration:"underline"},children:"Enter Liver Disease Parameters"})}),Object(O.jsx)(w.a,{item:!0,children:this.firstColumn()}),Object(O.jsx)(w.a,{item:!0,children:this.secondColumn()}),Object(O.jsx)(w.a,{item:!0,children:this.thirdColumn()}),Object(O.jsx)(w.a,{item:!0,children:this.fourthColumn()}),Object(O.jsx)(w.a,{item:!0,children:Object(O.jsx)(B.a,{variant:"contained",fullWidth:!0,style:{background:f,color:"white"},onClick:this.handleClick,children:"Predict"})})]})})}},{key:"firstColumn",value:function(){var e=this;return Object(O.jsxs)(w.a,{container:!0,spacing:2,children:[Object(O.jsx)(w.a,{item:!0,xs:4,children:Object(O.jsx)(A.a,{label:"Age",placeholder:"65",variant:"outlined",fullWidth:!0,type:"number",value:this.state.age,onChange:function(t){return e.setState({age:t.target.value})},style:{paddingBottom:"4%"}})}),Object(O.jsx)(w.a,{item:!0,xs:4,children:Object(O.jsxs)(F.a,{variant:"outlined",fullWidth:!0,children:[Object(O.jsx)(L.a,{children:"Gender"}),Object(O.jsxs)(R.a,{label:"Gender",value:this.state.gender,onChange:function(t){return e.setState({gender:t.target.value})},children:[Object(O.jsx)(H.a,{value:0,children:"Female"}),Object(O.jsx)(H.a,{value:1,children:"Male"})]})]})}),Object(O.jsx)(w.a,{item:!0,xs:4,children:Object(O.jsx)(A.a,{label:"Total Proteins",placeholder:"6.8",variant:"outlined",fullWidth:!0,type:"number",value:this.state.totalProteins,onChange:function(t){return e.setState({totalProteins:t.target.value})},style:{paddingBottom:"4%"}})})]})}},{key:"secondColumn",value:function(){var e=this;return Object(O.jsxs)(w.a,{container:!0,spacing:2,children:[Object(O.jsx)(w.a,{item:!0,xs:6,children:Object(O.jsx)(A.a,{label:"Total Bilirubin",placeholder:"0.7",variant:"outlined",fullWidth:!0,type:"number",value:this.state.totalBilirubin,onChange:function(t){return e.setState({totalBilirubin:t.target.value})},style:{paddingBottom:"4%"}})}),Object(O.jsx)(w.a,{item:!0,xs:6,children:Object(O.jsx)(A.a,{label:"Alkaline Phosphatase",placeholder:"187",variant:"outlined",fullWidth:!0,type:"number",value:this.state.alkalinePhosphatase,onChange:function(t){return e.setState({alkalinePhosphatase:t.target.value})},style:{paddingBottom:"4%"}})})]})}},{key:"thirdColumn",value:function(){var e=this;return Object(O.jsxs)(w.a,{container:!0,spacing:2,children:[Object(O.jsx)(w.a,{item:!0,xs:6,children:Object(O.jsx)(A.a,{label:"Alamine Aminotransferase",placeholder:"16",variant:"outlined",fullWidth:!0,type:"number",value:this.state.alamineAminotransferase,onChange:function(t){return e.setState({alamineAminotransferase:t.target.value})},style:{paddingBottom:"4%"}})}),Object(O.jsx)(w.a,{item:!0,xs:6,children:Object(O.jsx)(A.a,{label:"Aspartate Aminotransferase",placeholder:"18",variant:"outlined",fullWidth:!0,type:"number",value:this.state.aspartateAminotransferase,onChange:function(t){return e.setState({aspartateAminotransferase:t.target.value})},style:{paddingBottom:"4%"}})})]})}},{key:"fourthColumn",value:function(){var e=this;return Object(O.jsxs)(w.a,{container:!0,spacing:2,children:[Object(O.jsx)(w.a,{item:!0,xs:6,children:Object(O.jsx)(A.a,{label:"Albumin",placeholder:"3.3",variant:"outlined",fullWidth:!0,type:"number",value:this.state.albumin,onChange:function(t){return e.setState({albumin:t.target.value})},style:{paddingBottom:"4%"}})}),Object(O.jsx)(w.a,{item:!0,xs:6,children:Object(O.jsx)(A.a,{label:"Albumin and Globulin Ratio",placeholder:"0.9",variant:"outlined",fullWidth:!0,type:"number",value:this.state.albuminGlobulinRatio,onChange:function(t){return e.setState({albuminGlobulinRatio:t.target.value})},style:{paddingBottom:"4%"}})})]})}},{key:"render",value:function(){return Object(O.jsx)("div",{style:{width:"95vw"},children:Object(O.jsxs)(w.a,{container:!0,direction:"row",alignItems:"center",justify:"center",style:{flexGrow:1,marginTop:"10vh"},spacing:5,children:[Object(O.jsx)(w.a,{item:!0,style:{minWidth:"30vw"},children:this.liverDiseaseForm()}),Object(O.jsx)(w.a,{item:!0,style:{minWidth:"30vw"},children:Object(O.jsx)(q,{data:this.state.results,title:"Liver Disease",accuracy:this.state.accuracy})})]})})}}]),a}(i.a.Component),Z=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(O.jsx)("div",{style:{height:"100vh",background:"radial-gradient(circle, rgb(212, 156, 156) 0%, rgb(110, 106, 106) 100%)"},children:Object(O.jsxs)(C.a,{children:[Object(O.jsx)(y,{}),Object(O.jsxs)(x.d,{children:[Object(O.jsx)(x.b,{path:"/heart-disease-prediction",component:function(){return Object(O.jsx)(Q,{})}}),Object(O.jsx)(x.b,{path:"/stroke-disease-prediction",component:function(){return Object(O.jsx)(U,{})}}),Object(O.jsx)(x.b,{path:"/liver-disease-prediction",component:function(){return Object(O.jsx)(X,{})}}),Object(O.jsx)(x.b,{render:function(){return Object(O.jsx)(x.a,{to:"/heart-disease-prediction"})}})]})]})})}}]),a}(i.a.Component);var $=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(Z,{})})},_=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,466)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),i(e),s(e),r(e)}))};r.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)($,{})}),document.getElementById("root")),_()}},[[408,1,2]]]);
//# sourceMappingURL=main.9b7dec63.chunk.js.map