var date =new Date()
//0-sunday,1-monday
var today=date.getDay()
switch(today){
    case 0:
        console.log("Today is Sunday")
        break
        case 1:
            console.log('Today is Monday')
            break
            case 2:
                console.log("Today is Tuesday")
                break
                case 3:
                    console.log("Today is wednesday")
                    break
                    case 4:
                        console.log("Today is Thursday")
                        break
                        case 5:
                            console.log('Friday')
                            break
                            case 6:
                                console.log('Today is saturday')
                                    break
                                    default:console.log('Not a valid Number')


                            
}