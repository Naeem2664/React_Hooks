import { React, useContext } from 'react'
import { AppContext } from './useContext'

const Grandchild = () => {

    const userData = useContext(AppContext)
    return (
        <>
            <div className="context">
                <h1>UseContext Section</h1>
                <h3>ID: {userData.id}</h3>
                <h3>Name: {userData.name} </h3>
                <h3>Father name: {userData.father_name} </h3>
                <h3>Class: {userData.class} </h3>
            </div>
        </>
    )
}
export default Grandchild