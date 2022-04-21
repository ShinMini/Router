/**
 * @type {Contents[]}
 */
let contents = [
   { id: 1, name: 'Hyeon Min', description: 'Hi my name is hyeon Min' },
   { id: 2, name: 'Denisse', description: 'Hi my name is Denisse' },
   { id: 3, name: 'nickol', description: 'Hi my name is nickol' }
];

/**
 * @returns {Contents}
 */
export function getContents() {
   return contents;
};

/**
 * @param {Number} findId 
 * @param {Number} parms
 * @returns {Contents}
 */
export function findContentsById(findId) {
   return contents.find((parms) => parms.number === findId);
};

/**
 * @param {Number} deleteId 
 */
export function deleteContentsById(deleteId) {
   contents = contents.filter((parms) => parms.number !== deleteId);
};