Surfaces.prototype.hyperbolicparaboloid = (count = 20) => {
    color1 = '#FFFFFF';
    color2 = '#000000';
    const points = [];
    const edges = [];
    const polygons = [];
    const size = 10;
    const delta = size / count;
     //нарисовать точки
    for (let i = 0; i < count; i++) {
        for (let j = 0; j < count; j++) {
            const x = i * delta - size / 2;
            const y = j * delta - size / 2;
            const z = x * x / 2 - y * y / 2;
            points.push(new Point(x, y, z));
        }
    //провести ребра
    for (let i = 0; i < points.length; i++) {
            if (i < points.length && (i + 1 % count !== 0)) {
                edges.push(new Edge(i, i + 1));
            }

            if (i + count < points.length) {
                edges.push(new Edge(i));
            }
            if (i + 1 + count < points.length && (i + 1 % count == 0)){
                polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count]));
            }
        }   
    }  

    for (let i = 0; i < points.length; i++) {
        if (i + 1 + count < points.length && (i + 1) % count !== 0) {
            polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], color1));
        }
        else if (i + 1 + count < points.length && (i + 1) % count !== 0) {
            polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], color1));
        }
    }
    polygons[180].visible = false;
    polygons[181].visible = false;
    polygons[199].visible = false;
    polygons[200].visible = false;
    polygons[182].visible = false;
    polygons[201].visible = false;

    return new Subject(points, edges, polygons);
}
