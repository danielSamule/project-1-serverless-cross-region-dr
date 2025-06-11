# project-5-serverless-cross-region-dr

[project-1-serverless-cross-region-dr.md](https://github.com/user-attachments/files/20428469/project-1-serverless-cross-region-dr.md)


# Serverless Application with AWS Lambda and React

This project demonstrates how to build a simple serverless application using **AWS Lambda** for the backend and **React** for the frontend. The application allows users to submit data, which is processed by a Lambda function.

## Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Setup Steps](#setup-steps)
  - [1. Create a Lambda Function](#1-create-a-lambda-function)
  - [2. Set Up API Gateway](#2-set-up-api-gateway)
  - [3. Create a React Frontend](#3-create-a-react-frontend)
- [Code Snippets](#code-snippets)
- [License](#license)

## Overview

This project consists of a simple React application that allows users to input data. When the user submits the form, the data is sent to an AWS Lambda function via API Gateway, which processes the data and returns a response.

## Prerequisites

- An AWS account.
- AWS CLI installed and configured.
- Node.js and npm installed.
- Basic knowledge of React.

## Setup Steps

### 1. Create a Lambda Function

1. Go to the AWS Lambda console.
2. Click on "Create function".
3. Choose "Author from scratch".
4. Set the function name (e.g., `MyLambdaFunction`).
5. Choose a runtime (e.g., Node.js 14.x).
6. Set permissions to create a new role with basic Lambda permissions.
7. Click on "Create function".

**Lambda Function Code:**

In the Lambda function code editor, replace the default code with the following:

```javascript
exports.handler = async (event) => {
    const { id, data } = JSON.parse(event.body);
    
    // Here you can process the data (e.g., save to a database)
    console.log(`Received ID: ${id}, Data: ${data}`);

    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Data received successfully!' }),
    };
};
```

### 2. Setup API Gateway

1.  Go to the API Gateway console.
2.  Click on "Create API".
3.  Choose "HTTP API" and click "Build".
4.  Set the API name (e.g., MyAPI).
5.  Click on "Next" and then "Add integration".
6.  Choose "Lambda" and select your Lambda function.
7.  Define a route (e.g., POST /submit).
8.  Deploy the API and note the endpoint URL.

### 3. Create React frontend

1.  Create a new React application using Create React App:
``` javascript 
npx create-react-app my-serverless-app
cd my-serverless-app
```
Install Axios for making HTTP requests:

```npm install axios```

Replace the contents of src/App.js with the following code:

```javascript
import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

 function App() {
    const [id, setId] = useState('');
    const [data, setData] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('YOUR_API_ENDPOINT', { id, data });
            setMessage(response.data.message);
        } catch (error) {
            setMessage('Error submitting data');
        }
    };

    return (
        <div>
            <h1>Serverless Application</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="ID"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Data"
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                    required
                />
                <button type="submit">Submit</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}
export default App;```

Replace YOUR_API_ENDPOINT with the actual endpoint URL from your API Gateway.

Start the React application:

```npm start```

License
This project is licensed under the MIT License.


### Summary

This `README.md` provides a clear guide for beginners to set up 