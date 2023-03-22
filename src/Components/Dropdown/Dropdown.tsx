import React, {useRef, useState} from 'react'
import {DropdownProps} from "./Dropdown.interface";

export const Dropdown = (props: DropdownProps) => {
    const ref = useRef(null);
    const [enable, setEnable] = useState<boolean>(false);
    const switchEnableStatus = () => setEnable(!enable);
    return (
        <div ref={ref} onBlur={switchEnableStatus} onClick={switchEnableStatus}>
            <label> {props.label }</label>
            {
                enable && <div>
                    {
                        props.options.map(option => (
                            <div> {option.label}</div>
                        ))
                    }
                </div>
            }
        </div>
    )
}