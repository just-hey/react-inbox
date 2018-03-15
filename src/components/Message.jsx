import React from 'react'


const Labels = ({label}) => {
    return <span className="label label-warning">{label}</span>
}

const Message = ({email, toggle}) => {
    return (
        <div>
            <div className={`row message ${(email.read) ? 'read' : 'unread'} ${(email.selected) ? 'selected' : ''}`}>
                <div className={`col-xs-1`}>
                    <div className="row">
                    <div className="col-xs-2">
                        <input type="checkbox" checked={`${(email.selected) ? 'checked' : ''}`} />
                    </div>
                    <div className="col-xs-2">
                        <i onClick={(e) => toggle(e, email.id)} className={`star fa ${(email.starred) ? 'fa-star' : 'fa-star-o'}`}></i>
                    </div>
                    </div>
                </div>
                <div className="col-xs-11">
                    {email.labels.map((label, i) => <Labels key={i} label={label} />)}
                    <a href="">
                    {email.subject}
                    </a>
                </div>
            </div>
        </div>
    )
}


export default Message