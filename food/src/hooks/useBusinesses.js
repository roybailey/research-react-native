import {useEffect, useState} from 'react';
import yelp from '../api/yelp';


export default () => {
    const [results, setResults] = useState([]);
    const [error, setError] = useState('');
    const searchApi = async (search) => {
        console.log(`Searching...${search}`);
        try {
            setError('');
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: search,
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses);
        } catch (err) {
            console.log(err);
            setError(err.toString());
        }
    };
    useEffect(() => {
        searchApi('pasta')
    }, []);
    return [searchApi, results, error];
}