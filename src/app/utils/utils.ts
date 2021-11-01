export default class Utils {
    static list_to_tree(list: any[]) {
        const map: any = {}, roots: any = [];
        let node, i;

        for (i = 0; i < list.length; i += 1) {
            map[list[i].sys_id] = i; // initialize the map
            list[i].children = []; // initialize the children
        }

        for (i = 0; i < list.length; i += 1) {
            node = list[i];
            if (node.parent && node.parent.value) {
                const parentVal = node.parent && node.parent.value;
                const index = map[parentVal];
                list[index] && list[index].children.push(node);
            } else {
                roots.push(node);
            }
        }
        return roots;
    }
}