import { MutationDataProps } from './types';
import { requestPause } from '../utils/config/requestPause';

const fetchData = async <T>(url: string): Promise<T> => {
  try {
    const response = await fetch(`http://localhost:3001/${url}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    //This is for testing purposes
    await requestPause();

    if(!response.ok) {
      throw new Error('There is a error with fetching the data');
    }

    return await response.json();
  }
  catch (error) {
    console.log(error);

    throw Error('There was a network error!')
  }
}

const mutationData = async <T>({ url, method, data }: MutationDataProps<T>): Promise<T> => {
  const response = await fetch(`http://localhost:3001/${url}`, {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  //This is for testing purposes
  await requestPause();

  if(!response.ok) {
    throw new Error('Failed to mutate the data');
  }

  return await response.json();
}

export {
  fetchData,
  mutationData
}