import React from 'react'

const reducer = (count, action) => {

    /* if(action.type==="Inc")
    {
        return (count=count+1)
    }
    if(action.type==="Dec")
    {
        let newNum=0;

        count >=1 ? (newNum=count-1):(newNum==0)
        return newNum;
    }
    return count; */
    switch (action.type) {
        case "Inc":
            return (count = count + 1)
        case "Dec":
            let newNum = 0;

            count >= 1 ? (newNum = count - 1) : (newNum == 0)
            return newNum
        default:
            return count;

    }

};

export default reducer