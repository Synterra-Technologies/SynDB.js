const fs = require('fs');

class loadDB {
    constructor(file, autoSave) {
        this.file = file;
        this.settings = autoSave;
        this.data = fs.readFileSync(file, 'utf8');
        this.data = JSON.parse(this.data);
        this.data = this.data || {};
    }
    getData() {
        return this.data;
    }
    getFile() {
        return this.file;
    }
    set(key, data) {
        this.data[key] = data;
        if (this.settings == true) {
            this.save();
        }
        else {
            return this.data;
        }
    }
    save() {
        fs.writeFileSync(this.file, JSON.stringify(this.data));
    }
    delete(key) {
        delete this.data[key];
    }
    clear() {
        this.data = {};
    }
    create_list(key) {
        this.data[key] = [];
    }
    push(key, data) {
        this.data[key].push(data);
        if (this.data[key].length > 0) {
    }
 }
    pop(key) {
        this.data[key].pop();
    }
    get(key) {
        return this.data[key];
    }
    get_list(key) {
        return this.data[key];
    }
}
module.exports = loadDB;