'use strict';

/* Polyhedron
	- Vertices: list of vertices
        - Edges: list of tuples where each tuple is of the form (vertex index1, vertex index2)
        - Faces: list of faces where each face is a list edge indices for that face
        - Face adjacency matrix or list
*/
function Polyhedron(vertices, edges, faces) {
    this.vertices = vertices;
    this.edges = edges;
    this.faces = faces;
    return Object.freeze(this);
}

// Create a tetrahedron with corners at (0, 0, 0), (0, 1, 0), (1, 0, 0), (0, 0, 1).
/*function Tetrahedron() {
    var vertices = [(0, 0, 0), (0, 1, 0), (1, 0, 0), (0, 0, 1)],
        edges = [...], // #edges = 6
        faces = [...]; // #faces = 4
    return new Polyhedron(vertices, edges, faces);
}*/

// Create a cube with one corner at the origin and another at (1, 1, 1)
function Cube() {
    var vertices = [(0, 0, 0), (0, 0, 1), (0, 1, 0), (0, 1, 1),
                    (1, 0, 0), (1, 0, 1), (1, 1, 0), (1, 1, 1)],
        edges = [(0, 1), (0, 2), (0, 4), // edges 0-2
                 (1, 3), (1, 5),         // edges 3-4
                 (2, 3), (2, 6),         // edges 5-6
                 (3, 7),                 // edges 7
                 (4, 5), (4, 6),         // edges 8-9
                 (5, 7),                 // edges 10
                 (6, 7)],                // edges 11
        faces = [[0, 2, 3, 8], // bottom face (y = 0)
                 [5, 11, 6, 7], // top face (y = 1)
                 [0, 2, 3, 5], // left face (x = 0)
                 [8, 9, 10, 11], // right face (x = 1)
                 [3, 4, 7, 10], // front face (z = 1)
                 [1, 2, 6, 9]]; // back face (z = 0);
    return new Polyhedron(vertices, edges, faces);
}
