import React from "react";
import Aux from "../../hoc/Aux";

const ClientViewEditSummary = (props) => {
    //I want ot click on a a name and execute a method


    return (
        <Aux>
            <h3>Client Details</h3>
            <p>Delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to checkout?</p>
        </Aux>
    )
}

export default ClientViewEditSummary;