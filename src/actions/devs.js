import database from '../firebase/firebase'

// SET_DEVS
export const setDevs = (devs) => ({
  type: 'SET_DEVS',
  devs
});

export const startSetDevs = () => {
  return (dispatch) => {
    return database.ref(`/devs`).once('value').then((snapshot) => {
      const devs = [];
      snapshot.forEach((childSnapshot) => {
        devs.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
      dispatch(setDevs(devs));
    });
  };
};

