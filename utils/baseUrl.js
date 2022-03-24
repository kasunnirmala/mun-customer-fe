const baseUrl = process.env.NODE_ENV === "production" 
? 'http://mun-fe.s3-website-us-east-1.amazonaws.com/' 
: 'http://localhost:3000';

export default baseUrl;