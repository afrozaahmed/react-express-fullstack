import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import * as mutations from '../store/mutation';

const TaskDetails = ({
    id,
    comments,
    task,
    isComplete,
    groups,
    setTaskComplete,
    setTaskGroup,
    setTaskName
})=>(
    <div>
        <input onChange={setTaskName}value={task.name}/>
        <div>
            <button onClick={()=>setTaskComplete(id,!isComplete)}>{isComplete ? `Reopen`:`Complete`}</button>
        </div>
        <div>
            <select onChange={setTaskGroup} value={task.group}>
                {groups.map((group)=>(
                    <option key={group.id} value={group.id}>
                        {group.name}
                    </option>
                ))}
            </select>
            <Link to="/dashboard">
                    <button>Done</button>
            </Link>
        </div>
    </div>
)

const mapStateToProps = (state,ownProps) => {
    let id = ownProps.match.params.id;
    let task=state.tasks.find(task=>task.id === id);
    let groups = state.groups;
    return {
        id,
        task,
        groups,
        isComplete:task.isComplete
    }
};

const mapDispatchToProps = (dispatch,ownProps)=>{
    const id = ownProps.match.params.id;
    return {
        setTaskComplete(id,isComplete){
            dispatch(mutations.setTaskComplete(id,isComplete))
        },
        setTaskGroup(e){
            dispatch(mutations.setTaskGroup(id,e.target.value));
        },
        setTaskName(e){
            dispatch(mutations.setTaskName(id,e.target.value));
        }
    }
}
export const ConnectedTaskDetails = connect(mapStateToProps,mapDispatchToProps)(TaskDetails);