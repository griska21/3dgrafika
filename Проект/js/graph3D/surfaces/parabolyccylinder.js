Surfaces.prototype.paraboliccylinder = (count = 10, color = '#FFD700') => {

    let points = [];
    
    let edges = [];
    
    let polygons = [];
    
    const size = 10;
    
    // Расставить точки
    
    for (let i = -count; i < count; i++) {
    
    for (let j = 0; j < count; j++) {
    
    const x = i + size/count;
    
    const y = x * x / size;
    
    const z = j - size;
    
    points.push(new Point(x, y, z));
    
    }
    
    }
    
    //Провести рёбра
    
    for (let i = 0; i < points.length; i++) {
    
    if ((i + 1) < points.length && (i + 1) % count !== 0) {
    
    edges.push(new Edge(i, i + 1))
    
    }
    
    if (i + count < points.length) {
    
    edges.push(new Edge(i, i + count))
    
    }

    }
    
    //Полигоны
    for (let i = 0; i < points.length; i++) {
    if (i + 1 + count < points.length && (i + 1) % count !== 0) {
        polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], color));
    
    }
    }
    /*
    //Зебра
    let k = 0;
   // полигоны
   for (let i = 0; i < points.length; i++) {
   if (((i/1) % count) == 0) {
        k++;
   }
   if (((i*1 + k*2 + 1) % 2) != 1) {
       if (i + 1 + count < points.length && (i + 1) % count !== 0) {
           polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], "#000000"));
        }    
    } else {
   if (i + 1 + count < points.length && (i + 1) % count !== 0) {
       polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], "#7CFC00"));
   }
   }
   }
    */
    return new Subject(
    
    points, edges, polygons
    
    );
    
    }