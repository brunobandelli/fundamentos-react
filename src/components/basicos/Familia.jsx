/* eslint-disable import/no-anonymous-default-export */
import React, {cloneElement} from "react";

export default props =>{

    return (
        <div>
               {props.children.map((child, i) => {                          //PASSA O SOBRENOME DO ELEMENTOPAI
                   return cloneElement(child, { ...props, key: i});         //PARA TODOS OS ELEMENTOS FILHOS
               })}
        </div>
    )

} 