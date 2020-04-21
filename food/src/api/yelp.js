import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: "Bearer cVwq_SNB9Y0u_TbOulXTjjVEzK6ERVgU9V3F8vLqANeMluhdtYDqwkEJhEM_-bebeii_2AD7lOjsoZXWqqoBoP1uknVYDZImhpRoQfpC5yax_-3dLk2QuKs0oX2dXnYx"
    }
});
