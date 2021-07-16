'use strict';
let AWS = require('aws-sdk')
AWS.config.update({region: 'ap-northeast-2'})
let ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'})


/**
 * Hello world
 * Response with hello world
 *
 * name String Caller name
 * returns Response
 **/
exports.helloworld = function (name)
{
    console.log('!name='+name);
    return new Promise(function (resolve, reject)
    {
        var examples = {};
        examples['application/json'] = {
            "message": "message",
            "addon": "merong3"
        };
        if (Object.keys(examples).length > 0)
        {
            examples["application/json"].message = 'Hello ' + name + '!!';
            // let params = {
            //     TableName: 'Contents',
            //     Key: {
            //         'filename': {"S": 'media-convert/ingest/sample-drama-002-combined.m3u8'}
            //     }
            // };
            // Get single dynamodb data using exact key search
            // ddb.getItem(params, function (err, data)
            // {
            //     if(err)
            //     {
            //         console.log('ddb.getItem err='+err);
            //         examples['application/json'].addon = err;
            //     }
            //     else
            //     {
            //         console.log('success db call');
            //         examples['application/json'].addon = data;
            //     }
            //     resolve(examples[Object.keys(examples)[0]]);
            // });
            resolve(examples[Object.keys(examples)[0]]);
        }
        else
        {
            resolve();
        }
    });
}

