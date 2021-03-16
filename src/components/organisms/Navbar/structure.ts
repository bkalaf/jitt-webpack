function itemBody(name: string, route: string, ...fromRoutes: string[]) {
    return { name, route, fromRoutes };
}
function item(tag: a | div, name: