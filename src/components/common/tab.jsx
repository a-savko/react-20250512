import { useState } from 'react';

function getTabById(id, tabs) {
  return tabs.filter((tab) => tab.id === id)[0];
}

function onTabClick(event, callback) {
  const tabTarget = event.target;
  const activeTabId = tabTarget.getAttribute('data-tab-id');

  callback(activeTabId);
}

export const Tabs = ({ children }) => {
  const [activeTabId, setActiveTabId] = useState();

  if (!children || !children.length) {
    return <>no data</>;
  }

  const defaultTabId = children[0].id;
  setActiveTabId(defaultTabId);

  return (
    <>
      <div className='tab-titles'>
        {children.map(({ id, title }) => {
          return (
            <button
              data-tab-id={id}
              key={id}
              disabled={id == activeTabId}
              onClick={(event) => onTabClick(event, setActiveTabId)}
            >
              {title}
            </button>
          );
        })}
      </div>

      <div className='tab-content'>
        {getTabById(activeTabId, children)?.content}
      </div>
    </>
  );
};
