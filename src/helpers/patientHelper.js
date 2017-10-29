import HTTPService, {
  interpolateURL,
  withQueryString
} from '../services/HTTPService';

const patientAPI = {
  getPatients: '/patients',
  getPatientData: '/patients/:patientId',
  getPatientSummary: '/patients/:patientId/summary',
  getCareTeam: '/patients/:patientId/care_team'
};

const getPatients = (queryString = {}) =>
  HTTPService.request(withQueryString(patientAPI.getPatients, queryString));

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
const searchPatients = (queryString = {}) =>
  HTTPService.request(withQueryString(patientAPI.getPatients, queryString));

const patientHelper = {
  getPatients,
  getPatientData,
  getPatientSummary,
  getCareTeam,
  searchPatients
};

export default patientHelper;
