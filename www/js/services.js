angular.module('starter.services', [])

.factory('Meditations', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var meditations = [{
    id: 0,
    title: 'Nidra title1',
    recording: '/meditations/PointsYoga.mp3',
    author: 'Author',
    description: 'testing description',
    tags: [],
    time: '18:01'
  }, {
   id: 0,
   title: 'Nidra title2',
   recording: '/meditations/SurfingTheHallows.mp3',
   author: 'Author',
   description: 'testing description',
   tags: [],
   time: 15 
  }, {
   id: 0,
   title: 'Nidra title3',
   recording: '/meditations/TenMinNidra.mp3',
   author: 'Author',
   description: 'testing description',
   tags: [],
   time: 15 
  }];

  return {
    all: function() {
      return meditations;
    },
    get: function(meditationId) {
      for (var i = 0; i < meditations.length; i++) {
        if (meditations[i].id === parseInt(meditationId)) {
          return meditations[i];
        }
      }
      return null;
    }
  };
});
