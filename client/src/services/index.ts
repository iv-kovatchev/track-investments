import { requestPause } from '../utils/requestPause';

const fetchData = async <T>(url: string): Promise<T> => {
    const response = await fetch(`http://localhost:3001/${url}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    //This is for testing purposes
    await requestPause();

    if(!response.ok) {
      throw new Error('There is a error with fetching the data');
    }

    return  response.json();
}

export {
  fetchData
}