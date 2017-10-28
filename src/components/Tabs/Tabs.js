import React, { Component } from 'react';
import '@material/tabs/dist/mdc.tabs.css';
import { MDCTabBar } from '@material/tabs/dist/mdc.tabs';

const tabList = [
  {
    id: 'summary',
    icon: 'assignment',
    displayName: 'Summary'
  },
  {
    id: 'clinical-data',
    icon: 'local_hospital',
    displayName: 'Clinical Data'
  },
  {
    id: 'care-team',
    icon: 'group',
    displayName: 'Care Team'
  }
];

class Tabs extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const panels = document.querySelector('.panels');
    const activePanel = panels.querySelector('.panel.active');
    activePanel.removeAttribute('hidden');
    const tabBar = new MDCTabBar(this.tabs);

    tabBar.tabs.forEach(function(tab) {
      tab.preventDefaultOnClick = true;
    });
  }

  updatePanel(index) {
    var activePanel = this.panels.querySelector('.panel.active');
    if (activePanel) {
      activePanel.classList.remove('active');
      activePanel.setAttribute('hidden', true);
    }
    var newActivePanel = this.panels.querySelector(
      '.panel:nth-child(' + (index + 1) + ')'
    );
    if (newActivePanel) {
      newActivePanel.classList.add('active');
      newActivePanel.removeAttribute('hidden');
    }
  }

  render() {
    return (
      <div>
        <section className="mdc-elevation--z1">
          <nav
            ref={tabs => {
              this.tabs = tabs;
            }}
            className="mdc-tab-bar mdc-tab-bar--icons-with-text"
          >
            {tabList.map((tab, i) => {
              return (
                <span
                  key={i}
                  className="mdc-tab mdc-tab--with-icon-and-text mdc-tab--active"
                  data-trigger={tab.id}
                  href={`#${tab.id}`}
                  onClick={() => {
                    this.updatePanel(i);
                  }}
                >
                  <i
                    className="material-icons mdc-tab__icon"
                    aria-hidden="true"
                  >
                    {tab.icon}
                  </i>
                  <span className="mdc-tab__icon-text">{tab.displayName}</span>
                </span>
              );
            })}
            <span className="mdc-tab-bar__indicator" />
          </nav>
        </section>
        <section>
          <div
            className="panels"
            ref={panels => {
              this.panels = panels;
            }}
          >
            <div className="panel active" hidden id="summary" role="tabpanel">
              Item One
            </div>
            <div className="panel" hidden id="clinical-data" role="tabpanel">
              Item Two
            </div>
            <div className="panel" hidden id="care-team" role="tabpanel">
              Item Three
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Tabs;
