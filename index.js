const awsServerless=require('aws-serverless-express');
const app=require('./app')
const server=awsServerless.createServer(app)

exports.handler=(event,context)=>{
    console.log("event: "+ JSON.stringify(event));
    awsServerless.proxy(server,event,context)
}
