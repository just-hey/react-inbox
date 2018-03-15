import React from 'react'

const Toolbar =  ({ counter, selectAll, selectedList, markAsRead, markAsUnread }) => {

    let anySelected = () => {
        if (selectedList.includes(true)) {
            return 'fa fa-check-square-o'
        } else {
            return 'fa fa-minus-square-o'
        }
    }

        return (
        <div className="row toolbar">
            <div className="col-md-12">
                <p className="pull-right">
                <span className="badge badge">{counter}</span>
                unread messages
                </p>

                <button onClick={(e)=> selectAll()} className="btn btn-default">
                <i className={anySelected()}></i>
                </button>

                <button onClick={(e) => markAsRead(selectedList)} className="btn btn-default">
                Mark As Read
                </button>

                <button onClick={(e) => markAsUnread(selectedList)} className="btn btn-default">
                Mark As Unread
                </button>

                <select className="form-control label-select">
                <option>Apply label</option>
                <option value="dev">dev</option>
                <option value="personal">personal</option>
                <option value="gschool">gschool</option>
                </select>

                <select className="form-control label-select">
                <option>Remove label</option>
                <option value="dev">dev</option>
                <option value="personal">personal</option>
                <option value="gschool">gschool</option>
                </select>

                <button className="btn btn-default">
                <i className="fa fa-trash-o"></i>
                </button>
            </div>
        </div>
    )
}

export default Toolbar