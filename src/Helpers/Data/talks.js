import axios from 'axios'

const getAllTalks = () => new Promise((resolve, reject) => {
  axios.get('http://127.0.0.1:8000/alltalks')
    .then((result) => {
      const allTalksObj = result.data;
      const Talks = [];
      if (allTalksObj != null) {
        Object.keys(allTalksObj).forEach((commentId) => {
          const newComment = allTalksObj[commentId];
          newComment.id = commentId;
          Talks.push(newComment);
        });
      }
      resolve(Talks);
    })
    .catch((err) => {
      reject(err);
    });
});

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAllTalks };