import React, { Component } from 'react';
import styled from 'styled-components';

import Chip from '../Chip';

const accordionList = [
  {
    id: 'medication',
    header: 'Medications',
    icon: 'keyboard_arrow_right'
  },
  {
    id: 'allergies',
    header: 'Allergies',
    icon: 'keyboard_arrow_right'
  },
  {
    id: 'vitals',
    header: 'Vitals',
    icon: 'keyboard_arrow_right'
  }
];

const medications = [
  {
    id: 1,
    name: 'Thyroxin P 160mg',
    dosage: '3 times a day',
    allergic: false,
    dosageMissed: 2,
    prescriptionDate: '02/11/2016'
  },
  {
    id: 2,
    name: 'Thyrocare ',
    dosage: '3 times a day',
    allergic: true,
    dosageMissed: 2,
    prescriptionDate: '02/01/2016'
  }
];

const vitals = [
  {
    id: 1,
    displayName: 'Blood Pressure (mmHg)',
    value: '130/85',
    date: 'Jun 21, 16 10:21pm'
  },
  {
    id: 2,
    displayName: 'Heart Rate(BPM)',
    value: '72',
    date: 'Jun 21, 16 10:21pm'
  }
];

const Wrapper = styled.div`
  padding: 16px;
  background-color: #f8f8f8;
`;

const AccordionListItems = styled.div`
  ul {
    li {
      border-bottom: 1px solid #e1e4e7;
      font-size: 1.8rem;

      &:last-child {
        border-bottom: 0;
      }

      div.head {
        padding: 16px 0;
        margin: 0 16px;
        position: relative;

        > span {
          position: absolute;
          right: 0;
        }
      }

      div.content {
        padding: 16px;
        border-top: 1px solid #e1e4e7;
      }
    }
  }
`;

const AccordionWrapper = styled.div`
  background-color: #fff;
  border: 1px solid #e1e4e7;
  border-radius: 3px;
`;

const MedicationWrapper = {
  borderBottom: '1px solid #e1e4e7',
  marginTop: '5px'
};

const MedicationName = {
  color: '#D93737',
  fontSize: '1.8rem',
  marginBottom: '4px'
};

const MedicationTemplate = () => {
  const chipWidth = {
    maxWidth: '134px',
    display: 'inline-block',
    marginRight: 10,
    marginBottom: 10
  };

  const PrescriptionDate = styled.p`
    font-size: 1.6rem;
    margin-bottom: 5px;

    span {
      color: #8c8c8c;
    }
  `;

  return (
    <div>
      {medications.map((m, i) => (
        <div key={i} style={MedicationWrapper}>
          <div style={MedicationName}>{m.name}</div>
          <PrescriptionDate>
            Prescribed On: <span>{m.prescriptionDate}</span>
          </PrescriptionDate>
          {m.dosageMissed && (
            <Chip
              text={`${m.dosageMissed} Dosage Missed`}
              style={chipWidth}
              className="chip warning"
            />
          )}
          {m.allergic && (
            <Chip text="Allergic" style={chipWidth} className="chip alert" />
          )}
        </div>
      ))}
    </div>
  );
};

const Allergies = styled.div`
  p {
    color: #8c8c8c;
    font-size: 1.6rem;
    font-style: italic;
  }
`;
const AllergiesTemplate = () => {
  return (
    <Allergies>
      <p>No allergies available for this patient.</p>
    </Allergies>
  );
};

const VitalWrapper = styled.div``;

const VitalTemplate = () => {
  return (
    <VitalWrapper>
      <ul>
        {vitals.map((vital, i) => {
          return <li key={i}>{vital.value}</li>;
        })}
      </ul>
    </VitalWrapper>
  );
};

class AccordionList extends Component {
  updatePanel(index) {
    const contentSections = document.getElementsByClassName('content');
    /*contentSections[index].classList.add('active');
    const current = document.querySelector('.content.active');
    current*/
    for (var i = 0; i <= contentSections.length; i++) {
      if (index === i) {
        contentSections[index].removeAttribute('hidden');
      } else {
        if (contentSections[i]) {
          contentSections[i].setAttribute('hidden', true);
        }
      }
    }
  }

  getTemplate(id) {
    if (id === 'medication') {
      return MedicationTemplate();
    } else if (id === 'allergies') {
      return AllergiesTemplate();
    } else if (id === 'vitals') {
      return VitalTemplate();
    }
  }

  render() {
    return (
      <Wrapper>
        <AccordionWrapper>
          <AccordionListItems>
            <ul>
              {accordionList.map((list, i) => {
                return (
                  <li key={i}>
                    <div
                      className="head"
                      onClick={() => {
                        this.updatePanel(i);
                      }}
                    >
                      {list.header}
                      <span>
                        <i className="material-icons">{list.icon}</i>
                      </span>
                    </div>
                    <div className="content" hidden>
                      {this.getTemplate(list.id)}
                    </div>
                  </li>
                );
              })}
            </ul>
          </AccordionListItems>
        </AccordionWrapper>
      </Wrapper>
    );
  }
}
export default AccordionList;
