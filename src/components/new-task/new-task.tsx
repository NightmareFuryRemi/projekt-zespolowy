import React from "react";

const NewTask: React.FC = () => {

    return(
        <div className="new-task">
            <input
            type="text"
            className="new-task-title"
            placeholder="Name a task">
            </input>
        </div>
    );


};

export default NewTask;