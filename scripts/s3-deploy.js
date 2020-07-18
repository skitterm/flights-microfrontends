/**
 * Copyright 2010-2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * This file is licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License. A copy of
 * the License is located at
 *
 * http://aws.amazon.com/apache2.0/
 *
 * This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
 */

/**
 * Modified by Steven Kitterman (July 2020) to:
 *  - specify the region
 *  - Allow uploading multiple files
 *  - Allow uploading nested directories
 */

//snippet-sourcedescription:[s3_upload.js demonstrates how to upload an arbitrarily-sized stream to an Amazon S3 bucket.]
//snippet-service:[s3]
//snippet-keyword:[JavaScript]
//snippet-sourcesyntax:[javascript]
//snippet-keyword:[Code Sample]
//snippet-keyword:[Amazon S3]
//snippet-sourcetype:[full-example]
//snippet-sourcedate:[2018-06-02]
//snippet-sourceauthor:[AWS-JSDG]

// ABOUT THIS NODE.JS SAMPLE: This sample is part of the SDK for JavaScript Developer Guide topic at
// https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/s3-example-creating-buckets.html

// snippet-start:[s3.JavaScript.buckets.upload]
var fs = require("fs");
// Load the AWS SDK for Node.js
var AWS = require("aws-sdk");
// Set the region
AWS.config.update({ region: "us-east-2" });

// Create S3 service object
s3 = new AWS.S3({ apiVersion: "2006-03-01" });

const uploadFile = (file) => {
  // call S3 to retrieve upload file to specified bucket
  var uploadParams = {
    Bucket: process.argv[2],
    Key: "",
    Body: "",
    ContentType: file.includes(".html")
      ? "text/html"
      : file.includes(".js")
      ? "text/javascript"
      : undefined,
  };

  // Configure the file stream and obtain the upload parameters
  var fileStream = fs.createReadStream(file);
  fileStream.on("error", function (err) {
    console.log("File Error", err);
  });
  uploadParams.Body = fileStream;
  var path = require("path");
  const separator = "/";
  const pieces = file.split(separator);
  const allButBase = pieces.slice(1);
  uploadParams.Key = allButBase.join(separator);

  // call S3 to retrieve upload file to specified bucket
  s3.upload(uploadParams, function (err, data) {
    if (err) {
      console.log("Error", err);
    }
    if (data) {
      console.log("Upload Success", data.Location);
    }
  });
};

const uploadFiles = (path) => {
  fs.readdir(path, (error, files) => {
    if (error) {
      console.error(error);
    } else {
      files.forEach((file) => {
        const fullPath = `${path}/${file}`;
        fs.lstat(fullPath, (error, stats) => {
          if (error) {
            console.error(error);
          } else if (stats.isDirectory()) {
            uploadFiles(fullPath);
          } else {
            uploadFile(fullPath);
          }
        });
      });
    }
  });
};

const path = process.argv[3];
uploadFiles(path);
