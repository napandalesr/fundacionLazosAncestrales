import httpClient from "../httpClient";

const post = (to:string, from:string, subject:string, content: string) => {
  return httpClient.post("https://us-central1-email-service-cloud.cloudfunctions.net/api/sendEmail",{to,from,subject,content,token:process.env.REACT_APP_TOKEN});
};

export {
  post
};