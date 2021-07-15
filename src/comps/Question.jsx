import { useState } from 'react'
import { FaPlus, FaMinus} from 'react-icons/fa'


function Question({title, info}) {
    const [toggle, setToggle] = useState(false)
    return (
        <div className="question">
            <div className='title-container'>
                <h2>{title}</h2>
                <div className='icon' onClick={() => setToggle(!toggle)}>
                    { toggle ? <FaMinus /> : <FaPlus /> }</div>
            </div>
            <p className='text'>{ toggle && info}</p>
        </div>
    )
}

export default Question
