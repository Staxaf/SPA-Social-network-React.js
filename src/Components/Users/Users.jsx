import React from 'react'
import User from "./User/User";
import css from './Users.module.css'
import Loader from 'react-loader-spinner'



let Users = (props) => {
    let userId = props.lastUserId

    return (
        <>
            {props.isFetching ? <div className="text-center">
                <Loader type="Oval"
                        color="#00BFFF"
                        height={40}
                        width={40}/>
            </div>: ''}
            <div>
                {props.state.usersData.map(user => {
                    if (user.isDisplay) {
                        userId = user.id
                        return <User uid={user.uid} id={user.id} photoUrl={user.photoURL} fullName={user.name}
                                     location={user.location}
                                     isFollow={user.isFollow} addFollow={props.addFollow}/>
                    }
                })}
                <div className={`${css.users__btn} ${props.state.usersData.length === userId ? css.display_none : ''}`}>
                    <button onClick={() => {
                        props.setUsers(userId, props.state.usersData)
                    }}>Show more
                    </button>
                </div>
            </div>
        </>
    )
}

export default Users;



