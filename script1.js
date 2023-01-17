const calculateTemp = () =>{

    const numberTemp = document.getElementById('temp').value;
    //console.log(calculateTemp);
    const tempSelected = document.getElementById('temp_diff');
    const valuetemp=temp_diff.options[tempSelected.seletedIndex].value;
    
    const celTofah= (cel)=>{
        let Fahrenheit =Math.round((cel *9 / 5 )+ 32);
        return Fahrenheit;
    }

    const fahtocel= (fehr)=>{
        let Celsius =Math.round((fehr-32 ) * 5/9);
        return Celsius;
    }
    let result;
    if(valuetemp=='cel'){
        result=celTofah(numberTemp);
        document.getElementById('resultContainer').innerHTML= '=${result}Fahrenheit';
    }else
    {
        result=fahtocel(numberTemp);
        document.getElementById('resultContainer').innerHTML= '=${result}Celsius';


    }

}