import React from "react";

function Links(props){
    return (
        <div>
            <h3>Links
                <a href={props.github}>"https://github.com/liza"</a>
                <a href={props.linkedIn}>"https://www.linkedin.com/in/liza/"</a>
            </h3>

        </div>
    )
}

export default Links; 