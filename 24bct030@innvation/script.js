//java script object
const obj={
    firstname:"madhu",
    lastname:"mitha",
    age:19,
    graduated:false,
    joining_date:new Date("8/9/2023"),
    number_of_days:()=>{
        let curr = new Date()
        return curr - obj.joining_date
       
    }
    
}
let{firstname,lastname,age,graduated,joining_date,number_of_days}=obj
console.log(Math.floor(number_of_days()/(1000*3600*24)))