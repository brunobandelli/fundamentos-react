/* eslint-disable import/no-anonymous-default-export */
// eslint-disable-next-line import/no-anonymous-default-export

export default props => {
    
    const elseChild = props.children.filter(child => {
        return child.type && child.type.name === 'Else'
    })[0]

    const ifChildren = props.children.filter(child => {
        return child !== elseChild
    })

    if(props.test){
        return ifChildren
    } else if(elseChild) {
        return elseChild
    } else {
        return false
    }
}


export const Else = props => props.children


// export default props => {
//     if(props.test) {
//         return props.children
//     } else {
//         return false
//     }
// }

// export const Else = props => props.children

