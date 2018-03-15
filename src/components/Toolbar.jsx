import React from 'react'

const Toolbar =  ({ data, counter, selectAll, selectedList, markAsRead, markAsUnread, removedSelected, addLabel,
    removeLabel }) => {

    let anySelected = () => {
        if (selectedList.length === 0 || !data) return 'fa fa-square-o'
        else if (selectedList.length > 0 && selectedList.length < data.length) return 'fa fa-minus-square-o'
        else return 'fa fa-check-square-o'
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

                <select onChange={(e) => addLabel(selectedList, e.target.value)} className="form-control label-select">
                <option>Apply label</option>
                <option value="dev">dev</option>
                <option value="personal">personal</option>
                <option value="gschool">gschool</option>
                </select>

                <select onChange={(e) => removeLabel(selectedList, e.target.value)} className="form-control label-select">
                <option>Remove label</option>
                <option value="dev">dev</option>
                <option value="personal">personal</option>
                <option value="gschool">gschool</option>
                </select>

                <button onClick={(e) => removedSelected(selectedList)} className="btn btn-default">
                <i className="fa fa-trash-o"></i>
                </button>
            </div>
        </div>
    )
}

export default Toolbar