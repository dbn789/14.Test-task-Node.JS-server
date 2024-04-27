const Task = [
  '$resource',
  function($resource) {
    return $resource('/tasks/:id', {id: '@_id'}, {
      addRandom: {
        url: '/tasks/add-random',
        method: 'get',
        isArray: false,
      },
    });
  },
];

export {Task};
