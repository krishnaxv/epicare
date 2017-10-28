import HTTPService, { interpolateURL } from '../services/HTTPService';

const patientAPI = {
  getPatients: '/patients',
  getPatientData: '/patients/:patientId'
};

const getPatients = () => HTTPService.request(patientAPI.getPatients);

const getPatientData = patientId => {
  const requestURL = interpolateURL(patientAPI.getUserProjects, {
    patientId
  });
  return HTTPService.request(requestURL);
};

const patientHelper = {
  getPatients,
  getPatientData
};

export default patientHelper;
