import HTTPService, {
  interpolateURL,
  withQueryString
} from '../services/HTTPService';

const patientAPI = {
  getPatients: '/patients',
  getPatientData: '/patients/:patientId'
};

const getPatients = (queryString = {}) =>
  HTTPService.request(withQueryString(patientAPI.getPatients, queryString));

const getPatientData = patientId => {
  const requestURL = interpolateURL(patientAPI.getPatientData, {
    patientId
  });
  return HTTPService.request(requestURL);
};

const patientHelper = {
  getPatients,
  getPatientData
};

export default patientHelper;
