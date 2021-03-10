//import Api from "./services/Api.js";
//import Api from "./test/ApiNegative.js";
import Api from "./test/ApiPositive.js";
import RepositoryCheck from "./services/RepositoryCheck.js";
import ServiceCheckSingleInn from "./services/ServiceCheckSingleInn.js";
import ServiceCheckInnClipboard from "./services/ServiceCheckInnClipboard.js";
import ServiceCheckInnFile from "./services/ServiceCheckInnFile.js";
import ServiceHistory from "./services/ServiceHistory.js";

const BASE_URL = "api/1.0/";

const api = new Api(BASE_URL);
const repositoryCheck = new RepositoryCheck(api);
const serviceCheckSingleInn = new ServiceCheckSingleInn(api);
const serviceCheckInnClipboard = new ServiceCheckInnClipboard(repositoryCheck);
const serviceCheckInnFile = new ServiceCheckInnFile(repositoryCheck);
const serviceHistory = new ServiceHistory(repositoryCheck);

export { serviceCheckSingleInn, serviceCheckInnClipboard, serviceCheckInnFile, serviceHistory }