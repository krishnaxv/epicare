import HTTPService, { interpolateURL } from '../services/HTTPService';

const patientAPI = {
  getPatients: '/patients',
  getPatientData: '/patients/:patientId',
  getPatientSummary: '/patients/:patientId/summary',
  getCareTeam: '/patients/:patientId/care_team'
};

const getPatients = () => HTTPService.request(patientAPI.getPatients);

const getPatientData = patientId => {
  const requestURL = interpolateURL(patientAPI.getPatientData, {
    patientId
  });
  return HTTPService.request(requestURL);
};

const getPatientSummary = patientId => {
  const requestURL = interpolateURL(patientAPI.getPatientSummary, {
    patientId
  });
  return HTTPService.request(requestURL);
};

const getCareTeam = patientId => {
  const requestURL = interpolateURL(patientAPI.getCareTeam, {
    patientId
  });
  return HTTPService.request(requestURL);
};

const patientHelper = {
  getPatients,
  getPatientData,
  getPatientSummary,
  getCareTeam
};

export default patientHelper;
