import React from "react";

export default class InnResultItem extends React.PureComponent {
    render() {
        return (
            <div className={this.props.className}>
                <label className="form-label">{this.props.title}</label>
                <input className="form-control" type="text" value={this.props.value} onChange={() => { }} />
            </div>
        );
    }
}