import { Component } from "react";
import './styles.css';

export class Button extends Component{
    render() {
        const {text , onClick , disabled} = this.props;
        return (
            <div className="container-btn">
                <button 
                    onClick={onClick} 
                    className="btn"
                    disabled={disabled}
                >
                    {text}
                </button>
            </div>
        )
    }
}