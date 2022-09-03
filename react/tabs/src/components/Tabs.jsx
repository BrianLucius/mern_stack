import { useState } from 'react';
import styles from '../css/Tabs.module.css'

const Tabs = props => {
    const selectStatus = styles.selected;
    const unselectStatus = styles.unselected;
    
    const [prevButton, setPrevButton] = useState("");
    
    const onClickHandler = (e, tabItem) => {
        if (prevButton) {prevButton.target.className = unselectStatus};
        setPrevButton(e);
        e.target.className = selectStatus;
        props.onNewContent(tabItem.content);
    }

    return (
        <div>
            { props.tabs.map( (tabItem, index) => 
                <button className={ unselectStatus } key={ index } onClick={ (e) => onClickHandler(e, tabItem) }>{ tabItem.title }</button>)}
        </div>
    );
}

export default Tabs