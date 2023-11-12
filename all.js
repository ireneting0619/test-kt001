const bmiHistoryData = [];
const bmiStatesData = {
    "overThin": {
      "state": "過輕",
      "color": "藍色"
    },
    "normal": {
      "state": "正常",
      "color": "紅色"
    },
    "overWeight": {
      "state": "過重",
      "color": "澄色"
    },
    "mildFat": {
      "state": "輕度肥胖",
      "color": "黃色"
    },
    "moderateFat": {
      "state": "中度肥胖",
      "color": "黑色"
    },
    "severeFat": {
      "state": "重度肥胖",
      "color": "綠色"
    },
  };

function bmiStatesText (state){
    console.log(`您的體重${bmiStatesData[state].state}，健康指數為${bmiStatesData[state].color}`);
};



function printBmi(height, weight){
    let bmi = (weight/((height/100)**2)).toFixed(2);
    if(bmi < 18.5) {
        addData(bmi, "overThin")
        bmiStatesText ("overThin")

     }else if(18.5 <= bmi && bmi < 24){
        addData(bmi, "normal")
        bmiStatesText ("normal")

     }else if(24 <= bmi && bmi < 27){
        addData(bmi, "overWeight")
        bmiStatesText ("overWeight")

     }else if(27 <= bmi && bmi < 30){
        addData(bmi, "mildFat")
        bmiStatesText ("mildFat")
        
     }else if(30 <= bmi && bmi < 35){
        addData(bmi, "moderateFat")
        bmiStatesText ("moderateFat")
        
     }else if(30 <= bmi && bmi < 35){
        addData(bmi, "severeFat")
        bmiStatesText ("severeFat")
     }else{
        console.log("您的數值輸入錯誤，請重新輸入");
     };
};
function addData(bmi, state){
    let obj = {};
    obj.bmi = bmi;
    obj.state = state
    bmiHistoryData.push(obj);
    console.log(bmiHistoryData);
};

function showHistoryData(){
    const total = bmiHistoryData.length;
    const lastNum = total - 1;
    const lastState = bmiHistoryData[lastNum].state;
    console.log(lastNum);
    console.log(`您總共計算 ${lastNum} 次 BMI 紀錄，
    最後一次 BMI 指數為 ${bmiHistoryData[lastNum].bmi}，
    體重${bmiStatesData[lastState].state}！健康指數為${bmiStatesData[lastState].color}！」
    `);
};


// 第一階段：請寫 printBmi 函式，並印出對應狀態

printBmi(178, 20) 
// >> 印出 console.log 文字為「您的體重過輕」
printBmi(178, 70) 
// >> 印出 console.log 文字為「您的體重正常」
printBmi(178, 85)
// >> 印出 console.log 文字為「您的體重過重」
printBmi(178, 90)
// >> 印出 console.log 文字為「您的體重輕度肥胖」
printBmi(178, 110)
// >> 印出 console.log 文字為「您的體重中度肥胖」
printBmi(178, 130)
// >> 印出 console.log 文字為「您的體重重度肥胖」
printBmi("身高","體重")
// >> 印出 console.log 文字為「您的數值輸入錯誤，請重新輸入」


// 第二階段：請程式碼裡加入此變數，並嘗試運用此變數裡的資訊。

printBmi(178, 20) 
// >> 印出 console.log 文字為「您的體重過輕，健康指數為藍色」
printBmi(178, 70)
//  >> 印出 console.log 文字為「您的體重正常，健康指數為紅色」
printBmi(178, 85)
// >> 印出 console.log 文字為「您的體重過重，健康指數為澄色」
printBmi(178, 90)
// >> 印出 console.log 文字為「您的體重輕度肥胖，健康指數為黃色」
printBmi(178, 110)
// >> 印出 console.log 文字為「您的體重中度肥胖，健康指數為黑色」
printBmi(178, 130)
// >> 印出 console.log 文字為「您的體重重度肥胖，健康指數為綠色」
printBmi("身高","體重")
// >> 印出 console.log 文字為「您的數值輸入錯誤，請重新輸入」


// 第三階段：儲存每筆計算資料，多一個變數為 bmiHistoryData，並賦予空陣列來儲存計算物件資料，若數值輸入錯誤，則不儲存。

printBmi(178, 20) 
// >> 印出 console.log 文字為「您的體重過輕，健康指數為藍色」
printBmi(178, 70) 
// >> 印出 console.log 文字為「您的體重正常，健康指數為紅色」
printBmi(178, 85)
// >> 印出 console.log 文字為「您的體重過重，健康指數為澄色」
showHistoryData() 
// >> 印出 console.log 文字為「您總共計算 3 次 BMI 紀錄，最後一次 BMI 指數為 26.83，體重過重！健康指數為澄色！」
