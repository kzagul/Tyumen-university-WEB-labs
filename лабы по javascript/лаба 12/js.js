// //Регулярное выражение
// let re = /(\d{1,2})([./-])(\d{1,2})\2(\d{2,4})/m

// let in1t = document.getElementById("startDate").value;
// let in2t = document.getElementById("endDate").value;

// let cntD1 = in1t.split(/[.,-\/]/)
// let cntD2 = in2t.split(/[.,-\/]/)
// cntD1.reverse()

// var Date1 = new Date(cntD1[0], cntD1[1], cntD1[2]);
// var Date2 = new Date(cntD2[0], cntD2[1], cntD2[2]);

// let func1 = () => {
//     let res = Math.floor((Date2.getTime() - Date1.getTime()) / (1000 * 60 * 60 * 24))
//     document.getElementById("result").placeholder = res;
// }

// let func3 = () => {
//     let Date1W = Date1;
//     var numWorkDays = 0;
//     Date.prototype.addDays = function (days) {
//         var date = new Date(this.valueOf());
//         date.setDate(date.getDate() + days);
//         return date;
//     }
//     while (Date1W <= Date2) {
//         if (Date1W.getDay() !== 0 && Date1W.getDay() !== 6) {
//             numWorkDays++;
//         }
//         Date1W = Date1W.addDays(1);
//     }
//     let res = numWorkDays - 1;
//     document.getElementById("result").value = res;
// }

// let func2 = () => {
//     let workDays = func3()
//     let days = func1()
//     let res = days - workDays

//     document.getElementById("result").value = res;
// }

// let func4 = () => {
//     var oneWeek = 1000 * 60 * 60 * 24 * 7;
//     var date1_ms = Date1.getTime();
//     var date2_ms = Date2.getTime();
//     var difference_ms = Math.abs(date1_ms - date2_ms);
//     let res = Math.floor(difference_ms / oneWeek);
//     document.getElementById("result").value = res;
// }

// let func5 = () => {
//     let res = Date1 >= Date2 ? (Date1.getFullYear() * 12 + Date1.getMonth()) - (Date2.getFullYear() * 12 + Date2.getMonth()) - (Date1.getDate() < Date2.getDate()) : -countFullMonth(Date2, Date1);
//     document.getElementById("result").value = res;
// }


// document.querySelector("#submi2t").onclick = function (e){
//     e.preventDefault();

//     //считываем value данных
//     let startDate = document.getElementById("startDate").value;
//     let endDate = document.getElementById("endDate").value;
//     console.log(endDate)

//     //массив день месяц год
//     let arr = startDate.split(/[.,-\/]/) //разбиваем на массив
//     arr.reverse()
//     let convStartDate = arr.join("-");
//     let newStartDate = new Date(convStartDate);

//     //подводим endDate под формат тип
//     let newP = endDate.split(/[.,-\/]/)
//     newP.reverse()
//     newNewP = newP.join("-");

//     console.log(convStartDate)
//     console.log(newStartDate)

//     let mdyToDate = (start) => {
//         var d = start.split(/[.,-\/]/);

//         var mon = parseInt(d[0]);
//         var day = parseInt(d[1]);
//         var year = parseInt(d[2]);

//         if (mon < 10) {
//             mon = "0" + parseInt(d[0]);
//         } 
//         else{
//             mon = parseInt(d[0])
//         }

//         if (day < 10) {
//             mon = "0" + parseInt(d[1]);
//         }
//         else {
//             day = parseInt(d[1])
//         }

//         if (year <1000) {
//             mon = "00" + parseInt(d[2]);
//         }
//         else {
//             day = parseInt(d[2])
//         }

//         if (day <= 31 && mon <= 12)
//             return new Date(year, mon - 1, day);

//         //return null;
//     }


//     let data1 = mdyToDate(startDate);
//     let data2 = mdyToDate(newNewP);


//     // console.dir(startDate)
//     // console.dir(endDate)
//     // console.dir(newNewP)

//     // console.dir(data1)
//     // console.log(typeof(endDate))
//     // console.dir(data2)
//     // console.log(typeof(endDate))


//     if (startDate.match(re) != null) {
//         console.log(startDate);
//         console.log(endDate);
//     }
//     else {
//         alert("Начало периода введено не корректно")
//     }



//     // var re = new RegExp("10.2.2011");
//     // //let exp = /10.2.2011/;
//     // var reg = /^\d{1,2}\.\d{1,2}\.\d{4}$/;

//     // //
//     // let startD = document.getElementById("endDate").value;
//     // let strStartD = String(startD).split("-");


//     // //
//     // let endD = document.getElementById("endDate").value;
//     // let strEndD = String(endD).split("-");

//     // console.log(strEndD)
// }