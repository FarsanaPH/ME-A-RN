weatherData=[
    {district:'Thrissur',weather:32},
    {district:'Kottayam',weather:29},
    {district:'Palakkad',weather:34},
    {district:'Ernakulam',weather:33},

    {district:'Thrissur',weather:29},
    {district:'Kottayam',weather:30},
    {district:'Palakkad',weather:32},
    {district:'Ernakulam',weather:31}
]
//print district with its highest temparature
//output: {Thrissur:32, Kottayam:30,Palakkad:34,Ernakulam:33}

op ={}

for(let data of weatherData){ //{district:'Thrissur',weather:32},{district:'Kottayam',weather:29},
    dist = data.district // Thrissur // Kottayam // Thrissur // Kottayam
    currTemp = data.weather // 32 //29 //30
    // console.log(data);
    if(dist in op){ // Thrissur // Kottayam // Thrissur // Kottayam
        oldTemp = op[dist] // 32 = Thrissur // 29 = Kottayam
        if(oldTemp>currTemp){ // 32 > 29 // 29 > 30
            op[dist] = oldTemp // 32
        }else{
            op[dist] = currTemp // Kottayam : 30
        }
    }else{
        op[dist] = currTemp // Thrissur : 32 // Kottayam : 29 // Palakkad : 34 //  Ernakulam : 33
    } 
}
console.log(op);
