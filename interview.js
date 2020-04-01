/**
 * Created by Yangweiqing
 * 2020/3/31
 */
class Tournament {

    constructor() {
        this.results = []
        this.win = 3;
        this.draw = 1;
        this.loss = 0;
    }

    viewResults(resultStr) {
        let result = resultStr.split(";")
        if (result.length == 3) {
            try {
                this.results[result[0]] = this.score(result[2], result[0]);
                this.results[result[1]] = this.score(result[2] === "win" ?
                    "loss" : result[2] === "draw" ?
                        "draw" : result[2] === "loss" ?
                            "win" : "error", result[1]);
            } catch (e) {
                throw new Error(e);
            }
        } else {
            throw new Error("输入的结果格式错误");
        }
        return this;
    }

    score(type, name) {
        let row = {};
        if (this.results.hasOwnProperty(name)) {
            row = this.results[name]
        } else {
            row = {
                MP: 0,
                W: 0,
                D: 0,
                L: 0,
                P: 0
            }
        }
        row.MP++;
        switch (type) {
            case "win":
                row.W++;
                row.P += this.win;
                break;
            case "loss":
                row.L++;
                row.P += this.loss;
                break;
            case "draw":
                row.D++;
                row.P += this.draw;
                break;
            default:
                throw new Error("计算结果格式错误");
        }
        return row;
    }
}

class OrderedLinkList {

    constructor() {
        this.result = [];
    }

    sortList(list) {
        let newList = list.filter(item => {
            Object.values(item).length == 1;
        }).map(item => {
            item.id;
        });
        list.map(item => {
            if (item.hasOwnProperty("before")) {
                newList.splice(newList.indexOf(item.before), 0, item.id);
            } else if (item.hasOwnProperty("after")) {
                newList.splice(newList.indexOf(item.after) + 1, 0, item.id);
            } else if (item.hasOwnProperty("last")) {
                newList.push(item.id);
            } else if (item.hasOwnProperty("first")) {
                newList.unshift(item.id);
            }
        })
        this.result = newList;
        return this;
    }

}

class CreateTreefromFlatData {

    constructor() {
        this.result = [];
        this.badResult = [];
    }

    tree(list) {
        let node = [];
        list.forEach((item, index) => {
            item.index = index;
            node[item.id] = item;git
        })
        list.forEach((item) => {
            if (item.hasOwnProperty("parentId")) {
                if (!list.some(this.hasSomeNode(item.parentId))) {
                    /**
                     * 将找不到父节点的加入异常组里
                     */
                    item.bad = true;
                    this.badResult.push(item)
                } else {
                    if (node[item.parentId]) {
                        let pItem = list[node[item.parentId].index];
                        if (!pItem.children) {
                            pItem.children = [];
                        }
                        pItem.children.push(item);
                        item.re = true
                    }
                }
            }
        })
        let newList = list.filter(item => !item.re);
        this.result = newList.filter(item => !item.bad);
        return this;
    }

    hasSomeNode(id) {
        return node => node.id == id;
    }

}
