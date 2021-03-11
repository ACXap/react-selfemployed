//import Api from "./services/Api.js";
//import Api from "./test/ApiNegative.js";
import Api from "./test/ApiPositive.js";
import RepositoryCheck from "./services/RepositoryCheck.js";
import ServiceCheckSingleInn from "./services/ServiceCheckSingleInn.js";
import ServiceCheckClipboard from "./services/ServiceCheckClipboard.js";
import ServiceCheckFile from "./services/ServiceCheckFile.js";
import ServiceHistory from "./services/ServiceHistory.js";

const BASE_URL = "api/1.0/";

const api = new Api(BASE_URL);
const repositoryCheck = new RepositoryCheck(api);
const serviceCheckSingleInn = new ServiceCheckSingleInn(repositoryCheck);
const serviceCheckClipboard = new ServiceCheckClipboard(repositoryCheck);
const serviceCheckFile = new ServiceCheckFile(repositoryCheck);
const serviceHistory = new ServiceHistory(repositoryCheck);

export { serviceCheckSingleInn, serviceCheckClipboard, serviceCheckFile, serviceHistory }