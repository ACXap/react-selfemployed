import { convertInnInfoToString } from "./Converters/ConverterInn";
import { createPlainTextFile } from "./WorkFiles/CreateFiles";

export default class ServiceHistory {
    repositoryCheck;
    onUpdateHistory = () => { console.warn("no listener onUpdateHistory") };

    constructor(repositoryCheck) {
        this.repositoryCheck = repositoryCheck;
        this.repositoryCheck.onAddTask = (task) => this.addTask(task);
    }

    addTask(task) {
        const list = this.getHistory().filter(h => h.taskId !== task.taskId);
        task.id = list.length + 1;
        task.date = new Date(task.dateStatus).toLocaleString();
        list.push(task);
        this.setHistory(list);
    }

    updateTask(taskId, status) {
        const list = this.getHistory();
        const currentTask = list.find(h => h.taskId === taskId);

        if (currentTask) {
            this.setTaskStatus(currentTask, status.status, status.message, new Date(status.dateStatus));
            this.setHistory(list);
        } else {
            console.error("task not found");
        }
    }

    async downloadTask(taskId) {
        const data = await this.repositoryCheck.getResult(taskId);
        const list = convertInnInfoToString(data);
        const dataFile = createPlainTextFile(list);

        return dataFile;
    }

    getHistory() {
        return JSON.parse(window.localStorage.getItem("historyCheckInn")) ?? [];
    }

    setHistory(list) {
        window.localStorage.setItem("historyCheckInn", JSON.stringify(list.map((h, index) => {
            h.id = index + 1;
            return h;
        })));
        this.onUpdateHistory(list);
    }

    removeTask(taskId) {
        const newList = this.getHistory().filter(t => t.taskId !== taskId);
        this.setHistory(newList);
    }

    async updateStatusTask(taskId) {
        this.updateTask(taskId, { status: "START", message: "", dateStatus: new Date() });
        try {
            const status = await this.repositoryCheck.getStatus(taskId);
            this.updateTask(taskId, status);
        } catch (e) {
            this.updateTask(taskId, { status: "ERROR", message: e.message, dateStatus: new Date() });
        }
    }

    setTaskStatus(task, status, message, date) {
        task.status = status;
        task.message = message;
        task.date = date.toLocaleString();
    }
}